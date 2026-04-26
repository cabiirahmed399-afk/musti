import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isLight: boolean;
  setIsLight: (val: boolean) => void;
}

export default function Navbar({ isLight, setIsLight }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

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
        </motion.div>

        <div className="hidden md:flex items-center gap-8 relative">
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
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-brand-accent transition-colors"
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
              className="text-xl font-display font-medium text-[var(--color-text-secondary)]" 
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
