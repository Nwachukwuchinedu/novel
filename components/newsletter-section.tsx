"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function NewsletterSection() {
    return (
        <section className="py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 dark:border-white/10 p-12 lg:p-24 text-center">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Stay in the Twist.
                    </h2>
                    <p className="text-lg text-zinc-400">
                        Join 50,000+ readers. Get weekly curated stories, exclusive author interviews, and early access to new features.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 backdrop-blur-sm"
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                        >
                            Subscribe <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </form>

                    <p className="text-xs text-zinc-600">
                        No spam. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
}
