'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Do I need to install an SDK or change my app code?',
    answer: 'No. Kovio works entirely via API - connecting to your AdMob, MAX, and mediation platforms without any SDK installation or code changes. Just login with Google, grant API access, and the agent takes over.'
  },
  {
    question: 'Who is Kovio built for?',
    answer: 'Kovio is designed for large publishers managing significant ad revenue across multiple networks. If you have a dedicated ad ops team or wish you did, Kovio can automate most of that work.'
  },
  {
    question: 'Do I still own my ad accounts?',
    answer: 'Yes. You maintain full ownership of your AdMob, AppLovin MAX, and other accounts. Kovio operates on your behalf via official APIs. Revoke access anytime and keep complete control.'
  },
  {
    question: 'What does the agent actually manage?',
    answer: 'The agent manages your entire ad stack: AdMob configuration, mediation platform waterfalls, ad unit settings, floor prices, format selection, and ad ops workflows. It monitors 24/7 and optimizes continuously.'
  },
  {
    question: 'How does the agent stay policy-safe?',
    answer: 'Every change is validated against Google AdMob policies and mediation platform rules before execution. The agent learns from policy updates and flags risky configurations for review before applying them.'
  },
  {
    question: 'Can I override or approve changes manually?',
    answer: 'Yes. You can set guardrails, require approval for certain actions, or let the agent run fully autonomous. Kovio adapts to your preferred level of control and oversight.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
            <span className="text-sm text-gray-600 font-medium uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about agentic ad infrastructure
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-purple-200 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
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
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="mailto:hello@kovio.dev" className="text-purple-600 hover:text-purple-700 font-medium">
            Contact our team →
          </a>
        </div>
      </div>
    </section>
  );
}
