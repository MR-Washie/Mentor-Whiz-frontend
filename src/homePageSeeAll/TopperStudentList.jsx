import React from 'react';

const toppers = [
  {
    name: 'Aimee Calderon',
    detail: 'NIT',
    image: 'imageM1.png', // Replace with actual image
  },
  {
    name: 'Raymond Horn',
    detail: 'Medical students',
    image: 'imageM2.png',
  },
  {
    name: 'Linda Towner',
    detail: 'IIT',
    image: 'imageM3.png',
  },
  {
    name: 'Linda Towner',
    detail: 'App Designer',
    image: 'imageM3.png',
  },
  {
    name: 'Aimee Calderon',
    detail: 'NIT',
    image: 'imageM1.png', // Replace with actual image
  },
  {
    name: 'Raymond Horn',
    detail: 'Medical students',
    image: 'imageM2.png',
  },
  {
    name: 'Linda Towner',
    detail: 'IIT',
    image: 'imageM3.png',
  },
  {
    name: 'Linda Towner',
    detail: 'App Designer',
    image: 'imageM3.png',
  },
  {
    name: 'Aimee Calderon',
    detail: 'NIT',
    image: 'imageM1.png', // Replace with actual image
  },
  {
    name: 'Raymond Horn',
    detail: 'Medical students',
    image: 'imageM2.png',
  },
  {
    name: 'Linda Towner',
    detail: 'IIT',
    image: 'imageM3.png',
  },
  {
    name: 'Linda Towner',
    detail: 'App Designer',
    image: 'imageM3.png',
  },
];

const TopperStudentList = () => {
  return (
    <section className="px-6 pt-25 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-left">Our Topper Students</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {toppers.map((student, index) => (
          <div key={index} className="text-center">
            <img
              src={student.image}
              alt={student.name}
              className=" object-cover rounded-md grayscale hover:grayscale-0 transition duration-300"
            />
            <h3 className="mt-2 font-semibold">{student.name}</h3>
            <p className="text-sm text-gray-500">{student.detail}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
      </div>
    </section>
  );
};

export default TopperStudentList;