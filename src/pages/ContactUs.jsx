import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaComments } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast"
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;


export default function ContactUs() {

  const quiry = [
    "General Queiry",
    "About Mentor", 
    "About Plan",
    "Others"
  ]

  const [form, setForm] = useState({
    fullName: "",
    collegeName: "",
    email: "",
    mobileNo: "",
    subject: "",
    message: ""
  });
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setForm(prevData => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

    const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      for (let key in form) {
        formData.append(key, form[key]);
      }
  
    //   await axios.post("http://localhost:3000/api/contact", formData);
    //     toast.success("Application submitted successfully!")
    //   } catch (err) {
    //     console.log(err.message);
    //     toast.error(err.response.data.message);
    //   }
    // };

    await axios.post(`${BASE_URL}/api/contact` , formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
        toast.success("Application submitted successfully!")
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };

  return (
    
    <section className="bg-white py-12 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 rounded-lg overflow-hidden">
        {/* Contact Info */}
        <div className="bg-black text-white p-8 relative">
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p className="text-sm mb-6">Say something to start a live chat!</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+91 9801159223</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>mentorwhizofficial@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt />
              <span>Boring Road, Patna 800001</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <FaTwitter className="text-yellow-400 cursor-pointer hover:text-white" />
            <FaInstagram className="text-yellow-400 cursor-pointer hover:text-white" />
            <FaComments className="text-yellow-400 cursor-pointer hover:text-white" />
          </div>
          <div className="absolute top-10 right-[-20px] w-8 h-8 bg-pink-500 rounded-full" />
          <div className="absolute bottom-0 right-10 w-20 h-20 bg-yellow-400 rounded-full" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} >
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter full name" className="p-2 border rounded w-full" />
            <input type="text" name="collegeName" value={form.collegeName} onChange={handleChange}  placeholder="College name" className="p-2 border rounded w-full" />
            <input type="email" name="email" value={form.email} onChange={handleChange}  placeholder="Enter email" className="p-2 border rounded w-full" />
            <input type="Number" name="mobileNo" value={form.mobileNo} onChange={handleChange}  placeholder="Enter mobile No" className="p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium mb-1">Select Subject?</p>
            {/* <div className="flex flex-wrap gap-4">
              {[...Array(4)].map((_, i) => (
                <label key={i} className="flex items-center gap-2 text-sm">
                  <input type="radio" name="subject" value={quiry[i]} onChange={handleChange} className="form-radio" />
                    {quiry[i]}
                </label>
              ))}
            </div> */}
            <div className="flex flex-wrap gap-4">
  {quiry?.slice(0, 4).map((item, i) => (
    <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
      <input
        type="radio"
        name="subject"
        value={item}
        onChange={handleChange}
        className="form-radio"
      />
      {item}
    </label>
  ))}
</div>

          </div>
          <textarea
            placeholder="Write your message" name="message" value={form.message} onChange={handleChange}
            className="w-full border rounded p-3 mb-4 min-h-[100px]"
          ></textarea>
          <button className="bg-black text-white px-6 py-2 rounded">Send Message</button>
        </div>
        </form>
      </div>
    </section>
  );
}
