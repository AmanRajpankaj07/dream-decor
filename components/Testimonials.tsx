'use client';

import { useState, useEffect } from 'react';

// Structure define karo data ke liye
interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
}

export default function Testimonials() {
  // 1. Live state database/sheet ke liye
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    role: 'Customer',
    rating: 5,
    text: ''
  });

  // ⚠️ APNA SHEET.BEST YA SHEETDB KA URL YAHAN DALO BHAI
  const SHEET_API_URL = "https://sheetdb.io/api/v1/tq7qihyceqh7w";

  // 2. Google Sheet se data read karne ka function
  const fetchTestimonials = async () => {
    try {
      const res = await fetch(SHEET_API_URL);
      if (res.ok) {
        const data = await res.json();
        // Rating ko string se number me convert karna pad sakta hai sheet data ke liye
        const formattedData = data.map((item: any) => ({
          ...item,
          rating: Number(item.rating || 5)
        }));
        setTestimonials(formattedData);
      }
    } catch (err) {
      console.error("Error fetching sheet data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // 3. New feedback submit karne ka function
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Initials nikalo automatically (e.g., Aman Raj -> AR)
    const computedInitials = formData.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2) || 'UI';

    const newRow = {
      name: formData.name,
      role: formData.role,
      text: formData.text,
      rating: Number(formData.rating),
      initials: computedInitials
    };

    try {
      const res = await fetch(SHEET_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([newRow]) // Array ke form me data jata hai sheet me
      });

      if (res.ok) {
        alert("Aapka review live ho gaya bhai! 🎉");
        setFormData({ name: '', role: 'Customer', rating: 5, text: '' });
        fetchTestimonials(); // Turant naya review screen par load karo
      }
    } catch (err) {
      console.error("Error saving review:", err);
      alert("Kuch gadbad hui, review submit nahi ho paya.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-linear-to-br from-purple-50 via-blue-50 to-pink-50 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-48 -mt-48"></div>
      
      <div className="max-w-5xl mx-auto px-2 sm:px-4 relative z-10">
        <h2 className="section-title text-center text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">What Our Clients Say</h2>
        <p className="section-subtitle text-center text-sm sm:text-base mb-8 sm:mb-12">Real stories from happy customers</p>
        
        {/* --- DYNAMIC GRID FROM GOOGLE SHEET --- */}
        {loading ? (
          <p className="text-center text-purple-600 font-semibold animate-pulse mb-12">Loading live reviews...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-2 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs sm:text-lg shadow-lg flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-sm sm:text-lg">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-purple-600 font-semibold">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-start mb-2 sm:mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs sm:text-base md:text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic font-light text-xs sm:text-base md:text-lg text-center sm:text-left">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        )}

        {/* --- ADD NEW FEEDBACK FORM (Aapki CSS Theme Se Match Hota Hua) --- */}
        <div className="max-w-xl mx-auto glass rounded-2xl shadow-xl p-6 sm:p-8 border border-white/40 bg-white/60 backdrop-blur-md">
          <h3 className="text-xl font-bold text-purple-900 mb-4 text-center">Share Your Feedback Live</h3>
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-purple-500" 
                placeholder="First & Last Name"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Role/Tag</label>
                <input 
                  type="text" 
                  value={formData.role}
                  onChange={e => setFormData({...formData, role: e.target.value})}
                  className="w-full p-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-purple-500" 
                  placeholder="e.g., Birthday Girl, Groom"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Stars</label>
                <select 
                  value={formData.rating}
                  onChange={e => setFormData({...formData, rating: Number(e.target.value)})}
                  className="w-full p-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-purple-500"
                >
                  <option value="5">5 Stars ⭐⭐⭐⭐⭐</option>
                  <option value="4">4 Stars ⭐⭐⭐⭐</option>
                  <option value="3">3 Stars ⭐⭐⭐</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Your Review</label>
              <textarea 
                required 
                rows={3}
                value={formData.text}
                onChange={e => setFormData({...formData, text: e.target.value})}
                className="w-full p-3 border border-gray-200 rounded-xl bg-white/70 focus:outline-purple-500 resize-none" 
                placeholder="How was your experience with.  The  DreamDecor?"
              />
            </div>

            <button 
              type="submit" 
              disabled={submitting}
              className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold p-3 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {submitting ? "Publishing..." : "Submit Review"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}