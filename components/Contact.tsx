'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Submit button ko disable karne ke liye

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // 1. Check karo ki response JSON hai ya HTML error page
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textError = await response.text();
        console.error("Server returned non-JSON response:", textError);
        alert(`Server Error (${response.status}): Unexpected response format. Check backend terminal logs.`);
        setLoading(false);
        return;
      }

      const result = await response.json();

      // 2. Agar Resend se mail successfully chali gayi
      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          eventType: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // Agar backend route ne custom error JSON bheja ho
        alert(result.message || "Failed to send inquiry. Please check backend config.");
      }
    } catch (error) {
      console.error("Network or parsing error:", error);
      alert("Something went wrong. Network check karein ya server restart karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-3 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900 via-purple-800 to-pink-900"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-700 rounded-full mix-blend-screen filter blur-3xl opacity-20 -top-40 -right-40 animate-float"></div>
        <div className="absolute w-96 h-96 bg-pink-700 rounded-full mix-blend-screen filter blur-3xl opacity-20 -bottom-40 -left-40 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-2 sm:px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-5xl font-black text-center text-white mb-2 sm:mb-4">Get Your Quote</h2>
        <p className="text-center text-purple-100 mb-8 sm:mb-12 text-xs sm:text-sm md:text-base md:text-lg font-light">
          Let's discuss your event and create something magical together
        </p>

        {submitted && (
          <div className="mb-6 p-5 bg-green-500/20 border-2 border-green-400 rounded-2xl text-green-200 text-center animate-slide-up font-semibold">
            ✓ Thank you for your inquiry! We will contact you soon on your email.
          </div>
        )}

        <form onSubmit={handleSubmit} className="glass rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl p-3 sm:p-6 md:p-8 lg:p-12 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-xs sm:text-sm md:text-base text-gray-700 font-semibold mb-1 sm:mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all bg-white/50"
                placeholder="First and Last Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all bg-white/50"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all bg-white/50"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Event Date</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all bg-white/50"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all bg-white/50"
              >
                <option value="">Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday Party</option>
                <option value="corporate">Corporate Event</option>
                <option value="baby-shower">Baby Shower</option>
                <option value="holiday">Holiday Event</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-semibold mb-2">Tell us about your vision</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all bg-white/50 resize-none"
              placeholder="Describe your event, theme, color scheme, and any special requirements..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl text-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </form>

        <div className="mt-8 sm:mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
          <div className="glass rounded-lg sm:rounded-2xl p-3 sm:p-6 md:p-8 text-center text-white">
            <div className="text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-3 md:mb-4">📞</div>
            <h3 className="font-bold text-xs sm:text-base md:text-lg mb-1 sm:mb-2">Phone</h3>
            <p className="text-purple-100 font-light text-xs sm:text-sm md:text-base">+19 9625043472</p>
          </div>
          <div className="glass rounded-lg sm:rounded-2xl p-3 sm:p-6 md:p-8 text-center text-white">
            <div className="text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-3 md:mb-4">✉️</div>
            <h3 className="font-bold text-xs sm:text-base md:text-lg mb-1 sm:mb-2">Email</h3>
            <p className="text-purple-100 font-light text-xs sm:text-sm md:text-base">nitingupta47507@gmail.com</p>
          </div>
          <div className="glass rounded-lg sm:rounded-2xl p-3 sm:p-6 md:p-8 text-center text-white">
            <div className="text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-3 md:mb-4">📍</div>
            <h3 className="font-bold text-xs sm:text-base md:text-lg mb-1 sm:mb-2">Location</h3>
            <p className="text-purple-100 font-light text-xs sm:text-sm md:text-base">123 Event Street, City, State</p>
          </div>
        </div>
      </div>
    </section>
  );
}