import React from "react";

// Reusable content block with optional reverse layout
function AboutSection({ title, text, image, reverse = false }) {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 md:gap-12 py-12 md:py-16 px-5 md:px-10 lg:px-20`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-auto rounded-xl border border-gray-200 shadow-sm object-cover"
          onError={(e) => {
            e.currentTarget.style.opacity = "0.3";
          }}
        />
      </div>

      <div className="w-full md:w-1/2">
        <span className="inline-block text-xs tracking-wider uppercase text-pink-600 font-semibold mb-2">
          About
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#111927] mb-4">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">{text}</p>
        {/* <button className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition">
          Learn More
        </button> */}
      </div>
    </section>
  );
}

function FounderCard({ name, title, image }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition">
      <img
        src={image}
        alt={`${name}, ${title}`}
        loading="lazy"
        className="w-40 h-48 object-cover mx-auto rounded-lg border"
        onError={(e) => {
          e.currentTarget.style.opacity = "0.3";
        }}
      />
      <h3 className="text-lg font-semibold mt-4 text-[#111927]">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );
}

const AboutUs = () => {
  const sections = [
    {
      title: "Our Story",
      image: "about image.png",
      text:
        "Mentor WHIZ began with a simple belief: the fastest way to grow is to learn from someone who’s already walked the path. What started as a small peer‑mentoring circle has grown into a community that connects students with experienced mentors across disciplines—engineering, design, business, and more. We’re building the bridge we wish we had: practical guidance, honest feedback, and real opportunities.",
      reverse: false,
    },
    {
      title: "What Drives Us",
      image: "about image.png",
      text:
        "We exist to make high‑quality mentorship accessible to every learner, not just the privileged few. Our platform pairs students with mentors who share their interests and goals, supports outcome‑based sessions, and fosters accountability through projects and portfolios. When students succeed—landing internships, acing interviews, or shipping their first product—we know we’re on the right track.",
      reverse: true,
    },
    {
      title: "Where We’re Headed",
      image: "about image.png",
      text:
        "We’re building tools that make mentorship measurable and scalable: structured learning paths, project reviews, mock interviews, and career‑ready challenges. Next, we’re expanding into cohort‑based learning and verified credentials so mentors can showcase impact and students can prove skills, not just degrees.",
      reverse: false,
    },
  ];

  const founders = [
    {
      name: "Nikhil Kumar",
      title: "Co‑Founder",
      image: "image nikhil sir.png",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-70 pointer-events-none" />

        <div className="relative px-5 md:px-10 lg:px-20 py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-wider uppercase text-pink-600 font-semibold mb-2">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#111927] leading-tight">
              Empowering learners through mentorship, community, and opportunity.
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Mentor WHIZ connects ambitious students with mentors who care—turning
              questions into clarity and effort into outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections.map((s, i) => (
        <AboutSection key={i} {...s} />
      ))}

      {/* Values */}
      <section className="bg-gray-50 py-14 md:py-16 px-5 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111927] text-center">
          Our Core Values
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mt-3">
          The principles that shape our product, community, and every decision we make.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="font-semibold text-[#111927] mb-2">Mentorship First</h3>
            <p className="text-gray-600 text-sm">
              We prioritize people over processes and create space for meaningful, practical guidance.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="font-semibold text-[#111927] mb-2">Access & Inclusion</h3>
            <p className="text-gray-600 text-sm">
              Talent is universal—opportunity isn’t. We’re changing that by lowering barriers to expert help.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="font-semibold text-[#111927] mb-2">Outcome‑Oriented</h3>
            <p className="text-gray-600 text-sm">
              We measure success by real outcomes: projects shipped, interviews cracked, careers started.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-white py-16 md:py-20 px-5 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111927] text-center">
          Our Co‑Founders
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
          A team of builders and educators committed to making mentorship work at scale.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {founders.map((f, idx) => (
            <FounderCard key={idx} {...f} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111927] text-white py-14 md:py-16 px-5 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to join our learning community?
          </h2>
        <p className="text-gray-300 mt-3">
            Become a mentor or find one—start your journey today.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/become-mentor"
              className="bg-white text-black px-5 py-2.5 rounded-md hover:bg-gray-200 transition"
            >
              Become a Mentor
            </a>
            <a
              href="/signup"
              className="bg-transparent border border-white px-5 py-2.5 rounded-md hover:bg-white hover:text-black transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
