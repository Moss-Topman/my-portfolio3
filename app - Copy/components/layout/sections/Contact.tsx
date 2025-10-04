"use client";
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Interested in working together? Let's start a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium">hello@portfolio.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium">Based in Everywhere</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />
              </div>
              
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
              ></textarea>
              
              <button className="group flex items-center space-x-2 px-8 py-3 border border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}