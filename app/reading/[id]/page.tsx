'use client';

import { use } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { stories } from '@/lib/data';

export default function ReadingView({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const story = stories.find(s => s.id === id);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!story) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Story not found</h2>
                    <Link href="/" className="text-purple-400 hover:text-purple-300 underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-950 selection:bg-purple-500/30 selection:text-white">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 origin-left z-50 shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                style={{ scaleX }}
            />

            {/* Header with layoutId transition */}
            <motion.header
                className="relative h-[65vh] w-full overflow-hidden"
            >
                <motion.div
                    layoutId={`story-image-container-${story.id}`}
                    className="absolute inset-0 w-full h-full z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${story.coverUrl})` }}
                    />
                    <div className="absolute inset-0 bg-zinc-950/30 mix-blend-multiply" />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent z-10" />

                <div className="absolute top-8 left-8 z-20">
                    <Link href="/" className="group p-3 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 hover:bg-black/60 transition flex items-center justify-center">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 max-w-4xl mx-auto text-center z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-xs font-bold tracking-[0.2em] text-zinc-300 uppercase shadow-lg">
                            <span>Premium Story</span>
                        </div>
                        <h1 className="text-5xl lg:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl leading-[0.9]">
                            {story.title}
                        </h1>
                        <p className="text-xl text-zinc-200 font-medium tracking-wide">By {story.author}</p>
                    </motion.div>
                </div>
            </motion.header>

            {/* Content */}
            <article className="relative z-10 max-w-[68ch] mx-auto px-6 py-24 pb-48">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-invert prose-lg lg:prose-xl leading-loose font-serif text-zinc-300"
                >
                    <p className="lead text-2xl lg:text-3xl text-zinc-100 font-sans font-light mb-16 border-l-4 border-purple-500 pl-8 italic leading-relaxed opacity-90">
                        {story.abstract}
                    </p>

                    <p className="mb-10 selection:bg-cyan-500/20">
                        <span className="float-left text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600 mr-4 leading-[0.8] font-sans">T</span>
                        he silence in the server room was deafening, broken only by the rhythmic hum of the cooling units. It was a sound I had grown accustomed to, a lullaby for the sleepless nights spent chasing ghosts in the machine. But tonight, the hum felt different—sharper, almost aggressive. It vibrated in my teeth.
                    </p>
                    <p className="mb-10">
                        I ran my fingers across the terminal, the cold metal grounding me against the static in the air. The screen flickered, a cascade of emerald data pouring down like digital rain. Somewhere in this ocean of code was the answer, the key to unlocking the truth about the Void Walkers. They said they were a myth, a ghost story to scare junior devs. I knew better.
                    </p>
                    <p className="mb-10">
                        "You shouldn't be here," a voice echoed, not from the speakers, but directly inside my head. The implant at the base of my skull burned hot.
                    </p>
                    <p className="mb-10">
                        I spun around, but the room was empty. Just rows of black obelisks, processing the world's secrets. My heart hammered against my ribs. Neural links were illegal for a reason. Once you opened the door to your mind, you never knew who—or what—might walk in.
                    </p>
                    <p className="mb-10">
                        The message regarding the protocol was clear: <em>Do not engage.</em> Yet, here I was, diving headfirst into the abyss. The interface shimmered, creating a hologram of a cityscape that defied gravity. Buildings floated in mid-air, tethered by beams of pure light.
                    </p>

                    <div className="my-16 p-1 bg-gradient-to-br from-white/10 to-transparent rounded-2xl">
                        <div className="bg-zinc-950/90 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full -mr-16 -mt-16 pointer-events-none" />

                            <p className="text-center font-sans text-xs font-bold text-cyan-400 uppercase tracking-[0.3em] mb-8">Interaction Required</p>

                            <div className="grid gap-4">
                                <button className="relative overflow-hidden w-full p-6 text-left rounded-xl bg-zinc-900 border border-white/5 hover:border-purple-500/50 transition-all group shadow-lg hover:shadow-purple-900/20">
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div>
                                            <span className="block text-lg text-white font-bold group-hover:text-purple-300 transition-colors">Access the encrypted file</span>
                                            <span className="text-sm text-zinc-500 mt-1 block">Risk: High | Reward: Critical Intel</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all">
                                            →
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </button>

                                <button className="relative overflow-hidden w-full p-6 text-left rounded-xl bg-zinc-900 border border-white/5 hover:border-cyan-500/50 transition-all group shadow-lg hover:shadow-cyan-900/20">
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div>
                                            <span className="block text-lg text-white font-bold group-hover:text-cyan-300 transition-colors">Terminate the connection</span>
                                            <span className="text-sm text-zinc-500 mt-1 block">Risk: Low | Reward: Safety</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <p className="mb-10">
                        I hesitated. The choice wasn't just about data; it was about survival. In a world governed by algorithms, free will was the ultimate glitch. I took a breath, the air tasting of ozone and copper, and made my move.
                    </p>
                </motion.div>

                <div className="mt-32 pt-12 border-t border-white/5 text-center">
                    <p className="text-zinc-600 italic font-medium tracking-wide">To be continued in Chapter 2</p>
                </div>
            </article>
        </div>
    );
}
