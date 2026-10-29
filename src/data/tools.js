export const CATEGORIES = [
  { id: 'All', label: 'All Tools', icon: 'LayoutGrid' },
  { id: 'Writing', label: 'Writing', icon: 'PenTool' },
  { id: 'Coding', label: 'Coding', icon: 'Code2' },
  { id: 'Image Generation', label: 'Image Generation', icon: 'Sparkles' },
  { id: 'Video', label: 'Video', icon: 'Video' },
  { id: 'Productivity', label: 'Productivity', icon: 'Zap' },
  { id: 'Research', label: 'Research', icon: 'Search' },
  { id: 'Audio', label: 'Audio', icon: 'Headphones' },
];

export const PRICING_OPTIONS = ['All', 'Free', 'Freemium', 'Paid'];

export const TOOLS_DATA = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'Versatile conversational AI for writing, coding, and brainstorming',
    description: 'OpenAI’s flagship conversational language model capable of drafting long-form content, debugging code, problem-solving, and analyzing complex documents with multimodal capabilities.',
    category: 'Writing',
    pricing: 'Freemium',
    pricingDetails: 'Free tier available with GPT-4o mini; Plus plan at $20/month for full GPT-4o access and advanced voice.',
    url: 'https://chatgpt.com',
    featured: true,
    rating: 4.9,
    iconBg: '#10A37F',
    tags: ['LLM', 'Writing', 'Chatbot', 'OpenAI'],
    features: [
      'Natural conversational drafting and content editing',
      'Advanced data analysis and document uploads',
      'Custom GPT agents tailored for specific tasks',
      'Multimodal image analysis and live voice chat'
    ]
  },
  {
    id: 'claude',
    name: 'Claude 3.5 Sonnet',
    tagline: 'State-of-the-art reasoning, nuanced writing, and visual artifacts',
    description: 'Anthropic’s cutting-edge AI assistant recognized for industry-leading nuanced writing, complex coding capabilities, deep contextual reasoning, and interactive Artifacts previews.',
    category: 'Writing',
    pricing: 'Freemium',
    pricingDetails: 'Free access with daily limits; Pro tier at $20/month for 5x more usage and priority access.',
    url: 'https://claude.ai',
    featured: true,
    rating: 4.95,
    iconBg: '#D97757',
    tags: ['Writing', 'Reasoning', 'Anthropic', 'Artifacts'],
    features: [
      'Interactive visual Artifacts for code and documents',
      'Superior natural tone, nuance, and prose generation',
      'Industry-leading benchmark scores in coding and analysis',
      'Massive 200k token context window'
    ]
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    tagline: 'The AI pair programmer embedded directly in your IDE',
    description: 'Trained on billions of lines of code, GitHub Copilot turns natural language prompts into coding suggestions, autofills entire functions, and provides in-IDE conversational assistance.',
    category: 'Coding',
    pricing: 'Paid',
    pricingDetails: 'Individual plan at $10/month or $100/year; Free for verified students and popular open source maintainers.',
    url: 'https://github.com/features/copilot',
    featured: true,
    rating: 4.8,
    iconBg: '#238636',
    tags: ['Coding', 'Autocomplete', 'Developer', 'IDE'],
    features: [
      'Real-time multi-line code autocompletion',
      'Copilot Chat inside VS Code, JetBrains, and Visual Studio',
      'Automated test generation and documentation helper',
      'Pull request summaries and CLI command generation'
    ]
  },
  {
    id: 'cursor',
    name: 'Cursor',
    tagline: 'AI-first code editor built for hyper-productive engineers',
    description: 'A dedicated fork of VS Code engineered from the ground up for AI-native pair programming, codebase-wide indexing, instant multi-file edits, and prompt-driven diff reviews.',
    category: 'Coding',
    pricing: 'Freemium',
    pricingDetails: 'Generous free hobby tier with 2000 completions; Pro at $20/month for unlimited fast Claude 3.5/GPT-4o calls.',
    url: 'https://www.cursor.com',
    featured: true,
    rating: 4.9,
    iconBg: '#3B82F6',
    tags: ['Coding', 'IDE', 'Agentic', 'Productivity'],
    features: [
      'Composer agent to edit multiple files across codebase',
      'Whole-codebase semantic indexing with @codebase context',
      'Instant inline code prediction and smart diff resolution',
      'Seamless 1-click import of all VS Code extensions and keybinds'
    ]
  },
  {
    id: 'v0-vercel',
    name: 'v0 by Vercel',
    tagline: 'Generative UI system turning text and sketches into React code',
    description: 'An AI-powered design-to-code tool that produces clean, modern React code using Tailwind CSS and shadcn/ui components simply from text descriptions or uploaded screenshots.',
    category: 'Coding',
    pricing: 'Freemium',
    pricingDetails: 'Free plan with monthly generation credits; Premium at $20/month for private projects and high credit volume.',
    url: 'https://v0.dev',
    featured: false,
    rating: 4.75,
    iconBg: '#000000',
    tags: ['React', 'Frontend', 'Tailwind', 'UI/UX'],
    features: [
      'Generates copy-paste ready React and Tailwind components',
      'Live interactive preview sandbox in browser',
      'Instant integration with shadcn/ui component library',
      'Iterative UI refinements using conversational feedback'
    ]
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    tagline: 'Photorealistic and stylized visual art generation powerhouse',
    description: 'World-renowned generative AI model that produces hyper-realistic photos, imaginative concept art, and detailed digital illustrations from nuanced text prompts.',
    category: 'Image Generation',
    pricing: 'Paid',
    pricingDetails: 'Plans start at $10/month for Basic (200 generations), $30/month for Standard unlimited relaxed generations.',
    url: 'https://www.midjourney.com',
    featured: true,
    rating: 4.9,
    iconBg: '#6366F1',
    tags: ['Art', 'Diffusion', 'Photorealism', 'Design'],
    features: [
      'Hyper-realistic textures, lighting, and cinematic aesthetics',
      'Web interface and Discord bot integration',
      'Inpainting, pan, zoom out, and stylistic tuning',
      'Consistent character references and style matching'
    ]
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.Ai',
    tagline: 'Full-stack generative AI canvas for creative professionals and studios',
    description: 'A versatile visual creation suite featuring custom model training, real-time generation canvas, motion video creation, and fine-tuned control over game assets and marketing art.',
    category: 'Image Generation',
    pricing: 'Freemium',
    pricingDetails: 'Free daily token refresh (150 tokens); Apprentice plan at $10/month; Artisan at $24/month.',
    url: 'https://leonardo.ai',
    featured: false,
    rating: 4.7,
    iconBg: '#EC4899',
    tags: ['Game Assets', 'Creative', 'Real-time', 'Canvas'],
    features: [
      'Realtime Canvas with instant paint-to-image synthesis',
      'Custom fine-tuned style models for studios',
      'Image-to-motion video animation pipeline',
      'Universal Upscaler and high-resolution texture enhancement'
    ]
  },
  {
    id: 'runway-gen3',
    name: 'Runway Gen-3 Alpha',
    tagline: 'Cinematic video synthesis and next-gen VFX toolkit',
    description: 'Next-generation video generation model capable of producing high-fidelity, photorealistic, and stylistically versatile video clips with precise cinematic camera and motion control.',
    category: 'Video',
    pricing: 'Freemium',
    pricingDetails: 'Free trial credits on signup; Standard plan at $12/month (625 credits); Pro plan at $28/month.',
    url: 'https://runwayml.com',
    featured: true,
    rating: 4.85,
    iconBg: '#8B5CF6',
    tags: ['Video Gen', 'Cinematic', 'VFX', 'Motion'],
    features: [
      'High-fidelity text-to-video and image-to-video synthesis',
      'Granular Camera Control: pans, tilts, zooms, and orbits',
      'Motion Brush to selectively animate parts of static images',
      'Full video editing suite with automatic background removal'
    ]
  },
  {
    id: 'pika-labs',
    name: 'Pika',
    tagline: 'Idea-to-video platform with playful physics and dynamic effects',
    description: 'Creative video generation platform famous for its Pikeffects (inflate, melt, crush, explode), crisp animation rendering, sound generation, and intuitive camera director controls.',
    category: 'Video',
    pricing: 'Freemium',
    pricingDetails: 'Free tier with daily generation credits; Standard at $8/month; Pro at $28/month.',
    url: 'https://pika.art',
    featured: false,
    rating: 4.65,
    iconBg: '#F59E0B',
    tags: ['Video', 'Animation', 'Effects', 'Social Media'],
    features: [
      'Pikaffects: unique physical animations (melt, crush, explode)',
      'Lip-sync audio synchronization with generated characters',
      'Expand canvas aspect ratios with generative fill',
      'Keyframe control for dynamic motion timing'
    ]
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    tagline: 'Turn text into studio-grade presenter videos with AI avatars',
    description: 'Leading enterprise video synthesis platform that creates professional training, sales, and marketing videos featuring photorealistic AI avatars speaking over 130 languages.',
    category: 'Video',
    pricing: 'Paid',
    pricingDetails: 'Starter plan at $22/month; Creator plan at $67/month; Enterprise custom pricing.',
    url: 'https://www.synthesia.io',
    featured: false,
    rating: 4.7,
    iconBg: '#14B8A6',
    tags: ['Avatars', 'Localization', 'Corporate', 'Presentations'],
    features: [
      '230+ hyper-realistic expressive AI avatars',
      'Text-to-speech in 140+ languages and natural accents',
      'Custom personal avatar cloning from a 5-minute webcam video',
      'Collaborative browser-based video editing canvas'
    ]
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'Hyper-realistic voice synthesis, speech-to-speech, and voice cloning',
    description: 'Pioneering generative audio research platform offering human-level emotional voice synthesis, instantaneous voice cloning, sound effects generation, and real-time conversational agents.',
    category: 'Audio',
    pricing: 'Freemium',
    pricingDetails: 'Free tier with 10,000 characters/month; Starter at $5/month; Creator at $22/month.',
    url: 'https://elevenlabs.io',
    featured: true,
    rating: 4.9,
    iconBg: '#0284C7',
    tags: ['Voice Cloning', 'Text to Speech', 'Audio', 'Dubbing'],
    features: [
      'Nuanced emotional voice delivery with controllable cadence',
      'Instant and professional digital voice cloning',
      'AI Sound Effects generator from simple descriptive prompts',
      'Real-time Conversational AI SDK for ultra-low latency bots'
    ]
  },
  {
    id: 'suno-ai',
    name: 'Suno',
    tagline: 'Generate complete, broadcast-quality songs from any prompt',
    description: 'Groundbreaking music creation platform that produces fully orchestrated songs—spanning original vocals, harmonies, instrumentals, and lyrics—in any genre from simple text descriptions.',
    category: 'Audio',
    pricing: 'Freemium',
    pricingDetails: 'Free 50 daily credits (10 songs); Pro plan at $8/month (2,500 credits); Premier at $24/month.',
    url: 'https://suno.com',
    featured: false,
    rating: 4.8,
    iconBg: '#EF4444',
    tags: ['Music', 'Songwriting', 'Vocals', 'Audio'],
    features: [
      'Full two-minute tracks with intro, verses, chorus, and outro',
      'Custom lyrics mode or AI-assisted song lyrics generation',
      'Versatile genres: indie rock, synthwave, jazz, hip-hop, orchestral',
      'Song extension and stem separation capabilities'
    ]
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    tagline: 'Conversational answer engine with live citations and deep research',
    description: 'An AI search companion that scours the live web in real time, synthesizing comprehensive answers with explicit citations, source verification, and structured deep research reports.',
    category: 'Research',
    pricing: 'Freemium',
    pricingDetails: 'Free search engine with basic Pro queries; Pro at $20/month with unlimited Claude 3.5/GPT-4o research searches.',
    url: 'https://www.perplexity.ai',
    featured: true,
    rating: 4.95,
    iconBg: '#22C55E',
    tags: ['Search', 'Research', 'Citations', 'Fact-checking'],
    features: [
      'Direct factual answers backed by verifiable live web citations',
      'Pro Search for multi-step reasoning and mathematical analysis',
      'Collections to organize queries, threads, and research notes',
      'Supports switching between Claude 3.5, GPT-4o, and Sonar'
    ]
  },
  {
    id: 'consensus',
    name: 'Consensus',
    tagline: 'AI search engine searching 200M+ peer-reviewed scientific papers',
    description: 'Designed for students, academics, and researchers, Consensus extracts scientific consensus, study outcomes, sample sizes, and citations from over 200 million peer-reviewed papers.',
    category: 'Research',
    pricing: 'Freemium',
    pricingDetails: 'Free basic access with monthly consensus credits; Premium at $8.99/month for unlimited synthesis.',
    url: 'https://consensus.app',
    featured: false,
    rating: 4.75,
    iconBg: '#3B82F6',
    tags: ['Academic', 'Science', 'Literature Review', 'Evidence'],
    features: [
      'Consensus Meter illustrating scientific agreement percentage',
      'Instant study summaries with sample sizes and study types',
      'Direct BibTeX citations and Zotero integration',
      'Extracts actionable key takeaways from rigorous medical & social research'
    ]
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    tagline: 'Connected workplace AI integrated directly into your workspace',
    description: 'Embedded AI assistant inside Notion docs, wikis, and databases that answers questions across your team knowledge base, drafts documents, creates action items, and summarizes meetings.',
    category: 'Productivity',
    pricing: 'Paid',
    pricingDetails: 'Add-on to any Notion plan for $8 to $10/user/month.',
    url: 'https://www.notion.so/product/ai',
    featured: false,
    rating: 4.65,
    iconBg: '#000000',
    tags: ['Notes', 'Workspace', 'Summarization', 'Productivity'],
    features: [
      'Q&A assistant querying your entire company wiki and documents',
      'Auto-fills database columns with AI summaries and insights',
      'Generates action items from meeting notes automatically',
      'Translates and reformats documents into tables, slides, or emails'
    ]
  },
  {
    id: 'gamma',
    name: 'Gamma',
    tagline: 'Generate presentations, webpages, and docs in seconds',
    description: 'A revolutionary presentation tool that replaces boring slide templates with fluid, interactive cards generated from prompts, outlines, or imported notes in one click.',
    category: 'Productivity',
    pricing: 'Freemium',
    pricingDetails: 'Free starter credits (400 credits); Plus plan at $8/month; Pro plan at $15/month for custom fonts and analytics.',
    url: 'https://gamma.app',
    featured: true,
    rating: 4.85,
    iconBg: '#A855F7',
    tags: ['Presentations', 'Decks', 'Websites', 'Design'],
    features: [
      'One-click deck, document, and webpage generation',
      'Flexible card-based layout without rigid slide constraints',
      'Built-in analytics for viewer engagement tracking',
      'Export to PDF, PowerPoint, or publish as a live web link'
    ]
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    tagline: 'AI communication assistant for mistake-free, compelling writing',
    description: 'Real-time writing enhancement tool that goes beyond grammar correction to improve tone, clarity, brevity, and stylistic impact across all your desktop apps and browsers.',
    category: 'Writing',
    pricing: 'Freemium',
    pricingDetails: 'Free plan with grammar & spell checking; Premium at $12/month for tone rewrites and plagiarism detection.',
    url: 'https://www.grammarly.com',
    featured: false,
    rating: 4.7,
    iconBg: '#15803D',
    tags: ['Grammar', 'Tone', 'Proofreading', 'Writing'],
    features: [
      'Context-aware grammar, punctuation, and style suggestions',
      'Full-sentence rewrites for clarity and executive conciseness',
      'Tone detector aligning message with target audience',
      'Works ubiquitously across Gmail, Slack, Word, and Google Docs'
    ]
  },
  {
    id: 'jasper-ai',
    name: 'Jasper AI',
    tagline: 'Enterprise marketing copilot designed for brand voice consistency',
    description: 'An AI marketing co-pilot built specifically for enterprise teams to generate high-converting blogs, ad copy, emails, and social media campaigns aligned with company brand voice.',
    category: 'Writing',
    pricing: 'Paid',
    pricingDetails: 'Creator plan starts at $39/month; Pro plan at $59/seat/month; Enterprise custom pricing.',
    url: 'https://www.jasper.ai',
    featured: false,
    rating: 4.6,
    iconBg: '#F43F5E',
    tags: ['Marketing', 'Copywriting', 'SEO', 'Brand Voice'],
    features: [
      'Custom Brand Voice engine trained on your style guides',
      'SEO mode integrated with SurferSEO for ranking optimization',
      'Multi-channel marketing campaign generation from a single brief',
      'Enterprise-grade privacy and SOC2 compliance'
    ]
  },
  {
    id: 'phind',
    name: 'Phind',
    tagline: 'The intelligent search engine optimized for software engineers',
    description: 'An answer engine tuned specifically for developers, giving instant technical solutions, runnable code snippets, and explanations with links to documentation and GitHub repos.',
    category: 'Coding',
    pricing: 'Freemium',
    pricingDetails: 'Free search access with Phind Model; Phind Pro at $20/month with GPT-4o / Claude 3.5 access.',
    url: 'https://www.phind.com',
    featured: false,
    rating: 4.7,
    iconBg: '#4F46E5',
    tags: ['Dev Search', 'Technical', 'StackOverflow Alternative', 'Coding'],
    features: [
      'Answers developer queries with runnable, syntax-highlighted code',
      'VS Code extension for terminal and editor assistance',
      'Indexes official tech documentation and GitHub issues',
      'Multi-file refactoring and error trace explanation'
    ]
  },
  {
    id: 'descript',
    name: 'Descript',
    tagline: 'Edit audio and video as easily as editing a text doc',
    description: 'All-in-one podcast and video editor that transcribes spoken media into text, allowing creators to cut video, remove filler words ("um", "uh"), and overdub speech by editing the text.',
    category: 'Audio',
    pricing: 'Freemium',
    pricingDetails: 'Free plan with 1 watermark-free video/month; Hobbyist at $12/month; Creator at $24/month.',
    url: 'https://www.descript.com',
    featured: false,
    rating: 4.75,
    iconBg: '#059669',
    tags: ['Podcast', 'Transcription', 'Video Editing', 'Overdub'],
    features: [
      'Text-based audio and video timeline editing',
      '1-click removal of filler words (ums, uhs, stutters)',
      'Overdub voice synthesis to fix spoken mistakes seamlessly',
      'Studio Sound audio cleanup removing background noise and echoes'
    ]
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    tagline: 'Automated meeting transcription, summaries, and action items',
    description: 'An AI meeting assistant that joins Zoom, Google Meet, and Microsoft Teams calls to transcribe conversations in real-time, generate automated meeting notes, and assign action items.',
    category: 'Productivity',
    pricing: 'Freemium',
    pricingDetails: 'Free tier with 300 monthly transcription minutes; Pro at $8.33/month; Business at $20/user/month.',
    url: 'https://otter.ai',
    featured: false,
    rating: 4.65,
    iconBg: '#2563EB',
    tags: ['Meetings', 'Transcription', 'Notes', 'Collaboration'],
    features: [
      'Live automated transcription for Zoom, Meet, and Teams',
      'Automated 30-second post-meeting summary with slide captures',
      'OtterPilot AI chat answering questions about past meetings',
      'Automated extraction and tagging of action items'
    ]
  },
  {
    id: 'whisper-openai',
    name: 'OpenAI Whisper',
    tagline: 'Robust multi-lingual speech recognition and transcription',
    description: 'OpenAI’s state-of-the-art open-source speech recognition model trained on 680,000 hours of multilingual data, providing human-level transcription and translation accuracy.',
    category: 'Audio',
    pricing: 'Free',
    pricingDetails: 'Open-source weights 100% free; API pricing at $0.006 per minute.',
    url: 'https://openai.com/research/whisper',
    featured: false,
    rating: 4.85,
    iconBg: '#10A37F',
    tags: ['Open Source', 'Speech to Text', 'Transcription', 'Translation'],
    features: [
      'High accuracy across noisy backgrounds and technical jargon',
      'Translates 98+ foreign languages directly into English text',
      'Open-source code available for local, offline execution',
      'Extremely economical cloud API pricing for high volume'
    ]
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion (Stability AI)',
    tagline: 'Open-weights generative image model with endless community tuning',
    description: 'The foundation of open-source generative visual media, offering complete creative freedom, local GPU execution, ControlNet precision, and thousands of community checkpoints.',
    category: 'Image Generation',
    pricing: 'Free',
    pricingDetails: 'Model weights are open-source and free to run locally; Commercial API credits via Stability platform.',
    url: 'https://stability.ai',
    featured: false,
    rating: 4.8,
    iconBg: '#7C3AED',
    tags: ['Open Source', 'Local AI', 'ControlNet', 'Creative'],
    features: [
      'Free and open weights runnable locally on consumer hardware',
      'ControlNet for exact pose, depth, and edge composition guidance',
      'Massive ecosystem of fine-tuned LoRAs and community models',
      'Zero subscription fee when hosted locally via WebUI/ComfyUI'
    ]
  },
  {
    id: 'raycast-ai',
    name: 'Raycast AI',
    tagline: 'System-wide productivity launcher supercharged with AI models',
    description: 'Blazing-fast Spotlight replacement for macOS and Windows that brings conversational AI, prompt snippets, grammar fixers, and quick model switching to a single keystroke.',
    category: 'Productivity',
    pricing: 'Freemium',
    pricingDetails: 'Raycast core is free; Raycast Pro with AI is $8/month; Advanced AI (Claude 3.5, GPT-4o) at $16/month.',
    url: 'https://www.raycast.com',
    featured: false,
    rating: 4.9,
    iconBg: '#DC2626',
    tags: ['Mac', 'Launcher', 'Hotkeys', 'Workflow'],
    features: [
      'Instant access anywhere via a global keyboard shortcut',
      'Custom prompt commands for translation, code review, and summarization',
      'Model picker: seamlessly toggle between GPT-4o, Claude 3.5, and Llama 3',
      'Thousands of community extensions for Jira, GitHub, Slack, and Notion'
    ]
  }
];
