import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const stars = Array.from({ length: 20 });
  const galleryImages = [
    'https://i.imgur.com/gs2htZe.png',
    'https://i.imgur.com/EzyQG0r.png',
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Side: Brand & Links */}
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-4xl font-black italic uppercase tracking-tighter mb-4">
                Musti<span className="text-brand-accent">.</span>
              </h2>
              <p className="text-brand-gray max-w-sm text-lg leading-relaxed">
                Elevating brands through precision design and futuristic storytelling. Let's create something extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Quick Links</h4>
                <ul className="space-y-2">
                  {['Projects', 'About', 'Experience', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`} className="text-brand-gray hover:text-brand-accent transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40">Connect</h4>
                <div className="flex gap-4">
                  {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all group"
                    >
                      <Icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image Gallery */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Featured Work</h4>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="relative group aspect-video rounded-2xl overflow-hidden glass-card border border-white/5 bg-white/5"
                >
                  <img 
                    src={src} 
                    alt={`Gallery ${i}`} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink size={20} className="text-white transform scale-0 group-hover:scale-100 transition-transform" />
                  </div>
                </motion.div>
              ))}
              {/* Empty Placeholder for future images */}
              <div className="aspect-video rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center text-white/20 hover:border-white/20 transition-colors">
                <span className="text-xs uppercase tracking-tighter">Add More +</span>
              </div>
            </div>
            
            <a 
              href="mailto:cabiirahmed399@gmail.com" 
              className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div>
                <p className="text-white font-medium">Ready to start a project?</p>
                <p className="text-brand-gray text-sm">cabiirahmed399@gmail.com</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center group-hover:rotate-45 transition-transform">
                <Mail size={20} className="text-white" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-white/30 text-sm font-light">
            © {new Date().getFullYear()} Musti. All rights reserved. Built with precision.
          </p>
          <div className="flex gap-8 text-xs uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
