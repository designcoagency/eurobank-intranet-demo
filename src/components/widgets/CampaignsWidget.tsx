import { ChevronLeft, ChevronRight, MonitorPlay } from "lucide-react";
import { BentoItem } from "../dashboard/BentoGrid";

export function CampaignsWidget() {
    return (
        <BentoItem span="col-span-1" className="bg-white/60 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Eurobank Academy</h4>
                <span className="px-3 py-1 bg-slate-900 text-white text-[10px] uppercase font-bold rounded-full">LMS</span>
            </div>

            <div className="flex-1 flex items-center justify-center gap-4 my-2">
                {/* Visual indicators for "Training" */}
                <div className="flex gap-2">
                    <div className="h-16 w-6 bg-slate-800 rounded-full opacity-80 blur-[2px]" />
                    <div className="h-12 w-6 bg-slate-800 rounded-full opacity-60 blur-[2px]" />
                </div>
                <div className="h-20 w-20 bg-gradient-to-br from-amber-200 to-amber-500 rounded-[1.5rem] shadow-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10" />
                    <MonitorPlay className="h-8 w-8 text-amber-900 relative z-10" />
                </div>
            </div>

            <div>
                <h3 className="font-bold text-slate-900 text-lg">Leadership 2026</h3>
                <p className="text-xs text-slate-500 mb-4">Νέο πρόγραμμα ηγεσίας για στελέχη.</p>

                <div className="flex justify-between items-center">
                    <button className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-slate-300 transition-colors">
                        <ChevronLeft className="h-4 w-4 text-slate-600" />
                    </button>
                    <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-800" />
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    </div>
                    <button className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors">
                        <ChevronRight className="h-4 w-4 text-slate-600" />
                    </button>
                </div>
            </div>
        </BentoItem>
    );
}
