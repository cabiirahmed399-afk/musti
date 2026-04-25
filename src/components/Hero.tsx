import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="py-24 overflow-hidden relative group">
      <div className="flex flex-col gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-12 bg-brand-accent opacity-50" />
          <span className="text-3xl font-signature text-brand-accent">
            Architect of Visual Identities
          </span>
        </motion.div>
        
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(4rem,15vw,10rem)] font-black leading-[0.8] tracking-tighter uppercase italic"
          >
            CRAFTING <br />
            <span className="text-white/10 group-hover:text-brand-accent transition-colors duration-1000">KINETIC</span> <br />
            SYSTEMS
          </motion.h1>
          
          <div className="absolute top-0 right-0 p-8 hidden lg:block opacity-10">
            <span className="font-display text-[20rem] font-black leading-none select-none uppercase">Musti</span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xl"
        >
          <p className="text-xl md:text-2xl font-light text-brand-gray leading-relaxed tracking-tight">
            I am a professional <span className="text-brand-accent font-bold">Graphic Designer</span> specializing in creating modern, impactful, and visually clear designs for the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
