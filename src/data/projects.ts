export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologyStack: string[];
  highlights: string[];
  overview: string;
  problem: string;
  intendedUsers: string;
  architecture: string;
  technologyDecisions: string;
  implementedFeatures: string[];
  challenges: string;
  testing: string;
  futureImprovements: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'autodevai',
    title: 'AutoDevAI — Multi-Agent Software Engineering Platform',
    category: 'Agentic AI / Software Engineering Automation',
    description: 'An AI-assisted software engineering platform concept designed to organize development workflows across planning, implementation, testing, security review, and documentation.',
    technologyStack: [
      'Python',
      'FastAPI',
      'LangGraph',
      'LangChain',
      'LLMs',
      'RAG',
      'Qdrant',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Docker',
    ],
    highlights: [
      'Multi-agent workflow orchestration',
      'Natural-language software requirements',
      'Structured development tasks',
      'Project-context retrieval',
      'Validation and testing workflow concepts',
      'Security review',
      'Documentation generation',
      'Backend API and frontend integration',
    ],
    overview: 'AutoDevAI explores how AI agents can collaborate to automate and structure software engineering workflows. The platform aims to transform natural language requirements into organized development tasks while maintaining project context and quality standards.',
    problem: 'Software development involves multiple interconnected stages—planning, implementation, testing, security review, and documentation. Coordinating these stages while maintaining consistency and quality is challenging, especially for complex projects.',
    intendedUsers: 'Software development teams, individual developers, and engineering managers seeking structured AI-assisted development workflows.',
    architecture: 'The system uses a multi-agent architecture where specialized agents handle different stages of the development lifecycle. A coordinator agent manages workflow orchestration, while domain-specific agents focus on planning, implementation, testing, security review, and documentation.',
    technologyDecisions: 'LangGraph was chosen for its agent orchestration capabilities. FastAPI provides a performant backend for agent interactions. Qdrant enables efficient vector storage for project context and RAG. React and TypeScript create a responsive frontend for workflow visualization.',
    implementedFeatures: [
      'Multi-agent workflow orchestration framework',
      'Natural language requirement processing',
      'Structured task generation',
      'Context retrieval system',
      'Basic validation workflows',
    ],
    challenges: 'Coordinating multiple agents while maintaining context consistency across the development lifecycle requires careful state management. Ensuring that generated code and documentation align with project standards is an ongoing challenge.',
    testing: 'The system includes validation workflows for generated code and documentation. Human oversight is maintained for critical decisions, with AI agents providing structured recommendations.',
    futureImprovements: [
      'Integration with version control systems',
      'Automated testing pipeline integration',
      'Enhanced security review capabilities',
      'Real-time collaboration features',
      'Customizable agent configurations',
    ],
  },
  {
    id: 'ai-soc',
    title: 'AI-SOC Automation System',
    category: 'AI Security / Security Operations',
    description: 'An AI-focused project exploring security-alert analysis, threat prioritization, contextual investigation support, and structured investigation workflows.',
    technologyStack: [
      'Python',
      'Machine Learning concepts',
      'Generative AI',
      'LLMs',
    ],
    highlights: [
      'Security-alert review',
      'Threat prioritization concepts',
      'Context gathering',
      'Structured investigation notes',
      'AI-assisted analysis',
      'Human validation of security decisions',
    ],
    overview: 'The AI-SOC Automation System explores how AI can assist security operations center analysts in reviewing alerts, prioritizing threats, and conducting structured investigations while maintaining human oversight for critical decisions.',
    problem: 'Security operations centers face high alert volumes, making it difficult to prioritize and investigate threats efficiently. Analysts need tools that can help triage alerts and gather context without replacing human judgment.',
    intendedUsers: 'SOC analysts, security engineers, and incident responders seeking AI-assisted threat analysis and investigation support.',
    architecture: 'The system processes security alerts through an AI analysis pipeline that extracts relevant context, prioritizes threats based on multiple factors, and generates structured investigation notes for analyst review.',
    technologyDecisions: 'Python provides a robust foundation for security tooling. Machine learning concepts enable threat prioritization. Generative AI and LLMs assist in analyzing alerts and generating investigation summaries.',
    implementedFeatures: [
      'Alert processing framework',
      'Threat prioritization logic',
      'Context gathering mechanisms',
      'Structured investigation note generation',
      'Human validation workflows',
    ],
    challenges: 'Security analysis requires high accuracy. AI-generated recommendations must be carefully validated by analysts to avoid false positives or missed threats. Integrating with existing security telemetry presents technical challenges.',
    testing: 'The system uses sample security alerts to validate analysis accuracy. Human analysts review AI-generated recommendations to ensure quality and relevance.',
    futureImprovements: [
      'Integration with SIEM platforms',
      'Enhanced threat intelligence correlation',
      'Automated evidence collection',
      'Customizable analysis rules',
      'Performance metrics and reporting',
    ],
  },
  {
    id: 'nightfall',
    title: 'Nightfall Intelligence — Cyber Threat Intelligence Dashboard',
    category: 'Cybersecurity / Frontend Engineering',
    description: 'A cybersecurity dashboard for organizing threat reports, threat-actor profiles, intelligence briefs, evidence, confidence indicators, and event timelines.',
    technologyStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],
    highlights: [
      'Threat-intelligence presentation',
      'Search and filtering',
      'Case-detail views',
      'Evidence organization',
      'Threat-actor information',
      'Confidence indicators',
      'Timeline-oriented information display',
    ],
    overview: 'Nightfall Intelligence provides a structured interface for organizing and presenting cyber threat intelligence. The dashboard helps security teams track threats, analyze actor behavior, and maintain investigation timelines.',
    problem: 'Threat intelligence data is often scattered across multiple sources and formats. Security teams need a unified interface to organize, search, and analyze threat information efficiently.',
    intendedUsers: 'Threat intelligence analysts, security researchers, and incident responders who need to track and analyze cyber threats.',
    architecture: 'The application uses a component-based React architecture with TypeScript for type safety. Tailwind CSS provides responsive styling. Data is organized around threat cases, actors, and timeline events.',
    technologyDecisions: 'React enables a dynamic, interactive user interface. TypeScript ensures type safety across the application. Tailwind CSS allows rapid UI development with consistent styling. Vite provides fast development and build times.',
    implementedFeatures: [
      'Threat case management interface',
      'Search and filtering capabilities',
      'Threat-actor profile views',
      'Evidence organization system',
      'Confidence indicator display',
      'Timeline visualization',
    ],
    challenges: 'Designing an interface that accommodates diverse threat intelligence data while maintaining usability requires careful information architecture. Balancing detail density with readability is an ongoing consideration.',
    testing: 'The interface has been tested with sample threat data to ensure proper display of cases, actors, evidence, and timeline events. Responsive design has been validated across multiple screen sizes.',
    futureImprovements: [
      'Integration with threat intelligence feeds',
      'Advanced filtering and correlation',
      'Collaboration features for teams',
      'Export and reporting capabilities',
      'Customizable dashboard layouts',
    ],
  },
  {
    id: 'fitness-agent',
    title: 'AI Fitness Agent — Context-Aware Conversational Assistant',
    category: 'Generative AI / Conversational Applications',
    description: 'An LLM-powered conversational application designed to generate personalized fitness and workout recommendations from user-provided information while maintaining conversational context.',
    technologyStack: [
      'Python',
      'OpenAI API',
      'LLMs',
      'AI-agent concepts',
    ],
    highlights: [
      'Conversational interaction',
      'Prompt design',
      'Personalized recommendations',
      'Context retention',
      'External API integration',
    ],
    overview: 'The AI Fitness Agent demonstrates context-aware conversational AI by generating personalized fitness recommendations based on user preferences, goals, and available information while maintaining conversation history.',
    problem: 'Fitness guidance often requires understanding individual goals, preferences, and constraints. Generic recommendations may not address specific user needs or adapt to changing circumstances.',
    intendedUsers: 'Individuals seeking personalized fitness guidance and workout recommendations. Note: This is a demonstration project and does not replace professional medical advice.',
    architecture: 'The application uses a conversational agent pattern with context management. User inputs are processed through an LLM with carefully designed prompts to generate relevant fitness recommendations while maintaining conversation history.',
    technologyDecisions: 'Python provides a straightforward backend for API interactions. The OpenAI API enables access to powerful language models. Context management ensures coherent multi-turn conversations.',
    implementedFeatures: [
      'Conversational interface',
      'Context-aware response generation',
      'Personalized recommendation logic',
      'Conversation history management',
      'User preference handling',
    ],
    challenges: 'Maintaining context accuracy across long conversations requires careful prompt engineering. Ensuring that recommendations are safe and appropriate is critical.',
    testing: 'The system has been tested with various conversation scenarios to ensure context retention and relevant recommendations. Responses are monitored for safety and appropriateness.',
    futureImprovements: [
      'Integration with fitness tracking APIs',
      'Progress tracking features',
      'Multi-language support',
      'Enhanced safety guardrails',
      'Visual workout plan generation',
    ],
  },
];
