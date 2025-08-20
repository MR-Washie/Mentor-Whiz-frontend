import React, { useState } from "react";

const faqs = [
  {
    q: "Do you do web design or web development?",
    a: "Both. We design user‑friendly interfaces and develop responsive, high‑performance websites. You can opt for design‑only, development‑only, or end‑to‑end delivery.",
  },
  {
    q: "I'm an agency, do you develop Figma designs?",
    a: "Yes. We convert Figma (or XD/Sketch) files into pixel‑accurate, production‑ready websites. We follow your design system, components, and spacing to the letter.",
  },
  {
    q: "Why do you develop solely using Webflow?",
    a: "Webflow enables fast, reliable builds with clean HTML/CSS, CMS capabilities, and editor access for non‑technical updates. For custom needs, we also use React/Next when appropriate.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on scope—pages, complexity, animations, and CMS needs. Most projects fall into clear tiers. Share your brief and we’ll provide a fixed quote before work begins.",
  },
  {
    q: "Is there any extra cost involved?",
    a: "Typical extras include custom integrations, premium plugins, additional rounds of revisions, or third‑party subscriptions (e.g., hosting, analytics). We flag these upfront.",
  },
  {
    q: "How long does it take?",
    a: "A small marketing site (3–5 pages) typically takes 1–2 weeks. Larger sites with CMS, animations, or integrations take 3–6 weeks. Timelines are confirmed after scoping.",
  },
  {
    q: "Do I need a developer to make future updates on my website?",
    a: "No. You’ll get an editor guide so you can update copy, images, and content. For structural changes or new features, we offer ongoing support packages.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>

      <div className="divide-y border rounded-lg">
        {faqs.map((item, index) => {
          const open = activeIndex === index;
          return (
            <div key={index} className="p-0">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                className="w-full text-left flex justify-between items-center px-4 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <span className="text-lg font-medium">{item.q}</span>
                <span
                  className="ml-4 inline-flex items-center justify-center w-6 h-6 rounded-full border text-sm"
                  aria-hidden="true"
                >
                  {open ? "−" : "+"}
                </span>
              </button>

              {open && (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  className="px-4 pb-4 text-gray-600"
                >
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
