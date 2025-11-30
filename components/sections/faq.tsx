'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How long does it take to implement AdInfra?',
    answer: 'Most publishers go live in under 10 minutes. Our SDK is designed for simplicity with just a few lines of code to integrate.'
  },
  {
    question: 'Can we control which advertisers appear?',
    answer: 'Yes. You have full control over which advertisers and categories appear in your app. You can block specific advertisers or entire categories through your dashboard.'
  },
  {
    question: 'When are payouts made?',
    answer: 'Payouts are issued monthly on Net-30 terms. All metrics shown in your dashboard reflect validated impressions and clicks.'
  },
  {
    question: 'How does AdInfra decide which ads to display?',
    answer: 'We use advanced AI models to analyze user context and intent in real-time. Ads are matched based on relevance, ensuring users see contextual content that adds value to their conversation.'
  },
  {
    question: 'Will ads slow down my AI responses?',
    answer: 'No. Our ad serving infrastructure operates in milliseconds with zero impact on your LLM response times. Ads are fetched asynchronously and rendered seamlessly.'
  },
  {
    question: 'What kind of revenue can I expect?',
    answer: 'Revenue varies based on traffic volume, user engagement, and content category. On average, our partners see 40-120% increase in monthly revenue with high user retention rates.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about AdInfra
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

