"use client";

import { Home, LayoutGrid, Award, Users, Bell, Settings, Plus, MonitorPlay, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
    { name: "Portal", icon: Home, active: true },
    { name: "Εφαρμογές", icon: LayoutGrid, active: false }, // Business Apps
    { name: "Eurobank Academy", icon: MonitorPlay, active: false }, // Academy
    { name: "HR Portal", icon: Users, active: false }, // HR
    { name: "My Career", icon: Briefcase, active: false },
    { name: "Ειδοποιήσεις", icon: Bell, active: false },
];

export function Sidebar() {
    const [active, setActive] = useState("Portal");

    return (
        <div className="fixed left-6 top-6 bottom-6 w-24 flex flex-col items-center py-8 glass-pill rounded-[3rem] z-50 shadow-2xl shadow-indigo-500/10">

            {/* Search / Add Button */}
            <button className="h-14 w-14 rounded-full bg-slate-900 text-white flex items-center justify-center mb-10 hover:scale-110 transition-transform shadow-lg shadow-slate-900/20">
                <Plus className="h-6 w-6" />
            </button>

            <nav className="flex-1 flex flex-col gap-6 w-full items-center">
                {navigation.map((item) => {
                    const isActive = active === item.name;
                    return (
                        <button
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            className={cn(
                                "group relative p-3 rounded-full transition-all duration-300 hover:bg-white/50",
                                isActive ? "text-slate-900" : "text-slate-400"
                            )}
                            title={item.name}
                        >
                            <item.icon
                                strokeWidth={isActive ? 2.5 : 2}
                                className={cn(
                                    "h-6 w-6 transition-all",
                                    isActive ? "scale-110" : "group-hover:scale-105"
                                )}
                            />
                            {isActive && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-slate-900 rounded-full translate-x-2" />
                            )}
                        </button>
                    );
                })}
            </nav>

            <div className="mt-auto">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-400 to-indigo-500 p-[2px]">
                    <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <span className="font-bold text-xs text-purple-700">ΓΠ</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
