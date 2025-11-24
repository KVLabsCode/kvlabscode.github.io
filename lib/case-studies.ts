export interface CaseStudy {
    id: string;
    company: string;
    type: 'publisher' | 'advertiser';
    challenge: string;
    solution: string;
    results: {
        metric: string;
        value: string;
        description: string;
    }[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'publisher-1',
        company: 'TechChat AI',
        type: 'publisher',
        challenge: 'Leading AI chatbot platform struggled to monetize their 5M+ monthly active users without disrupting user experience.',
        solution: 'Integrated AdInfra AI\'s contextual ad system, delivering relevant ads within natural conversation flow.',
        results: [
            {
                metric: '40%',
                value: 'Revenue Lift',
                description: 'Per chat session compared to traditional banner ads',
            },
            {
                metric: '10 Minutes',
                value: 'Integration Time',
                description: 'From signup to first ad served',
            },
            {
                metric: '94%',
                value: 'User Satisfaction',
                description: 'Maintained high satisfaction scores post-integration',
            },
        ],
    },
    {
        id: 'advertiser-1',
        company: 'Global Retail Brand',
        type: 'advertiser',
        challenge: 'Major e-commerce brand needed to reach users in AI-powered shopping assistants but lacked the infrastructure.',
        solution: 'Launched targeted campaigns through AdInfra AI\'s network of premium AI chatbots.',
        results: [
            {
                metric: '45%',
                value: 'Higher Engagement',
                description: 'Compared to traditional digital ads',
            },
            {
                metric: '3x',
                value: 'ROI',
                description: 'Return on ad spend vs. previous channels',
            },
            {
                metric: '2.8M',
                value: 'Conversions',
                description: 'Generated in first quarter',
            },
        ],
    },
    {
        id: 'publisher-2',
        company: 'HealthBot Pro',
        type: 'publisher',
        challenge: 'Healthcare AI assistant needed compliant monetization solution that respected user privacy and medical context.',
        solution: 'Deployed AdInfra AI with custom filters for healthcare-appropriate advertising.',
        results: [
            {
                metric: '$2.4M',
                value: 'Annual Revenue',
                description: 'New revenue stream in year one',
            },
            {
                metric: '100%',
                value: 'Compliance',
                description: 'HIPAA-compliant ad delivery',
            },
            {
                metric: '12%',
                value: 'CTR',
                description: 'Industry-leading click-through rate',
            },
        ],
    },
];
