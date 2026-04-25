import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "+252612897075"; 
  const message = encodeURIComponent("Asc, aniga waa [Your Name].\nWebsite-kaaga ayaan arkay, runtii waa mid aad u qurux badan 👏\nWaxaan rabaa design la mid ah kan aad samaysay.\nFadlan iga caawi, thanks!");
  
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute right-full mr-4 bg-brand-black text-brand-white py-2 px-4 rounded-xl text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </div>
      <MessageCircle size={32} fill="white" />
    </motion.a>
  );
}
