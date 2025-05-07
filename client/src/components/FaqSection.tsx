import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  color: "green" | "purple" | "pink";
  isOpen: boolean;
  toggleOpen: () => void;
}

function FaqItem({ question, answer, color, isOpen, toggleOpen }: FaqItemProps) {
  const colorClasses = {
    green: "bg-glow-green/5 border-glow-green/30 text-glow-green",
    purple: "bg-glow-purple/5 border-glow-purple/30 text-glow-purple",
    pink: "bg-glow-pink/5 border-glow-pink/30 text-glow-pink"
  };

  return (
    <div className={`mb-4 rounded-xl overflow-hidden ${isOpen ? colorClasses[color] : 'bg-dark-800 border-dark-700'} border transition-all duration-300`}>
      <button
        className="flex justify-between items-center w-full p-5 text-left"
        onClick={toggleOpen}
      >
        <h3 className={`text-lg font-semibold ${isOpen ? '' : 'text-white'}`}>
          {question}
        </h3>
        <div className={`flex items-center justify-center h-8 w-8 rounded-full ${isOpen ? colorClasses[color] : 'bg-dark-700'} transition-all duration-300`}>
          <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <i className="ri-arrow-down-s-line"></i>
          </span>
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5">
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does this TikTok downloader work?",
      answer: "Our downloader connects directly to TikTok's servers to extract the video. Just paste the URL, click Download, and save the video to your device.",
      color: "green" as const
    },
    {
      question: "Is downloading TikTok videos legal?",
      answer: "Downloading videos for personal use is generally acceptable. Always respect creators' rights and don't redistribute content without permission.",
      color: "purple" as const
    },
    {
      question: "What's the difference between with and without watermark?",
      answer: "With watermark keeps the TikTok logo on the video. Without watermark removes these elements for a clean video.",
      color: "pink" as const
    },
    {
      question: "Why won't my video download?",
      answer: "This could happen if the video is private or deleted. Try refreshing the page or using a different browser.",
      color: "green" as const
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 md:px-12 relative">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-glow-purple/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-glow-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently <span className="text-glow-purple">Asked</span> Questions
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers
          </p>
        </div>
        
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer}
              color={faq.color}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300">Still have questions?</p>
          <a href="#" className="inline-block mt-4 px-6 py-3 rounded-lg bg-dark-800 border border-dark-700 hover:border-glow-green/50 text-white transition-all duration-300">
            <i className="ri-customer-service-2-line mr-2"></i>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}