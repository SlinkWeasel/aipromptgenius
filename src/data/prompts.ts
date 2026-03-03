export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  tool: 'ChatGPT' | 'Claude' | 'Midjourney' | 'DALL-E' | 'Gemini';
  useCases: string[];
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  featured?: boolean;
  trending?: boolean;
}

export const categories = [
  { id: 'writing', name: 'Writing & Content', icon: '✍️', description: 'Blog posts, emails, social media content' },
  { id: 'coding', name: 'Coding & Development', icon: '💻', description: 'Debug, review, learn, and build code' },
  { id: 'business', name: 'Business & Productivity', icon: '💼', description: 'Meetings, analysis, strategy' },
  { id: 'marketing', name: 'Marketing & Sales', icon: '📈', description: 'Ads, copywriting, SEO' },
  { id: 'creative', name: 'Creative & Design', icon: '🎨', description: 'Midjourney, storytelling, art' },
  { id: 'learning', name: 'Education & Learning', icon: '📚', description: 'Tutoring, explanations, study' },
];

export const prompts: Prompt[] = [
  // Writing & Content
  {
    id: 'blog-post-1',
    title: 'SEO Blog Post Writer',
    description: 'Generate a complete, SEO-optimized blog post with headings and meta description',
    prompt: `Act as an expert SEO content writer. Create a comprehensive blog post about [TOPIC] that:\n\n1. Starts with a compelling hook in the introduction\n2. Uses H2 and H3 subheadings for structure\n3. Includes 3-5 relevant keywords naturally\n4. Has a strong conclusion with a call-to-action\n5. Suggests a meta title (60 chars) and meta description (160 chars)\n6. Total length: 800-1200 words\n\nMake it engaging, informative, and optimized for search engines.`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Content marketing', 'Blogging', 'SEO'],
    tags: ['blog', 'seo', 'content'],
    difficulty: 'Intermediate',
    featured: true,
  },
  {
    id: 'email-1',
    title: 'Professional Email Rewriter',
    description: 'Transform rough notes into polished, professional emails',
    prompt: `Rewrite the following email to make it professional, clear, and effective:\n\n[EMAIL DRAFT]\n\nRequirements:\n- Professional but approachable tone\n- Clear subject line suggestion\n- Structured with proper greeting and closing\n- Concise (under 150 words if possible)\n- Strong call-to-action\n- Proofread for grammar and clarity`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Business communication', 'Cold outreach', 'Client emails'],
    tags: ['email', 'professional', 'communication'],
    difficulty: 'Beginner',
    featured: true,
  },
  {
    id: 'social-1',
    title: 'Viral Twitter/X Thread',
    description: 'Create engaging Twitter threads that drive engagement',
    prompt: `Create a viral Twitter/X thread about [TOPIC]:\n\nStructure:\n1. Hook tweet (attention-grabbing, 280 chars)\n2. 5-7 value-packed tweets\n3. One controversial or surprising tweet\n4. Strong final tweet with CTA\n\nStyle:\n- Short, punchy sentences\n- Use line breaks for readability\n- Include one engaging question\n- Add relevant hashtags (3-5 max)\n- Tone: [PROFESSIONAL/CASUAL/WITTY]`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Social media', 'Personal branding', 'Content marketing'],
    tags: ['twitter', 'social', 'viral'],
    difficulty: 'Intermediate',
    trending: true,
  },
  {
    id: 'linkedin-1',
    title: 'LinkedIn Post Generator',
    description: 'Create professional LinkedIn posts that drive engagement',
    prompt: `Write a LinkedIn post about [TOPIC/EXPERIENCE]:\n\nFormat:\n- Hook (first 2 lines must grab attention)\n- Short paragraphs (1-2 sentences each)\n- Personal story or lesson learned\n- Actionable insights (3 bullet points)\n- Engagement question at end\n- 3-5 relevant hashtags\n\nTone: Professional but authentic, avoid corporate speak. Make it sound like a real person sharing real insights.`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Personal branding', 'Thought leadership', 'Networking'],
    tags: ['linkedin', 'professional', 'social'],
    difficulty: 'Beginner',
  },
  {
    id: 'newsletter-1',
    title: 'Newsletter Edition Writer',
    description: 'Write engaging newsletter content with subject line and structure',
    prompt: `Create a newsletter edition about [TOPIC]:\n\nInclude:\n1. Subject line (high open rate potential)\n2. Preview text (under 100 chars)\n3. Opening hook (personal, engaging)\n4. Main content (300-500 words)\n   - Value-driven information\n   - One actionable tip\n   - Brief story or example\n5. Closing with CTA\n6. P.S. line (optional but engaging)\n\nTone: Conversational, like writing to a friend. Avoid being too salesy.`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Email marketing', 'Community building', 'Content marketing'],
    tags: ['newsletter', 'email', 'content'],
    difficulty: 'Intermediate',
  },
  {
    id: 'headline-1',
    title: 'High-Converting Headlines',
    description: 'Generate 10 headline variations for any content',
    prompt: `Create 10 headline variations for: [CONTENT DESCRIPTION]\n\nMix of styles:\n- 2 curiosity-driven headlines\n- 2 benefit-focused headlines\n- 2 how-to headlines\n- 2 listicle headlines\n- 2 question headlines\n- 2 urgency/scarcity headlines\n- 2 social proof headlines\n\nEach headline should:\n- Be under 70 characters\n- Include power words\n- Target a specific emotion\n- Avoid clickbait (deliver on the promise)`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Copywriting', 'Ads', 'Blogging'],
    tags: ['headlines', 'copywriting', 'conversion'],
    difficulty: 'Beginner',
    trending: true,
  },
  // Coding & Development
  {
    id: 'debug-1',
    title: 'Code Debugger & Explainer',
    description: 'Debug code and explain the solution in simple terms',
    prompt: `I have this code that's not working:\n\n[CODE]\n\nError message: [ERROR]\n\nPlease:\n1. Identify the bug(s)\n2. Provide the corrected code\n3. Explain what was wrong and why\n4. Suggest best practices to avoid this in the future\n5. If relevant, suggest optimizations\n\nExplain it like I'm a [BEGINNER/INTERMEDIATE/ADVANCED] developer.`,
    category: 'coding',
    tool: 'ChatGPT',
    useCases: ['Debugging', 'Learning', 'Code review'],
    tags: ['debugging', 'coding', 'learning'],
    difficulty: 'Intermediate',
    featured: true,
  },
  {
    id: 'explain-1',
    title: 'Code Explainer (ELI5)',
    description: 'Explain complex code in simple, understandable terms',
    prompt: `Explain this code like I'm a beginner:\n\n[CODE]\n\nBreak it down:\n1. What does this code do overall?\n2. Explain each major section\n3. What are the key functions/methods doing?\n4. Are there any patterns or concepts I should learn?\n5. Suggest similar code examples to practice with\n\nUse analogies where helpful. Keep it simple but accurate.`,
    category: 'coding',
    tool: 'ChatGPT',
    useCases: ['Learning', 'Code review', 'Documentation'],
    tags: ['learning', 'explanation', 'beginner'],
    difficulty: 'Beginner',
    trending: true,
  },
  {
    id: 'review-1',
    title: 'Code Review Assistant',
    description: 'Get comprehensive code review with best practices',
    prompt: `Please review this code:\n\n[CODE]\n\nProvide feedback on:\n1. Code quality and readability\n2. Potential bugs or edge cases\n3. Performance considerations\n4. Security issues (if any)\n5. Adherence to best practices\n6. Suggestions for improvement\n7. Missing documentation or comments\n\nBe constructive and educational. Suggest specific improvements with examples.`,
    category: 'coding',
    tool: 'ChatGPT',
    useCases: ['Code review', 'Quality assurance', 'Learning'],
    tags: ['code review', 'best practices', 'quality'],
    difficulty: 'Advanced',
  },
  {
    id: 'generate-1',
    title: 'Code Generator from Description',
    description: 'Generate working code from natural language description',
    prompt: `Generate [LANGUAGE] code for:\n\n[DESCRIBE WHAT YOU WANT THE CODE TO DO]\n\nRequirements:\n- Clean, readable code\n- Include comments explaining key parts\n- Handle edge cases\n- Follow best practices for [LANGUAGE]\n- Include a simple usage example\n\nIf this requires multiple files or components, show the structure clearly.`,
    category: 'coding',
    tool: 'ChatGPT',
    useCases: ['Rapid prototyping', 'Learning', 'Automation'],
    tags: ['code generation', 'automation', 'development'],
    difficulty: 'Intermediate',
    trending: true,
  },
  // Business & Productivity
  {
    id: 'meeting-1',
    title: 'Meeting Agenda Creator',
    description: 'Create structured meeting agendas with time allocations',
    prompt: `Create a meeting agenda for:\n\nMeeting Type: [TYPE]\nDuration: [X] minutes\nAttendees: [ROLES]\nGoal: [DESIRED OUTCOME]\n\nInclude:\n1. Meeting objective (1 sentence)\n2. Pre-meeting prep (what attendees should bring/know)\n3. Agenda items with time allocations\n4. Discussion points for each item\n5. Desired outcomes/decisions\n6. Next steps template\n\nKeep it realistic for the time allotted. Prioritize ruthlessly.`,
    category: 'business',
    tool: 'ChatGPT',
    useCases: ['Meetings', 'Project management', 'Team alignment'],
    tags: ['meetings', 'agenda', 'productivity'],
    difficulty: 'Beginner',
    featured: true,
  },
  {
    id: 'summary-1',
    title: 'Executive Summary Writer',
    description: 'Turn long documents into concise executive summaries',
    prompt: `Create an executive summary of the following:\n\n[LONG DOCUMENT/TEXT]\n\nRequirements:\n- Maximum 250 words\n- Start with the key takeaway/recommendation\n- Bullet points for key findings (3-5)\n- Include specific numbers/data points if relevant\n- Clear next steps or recommendations\n- Written for [AUDIENCE - e.g., CEO, board, team]\n\nTone: Professional, concise, action-oriented.`,
    category: 'business',
    tool: 'ChatGPT',
    useCases: ['Reporting', 'Communication', 'Decision making'],
    tags: ['summary', 'executive', 'business'],
    difficulty: 'Intermediate',
  },
  {
    id: 'decision-1',
    title: 'Decision Framework',
    description: 'Analyze decisions with pros, cons, and recommendations',
    prompt: `Help me make a decision about:\n\n[DECISION TO MAKE]\n\nContext:\n- Current situation: [DETAILS]\n- Constraints: [LIMITATIONS]\n- Goals: [WHAT YOU WANT TO ACHIEVE]\n\nProvide:\n1. 3-4 viable options\n2. Pros and cons of each (be honest about downsides)\n3. Risk assessment for each\n4. Resource requirements (time, money, effort)\n5. Clear recommendation with reasoning\n6. Implementation steps for the recommended option\n\nBe objective but decisive.`,
    category: 'business',
    tool: 'ChatGPT',
    useCases: ['Strategic planning', 'Problem solving', 'Leadership'],
    tags: ['decision making', 'strategy', 'analysis'],
    difficulty: 'Intermediate',
  },
  // Marketing & Sales
  {
    id: 'adcopy-1',
    title: 'High-Converting Ad Copy',
    description: 'Write ad copy for Facebook, Google, or LinkedIn ads',
    prompt: `Write ad copy for [PLATFORM] promoting [PRODUCT/SERVICE]:\n\nTarget Audience: [AUDIENCE]\nKey Benefit: [MAIN VALUE PROP]\nCall to Action: [CTA]\n\nCreate:\n1. 3 headline variations (under 40 chars each)\n2. 3 primary text variations (under 125 chars for mobile)\n3. 2 description variations\n4. Suggested image/video concept\n5. Targeting recommendations\n\nFocus on: Pain point → Agitate → Solution → CTA\nAvoid: Generic claims, feature lists without benefits`,
    category: 'marketing',
    tool: 'ChatGPT',
    useCases: ['Advertising', 'Paid media', 'Conversion'],
    tags: ['ads', 'copywriting', 'conversion'],
    difficulty: 'Intermediate',
    featured: true,
  },
  {
    id: 'landing-1',
    title: 'Landing Page Copy',
    description: 'Complete landing page copy with all sections',
    prompt: `Write landing page copy for:\n\nProduct: [NAME]\nKey Benefit: [VALUE PROP]\nTarget Audience: [WHO]\nPrice: [PRICE/PRICING MODEL]\n\nInclude:\n1. Headline (attention-grabbing, benefit-focused)\n2. Subheadline (expand on the promise)\n3. 3-5 feature sections with benefit-focused copy\n4. Social proof section (testimonial template)\n5. FAQ section (5 questions objections)\n6. Pricing section copy\n7. CTA buttons (3 variations)\n8. Urgency/scarcity elements (if applicable)\n\nTone: Confident, benefit-driven, trustworthy.`,
    category: 'marketing',
    tool: 'ChatGPT',
    useCases: ['Conversion', 'Product launches', 'SaaS'],
    tags: ['landing page', 'conversion', 'copywriting'],
    difficulty: 'Advanced',
  },
  {
    id: 'coldemail-1',
    title: 'Cold Email Sequence',
    description: '3-email cold outreach sequence that gets replies',
    prompt: `Write a 3-email cold outreach sequence for:\n\nTarget: [PROSPECT TYPE]\nMy Offer: [WHAT YOU'RE SELLING/PROPOSING]\nValue Proposition: [KEY BENEFIT]\n\nEmail 1 (Initial):\n- Personalize opening\n- Quick value proposition (1 sentence)\n- Soft ask/CTA\n- Keep under 100 words\n\nEmail 2 (Follow-up, 3 days later):\n- Reference first email\n- Add new value/insight\n- Different angle/approach\n- Clearer ask\n\nEmail 3 (Break-up, 5 days later):\n- Acknowledge they might be busy\n- Quick summary of value\n- Easy yes/no question\n- Professional close\n\nTone: Human, not salesy. Short paragraphs. No fluff.`,
    category: 'marketing',
    tool: 'ChatGPT',
    useCases: ['Sales', 'Business development', 'Outreach'],
    tags: ['cold email', 'sales', 'outreach'],
    difficulty: 'Advanced',
  },
  // Creative & Design
  {
    id: 'midjourney-1',
    title: 'Midjourney Prompt Engineer',
    description: 'Create detailed Midjourney prompts for any style',
    prompt: `Create 3 Midjourney prompts for: [DESCRIPTION]\n\nStyle: [PHOTOGRAPHIC/ILLUSTRATION/3D/PAINTING/etc]\nMood: [DESCRIBE MOOD]\n\nEach prompt should include:\n- Subject description (detailed)\n- Art style/medium\n- Lighting\n- Color palette\n- Camera/settings (if photographic)\n- Aspect ratio\n- Quality parameters\n\nExample structure:\n\"[Subject], [style], [lighting], [colors], [mood], [technical specs] --ar 16:9 --v 6 --q 2\"\n\nMake them detailed but natural. Avoid over-stuffing.`,
    category: 'creative',
    tool: 'Midjourney',
    useCases: ['Art creation', 'Design', 'Content creation'],
    tags: ['midjourney', 'ai art', 'prompts'],
    difficulty: 'Intermediate',
    featured: true,
  },
  {
    id: 'story-1',
    title: 'Short Story Generator',
    description: 'Generate creative short stories with plot and characters',
    prompt: `Write a short story (500-800 words) about:\n\nGenre: [GENRE]\nTheme: [THEME]\nMain Character: [BRIEF DESCRIPTION]\nSetting: [TIME/PLACE]\n\nInclude:\n- Hook opening\n- Character with clear desire/obstacle\n- Rising action\n- Satisfying resolution (doesn't have to be happy)\n- Vivid sensory details\n- Dialogue (if appropriate)\n\nTone: [LIGHT/DARK/HUMOROUS/DRAMATIC]\nStyle: [CONCISE/DESCRIPTIVE/MINIMALIST]`,
    category: 'creative',
    tool: 'ChatGPT',
    useCases: ['Creative writing', 'Entertainment', 'Content'],
    tags: ['story', 'creative', 'writing'],
    difficulty: 'Intermediate',
  },
  // Education & Learning
  {
    id: 'explain-topic-1',
    title: 'Explain Complex Topic (ELI5)',
    description: 'Break down complex topics into simple explanations',
    prompt: `Explain [COMPLEX TOPIC] like I'm 5 years old:\n\nRequirements:\n1. Start with a relatable analogy\n2. Break it into 3-4 simple concepts\n3. Use everyday examples\n4. Avoid jargon (or explain it immediately)\n5. Include one "wow" fact\n6. Suggest 2-3 resources for learning more\n\nMake me feel smart for understanding this, not dumb for not knowing it already.`,
    category: 'learning',
    tool: 'ChatGPT',
    useCases: ['Education', 'Teaching', 'Self-learning'],
    tags: ['learning', 'education', 'explanation'],
    difficulty: 'Beginner',
  },
  {
    id: 'study-guide-1',
    title: 'Study Guide Creator',
    description: 'Create comprehensive study guides for any topic',
    prompt: `Create a study guide for: [TOPIC/SUBJECT]\n\nLevel: [BEGINNER/INTERMEDIATE/ADVANCED]\nPurpose: [EXAM/INTERVIEW/GENERAL KNOWLEDGE]\n\nInclude:\n1. Key concepts (5-7 main ideas)\n2. Important definitions\n3. Summary of each major topic\n4. Practice questions (5-10 with answers)\n5. Common misconceptions to avoid\n6. Memory aids/mnemonics\n7. Suggested study schedule\n8. Resources for deeper learning\n\nStructure it for efficient studying. Highlight what's most important.`,
    category: 'learning',
    tool: 'ChatGPT',
    useCases: ['Studying', 'Exam prep', 'Skill building'],
    tags: ['study', 'education', 'learning'],
    difficulty: 'Intermediate',
  },
  {
    id: 'quiz-1',
    title: 'Quiz/Test Generator',
    description: 'Generate practice quizzes with explanations',
    prompt: `Create a practice quiz for: [TOPIC]\n\nNumber of questions: [10/15/20]\nDifficulty: [EASY/MEDIUM/HARD]\nFormat: [MULTIPLE CHOICE/FILL-IN/OPEN RESPONSE]\n\nFor each question:\n1. Clear question stem\n2. Correct answer\n3. Brief explanation of why it's correct\n4. (For wrong answers) Why they're incorrect\n\nCover the most important concepts. Include a mix of factual and application questions.`,
    category: 'learning',
    tool: 'ChatGPT',
    useCases: ['Test prep', 'Assessment', 'Practice'],
    tags: ['quiz', 'test', 'practice'],
    difficulty: 'Beginner',
  },
];

export const getPromptsByCategory = (categoryId: string): Prompt[] => {
  return prompts.filter(p => p.category === categoryId);
};

export const getPromptById = (id: string): Prompt | undefined => {
  return prompts.find(p => p.id === id);
};

export const getFeaturedPrompts = (): Prompt[] => {
  return prompts.filter(p => p.featured);
};

export const getTrendingPrompts = (): Prompt[] => {
  return prompts.filter(p => p.trending && !p.featured);
};
