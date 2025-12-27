import Link from "next/link";
import { Sparkles, Twitter, Github, Instagram } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 p-1.5 rounded-lg">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white">Lumina</span>
                        </Link>
                        <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                            Pioneering the next generation of interactive storytelling.
                            We blend advanced web technologies with cinematic narratives to create
                            experiences that feel alive.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Platform</h4>
                        <ul className="space-y-4 text-zinc-500 dark:text-zinc-400">
                            <li><Link href="#" className="hover:text-purple-500 transition-colors">Trending Stories</Link></li>
                            <li><Link href="#" className="hover:text-purple-500 transition-colors">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-purple-500 transition-colors">Authors</Link></li>
                            <li><Link href="#" className="hover:text-purple-500 transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-zinc-500 dark:text-zinc-400">
                            <li><Link href="#" className="hover:text-purple-500 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-purple-500 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-purple-500 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-purple-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-zinc-500 dark:text-zinc-600">
                        © {new Date().getFullYear()} Lumina Platform. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
