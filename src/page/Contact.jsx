import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.number
    ) {
      alert("please form fill kro");
      return;
    }
    alert("Message sent successfully!");
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "", number: "" });
  };

  return (
    <div>
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Contact <span className="text-amber-400">Me</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Feel free to contact me for any work or suggestions.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              {/* Email */}
              <div>
                <span className="block text-gray-700 font-medium mb-2">
                  +91
                </span>
                <input
                  type="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="+91"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
