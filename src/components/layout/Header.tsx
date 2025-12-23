"use client";

import { Bell, Search } from "lucide-react";

export function Header() {
    return (
        <header className="flex h-20 items-center justify-between px-8 py-4 bg-transparent">
            <div className="flex-1 max-w-xl">
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Αναζήτηση..."
                        className="w-full h-12 rounded-2xl bg-white border-none pl-12 pr-4 text-sm outline-none ring-1 ring-surface-200 focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-3 rounded-full bg-white hover:bg-surface-50 transition-colors ring-1 ring-surface-200">
                    <Bell className="h-5 w-5 text-slate-600" />
                    <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
            </div>
        </header>
    );
}
