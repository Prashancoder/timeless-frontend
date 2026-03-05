import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="Contact Us" description="Contact Timeless Aesthetics" />
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
          
          {/* Left Side: Contact Info */}
          <div className="bg-slate-900 p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-slate-300 mb-8">Feel free to reach out to us for any skin or hair concerns.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-600" />
                <span>+91 8750027070</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-600" />
                <span>info@timelessaesthetics.in</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-600" />
                <span>Gurgaon, Amritsar, Jammu</span>
              </div>
            </div>
          </div>

          {/* Right Side: Simple Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input 
                  id="firstName" 
                  type="text" 
                  required 
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-600 outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-600 outline-none" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-600 outline-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-slate-900 text-white py-3 rounded-lg hover:bg-black transition flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;