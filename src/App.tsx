import { useState, useRef, useEffect } from 'react';
import { motion, LayoutGroup, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard, { ProjectModal } from './components/ProjectGrid';
import RequestForm from './components/RequestForm';
import WhatsAppButton from './components/WhatsAppButton';
import StatCounter from './components/StatCounter';
import Footer from './components/Footer';
import { projects } from './data';
import { Project } from './types';
import { Mail, Github, Instagram, Twitter, ExternalLink, Sun, Moon } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLight, setIsLight] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);
  
  // Parallax transforms for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.4]);

  return (
    <div ref={containerRef} className="min-h-screen bg-bg-primary text-text-primary selection:bg-brand-accent selection:text-white relative overflow-x-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="fixed top-20 right-[-10%] w-[600px] h-[600px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none z-0"
      />
      <motion.div 
        style={{ y: y2 }}
        className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none z-0"
      />

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <Navbar isLight={isLight} setIsLight={setIsLight} />
      </div>
      
      <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto min-h-screen relative z-10">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex w-80 h-screen sticky top-0 flex-col justify-between p-8 border-r border-[var(--color-border-subtle)] bg-[var(--color-bg-primary)]/50 backdrop-blur-sm shadow-2xl">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 bg-brand-elevated rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] shadow-lg cursor-pointer"
                >
                  <img 
                    src="https://i.imgur.com/gZq1slb.png" 
                    alt="Musti Graphics Profile" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    {[
                      'https://i.imgur.com/EzyQG0r.png',
                      'https://i.imgur.com/gs2htZe.png',
                      'https://i.imgur.com/Gv48NLV.png',
                    ].map((src, i) => (
                      <motion.div 
                        key={i} 
                        whileHover={{ scale: 1.2, opacity: 1, filter: 'grayscale(0)' }}
                        className="w-7 h-7 rounded-md overflow-hidden border border-white/10 grayscale opacity-40 transition-all cursor-crosshair"
                      >
                        <img src={src} className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-[8px] font-mono text-brand-accent uppercase tracking-widest text-right animate-pulse">Live Feed</span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black leading-none tracking-tighter uppercase font-display">
                  MUSTI<br />GRAPHICS
                </h1>
                <p className="text-xl font-signature text-brand-accent mt-2">Master Graphic Designer</p>
              </div>
            </div>

            <nav className="flex flex-col gap-3">
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
                  className="text-sm font-medium hover:text-brand-accent transition-colors flex items-center gap-3 transition-all group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent scale-0 group-hover:scale-100 transition-transform"></span> 
                  {item.name.toUpperCase()}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-[var(--color-border-subtle)]">
              <button 
                onClick={() => setIsLight(!isLight)}
                className="flex items-center gap-3 text-sm font-medium text-brand-accent hover:opacity-80 transition-opacity"
              >
                {isLight ? (
                  <>
                    <Moon size={18} />
                    <span>DARK MODE</span>
                  </>
                ) : (
                  <>
                    <Sun size={18} />
                    <span>LIGHT MODE</span>
                  </>
                )}
              </button>
            </div>

            <a 
              href={`https://wa.me/+252612897075?text=${encodeURIComponent("Asc, aniga waa [Your Name].\nWebsite-kaaga ayaan arkay, runtii waa mid aad u qurux badan 👏\nWaxaan rabaa design la mid ah kan aad samaysay.\nFadlan iga caawi, thanks!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-brand-white text-brand-black font-black uppercase text-[10px] tracking-widest hover:bg-brand-accent hover:text-white transition-colors text-center block"
            >
              Request Design
            </a>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-brand-elevated border border-[var(--color-border-subtle)] rounded-xl">
              <p className="text-[9px] uppercase tracking-widest text-brand-gray/40 mb-1 font-mono">Location</p>
              <p className="text-xs text-brand-white font-medium mb-4">Mogadishu, Somalia</p>
              
              <p className="text-[9px] uppercase tracking-widest text-brand-gray/40 mb-1 font-mono">Status</p>
              <p className="text-xs text-green-400 font-medium mb-4">Available for Freelance</p>


              <p className="text-[9px] uppercase tracking-widest text-white/40 mb-1 font-mono">Agency</p>
              <p className="text-xs text-brand-accent font-black">HAGE MEDIA</p>
            </div>
            
            <div className="flex gap-3">
              {[Instagram, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-h-screen flex flex-col">
          <div className="p-6 md:p-12 space-y-12">
            {/* Hero Section */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="pt-10 md:pt-20"
            >
              <Hero />
            </motion.div>

            {/* Stats Bar */}
            <motion.section 
              id="experience"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 bg-brand-elevated/40 backdrop-blur-md rounded-[2rem] border border-[var(--color-border-subtle)] shadow-xl"
            >
              {[
                { label: 'Views', value: '420K' },
                { label: 'Likes', value: '12K' },
                { label: 'Clients', value: '64' },
                { label: 'Featured', value: '14' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-brand-gray/40 mb-2">{stat.label}</span>
                  <span className="text-2xl md:text-3xl font-display font-black text-brand-white">
                    <StatCounter value={stat.value} />
                  </span>
                </div>
              ))}
            </motion.section>

            <div className="h-24 md:h-48" /> {/* Spacer */}

            {/* Transition Title */}
            <motion.div
              id="iscm2026"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:text-left space-y-12 max-w-6xl"
            >
              <div className="space-y-4">
                <h3 className="text-4xl md:text-8xl font-display font-black tracking-tighter uppercase italic text-brand-accent">
                  iscm2026<span className="text-white/90">.</span>
                </h3>
                <p className="text-brand-gray text-lg md:text-2xl leading-relaxed max-w-2xl">
                  Elevating brands through precision design and futuristic storytelling. Let's create something extraordinary.
                </p>
              </div>

              {/* Added Gallery from Footer */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {[
                  'https://i.imgur.com/EzyQG0r.png',
                  'https://i.imgur.com/gs2htZe.png',
                  'https://i.imgur.com/Gv48NLV.png',
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -15, scale: 1.02 }}
                    className="relative group aspect-[4/5] bg-brand-elevated rounded-2xl overflow-hidden border border-white/10"
                  >
                    <img 
                      src={src} 
                      alt={`Gallery ${i}`} 
                      className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                      <span className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-1">Identity Design</span>
                      <span className="text-white font-bold uppercase tracking-tighter">iscm2026 v.0{i+1}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Portfolio Grid Section */}
            <motion.section 
              id="works"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <span className="text-2xl font-signature text-brand-accent block mb-2">Curated work</span>
                  <h2 className="font-display text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-brand-white">
                    WORKS
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-brand-gray/40 mb-3 uppercase tracking-[0.4em]">Scroll to explore gallery</span>
              </div>

              <LayoutGroup>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      onOpen={setSelectedProject} 
                    />
                  ))}
                </div>
              </LayoutGroup>
            </motion.section>

            <div className="h-24 md:h-48" /> {/* Spacer */}

            {/* About Section */}
            <motion.section 
              id="about" 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1 }}
              className="py-12 border-t border-[var(--color-border-subtle)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="relative aspect-[4/5] group overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5">
                  <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                  <img 
                    src="https://i.imgur.com/gZq1slb.png" 
                    alt="Musti Graphics Portrait" 
                    className="w-full h-full object-cover transition-all duration-[2s] scale-110 group-hover:scale-100"
                  />
                  <div className="absolute bottom-10 left-10 z-20 px-6 py-3 bg-brand-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                    <span className="text-3xl font-signature text-brand-accent">Design Architect</span>
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4"
                    >
                      <div className="h-px w-12 bg-brand-accent" />
                      <span className="text-2xl font-signature text-brand-accent">Biography</span>
                    </motion.div>
                    <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase italic leading-tight text-brand-white">
                      THE VISION <br />
                      <span className="text-brand-gray/20">BEHIND ART</span>
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <p className="text-2xl text-brand-gray/90 leading-relaxed font-light italic">
                      "I am a professional <span className="text-brand-white font-bold not-italic underline decoration-brand-accent/50 underline-offset-8">Graphic Designer</span> skilled in creating modern, impactful, and visually clear designs."
                    </p>
                    <p className="text-lg text-brand-gray/60 leading-relaxed max-w-lg">
                      Specializing in Brand Identity, Logo Creation, and Poster Art with full mastery of Adobe Creative Cloud. Delivering high-quality work that effectively communicates client goals.
                    </p>
                  </div>

                  <div className="pt-8 flex flex-wrap gap-6">
                    <a 
                      href="https://wa.me/+252612897075" 
                      className="px-8 py-4 bg-brand-white text-brand-black rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-accent hover:text-white transition-all shadow-xl"
                    >
                      WhatsApp inquiry
                    </a>
                    <a 
                      href="mailto:cabiirahmed399@gmail.com" 
                      className="px-8 py-4 border border-[var(--color-border-subtle)] bg-brand-elevated/40 backdrop-blur-md rounded-full font-bold text-xs tracking-widest hover:border-brand-accent transition-all uppercase"
                    >
                      Email Me
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>

            <div className="h-24 md:h-48" /> {/* Spacer */}

            {/* Request Form Section */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1 }}
            >
              <RequestForm />
            </motion.div>

            <Footer />
          </div>
        </main>
      </div>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Floating Action */}
      <WhatsAppButton />
    </div>
  );
}
