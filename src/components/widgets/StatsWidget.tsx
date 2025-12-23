import { BentoItem } from "../dashboard/BentoGrid";
import { TrendingUp, Users, Wallet } from "lucide-react";

export function StatsWidget() {
    return (
        <>
            {/* Branch KPI Card - Sales Target */}
            <BentoItem span="col-span-1" rowSpan="row-span-2" className="bg-gradient-to-br from-white/40 to-white/10 text-slate-800 !p-0">
                <div className="h-full flex flex-col p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h4 className="text-3xl font-bold tracking-tighter">105<span className="text-xl">%</span></h4>
                            <p className="text-sm font-medium opacity-60">Στόχος Πωλήσεων<br />Q4</p>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-end bg-white rounded-[2rem] p-2 relative shadow-sm">
                        <div className="flex items-center gap-2 mt-4 px-2">
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <p className="font-bold text-xl">125k<span className="text-sm font-normal text-slate-400">€</span></p>
                        </div>
                        <p className="text-xs text-slate-400 mb-4">Νέα Δάνεια</p>

                        <div className="w-full flex-1 bg-gradient-to-t from-[#A78BFA] to-[#C4B5FD] rounded-[1.5rem] relative flex items-end justify-center p-4 overflow-hidden">
                            {/* Pseudo Graph Bars - Sales */}
                            <div className="flex items-end gap-1 h-full w-full justify-center opacity-50">
                                <div className="w-2 h-[50%] bg-white/50 rounded-t-sm" />
                                <div className="w-2 h-[70%] bg-white/70 rounded-t-sm" />
                                <div className="w-2 h-[45%] bg-white rounded-t-sm" />
                                <div className="w-2 h-[85%] bg-white/90 rounded-t-sm" />
                            </div>
                            <p className="text-white text-xs font-bold absolute bottom-4 drop-shadow-md">ΔΕΚ</p>
                        </div>
                    </div>
                </div>
            </BentoItem>

            {/* NPS Score */}
            <BentoItem span="col-span-1" className="bg-[#a3e635] text-slate-900 !p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-4xl font-bold">82<span className="text-lg font-medium opacity-60 ml-1">NPS</span></h4>
                        <p className="text-sm font-bold opacity-80 mt-1">Δείκτης Πελατών</p>
                    </div>
                </div>

                <div className="space-y-2 mt-4">
                    <div className="bg-black/10 px-4 py-2 rounded-full flex justify-between items-center text-xs font-bold">
                        <span>Κατάστημα</span>
                        <span className="bg-white/30 px-2 rounded-full text-[10px]">TOP 5%</span>
                    </div>
                    <div className="bg-black/10 px-4 py-2 rounded-full flex justify-between items-center text-xs font-bold opacity-60">
                        <span>Περιφέρεια</span>
                        <span className="bg-white/30 px-2 rounded-full text-[10px]">AVG 76</span>
                    </div>
                </div>
            </BentoItem>

            {/* Pending Tasks / Portfolio */}
            <BentoItem span="col-span-1" className="bg-[#1e1b4b] text-white flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-2 right-4 h-2 w-2 rounded-full bg-[#a3e635]" />
                <div className="absolute bottom-4 left-4 h-4 w-4 rounded-full bg-[#A78BFA] opacity-50" />
                <div className="absolute top-1/2 left-1/4 h-8 w-8 rounded-full bg-[#a3e635] blur-md opacity-20" />

                <div className="text-center relative z-10">
                    <Wallet className="h-8 w-8 mx-auto mb-2 text-[#a3e635]" />
                    <h4 className="text-3xl font-bold tracking-tight">12<span className="text-lg font-normal opacity-70 ml-1">αιτήσεις</span></h4>
                    <p className="text-slate-400 text-xs mt-1">Εκκρεμότητες</p>
                </div>
            </BentoItem>
        </>
    );
}
