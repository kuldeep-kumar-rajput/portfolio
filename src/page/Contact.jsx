import React from "react";

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 md:px-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Contact <span className="text-amber-400">Me</span>
            </h2>
            <p className="text-gray-600 mt-4 text-white">
              Feel free to contact me for any work or suggestions.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
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
                  placeholder="Enter your email"
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
