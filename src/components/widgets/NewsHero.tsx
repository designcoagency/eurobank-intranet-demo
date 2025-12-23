import { ArrowUpRight, Leaf, BarChart3, Target } from "lucide-react";
import { BentoItem } from "../dashboard/BentoGrid";

export function NewsHero() {
    return (
        <BentoItem span="col-span-1 md:col-span-2 lg:col-span-2" rowSpan="row-span-2" className="!p-0 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white overflow-hidden shadow-lg border border-[#6D28D9]/20">
            {/* Decorative gradients - Reduced opacity for better text contrast */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col p-8 md:p-10 justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="inline-flex px-3 py-1 rounded-full bg-white/20 border border-white/40 text-xs font-bold backdrop-blur-md mb-4 items-center gap-2 shadow-sm">
                            <Leaf className="h-3 w-3 text-[#a3e635]" />
                            <span className="tracking-wide">ΣΤΡΑΤΗΓΙΚΗ 2030</span>
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-3 leading-[1.15] drop-shadow-md tracking-tight">
                            ESG & Βιώσιμη<br />Ανάπτυξη
                        </h2>
                        <div className="flex -space-x-3 mt-8">
                            {/* Colleagues reading */}
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-10 w-10 rounded-full bg-white/20 border-2 border-[#5B21B6] backdrop-blur-sm flex items-center justify-center text-xs font-bold ring-2 ring-white/10">
                                    <span className="opacity-0">IMG</span>
                                </div>
                            ))}
                            <div className="h-10 w-10 rounded-full bg-white text-[#5B21B6] flex items-center justify-center shadow-lg z-10 font-bold text-xs ring-4 ring-[#5B21B6]/30">
                                +18
                            </div>
                        </div>
                    </div>

                    <button className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all hover:scale-110 shadow-lg group">
                        <ArrowUpRight className="h-5 w-5 group-hover:rotate-45 transition-transform" />
                    </button>
                </div>

                {/* Floating Inner Card - "Q3 Results" - Improved Contrast */}
                <div className="bg-white rounded-[2rem] p-6 text-slate-900 shadow-2xl mt-6 relative overflow-hidden group hover:translate-y-[-2px] transition-all duration-300 border border-white/50">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.07]">
                        <BarChart3 className="w-24 h-24" />
                    </div>

                    <div className="flex gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-inner">
                            <Target className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 leading-tight">Αποτελέσματα Q3 2025</h3>
                            <p className="text-sm text-slate-500 font-medium">Παρουσίαση Ομίλου</p>
                        </div>
                    </div>

                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-2 shadow-inner">
                        <div className="h-full w-[92%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm" />
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-600 uppercase tracking-wide">
                        <span>Υπερκαλυψη Στοχων</span>
                        <span className="text-blue-700 text-sm">92%</span>
                    </div>
                </div>
            </div>
        </BentoItem>
    );
}
