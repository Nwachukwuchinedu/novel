"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "The immersive reading mode changed how I consume fiction. It feels like the story is happening around you.",
        author: "Alex Rivera",
        role: "Sci-Fi Author",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "Jelly Novel isn't just a platform; it's a new medium. The layout transitions are seamless magic.",
        author: "Sarah Chen",
        role: "UX Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "Finally, a place where digital stories feel premium. The typography and pacing are exquisite.",
        author: "Marcus Thorne",
        role: "Literary Critic",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Loved by Visionaries</h2>
                    <p className="text-zinc-500 dark:text-zinc-400">Join the community redefining storytelling.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                            <div className="relative h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition-colors shadow-sm dark:shadow-none flex flex-col justify-between">
                                <Quote className="w-10 h-10 text-purple-200 dark:text-purple-900/40 mb-6" />

                                <p className="text-lg text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed mb-8">
                                    "{t.text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-100 dark:border-white/10">
                                        <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900 dark:text-white text-sm">{t.author}</h4>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
