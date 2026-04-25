import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const stars = Array.from({ length: 20 });
  const galleryImages = [
    'https://i.imgur.com/EzyQG0r.png',
    'https://i.imgur.com/gs2htZe.png',
    'https://i.imgur.com/Gv48NLV.png',
  ];

  return (
    <footer className="relative bg-bg-primary pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {stars.map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '120%', y: `${Math.random() * 100}%`, opacity: Math.random() }}
            animate={{ 
              x: '-20%',
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            style={{ shadow: '0 0 10px white' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl w-full mb-20 space-y-12">
          {/* Top Section: Brand & About */}
          <div className="space-y-6">
            <h2 className="font-display text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
              iscm2026<span className="text-brand-accent">.</span>
            </h2>
            <p className="text-brand-gray text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Elevating brands through precision design and futuristic storytelling. Let's create something extraordinary.
            </p>
          </div>

          {/* Social Links Centered */}
          <div className="flex flex-wrap justify-center gap-6">
            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
              <a 
                key={i}
                href="#" 
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all group"
              >
                <Icon size={20} className="text-white group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Featured Work Grid Centered */}
          <div className="space-y-8 pt-10">
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/20">Featured Work</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group aspect-video rounded-2xl overflow-hidden glass-card border border-white/5 bg-white/5"
                >
                  <img 
                    src={src} 
                    alt={`Gallery ${i}`} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink size={24} className="text-white transform scale-0 group-hover:scale-100 transition-transform" />
                  </div>
                </motion.div>
              ))}
              <div className="aspect-video rounded-2xl border-2 border-dashed border-white/5 flex items-center justify-center text-white/10 hover:border-white/20 hover:text-white/30 transition-all cursor-pointer">
                <span className="text-xs uppercase tracking-widest font-medium">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Quick Links Centered */}
          <nav className="pt-10">
            <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4">
              {['Projects', 'About', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm font-medium uppercase tracking-widest text-brand-gray hover:text-white transition-colors relative group">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Centered */}
          <div className="pt-6">
            <a 
              href="mailto:cabiirahmed399@gmail.com" 
              className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 hover:bg-brand-accent hover:border-brand-accent transition-all group"
            >
              <span className="text-white font-medium">Start a conversation</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail size={16} className="text-white" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar Centered */}
        <div className="w-full pt-10 border-t border-white/5 flex flex-col items-center gap-6">
          <p className="text-white/20 text-xs font-light tracking-widest uppercase">
            © {new Date().getFullYear()} iscm2026. Designed with precision and passion.
          </p>
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] text-white/10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
