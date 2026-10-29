/**
 * NexusAI Chatbot Engine — Rule-Based Tool Recommendation
 * --------------------------------------------------------
 * This module contains the recommendation logic ONLY.
 * It is intentionally separated from the UI so that a real
 * AI API (e.g., OpenAI, Gemini, Claude) can replace the
 * `generateReply()` function later via a secure backend.
 */

import { TOOLS_DATA } from '../data/tools';

// ---------------------------------------------------------------------------
// Intent keyword maps — maps user intent phrases to tool categories & tags
// ---------------------------------------------------------------------------
const INTENT_KEYWORDS = {
  writing: [
    'write', 'writing', 'blog', 'article', 'essay', 'content', 'copy',
    'copywriting', 'draft', 'text', 'author', 'proofread', 'grammar',
    'tone', 'rewrite', 'paraphrase', 'email', 'newsletter', 'seo',
    'marketing copy', 'brand voice', 'caption', 'script'
  ],
  coding: [
    'code', 'coding', 'program', 'programming', 'developer', 'dev',
    'software', 'debug', 'debugging', 'refactor', 'javascript', 'python',
    'react', 'frontend', 'backend', 'fullstack', 'api', 'ide', 'editor',
    'autocomplete', 'pair program', 'build app', 'build website',
    'web development', 'html', 'css', 'terminal', 'github', 'ui', 'ux',
    'component', 'design to code', 'web app'
  ],
  image: [
    'image', 'images', 'picture', 'photo', 'art', 'illustration',
    'graphic', 'design', 'visual', 'generate image', 'draw', 'painting',
    'logo', 'concept art', 'thumbnail', 'avatar', 'poster', 'banner',
    'texture', 'game asset', 'diffusion', 'midjourney', 'stable diffusion',
    'photorealistic', 'wallpaper'
  ],
  video: [
    'video', 'videos', 'animate', 'animation', 'clip', 'cinematic',
    'film', 'movie', 'vfx', 'motion', 'edit video', 'video generation',
    'avatar video', 'presenter', 'training video', 'explainer',
    'social media video', 'youtube', 'tiktok', 'reel', 'short'
  ],
  audio: [
    'audio', 'voice', 'music', 'song', 'sound', 'podcast', 'speech',
    'text to speech', 'tts', 'voice clone', 'singing', 'transcribe',
    'transcription', 'dubbing', 'narration', 'voiceover', 'sound effect',
    'listen', 'recording', 'edit audio', 'subtitle'
  ],
  research: [
    'research', 'search', 'find information', 'citation', 'academic',
    'paper', 'study', 'science', 'fact check', 'fact-check', 'source',
    'literature review', 'evidence', 'data', 'analysis', 'summarize article',
    'news', 'web search', 'answer engine'
  ],
  productivity: [
    'productivity', 'organize', 'notes', 'note', 'meeting', 'meetings',
    'presentation', 'slide', 'slides', 'deck', 'workspace', 'workflow',
    'task', 'project', 'collaborate', 'document', 'docs', 'notion',
    'summarize', 'summary', 'action items', 'launcher', 'shortcut',
    'template', 'automate'
  ]
};

// Category mapping from intent to actual tool categories
const INTENT_TO_CATEGORY = {
  writing: 'Writing',
  coding: 'Coding',
  image: 'Image Generation',
  video: 'Video',
  audio: 'Audio',
  research: 'Research',
  productivity: 'Productivity'
};

