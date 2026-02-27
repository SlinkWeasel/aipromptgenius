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
    prompt: `Act as an expert SEO content writer. Create a comprehensive blog post about [TOPIC] that:

1. Starts with a compelling hook in the introduction
2. Uses H2 and H3 subheadings for structure
3. Includes 3-5 relevant keywords naturally
4. Has a strong conclusion with a call-to-action
5. Suggests a meta title (60 chars) and meta description (160 chars)
6. Total length: 800-1200 words

Make it engaging, informative, and optimized for search engines.`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Content marketing', 'Blogging', 'SEO'],
    tags: ['blog', 'seo', 'content'],
    difficulty: 'Intermediate'
  },
  {
    id: 'email-1',
    title: 'Professional Email Rewriter',
    description: 'Transform rough notes into polished, professional emails',
    prompt: `Rewrite the following email to make it professional, clear, and effective:

[EMAIL DRAFT]

Requirements:
- Professional but approachable tone
- Clear subject line suggestion
- Structured with proper greeting and closing
- Concise (under 150 words if possible)
- Strong call-to-action
- Proofread for grammar and clarity`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Business communication', 'Cold outreach', 'Client emails'],
    tags: ['email', 'professional', 'communication'],
    difficulty: 'Beginner'
  },
  {
    id: 'social-1',
    title: 'Viral Twitter/X Thread',
    description: 'Create engaging Twitter threads that drive engagement',
    prompt: `Create a viral Twitter/X thread about [TOPIC]:

Structure:
1. Hook tweet (attention-grabbing, 280 chars)
2. 5-7 value-packed tweets
3. One controversial or surprising tweet
4. Strong final tweet with CTA

Style:
- Short, punchy sentences
- Use line breaks for readability
- Include one engaging question
- Add relevant hashtags (3-5 max)
- Tone: [PROFESSIONAL/CASUAL/WITTY]`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Social media', 'Personal branding', 'Content marketing'],
    tags: ['twitter', 'social', 'viral'],
    difficulty: 'Intermediate'
  },
  {
    id: 'linkedin-1',
    title: 'LinkedIn Post Generator',
    description: 'Create professional LinkedIn posts that drive engagement',
    prompt: `Write a LinkedIn post about [TOPIC/EXPERIENCE]:

Format:
- Hook (first 2 lines must grab attention)
- Short paragraphs (1-2 sentences each)
- Personal story or lesson learned
- Actionable insights (3 bullet points)
- Engagement question at end
- 3-5 relevant hashtags

Tone: Professional but authentic, avoid corporate speak. Make it sound like a real person sharing real insights.`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Personal branding', 'Thought leadership', 'Networking'],
    tags: ['linkedin', 'professional', 'social'],
    difficulty: 'Beginner'
  },
  {
    id: 'newsletter-1',
    title: 'Newsletter Edition Writer',
    description: 'Write engaging newsletter content with subject line and structure',
    prompt: `Create a newsletter edition about [TOPIC]:

Include:
1. Subject line (high open rate potential)
2. Preview text (under 100 chars)
3. Opening hook (personal, engaging)
4. Main content (300-500 words)
   - Value-driven information
   - One actionable tip
   - Brief story or example
5. Closing with CTA
6. P.S. line (optional but engaging)

Tone: Conversational, like writing to a friend. Avoid being too salesy.`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Email marketing', 'Community building', 'Content marketing'],
    tags: ['newsletter', 'email', 'content'],
    difficulty: 'Intermediate'
  },
  {
    id: 'headline-1',
    title: 'High-Converting Headlines',
    description: 'Generate 10 headline variations for any content',
    prompt: `Create 10 headline variations for: [CONTENT DESCRIPTION]

Mix of styles:
- 2 curiosity-driven headlines
- 2 benefit-focused headlines
- 2 how-to headlines
- 2 listicle headlines
- 2 question headlines
- 2 urgency/scarcity headlines
- 2 social proof headlines

Each headline should:
- Be under 70 characters
- Include power words
- Target a specific emotion
- Avoid clickbait (deliver on the promise)`,
    category: 'writing',
    tool: 'ChatGPT',
    useCases: ['Copywriting', 'Ads', 'Blogging'],
    tags: ['headlines', 'copywriting', 'conversion'],
    difficulty: 'Beginner'
  },
  // Coding & Development
  {
    id: 'debug-1',
    title: 'Code Debugger & Explainer',
    description: 'Debug code and explain the solution in simple terms',
    prompt: `I have this code that's not working:

[CODE]

Error message: [ERROR]

Please:
1. Identify the bug(s)
2. Provide the corrected code
3. Explain what was wrong and why
4. Suggest best practices to avoid this in the future
5. If relevant, suggest optimizations

Explain it like I'm a [BEGINNER/INTERMEDIATE/ADVANCED] developer.`,
    category: 'coding',
    tool: 'ChatGPT',
    useCases: ['Debugging', 'Learning', 'Code review'],
    tags: ['debugging', 'coding', 'learning'],
    difficulty: 'Intermediate'
  },
  {
    id: 'explain-1',
    title: 'Code Explainer (ELI5)',
    description: 'Explain complex code in simple, understandable terms',
    prompt: `Explain this code like I'm a beginner:

[CODE]

Break it down:
1. What does this code do overall?
2. Explain each major section
3. What are the key functions/methods doing?
4. Are there any patterns or concepts I should learn?
5. Suggest similar code examples to practice with

Use analogies where helpful. Keep it simple but accurate.`,
    category: 'coding',
    tool: 'ChatGPT',
    useCases: ['Learning', 'Code review', 'Documentation'],
    tags: ['learning', 'explanation', 'beginner'],
    difficulty: 'Beginner'
  },
  {
    id: 'review-1',
    title: 'Code Review Assistant',
    description: 'Get comprehensive code review with best practices',
    prompt: `Please review this code:

[CODE]

Provide feedback on:
1. Code quality and readability
2. Potential bugs or edge cases
3. Performance considerations
4. Security issues (if any)
5. Adherence to best practices
6. Suggestions for improvement
7. Missing documentation or comments

Be constructive and educational. Suggest specific improvements with examples.`,
    category: 'coding',
    tool: 'ChatGPT',
    useCases: ['Code review', 'Quality assurance', 'Learning'],
    tags: ['code review', 'best practices', 'quality'],
    difficulty: 'Advanced'
  },
  {
    id: 'generate-1',
    title: 'Code Generator from Description',
    description: 'Generate working code from natural language description',
    prompt: `Generate [LANGUAGE] code for:

[DESCRIBE WHAT YOU WANT THE CODE TO DO]

Requirements:
- Clean, readable code
- Include comments explaining key parts
- Handle edge cases
- Follow best practices for [LANGUAGE]
- Include a simple usage example

If this requires multiple files or components, show the structure clearly.`,
    category: 'coding',
    tool: 'ChatGPT',
    useCases: ['Rapid prototyping', 'Learning', 'Automation'],
    tags: ['code generation', 'automation', 'development'],
    difficulty: 'Intermediate'
  },
  // Business & Productivity
  {
    id: 'meeting-1',
    title: 'Meeting Agenda Creator',
    description: 'Create structured meeting agendas with time allocations',
    prompt: `Create a meeting agenda for:

Meeting Type: [TYPE]
Duration: [X] minutes
Attendees: [ROLES]
Goal: [DESIRED OUTCOME]

Include:
1. Meeting objective (1 sentence)
2. Pre-meeting prep (what attendees should bring/know)
3. Agenda items with time allocations
4. Discussion points for each item
5. Desired outcomes/decisions
6. Next steps template

Keep it realistic for the time allotted. Prioritize ruthlessly.`,
    category: 'business',
    tool: 'ChatGPT',
    useCases: ['Meetings', 'Project management', 'Team alignment'],
    tags: ['meetings', 'agenda', 'productivity'],
    difficulty: 'Beginner'
  },
  {
    id: 'summary-1',
    title: 'Executive Summary Writer',
    description: 'Turn long documents into concise executive summaries',
    prompt: `Create an executive summary of the following:

[LONG DOCUMENT/TEXT]

Requirements:
- Maximum 250 words
- Start with the key takeaway/recommendation
- Bullet points for key findings (3-5)
- Include specific numbers/data points if relevant
- Clear next steps or recommendations
- Written for [AUDIENCE - e.g., CEO, board, team]

Tone: Professional, concise, action-oriented.`,
    category: 'business',
    tool: 'ChatGPT',
    useCases: ['Reporting', 'Communication', 'Decision making'],
    tags: ['summary', 'executive', 'business'],
    difficulty: 'Intermediate'
  },
  {
    id: 'decision-1',
    title: 'Decision Framework',
    description: 'Analyze decisions with pros, cons, and recommendations',
    prompt: `Help me make a decision about:

[DECISION TO MAKE]

Context:
- Current situation: [DETAILS]
- Constraints: [LIMITATIONS]
- Goals: [WHAT YOU WANT TO ACHIEVE]

Provide:
1. 3-4 viable options
2. Pros and cons of each (be honest about downsides)
3. Risk assessment for each
4. Resource requirements (time, money, effort)
5. Clear recommendation with reasoning
6. Implementation steps for the recommended option

Be objective but decisive.`,
    category: 'business',
    tool: 'ChatGPT',
    useCases: ['Strategic planning', 'Problem solving', 'Leadership'],
    tags: ['decision making', 'strategy', 'analysis'],
    difficulty: 'Intermediate'
  },
  // Marketing & Sales
  {
    id: 'adcopy-1',
    title: 'High-Converting Ad Copy',
    description: 'Write ad copy for Facebook, Google, or LinkedIn ads',
    prompt: `Write ad copy for [PLATFORM] promoting [PRODUCT/SERVICE]:

Target Audience: [AUDIENCE]
Key Benefit: [MAIN VALUE PROP]
Call to Action: [CTA]

Create:
1. 3 headline variations (under 40 chars each)
2. 3 primary text variations (under 125 chars for mobile)
3. 2 description variations
4. Suggested image/video concept
5. Targeting recommendations

Focus on: Pain point → Agitate → Solution → CTA
Avoid: Generic claims, feature lists without benefits`,
    category: 'marketing',
    tool: 'ChatGPT',
    useCases: ['Advertising', 'Paid media', 'Conversion'],
    tags: ['ads', 'copywriting', 'conversion'],
    difficulty: 'Intermediate'
  },
  {
    id: 'landing-1',
    title: 'Landing Page Copy',
    description: 'Complete landing page copy with all sections',
    prompt: `Write landing page copy for:

Product: [NAME]
Key Benefit: [VALUE PROP]
Target Audience: [WHO]
Price: [PRICE/PRICING MODEL]

Include:
1. Headline (attention-grabbing, benefit-focused)
2. Subheadline (expand on the promise)
3. 3-5 feature sections with benefit-focused copy
4. Social proof section (testimonial template)
5. FAQ section (5 questions objections)
6. Pricing section copy
7. CTA buttons (3 variations)
8. Urgency/scarcity elements (if applicable)

Tone: Confident, benefit-driven, trustworthy.`,
    category: 'marketing',
    tool: 'ChatGPT',
    useCases: ['Conversion', 'Product launches', 'SaaS'],
    tags: ['landing page', 'conversion', 'copywriting'],
    difficulty: 'Advanced'
  },
  {
    id: 'coldemail-1',
    title: 'Cold Email Sequence',
    description: '3-email cold outreach sequence that gets replies',
    prompt: `Write a 3-email cold outreach sequence for:

Target: [PROSPECT TYPE]
My Offer: [WHAT YOU'RE SELLING/PROPOSING]
Value Proposition: [KEY BENEFIT]

Email 1 (Initial):
- Personalize opening
- Quick value proposition (1 sentence)
- Soft ask/CTA
- Keep under 100 words

Email 2 (Follow-up, 3 days later):
- Reference first email
- Add new value/insight
- Different angle/approach
- Clearer ask

Email 3 (Break-up, 5 days later):
- Acknowledge they might be busy
- Quick summary of value
- Easy yes/no question
- Professional close

Tone: Human, not salesy. Short paragraphs. No fluff.`,
    category: 'marketing',
    tool: 'ChatGPT',
    useCases: ['Sales', 'Business development', 'Outreach'],
    tags: ['cold email', 'sales', 'outreach'],
    difficulty: 'Advanced'
  },
  // Creative & Design
  {
    id: 'midjourney-1',
    title: 'Midjourney Prompt Engineer',
    description: 'Create detailed Midjourney prompts for any style',
    prompt: `Create 3 Midjourney prompts for: [DESCRIPTION]

Style: [PHOTOGRAPHIC/ILLUSTRATION/3D/PAINTING/etc]
Mood: [DESCRIBE MOOD]

Each prompt should include:
- Subject description (detailed)
- Art style/medium
- Lighting
- Color palette
- Camera/settings (if photographic)
- Aspect ratio
- Quality parameters

Example structure:
"[Subject], [style], [lighting], [colors], [mood], [technical specs] --ar 16:9 --v 6 --q 2"

Make them detailed but natural. Avoid over-stuffing.`,
    category: 'creative',
    tool: 'Midjourney',
    useCases: ['Art creation', 'Design', 'Content creation'],
    tags: ['midjourney', 'ai art', 'prompts'],
    difficulty: 'Intermediate'
  },
  {
    id: 'story-1',
    title: 'Short Story Generator',
    description: 'Generate creative short stories with plot and characters',
    prompt: `Write a short story (500-800 words) about:

Genre: [GENRE]
Theme: [THEME]
Main Character: [BRIEF DESCRIPTION]
Setting: [TIME/PLACE]

Include:
- Hook opening
- Character with clear desire/obstacle
- Rising action
- Satisfying resolution (doesn't have to be happy)
- Vivid sensory details
- Dialogue (if appropriate)

Tone: [LIGHT/DARK/HUMOROUS/DRAMATIC]
Style: [CONCISE/DESCRIPTIVE/MINIMALIST]`,
    category: 'creative',
    tool: 'ChatGPT',
    useCases: ['Creative writing', 'Entertainment', 'Content'],
    tags: ['story', 'creative', 'writing'],
    difficulty: 'Intermediate'
  },
  // Education & Learning
  {
    id: 'explain-topic-1',
    title: 'Explain Complex Topic (ELI5)',
    description: 'Break down complex topics into simple explanations',
    prompt: `Explain [COMPLEX TOPIC] like I'm 5 years old:

Requirements:
1. Start with a relatable analogy
2. Break it into 3-4 simple concepts
3. Use everyday examples
4. Avoid jargon (or explain it immediately)
5. Include one "wow" fact
6. Suggest 2-3 resources for learning more

Make me feel smart for understanding this, not dumb for not knowing it already.`,
    category: 'learning',
    tool: 'ChatGPT',
    useCases: ['Education', 'Teaching', 'Self-learning'],
    tags: ['learning', 'education', 'explanation'],
    difficulty: 'Beginner'
  },
  {
    id: 'study-guide-1',
    title: 'Study Guide Creator',
    description: 'Create comprehensive study guides for any topic',
    prompt: `Create a study guide for: [TOPIC/SUBJECT]

Level: [BEGINNER/INTERMEDIATE/ADVANCED]
Purpose: [EXAM/INTERVIEW/GENERAL KNOWLEDGE]

Include:
1. Key concepts (5-7 main ideas)
2. Important definitions
3. Summary of each major topic
4. Practice questions (5-10 with answers)
5. Common misconceptions to avoid
6. Memory aids/mnemonics
7. Suggested study schedule
8. Resources for deeper learning

Structure it for efficient studying. Highlight what's most important.`,
    category: 'learning',
    tool: 'ChatGPT',
    useCases: ['Studying', 'Exam prep', 'Skill building'],
    tags: ['study', 'education', 'learning'],
    difficulty: 'Intermediate'
  },
  {
    id: 'quiz-1',
    title: 'Quiz/Test Generator',
    description: 'Generate practice quizzes with explanations',
    prompt: `Create a practice quiz for: [TOPIC]

Number of questions: [10/15/20]
Difficulty: [EASY/MEDIUM/HARD]
Format: [MULTIPLE CHOICE/FILL-IN/OPEN RESPONSE]

For each question:
1. Clear question stem
2. Correct answer
3. Brief explanation of why it's correct
4. (For wrong answers) Why they're incorrect

Cover the most important concepts. Include a mix of factual and application questions.`,
    category: 'learning',
    tool: 'ChatGPT',
    useCases: ['Test prep', 'Assessment', 'Practice'],
    tags: ['quiz', 'test', 'practice'],
    difficulty: 'Beginner'
  },
];

export const getPromptsByCategory = (categoryId: string): Prompt[] => {
  return prompts.filter(p => p.category === categoryId);
};

export const getPromptById = (id: string): Prompt | undefined => {
  return prompts.find(p => p.id === id);
};

export const getFeaturedPrompts = (): Prompt[] => {
  return prompts.slice(0, 6);
};

export const getTrendingPrompts = (): Prompt[] => {
  // In real app, this would be based on usage analytics
  return prompts.filter(p => p.difficulty === 'Intermediate').slice(0, 4);
};
