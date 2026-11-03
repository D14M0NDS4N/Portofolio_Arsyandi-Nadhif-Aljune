import React from 'react';
import { Star, MessageSquareQuote, Quote } from 'lucide-react';

export default function Testimonials({ data }) {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Ulasan & Testimoni</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Apa Kata <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Klien & Rekan</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Kepercayaan dan kepuasan klien adalah tolak ukur keberhasilan utama saya dalam berkarya.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-teal-500/20 absolute top-6 right-6 pointer-events-none group-hover:text-teal-500/40 transition-colors" />

              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-500/30"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

