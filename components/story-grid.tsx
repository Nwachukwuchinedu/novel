'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { stories } from '@/lib/data';

interface Story {
    id: string;
    title: string;
    author: string;
    abstract: string;
    coverUrl: string;
    gridArea: string; // for bento style sizes
}

export default function StoryGrid() {
    return (
        <section id="stories" className="px-6 lg:px-12 py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 flex items-center gap-4">
                    <span className="w-1.5 h-8 bg-purple-500 rounded-full box-decoration-clone" />
                    Top Picks For You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                    {stories.map((story) => (
                        <Link key={story.id} href={`/reading/${story.id}`} className={`relative group overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-md dark:shadow-none ${story.gridArea}`}>
                            {/* Background Image with Scale Effect */}
                            <motion.div
                                layoutId={`story-image-container-${story.id}`}
                                className="absolute inset-0 w-full h-full"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                    style={{ backgroundImage: `url(${story.coverUrl})` }}
                                />
                                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/60 transition-colors duration-500" />
                            </motion.div>

                            {/* Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                                <div className="bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 p-5 rounded-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-lg">
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{story.title}</h3>
                                    <p className="text-zinc-600 dark:text-zinc-300 text-xs mb-3 font-medium opacity-80 uppercase tracking-wider">{story.author}</p>
                                    <p className="text-zinc-700 dark:text-zinc-400 text-sm mb-0 line-clamp-2 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500 delay-75">
                                        {story.abstract}
                                    </p>

                                    <div className="overflow-hidden mt-0 group-hover:mt-4 transition-all duration-500">
                                        <div className="translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                            <button className="text-sm font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                                                Read Now <ArrowRight className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
