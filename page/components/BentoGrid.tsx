import React from "react";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`grid grid-cols-1 gap-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  layout = "vertical",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  layout?: "vertical" | "horizontal" | "horizontal-reverse";
}) => {
  const isHorizontal = layout.includes("horizontal");
  const isReverse = layout === "horizontal-reverse";
  const hasContent = !!(title || description || icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        relative overflow-hidden rounded-[40px] 
        bg-[#121212] border border-white/5 
        group/bento hover:border-white/10 hover:shadow-2xl hover:shadow-debian-red/5
        transition-all duration-500
        ${className}
        flex flex-col ${isHorizontal ? 'lg:grid lg:grid-cols-2' : ''}
      `}
    >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

        {/* Header / Visual Section */}
        <div className={`
             relative w-full h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center overflow-hidden
             ${isHorizontal ? (isReverse ? 'lg:order-2' : 'lg:order-1') : ''}
             bg-gradient-to-br from-[#0f0f0f] to-[#050505]
             ${!hasContent ? 'flex-1 min-h-full' : ''}
        `}>
             <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
             <div className="relative z-10 w-full h-full flex items-center justify-center p-8 group-hover/bento:scale-105 transition-transform duration-700 ease-out">
                {header}
             </div>
        </div>

        {/* Content Section */}
        {hasContent && (
          <div className={`
              p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20
              ${isHorizontal ? (isReverse ? 'lg:order-1' : 'lg:order-2') : ''}
          `}>
               {icon && (
                 <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white shadow-inner backdrop-blur-sm">
                    {icon}
                 </div>
               )}
               
               <div className="font-bold text-3xl md:text-4xl text-white mb-6 tracking-tight leading-tight">
                  {title}
               </div>
               
               <div className="font-medium text-lg md:text-xl text-neutral-400 leading-relaxed max-w-lg">
                  {description}
               </div>
          </div>
        )}
    </motion.div>
  );
};
