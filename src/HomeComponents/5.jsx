import React from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Ananya Gupta',
    role: 'SDE Intern, FinTech',
    review:
      "My mentor helped me restructure my resume and practice DSA with real interview patterns. I landed two offers within a month.",
    image: 'Avatar1.png',
    stars: 5,
  },
  {
    name: 'Rohit Verma',
    role: 'Product Designer, SaaS',
    review:
      "The portfolio critique was gold—clear storytelling and measurable impact. I finally felt confident walking into interviews.",
    image: 'Avatar2.png',
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">
        What our students say <span className="italic font-medium">about us</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 shadow-md text-left flex flex-col gap-4"
          >
            <div className="flex gap-4 items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover"
                onError={(e)=>{e.currentTarget.style.opacity='0.3';}}
              />
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <div className="text-yellow-500 text-sm">
              {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
            </div>
            <p className="text-gray-600 text-sm">"{t.review}"</p>
          </div>
        ))}
      </div>

      <Link to="/feedback">
        <button className="cursor-pointer mt-10 px-6 py-2 bg-black text-white rounded-md">
          See All
        </button>
      </Link>
    </section>
  );
};

export default TestimonialsSection;
