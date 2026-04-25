import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { Project } from '../types';
import { useState } from 'react';

export interface ProjectCardProps {
  key?: string | number;
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      layoutId={`card-${project.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpen(project)}
      whileHover={{ 
        y: -15,
        scale: 1.02,
        boxShadow: "0 40px 65px -15px rgba(120, 81, 169, 0.25)"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative aspect-[4/5] bg-brand-elevated rounded-2xl border border-[var(--color-border-subtle)] overflow-hidden cursor-pointer transition-all duration-500"
    >
      <motion.img 
        layoutId={`image-${project.id}`}
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      <div className="absolute top-0 right-0 p-6 overflow-hidden">
        <motion.span 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-signature text-brand-accent/30 transition-all duration-500 group-hover:text-brand-accent group-hover:scale-110 block"
        >
          {project.id}
        </motion.span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 space-y-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-brand-accent/20 backdrop-blur-md border border-brand-accent/30 rounded-full text-[10px] font-mono text-brand-accent uppercase tracking-[0.2em] leading-none">
            {project.category}
          </span>
          <span className="text-[10px] font-mono text-brand-gray/50 uppercase tracking-widest">{project.year}</span>
        </div>
        <h3 className="text-2xl font-display font-black tracking-tighter uppercase italic transition-colors group-hover:text-brand-white text-brand-white/90">
          {project.title}
        </h3>
      </div>
      
      <div className="absolute inset-0 border-2 border-brand-accent/0 group-hover:border-brand-accent/20 transition-all duration-500 rounded-2xl pointer-events-none" />
    </motion.div>
  );
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        <motion.div 
          className="absolute inset-0 bg-brand-black/95 backdrop-blur-2xl"
          onClick={onClose}
        />
        
        <motion.div 
          layoutId={`card-${project.id}`}
          className="relative w-full max-w-6xl max-h-[90vh] bg-brand-elevated rounded-2xl overflow-y-auto flex flex-col shadow-2xl border border-[var(--color-border-subtle)] no-scrollbar"
        >
          <button 
            onClick={onClose}
            className="fixed md:absolute top-4 right-4 md:top-6 md:right-6 z-[110] bg-brand-white text-brand-black p-2 rounded-full hover:scale-110 transition-transform"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row min-h-full">
            <div className="w-full md:w-3/5 sticky top-0 md:h-[90vh]">
              {project.videoUrl ? (
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>
              ) : (
                <motion.img 
                  layoutId={`image-${project.id}`}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col bg-brand-black/50">
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 bg-brand-elevated border border-[var(--color-border-subtle)] rounded text-brand-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter uppercase italic leading-[0.8]">
                    {project.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gray/30 border-b border-[var(--color-border-subtle)] pb-2">Narrative</h4>
                  <p className="text-brand-gray/80 text-sm leading-relaxed font-light italic text-brand-white">
                    "{project.description}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-[var(--color-border-subtle)]">
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-gray/30 mb-2">Project Client</span>
                    <span className="font-bold text-sm tracking-tight text-brand-white">{project.client}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-gray/30 mb-2">Completion Year</span>
                    <span className="font-medium text-sm font-mono tracking-widest italic text-brand-white">{project.year}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gray/30 border-b border-[var(--color-border-subtle)] pb-2">Technical Toolkit</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-bold px-3 py-1 bg-brand-elevated border border-[var(--color-border-subtle)] rounded-full text-brand-white/70">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {project.gallery && project.gallery.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gray/30 border-b border-[var(--color-border-subtle)] pb-2">Visual Gallery</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {project.gallery.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-[var(--color-border-subtle)] group">
                          <img 
                            src={img} 
                            alt={`Gallery ${idx}`} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button className="w-full py-5 bg-brand-accent text-brand-black rounded-xl font-black uppercase text-[10px] tracking-widest hover:brightness-110 active:scale-[0.98] transition-all mt-8">
                  Initiate Project Discussion
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
