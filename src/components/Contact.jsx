import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Phone, 
  Clock,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ data, onTriggerToast }) {
  const { personal } = data;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: 'Medium (< Rp 10 Juta)'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    onTriggerToast('Alamat email berhasil disalin ke clipboard!', 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onTriggerToast('Mohon lengkapi formulir pesan terlebih dahulu.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#14b8a6', '#06b6d4', '#6366f1', '#10b981']
      });

      onTriggerToast(`Terima kasih ${formState.name}! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.`, 'success');

      // Clear form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: 'Medium (< Rp 10 Juta)'
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Mari Berkolaborasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Saya</span>
          </h2>
          <p className="max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Punya ide proyek menarik, butuh konsultasi teknis, atau ingin mendiskusikan peluang kerja sama? Jangan ragu untuk menyapa!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Informasi Kontak
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                Saya selalu terbuka untuk berdiskusi seputar proyek web development, desain antarmuka, maupun tawaran kerja sama.
              </p>

              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase font-mono font-semibold text-slate-400">Email Resmi</p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                      {personal.email}
                    </p>
                    <button
                      onClick={handleCopyEmail}
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 hover:underline font-semibold"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Alamat Email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-mono font-semibold text-slate-400">WhatsApp / Chat</p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {personal.whatsappDisplay}
                    </p>
                    <a
                      href={`https://wa.me/${personal.whatsapp.replace('+', '')}?text=Halo%20Arsyandi,%20saya%20tertarik%20dengan%20portofolio%20Anda!`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                    >
                      <span>Kirim Pesan WhatsApp Langsung</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-mono font-semibold text-slate-400">Domisili</p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {personal.location} (Remote Friendly)
                    </p>
                    <span className="text-xs text-slate-400">Siap bekerja sama secara WFH / Hybrid</span>
                  </div>
                </div>

              </div>

              {/* Working Hours Info */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Waktu respon rata-rata: Kurang dari 12 jam (Senin - Sabtu)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Kirimkan Pesan Anda
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                Isi formulir di bawah ini dan saya akan merespon sesegera mungkin.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Pratama"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="budi@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Subjek Proyek
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Pembuatan Website Perusahaan"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white text-sm"
                    />
                  </div>

                  {/* Estimated Scope / Budget */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Estimasi Budget
                    </label>
                    <select
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white text-sm"
                    >
                      <option>Starter (&lt; Rp 5 Juta)</option>
                      <option>Medium (Rp 5 - 15 Juta)</option>
                      <option>Enterprise (&gt; Rp 15 Juta)</option>
                      <option>Konsultasi / Lainnya</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Detail Pesan / Kebutuhan Proyek *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Ceritakan gambaran website, target waktu, atau fitur yang Anda butuhkan..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white text-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Mengirimkan Pesan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

