import React from "react";

const AboutUs = () => {
  const sections = [
    {
      image: "about image.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reverse: false
    },
    {
      image: "about image.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reverse: true
    },
    {
      image: "about image.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      reverse: false
    }
  ];

  const founders = [
    {
      name: "Nikhil Kumar",
      title: "Co-Founder",
      image: "image nikhil sir.png"
    },
    {
      name: "Satyam Prakash",
      title: "Co-Founder",
      image: "image Satyam sir.png"
    }
  ];

  return (
    <div className="bg-white">
      {/* About Sections */}
      {sections.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            item.reverse ? "md:flex-row-reverse" : ""
          } items-center py-12 px-4 md:px-20`}
        >
          <img
            src={item.image}
            alt="About"
            className="w-full md:w-1/2 rounded border-4 border-pink-500"
          />
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Lorem Ipsum</h2>
            <p className="text-gray-600 mb-4">{item.text}</p>
            <button className="bg-black text-white px-6 py-2 rounded">Learn More</button>
          </div>
        </div>
      ))}

      {/* Co-Founders Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Co Founders</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 px-4">
          {founders.map((founder, index) => (
            <div key={index} className="text-center">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-48 h-56 object-cover mx-auto rounded shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{founder.name}</h3>
              <p className="text-sm text-gray-600">{founder.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;