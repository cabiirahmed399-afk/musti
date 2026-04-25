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
            className="font-display text-[clamp(4rem,10vw,10rem)] font-black leading-[0.8] tracking-tighter uppercase italic"
          >
            Creative <span className="text-white/40 group-hover:text-[#7851A9] transition-colors duration-700 cursor-default">Minds</span>. <br />
            <span className="text-white/10 group-hover:text-brand-accent transition-colors duration-1000">Stunning</span> <br />
            <span className="text-white/40 group-hover:text-[#7851A9] transition-colors duration-700 cursor-default">Designs</span>
          </motion.h1>
          
          <div className="absolute top-0 right-0 p-8 hidden lg:block opacity-10 pointer-events-none select-none">
            <span className="font-display text-[20rem] font-black leading-none uppercase">Musti</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:absolute lg:-right-12 xl:-right-24 lg:top-1/2 lg:-translate-y-1/2 mt-12 lg:mt-0 flex justify-center lg:block pointer-events-none z-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-accent/20 blur-[60px] md:blur-[100px] rounded-full group-hover:bg-brand-accent/30 transition-all duration-700 pulse-glow" />
              <div className="relative z-10 w-[280px] md:w-[350px] xl:w-[450px] aspect-square overflow-hidden">
                <img 
                  src="https://i.imgur.com/geUowLP.png" 
                  alt="Creative Showcase" 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xl"
        >
          <p className="text-xl md:text-2xl font-light text-brand-gray leading-relaxed tracking-tight">
            I am a professional <span className="text-brand-accent font-bold">Graphic Designer</span> specializing in Brand Identity, Logo Creation, and Poster Art.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10"
        >
          <a 
            href="mailto:cabiirahmed399@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-accent text-white font-medium rounded-full hover:scale-105 transition-all text-lg shadow-xl shadow-brand-accent/20 group"
          >
            Email me
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
