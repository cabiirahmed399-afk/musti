import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isLight: boolean;
  setIsLight: (val: boolean) => void;
}

const previewImages = [
  'https://i.imgur.com/EzyQG0r.png',
  'https://i.imgur.com/gs2htZe.png',
  'https://i.imgur.com/Gv48NLV.png',
];

export default function Navbar({ isLight, setIsLight }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-text-primary)]/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6"
        >
          <div className="font-display font-black text-xl tracking-tighter text-[var(--color-text-primary)] uppercase">
            MUSTI<span className="text-brand-accent">.</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 border-l border-white/10 pl-6 h-8">
            {previewImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 relative group bg-brand-elevated cursor-pointer"
                onMouseEnter={() => setShowPreview(true)}
                onMouseLeave={() => setShowPreview(false)}
              >
                <img src={src} alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
            <span className="text-[10px] font-mono text-brand-gray/40 uppercase tracking-widest ml-1">Live Feed</span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 relative">
          <AnimatePresence>
            {showPreview && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-12 left-0 w-80 p-4 bg-brand-elevated border border-white/10 rounded-2xl shadow-2xl z-[60] backdrop-blur-xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">ISCM2026 Assets</span>
                  <ExternalLink size={12} className="text-white/40" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {previewImages.map((src, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square rounded-lg overflow-hidden border border-white/5"
                    >
                      <img src={src} alt="Preview" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-white/40 leading-relaxed">
                  Real-time design iterations for the ISCM2026 visual identity project.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {[
            { name: 'iscm2026', id: 'iscm2026' },
            { name: 'Works', id: 'works' },
            { name: 'Experience', id: 'experience' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <motion.a
              key={item.name}
              href={`#${item.id}`}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-[var(--color-text-primary)] hover:text-brand-gray transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          
          <button 
            onClick={() => setIsLight(!isLight)}
            className="p-2 rounded-full hover:bg-[var(--color-text-primary)]/10 transition-colors text-[var(--color-brand-accent)]"
            title="Toggle theme"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>

        <a 
          href="mailto:cabiirahmed399@gmail.com"
          className="px-5 py-2 bg-brand-accent text-white text-sm font-medium rounded-full hover:scale-105 transition-transform flex items-center gap-2"
        >
          Email me
        </a>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <button 
            onClick={() => setIsLight(!isLight)}
            className="p-2 rounded-full hover:bg-[var(--color-text-primary)]/10 transition-colors text-[var(--color-brand-accent)]"
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-[var(--color-text-primary)]" /> : <Menu size={24} className="text-[var(--color-text-primary)]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[var(--color-bg-primary)] border-b border-[var(--color-text-primary)]/5 px-6 py-8 flex flex-col gap-6"
        >
          {[
            { name: 'iscm2026', id: 'iscm2026' },
            { name: 'Works', id: 'works' },
            { name: 'Experience', id: 'experience' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} 
              className="text-xl font-display font-medium text-[var(--color-text-primary)]" 
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
