import { Sidebar } from "@/components/layout/Sidebar";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { NewsHero } from "@/components/widgets/NewsHero";
import { StatsWidget } from "@/components/widgets/StatsWidget";
import { QuickActions } from "@/components/widgets/QuickActions";
import { CampaignsWidget } from "@/components/widgets/CampaignsWidget";
import { Calendar, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent font-sans text-slate-900 overflow-x-hidden selection:bg-[#a3e635] selection:text-slate-900">
      <Sidebar />

      <main className="pl-32 pr-8 py-8 min-h-screen">
        <header className="flex justify-between items-end mb-8 pl-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 shadow-sm drop-shadow-md">Καλημέρα, Γεωργία</h1>
            <p className="text-lg text-white/80 font-medium">Eurobank Intranet Portal</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end text-right">
              <span className="text-white text-sm font-bold">Δευτέρα, 14 Σεπ</span>
              <span className="text-white/60 text-xs">Κατάστημα 1024</span>
            </div>
            <button className="h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors">
              <Calendar className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column (Hero + Bottom Widgets) */}
          <div className="col-span-8 flex flex-col gap-6">
            {/* Hero Card */}
            <div className="w-full h-[400px]">
              <BentoGrid className="h-full !gap-0 !grid-cols-1">
                <NewsHero />
              </BentoGrid>
            </div>

            {/* Bottom Row */}
            <div className="h-[320px] grid grid-cols-2 gap-6">
              <CampaignsWidget />
              <QuickActions />
            </div>
          </div>

          {/* Right Column (Stats Vertical) */}
          <div className="col-span-4 flex flex-col gap-6">
            <div className="flex justify-between items-center pl-2">
              <h2 className="text-3xl font-bold text-white">Η Απόδοσή<br />Μου</h2>
              <button className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </button>
            </div>

            <BentoGrid className="!grid-cols-2 !auto-rows-auto !gap-6">
              <StatsWidget />
            </BentoGrid>

            {/* Security/Compliance Widget */}
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-6 flex justify-between items-center group cursor-pointer hover:bg-white/90 transition-colors">
              <div>
                <p className="text-xs text-slate-500 font-bold mb-1">ΑΣΦΑΛΕΙΑ</p>
                <h4 className="text-lg font-bold text-slate-900">Cyber Aware</h4>
              </div>
              <div className="flex gap-2">
                <div className="h-12 w-12 rounded-xl bg-slate-900 flex items-center justify-center text-[#a3e635]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
