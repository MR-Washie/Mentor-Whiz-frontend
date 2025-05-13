import { FaUserTie, FaBuilding, FaStar, FaUserGraduate, FaUsers, FaSearchDollar, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

const services = [
  { icon: <FaUserTie size={40} />, title: "1on1 Coaching", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" },
  { icon: <FaBuilding size={40} />, title: "Company Review", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" },
  { icon: <FaStar size={40} />, title: "Accounts Reviews", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." },
  { icon: <FaUserGraduate size={40} />, title: "Be an Intern", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." },
  { icon: <FaUsers size={40} />, title: "HR Consulting", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" },
  { icon: <FaSearchDollar size={40} />, title: "SEO Optimization", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" },
  { icon: <FaBriefcase size={40} />, title: "Job hiring", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" },
  { icon: <FaProjectDiagram size={40} />, title: "Project Hub", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" },
];

export default function OurServices() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="text-black">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}