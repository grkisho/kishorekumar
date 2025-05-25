"use client";

import { useState } from "react";
import Link from "next/link";
import Theme from "./Theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <Theme />
      <div className="nav-desktop">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/components">Components</Link>
        <Link href="/templates">Templates</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className="flex sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
        >
          Menu
          <svg
            viewBox="0 0 8 6"
            aria-hidden="true"
            className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
          >
            <path
              d="M1.75 1.75 4 4.25l2.25-2.5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
