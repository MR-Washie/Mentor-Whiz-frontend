import { useState } from "react";

const faqs = [
  "Do you do web design or web development?",
  "I'm an agency, do you develop Figma designs?",
  "Why do I develop solely using Webflow?",
  "How much does it cost?",
  "Is there any extra cost involved?",
  "How long does it take?",
  "Do I need a developer to make future updates on my website?",
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-4 text-lg font-medium hover:text-blue-600"
            >
              {faq}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="pb-4 text-gray-600">
                {/* Replace this with actual FAQ answers */}
                This is a sample answer for: "{faq}"
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}