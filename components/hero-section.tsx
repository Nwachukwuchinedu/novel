'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12 pt-16">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
         <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
         <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Typography */}
        <motion.div
           initial="hidden"
           animate="visible"
           variants={{
             visible: { transition: { staggerChildren: 0.1 } }
           }}
           className="space-y-8 z-10"
        >
           <motion.div 
             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } } }}
             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
           >
             <Sparkles className="w-4 h-4 text-purple-400" />
             <span className="text-sm font-medium text-zinc-300">New Age Storytelling</span>
           </motion.div>

           <div className="space-y-3">
             <motion.h1 
               variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } } }}
               className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]"
             >
               Read the <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Impossible.</span>
             </motion.h1>
             <motion.p 
               variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } } }}
               className="text-lg text-zinc-400 max-w-lg leading-relaxed"
             >
               Dive into a universe of interactive fiction. Experience stories that breathe, move, and react to your touch in real-time.
             </motion.p>
           </div>
           
           <motion.div 
             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } } }}
             className="flex flex-wrap gap-4"
           >
             <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-200"></div>
                <button className="relative px-8 py-3.5 rounded-xl bg-zinc-950 text-white font-semibold border border-white/10 hover:bg-zinc-900 transition-all flex items-center gap-2">
                  Start Reading
                </button>
             </div>
              <button className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-zinc-300 font-medium hover:bg-white/10 transition">
                Explore Genres
              </button>
           </motion.div>
        </motion.div>

        {/* Right: 3D Floating Book */}
        <div className="relative flex justify-center perspective-[1000px] h-[500px] items-center">
             <motion.div
               animate={{ y: [0, -25, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-[300px] h-[450px]"
               style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-25deg) rotateX(10deg)' }}
             >
                {/* Front Cover */}
                <div className="absolute inset-0 rounded-r-lg rounded-l-sm bg-zinc-900 overflow-hidden shadow-2xl border border-white/5"
                     style={{ transform: 'translateZ(25px)' }}
                >
                   {/* Cover Image/Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-zinc-900" />
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]" />
                   
                   {/* Texture/Noise */}
                   <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

                   <div className="absolute top-12 left-8 right-8 text-center border-b border-white/20 pb-4">
                      <span className="text-xs tracking-[0.3em] font-medium text-white/60 uppercase">Bestseller</span>
                   </div>

                   <div className="absolute bottom-12 left-8 right-8">
                      <h3 className="text-4xl font-bold text-white mb-2 leading-tight font-serif italic">The Void <br/> Walker</h3>
                      <p className="text-sm text-indigo-200 font-medium tracking-wide">By Elena M.</p>
                   </div>
                </div>

                {/* Spine */}
                <div className="absolute top-0 bottom-0 left-0 w-[50px] bg-indigo-900 transform -translate-x-[25px] rotate-y-[-90deg]"
                     style={{ transform: 'rotateY(-90deg) translateZ(25px)' }}
                >
                    <div className="h-full w-full bg-gradient-to-r from-black/40 to-transparent flex items-end justify-center pb-8">
                        <span className="text-white/50 text-xs tracking-widest uppercase rotate-180 writing-vertical-lr" style={{ writingMode: 'vertical-lr' }}>Elena M.</span>
                    </div>
                </div>

                 {/* Pages (Right Side) */}
                 <div className="absolute top-[2%] bottom-[2%] right-0 w-[48px] bg-zinc-100 transform translate-x-[24px]"
                     style={{ transform: 'rotateY(90deg) translateZ(148px)' }} 
                 >
                    {/* Page texture lines */}
                    <div className="h-full w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,#e4e4e7_1px,#e4e4e7_2px)] opacity-50"></div>
                 </div>
                 
                 {/* Back Cover (Optional simple fill) */}
                 <div className="absolute inset-0 rounded-l-lg bg-zinc-800"
                      style={{ transform: 'translateZ(-25px) rotateY(180deg)' }}
                 />
             </motion.div>
             
             {/* Glow behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] -z-10 rounded-full" />
        </div>
      </div>
    </section>
  );
}
