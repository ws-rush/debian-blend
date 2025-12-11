import React from 'react';
import { motion } from 'framer-motion';

export const Laptop: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-16/10 mx-auto perspective-[2000px]">
      {/* Laptop Lid - Space Gray Aluminum */}
      <motion.div 
        className="absolute inset-x-[12%] top-0 bottom-[10%] bg-[#2b2b2d] rounded-t-xl md:rounded-t-2xl shadow-2xl flex flex-col overflow-hidden border border-[#3a3a3c]"
        initial={{ rotateX: -30, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "bottom" }}
      >
        {/* Bezel */}
        <div className="absolute inset-0 border-[6px] md:border-8 border-black rounded-t-lg z-20 pointer-events-none"></div>
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-3 bg-black z-30 rounded-b-lg flex justify-center items-center">
             <div className="w-1 h-1 bg-[#1a1a1a] rounded-full ring-1 ring-[#333]"></div>
        </div>

        {/* Screen Content */}
        <div className="flex-1 bg-black relative overflow-hidden group">
          {/* Wallpaper */}
          <div className="absolute inset-0 bg-black">
             <div className="absolute inset-0 bg-linear-to-tr from-[#2c0b1e] via-black to-[#1a050f] opacity-80"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-debian-red/20 blur-[80px] rounded-full mix-blend-screen animate-pulse-slow"></div>
             
             <div className="absolute inset-0 flex items-center justify-center">
                 <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 opacity-90 drop-shadow-[0_0_30px_rgba(215,10,83,0.4)]">
                     <defs>
                         <linearGradient id="metal" x1="0%" y1="0%" x2="100%" y2="100%">
                             <stop offset="0%" stopColor="#ff4f8b" />
                             <stop offset="100%" stopColor="#d70a53" />
                         </linearGradient>
                     </defs>
                     <path d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45 45-20.147 45-45S74.853 5 50 5zm0 81c-19.882 0-36-16.118-36-36s16.118-36 36-36 36 16.118 36 36-16.118 36-36 36zm8.5-49.5c-3.038 0-5.5 2.462-5.5 5.5s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5-2.462-5.5-5.5-5.5z" fill="url(#metal)"/>
                     <path d="M50 23c-14.912 0-27 12.088-27 27s12.088 27 27 27 27-12.088 27-27h-4c0 12.706-10.294 23-23 23s-23-10.294-23-23 10.294-23 23-23v-4z" fill="url(#metal)" opacity="0.8"/>
                 </svg>
             </div>
          </div>

          {/* Minimal Terminal Window */}
          <motion.div 
            className="absolute top-10 right-10 w-48 md:w-60 bg-[#1e1e1e]/90 backdrop-blur-xl rounded-lg shadow-xl border border-white/10 overflow-hidden hidden md:block"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
             <div className="h-5 flex items-center px-2 border-b border-white/5 space-x-1 space-x-reverse">
                 <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#febc2e]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#28c840]"></div>
                 </div>
             </div>
             <div className="p-3 font-mono text-[8px] text-gray-300 leading-relaxed">
                 <p className="text-green-400">$ uname -r</p>
                 <p className="mb-1">6.1.0-18-amd64</p>
                 <p className="text-green-400">$ cat /etc/debian_version</p>
                 <p>trixie/sid</p>
             </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Laptop Base */}
      <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-[#3a3a3c] rounded-b-xl md:rounded-b-2xl shadow-2xl z-20">
        <div className="absolute top-0 inset-x-0 h-px bg-apple-gray"></div>
        <div className="w-20 md:w-32 h-1 bg-apple-gray mx-auto mt-0.5 rounded-b-md"></div>
      </div>
    </div>
  );
};
