"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center p-2"
            >
                <Moon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ rotate: theme === "light" ? 0 : -180, scale: theme === "light" ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
            >
                <Sun className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
            </motion.div>
        </button>
    )
}
