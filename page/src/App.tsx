import React from "react";
import { BentoGrid, BentoGridItem } from "./components/BentoGrid.tsx";
import { Laptop } from "./components/ui/Laptop.tsx";
import {
   Cpu,
   Box,
   Layers,
   ArrowDownCircle,
   Download,
   Terminal,
   RefreshCw,
} from "lucide-react";

const App: React.FC = () => {
   return (
      <div className="min-h-screen bg-black text-white pb-20 selection:bg-debian-red selection:text-white font-sans">

         <main className="pt-12 px-4 md:px-8">
            <header className="max-w-7xl mx-auto mb-16 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-debian-red shadow-[0_0_15px_rgba(215,10,83,0.6)]"></div>
                  <span className="text-xl font-bold tracking-tight">Debian Blend</span>
               </div>
               <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors backdrop-blur-md border border-white/5">
                  الإصدار v49.0
               </button>
            </header>

            <BentoGrid>
               {/* Main Hero Card */}
               <BentoGridItem
                  layout="vertical"
                  title={
                     <span className="block text-center md:text-right">
                        الاستقرار يلتقي <span className="text-transparent bg-clip-text bg-linear-to-l from-debian-red to-orange-500">بالحداثة.</span>
                     </span>
                  }
                  description={
                     <span className="block text-center md:text-right mx-auto md:mx-0">
                        تجربة ديبيان المعاد تصورها. نواة صلبة لتوافق عتاد مثالي، وبرامج متجددة لإنتاجية بلا حدود.
                     </span>
                  }
                  header={
                     <div className="w-full max-w-4xl transform translate-y-10 md:translate-y-16 group-hover/bento:translate-y-12 transition-transform duration-500">
                        <Laptop />
                     </div>
                  }
                  className="min-h-[600px] border-debian-red/20 bg-linear-to-b from-[#15050a] to-black"
                  icon={<Cpu className="h-8 w-8 text-debian-red" />}
               />

               {/* Flatpak Native - Horizontal Layout */}
               <BentoGridItem
                  layout="horizontal"
                  title="Flatpak Native"
                  description="متجر تطبيقات متكامل ومعزول عن النظام. احصل على أحدث نسخ Telegram, Discord, VS Code وغيرها دون المساس باستقرار النظام الأساسي."
                  header={
                     <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
                        <div className="relative z-10 grid grid-cols-2 gap-4 rotate-12 opacity-80">
                           <div className="w-24 h-24 bg-[#2d2d2d] rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center">
                              <Box className="w-10 h-10 text-blue-400" />
                           </div>
                           <div className="w-24 h-24 bg-[#2d2d2d] rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center translate-y-8">
                              <Terminal className="w-10 h-10 text-gray-400" />
                           </div>
                           <div className="w-24 h-24 bg-[#2d2d2d] rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center -translate-y-4">
                              <div className="w-10 h-10 rounded-full bg-green-500/20"></div>
                           </div>
                           <div className="w-24 h-24 bg-[#2d2d2d] rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center translate-y-4">
                              <div className="w-10 h-10 rounded-full bg-orange-500/20"></div>
                           </div>
                        </div>
                     </div>
                  }
                  icon={<Box className="h-6 w-6 text-blue-400" />}
               />

               {/* Distrobox - Horizontal Reverse Layout */}
               <BentoGridItem
                  layout="horizontal-reverse"
                  title="قوة Distrobox"
                  description="لماذا تختار؟ شغل Arch Linux، Fedora، و Ubuntu داخل طرفيتك. بيئات تطوير معزولة تعمل جنباً إلى جنب مع نظامك المستقر."
                  header={
                     <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full"></div>
                        {/* Abstract visualization of containers */}
                        <div className="flex flex-col gap-2 relative z-10">
                           <div className="w-64 h-16 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-xl flex items-center px-4 gap-4 transform -translate-x-8 group-hover/bento:translate-x-0 transition-transform duration-500">
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                              <span className="font-mono text-sm text-gray-400">Arch Linux Container</span>
                           </div>
                           <div className="w-64 h-16 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-xl flex items-center px-4 gap-4 transform translate-x-8 group-hover/bento:translate-x-0 transition-transform duration-500 delay-75">
                              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                              <span className="font-mono text-sm text-gray-400">Fedora Workstation</span>
                           </div>
                           <div className="w-64 h-16 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-xl flex items-center px-4 gap-4 transform -translate-x-4 group-hover/bento:translate-x-0 transition-transform duration-500 delay-150">
                              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                              <span className="font-mono text-sm text-gray-400">Ubuntu 24.04 LTS</span>
                           </div>
                        </div>
                     </div>
                  }
                  icon={<Layers className="h-6 w-6 text-orange-400" />}
               />

               {/* Gnome Sync - Horizontal Layout */}
               <BentoGridItem
                  layout="horizontal"
                  title="تجربة جنوم"
                  description="إصدارات متزامنة مع سطح المكتب Gnome. مع كل إصدار جديد للواجهة، نطلق إصداراً جديداً للنظام. تناغم مثالي."
                  header={
                     <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full"></div>

                        {/* Timeline visualization */}
                        <div className="relative z-10 flex items-center gap-6 md:gap-8">
                           {/* Previous Version */}
                           <div className="hidden md:flex flex-col items-center opacity-30 scale-75 blur-[1px]">
                              <div className="w-16 h-16 rounded-2xl bg-[#2d2d2d] border border-white/10 flex items-center justify-center">
                                 <span className="font-bold text-gray-500">46</span>
                              </div>
                           </div>

                           {/* Arrow */}
                           <div className="hidden md:block h-0.5 w-12 bg-linear-to-r from-gray-700 to-purple-500/50"></div>

                           {/* Current Version */}
                           <div className="flex flex-col items-center transform scale-110">
                              <div className="relative">
                                 <div className="absolute -inset-1 bg-linear-to-br from-purple-500 to-blue-500 rounded-2xl blur-sm opacity-40 animate-pulse"></div>
                                 <div className="relative w-24 h-24 rounded-2xl bg-[#1a1a1a] border border-purple-500/30 flex items-center justify-center shadow-2xl">
                                    <span className="font-bold text-3xl text-white">49</span>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center border-4 border-[#1a1a1a]">
                                       <RefreshCw className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '3s' }} />
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-4 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                                 Current Stable
                              </div>
                           </div>

                           {/* Arrow */}
                           <div className="hidden md:block h-0.5 w-12 bg-linear-to-l from-gray-700 to-purple-500/50"></div>

                           {/* Next Version */}
                           <div className="hidden md:flex flex-col items-center opacity-30 scale-75 blur-[1px]">
                              <div className="w-16 h-16 rounded-2xl bg-[#2d2d2d] border border-white/10 flex items-center justify-center">
                                 <span className="font-bold text-gray-500">48</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  }
                  icon={<RefreshCw className="h-6 w-6 text-purple-400" />}
               />

               {/* CTA */}
               <BentoGridItem
                  layout="vertical"
                  header={
                     <div className="w-full h-full flex flex-col items-center justify-center gap-6 py-12">
                        <div className="relative group/btn">
                           <div className="absolute -inset-1 bg-linear-to-r from-debian-red to-orange-600 rounded-full blur-sm opacity-25 group-hover/btn:opacity-50 transition duration-1000 group-hover/btn:duration-200"></div>
                           <button className="relative px-10 py-5 rounded-full bg-white text-black font-bold text-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
                              <Download className="w-6 h-6" />
                              <span>تحميل ISO</span>
                           </button>
                        </div>
                        <div className="flex gap-6 text-sm text-gray-500 font-mono">
                           <span>MD5: 8f4b...2a1c</span>
                           <span>•</span>
                           <span>ISO Size: 3.2 GB</span>
                        </div>
                     </div>
                  }
                  className="border-white/10 bg-linear-to-t from-[#151515] to-[#0a0a0a]"
               />

            </BentoGrid>

            <footer className="max-w-7xl mx-auto mt-32 border-t border-white/5 pt-12 pb-10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
               <p>مشروع Debian Blend غير تابع لـ Debian رسميا، وأي تشابه في الأسماء فهو من وحي خيال المؤلف</p>
               <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="#" className="hover:text-white transition-colors">لماذا؟</a>
                  <a href="https://github.com/ws-rush/debian-blend" className="hover:text-white transition-colors">GitHub</a>
               </div>
            </footer>
         </main>
      </div>
   );
};

export default App;
