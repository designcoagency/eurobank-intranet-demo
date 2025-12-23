import { Plus, Users, Search, FileCheck } from "lucide-react";
import { BentoItem } from "../dashboard/BentoGrid";

export function QuickActions() {
    return (
        <BentoItem span="col-span-1" className="bg-white/60">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Γρηγορη Προσβαση</h4>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <div className="relative h-40 w-full flex items-center justify-center">
                {/* Banking Tools */}
                <button className="absolute transform -rotate-12 bg-slate-900 hover:bg-slate-800 transition-colors text-white px-4 py-2 rounded-full text-xs font-bold top-2 left-0 z-10 shadow-lg flex items-center gap-2">
                    <Search className="h-3 w-3" />
                    Customer 360
                </button>
                <button className="absolute transform rotate-6 bg-slate-900 hover:bg-slate-800 transition-colors text-white px-4 py-2 rounded-full text-xs font-bold top-4 right-0 shadow-lg flex items-center gap-2">
                    <FileCheck className="h-3 w-3" />
                    Εγκρίσεις
                </button>
                <button className="absolute transform rotate-3 bg-[#1e1b4b] hover:bg-indigo-900 transition-colors text-white px-5 py-2.5 rounded-full text-xs font-bold bottom-8 right-6 z-20 shadow-xl flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    HR Portal
                </button>
                <button className="absolute transform -rotate-6 bg-slate-800 hover:bg-slate-700 transition-colors text-white px-3 py-1.5 rounded-full text-xs font-bold bottom-4 left-4 shadow-md opacity-80">
                    Helpdesk
                </button>

                <button className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-green-500 hover:bg-green-400 text-slate-900 flex items-center justify-center shadow-xl transition-all hover:scale-110">
                    <Plus className="h-5 w-5" />
                </button>
            </div>
        </BentoItem>
    );
}
