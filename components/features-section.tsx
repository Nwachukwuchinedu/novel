"use client";

import { motion } from "framer-motion";
import { Zap, BookOpen, Shield, Globe } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        title: "Instant Immersion",
        description: "No loading screens. Our edge-cached delivery ensures stories start the moment you click."
    },
    {
        icon: <BookOpen className="w-6 h-6 text-purple-500" />,
        title: "Adaptive Reading",
        description: "Layouts that shift based on context, creating a magazine-like feel on any device."
    },
    {
        icon: <Shield className="w-6 h-6 text-green-500" />,
        title: "Creator Ownership",
        description: "Built on a protocol that ensures authors retain full rights and royalties to their work."
    },
    {
        icon: <Globe className="w-6 h-6 text-cyan-500" />,
        title: "Global Community",
        description: "Connect with readers worldwide. Translate and localize stories with AI assistance."
    }
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-white dark:bg-zinc-950/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Reinventing the Page</h2>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400">
                        Traditional ebooks are static. Jelly Novel brings stories to life with technology that feels like magic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-6 shadow-sm border border-zinc-100 dark:border-white/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
