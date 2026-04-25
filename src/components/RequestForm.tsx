import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function RequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="bg-brand-elevated text-brand-white rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 overflow-hidden relative border border-[var(--color-border-subtle)] shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="lg:w-1/2 relative z-10 flex flex-col justify-center">
          <div className="mb-0">
            <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-4 uppercase italic leading-none text-brand-white">
              MUSTI <br />
              <span className="text-brand-accent">GRAPHIC'S</span>
            </h2>
            <p className="text-3xl md:text-4xl lg:text-[2.2rem] font-signature text-brand-accent mb-12 -rotate-1 origin-left">Senior Graphic Designer</p>
          </div>
          
          <p className="text-base text-brand-gray leading-relaxed mb-12 max-w-sm">
            Describe your vision. Whether you need a full brand identity or a specific design piece, I'll transform it into a striking visual reality.
          </p>
          
          <div className="space-y-8">
            <div className="group">
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gray/50 mb-2">Email</span>
              <a href="mailto:mustafabdi1453@gmail.com" className="text-2xl font-display font-medium text-brand-white hover:text-brand-accent transition-colors flex items-center gap-3">
                mustafabdi1453@gmail.com
                <div className="h-0.5 w-0 group-hover:w-8 bg-brand-accent transition-all duration-300" />
              </a>
            </div>
            <div className="group">
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gray/50 mb-2">Direct</span>
              <a href="tel:+252612897075" className="text-2xl font-display font-medium text-brand-white hover:text-brand-accent transition-colors flex items-center gap-3">
                +252 612 897 075
                <div className="h-0.5 w-0 group-hover:w-8 bg-brand-accent transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative z-10">
          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10"
            >
              <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mb-8 border border-brand-accent/30">
                <CheckCircle2 size={40} className="text-brand-accent" />
              </div>
              <h3 className="text-3xl font-display font-black uppercase mb-4 text-brand-white">Brief Received</h3>
              <p className="text-brand-gray text-base max-w-[280px]">Your vision is safe with me. Expect a response within 24 hours.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-12 px-8 py-3 rounded-full border border-brand-accent text-brand-accent text-xs font-bold uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all"
              >
                Send Another Brief
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-gray/60 px-1">Identity</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name"
                    className="w-full bg-brand-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:bg-brand-accent/5 focus:border-brand-accent/50 focus:ring-0 outline-none transition-all placeholder:text-brand-gray/30 text-sm text-brand-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-gray/60 px-1">Correspondence</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-brand-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:bg-brand-accent/5 focus:border-brand-accent/50 focus:ring-0 outline-none transition-all placeholder:text-brand-gray/30 text-sm text-brand-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-gray/60 px-1">Service Tier</label>
                <div className="relative">
                  <select className="w-full bg-brand-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:bg-brand-accent/5 focus:border-brand-accent/50 focus:ring-0 outline-none transition-all text-brand-white/80 text-sm appearance-none cursor-pointer">
                    <option className="bg-brand-black">Branding</option>
                    <option className="bg-brand-black">Logo Design</option>
                    <option className="bg-brand-black">Poster Design</option>
                    <option className="bg-brand-black">Editorial Design</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-brand-gray/60 px-1">Brief Details</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="The vision, the goals, the constraints..."
                  className="w-full bg-brand-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:bg-brand-accent/5 focus:border-brand-accent/50 focus:ring-0 outline-none transition-all resize-none placeholder:text-brand-gray/30 text-sm text-brand-white"
                />
              </div>
              
              <button 
                disabled={isLoading}
                type="submit" 
                className="group relative w-full h-[72px] overflow-hidden rounded-2xl bg-brand-accent transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-3 font-black uppercase text-[12px] tracking-[0.3em] text-white">
                  {isLoading ? 'TRANSFORMING...' : (
                    <>
                      <span>Dispatch Brief</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
