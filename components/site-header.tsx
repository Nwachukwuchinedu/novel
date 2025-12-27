"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#stories", label: "Stories" },
        { href: "/#features", label: "Features" },
        { href: "/about", label: "About" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200 dark:border-white/10 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">Jelly Novel</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800" />
                    <ModeToggle />
                    <button className="text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                        Sign In
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-zinc-900 dark:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-zinc-900 dark:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-zinc-800">
                                <span className="text-zinc-500">Switch Theme</span>
                                <ModeToggle />
                            </div>
                            <button className="w-full text-center font-bold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-4 rounded-xl">
                                Sign In
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
