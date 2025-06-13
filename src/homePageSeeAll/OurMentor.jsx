import React from 'react';
import { Link } from 'react-router-dom';

const mentors = [
  {
    name: 'Aimee Calderon',
    title: 'B.Tech from NIT Patna',
    image: 'imageM1.png',
  },
  {
    name: 'Raymond Horn',
    title: 'Digital Marketer',
    image: 'imageM2.png',
  },
  {
    name: 'Linda Towner',
    title: 'App Designer',
    image: 'imageM3.png',
  },
  {
    name: 'Aimee Calderon',
    title: 'B.Tech from NIT Patna',
    image: 'imageM1.png',
  },
  {
    name: 'Raymond Horn',
    title: 'Digital Marketer',
    image: 'imageM2.png',
  },
  {
    name: 'Linda Towner',
    title: 'App Designer',
    image: 'imageM3.png',
  },
  {
    name: 'Aimee Calderon',
    title: 'B.Tech from NIT Patna',
    image: 'imageM1.png',
  },
  {
    name: 'Raymond Horn',
    title: 'Digital Marketer',
    image: 'imageM2.png',
  },
  {
    name: 'Linda Towner',
    title: 'App Designer',
    image: 'imageM3.png',
  },
];

const OurMentor = () => {
  return (
    <section className="px-8 pt-25 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Our Mentors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="overflow-hidden w-[260px] h-[360px] bg-gray-100 mb-4 rounded-md">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{mentor.name}</h3>
            <p className="text-gray-600 text-sm">{mentor.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default OurMentor;