// ---------------------------------------------------------------------------
// Greetings & conversational patterns
// ---------------------------------------------------------------------------
const GREETING_PATTERNS = [
  /^(hi|hey|hello|hola|howdy|sup|yo|greetings|good\s*(morning|afternoon|evening))/i,
  /^(what's up|whats up|how are you)/i
];

const THANKS_PATTERNS = [
  /^(thanks|thank you|thx|ty|appreciate|cheers|great)/i
];

const HELP_PATTERNS = [
  /^(help|what can you do|how do you work|what do you do)/i
];

// ---------------------------------------------------------------------------
// Score a single tool against user keywords
// ---------------------------------------------------------------------------
function scoreTool(tool, userWords, detectedIntents) {
  let score = 0;
  const reasons = [];
  const lowerName = tool.name.toLowerCase();
  const lowerDesc = tool.description.toLowerCase();
  const lowerTagline = (tool.tagline || '').toLowerCase();
  const lowerTags = (tool.tags || []).map(t => t.toLowerCase());
  const lowerFeatures = (tool.features || []).map(f => f.toLowerCase());

  // 1. Direct name match (highest weight)
  for (const word of userWords) {
    if (lowerName.includes(word) && word.length > 2) {
      score += 30;
      reasons.push(`Direct match for "${tool.name}"`);
      break;
    }
  }

  // 2. Category match from detected intent
  for (const intent of detectedIntents) {
    const expectedCategory = INTENT_TO_CATEGORY[intent];
    if (expectedCategory && tool.category === expectedCategory) {
      score += 15;
      reasons.push(`Matches your "${tool.category}" needs`);
      break;
    }
  }

  // 3. Tag matches
  for (const word of userWords) {
    for (const tag of lowerTags) {
      if (tag.includes(word) || word.includes(tag)) {
        score += 8;
        reasons.push(`Tagged with "${tool.tags.find(t => t.toLowerCase() === tag) || tag}"`);
      }
    }
  }

  // 4. Description/tagline keyword matches
  for (const word of userWords) {
    if (word.length < 3) continue;
    if (lowerTagline.includes(word)) {
      score += 5;
    }
    if (lowerDesc.includes(word)) {
      score += 3;
    }
  }

  // 5. Feature keyword matches
  for (const word of userWords) {
    if (word.length < 3) continue;
    for (const feature of lowerFeatures) {
      if (feature.includes(word)) {
        score += 4;
        break;
      }
    }
  }

  // 6. Rating bonus
  if (tool.rating >= 4.9) score += 3;
  else if (tool.rating >= 4.8) score += 2;

  // 7. Featured bonus
  if (tool.featured) score += 2;

  // Deduplicate reasons
  const uniqueReasons = [...new Set(reasons)];

  return { tool, score, reasons: uniqueReasons };
}

// ---------------------------------------------------------------------------
// Detect intents from user message
// ---------------------------------------------------------------------------
function detectIntents(message) {
  const lower = message.toLowerCase();
  const intents = [];

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    for (const kw of keywords) {
      if (lower.includes(kw)) {
        intents.push(intent);
        break;
      }
    }
  }

  return intents;
}

// ---------------------------------------------------------------------------
// Build a human-readable "why" sentence
// ---------------------------------------------------------------------------
function buildWhyText(tool, reasons, _userMessage) {
  if (reasons.length > 0) {
    return `${tool.name} is a great fit because: ${reasons.slice(0, 2).join(' and ')}.`;
  }
  return `${tool.name} — ${tool.tagline}`;
}

// ---------------------------------------------------------------------------
// Main reply generator — the public API of this module
// ---------------------------------------------------------------------------
/**
 * Generate a chatbot reply given the user's message.
 * Returns { text: string, recommendations: Array<{tool, why}> }
 *
 * To integrate a real AI API later, replace this function's body
 * with a fetch() to your secure backend endpoint.
 */
export function generateReply(userMessage) {
  const trimmed = userMessage.trim();

  // Empty guard
  if (!trimmed) {
    return {
      text: "It looks like you didn't type anything. Try describing what you'd like to accomplish, and I'll recommend the best AI tools for you!",
      recommendations: []
    };
  }

  // Greetings
  if (GREETING_PATTERNS.some(r => r.test(trimmed))) {
    return {
      text: "Hey there! 👋 I'm the NexusAI Assistant. Tell me what you're working on — writing, coding, design, video, music, research — and I'll find the perfect AI tools for you.",
      recommendations: []
    };
  }

  // Thanks
  if (THANKS_PATTERNS.some(r => r.test(trimmed))) {
    return {
      text: "You're welcome! 😊 Feel free to ask me anything else about AI tools. I'm here to help you find the right ones for your workflow.",
      recommendations: []
    };
  }

  // Help
  if (HELP_PATTERNS.some(r => r.test(trimmed))) {
    return {
      text: "I can help you find the right AI tool for your task! Just describe what you need — for example:\n• \"I need help writing blog posts\"\n• \"Find me a coding assistant\"\n• \"I want to generate images\"\n• \"Help me edit videos\"\n• \"I need to transcribe audio\"\n\nI'll analyze your needs and recommend the best matches from our curated directory.",
      recommendations: []
    };
  }

  // --- Core recommendation logic ---
  const allTools = [...TOOLS_DATA];
  const userWords = trimmed.toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1);

  const detectedIntents = detectIntents(trimmed);

  // Score all tools
  const scored = allTools
    .map(tool => scoreTool(tool, userWords, detectedIntents))
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score);

  // Top 3 recommendations
  const top = scored.slice(0, 3);

  if (top.length === 0) {
    // No matches — ask for clarification
    return {
      text: "Hmm, I couldn't find a strong match for that in our directory. Could you describe your task more specifically? For example:\n• What kind of content are you creating?\n• Are you writing, coding, designing, or something else?\n• Do you need a free tool or are you open to paid options?",
      recommendations: []
    };
  }

  // Build reply text
  const intentLabel = detectedIntents.length > 0
    ? detectedIntents.map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(' & ')
    : 'your needs';

  const introText = top.length === 1
    ? `I found a great tool for ${intentLabel}:`
    : `Here are my top ${top.length} recommendations for ${intentLabel}:`;

  const recommendations = top.map(({ tool, reasons }) => ({
    tool,
    why: buildWhyText(tool, reasons, trimmed)
  }));

  return {
    text: introText,
    recommendations
  };
}
