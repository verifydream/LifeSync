import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is LifeSync available on Android and iOS?",
    answer: "Yes! LifeSync is available on both the App Store and Google Play Store. Your data syncs seamlessly across all your devices in real-time."
  },
  {
    question: "Can I try the Pro features before subscribing?",
    answer: "Absolutely. We offer a 14-day free trial for all new users. You can explore all Pro features including unlimited history and AI planning without any commitment."
  },
  {
    question: "How secure is my financial data?",
    answer: "Security is our top priority. We use bank-grade 256-bit encryption to store your data. We never sell your personal information to third parties."
  },
  {
    question: "Does the offline mode work for all features?",
    answer: "Most features, including habit tracking, journaling, and calendar viewing, work perfectly offline. Data syncs to the cloud automatically once you're back online."
  },
  {
    question: "Can I import data from other apps?",
    answer: "Yes, we support importing data from major calendar apps (Google Calendar, Outlook) and CSV exports for finance tracking."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 dark:text-zinc-400">Everything you need to know about LifeSync.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-gray-50/50 dark:bg-white/5 shadow-sm' : 'bg-transparent hover:border-gray-300 dark:hover:border-white/20'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded-t-2xl"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                aria-labelledby={`faq-question-${index}`}
                role="region"
                aria-hidden={openIndex !== index}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 dark:text-zinc-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;