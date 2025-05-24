import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaComments } from "react-icons/fa";

export default function ContactUs() {
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
              <span>+1012 3456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <span>demo@gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt />
              <span>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
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
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Enter first name" className="p-2 border rounded w-full" />
            <input type="text" placeholder="Enter last name" className="p-2 border rounded w-full" />
            <input type="email" placeholder="Enter email" className="p-2 border rounded w-full" />
            <input type="text" placeholder="Enter mobile No" className="p-2 border rounded w-full" />
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium mb-1">Select Subject?</p>
            <div className="flex flex-wrap gap-4">
              {[...Array(4)].map((_, i) => (
                <label key={i} className="flex items-center gap-2 text-sm">
                  <input type="radio" name="subject" className="form-radio" />
                  General Inquiry
                </label>
              ))}
            </div>
          </div>
          <textarea
            placeholder="Write your message"
            className="w-full border rounded p-3 mb-4 min-h-[100px]"
          ></textarea>
          <button className="bg-black text-white px-6 py-2 rounded">Send Message</button>
        </div>
      </div>
    </section>
  );
}