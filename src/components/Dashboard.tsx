
import React from 'react';
import { TrendingUp, Download, Car, ShieldCheck, CircleDollarSign, AlertTriangle, FileText, ArrowRight } from 'lucide-react';

interface DashboardProps {
  onReviewReport: (id: string) => void;
  onViewLive: () => void;
  onViewDrivers: () => void;
  onViewRides: () => void;
  onViewRevenue: () => void;
}

export default function Dashboard({ 
  onReviewReport, 
  onViewLive, 
  onViewDrivers, 
  onViewRides, 
  onViewRevenue 
}: DashboardProps) {
  const recentReports = [
    { id: 'REP-102', type: 'Safety', detail: 'Vehicle Issue - Driver #842', time: '12m ago', priority: 'High', color: 'bg-accent' },
    { id: 'REP-103', type: 'Payment', detail: 'User Complaint - Late Refund', time: '45m ago', priority: 'Med', color: 'bg-primary' },
    { id: 'REP-104', type: 'System', detail: 'GPS Signal Drop - Zone 4', time: '1h ago', priority: 'Low', color: 'bg-ink/10' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none mb-2">Platform Overview</h2>
          <p className="text-ink/60 font-bold uppercase tracking-widest text-sm">Last 24 Hours Performance</p>
        </div>
        <div className="flex space-x-4">
          <select className="bg-transparent border-2 border-primary font-headline font-bold uppercase px-4 py-2 neo-shadow cursor-pointer appearance-none bg-white">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <button className="bg-accent-blue text-white font-headline font-bold uppercase px-6 py-2 neo-button flex items-center space-x-2">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 auto-rows-[minmax(140px,auto)]">
        {/* KPI Card 1 */}
        <div onClick={onViewRides} className="col-span-3 neo-card cursor-pointer group hover:bg-ink hover:text-white transition-all">
          <div className="font-display font-black text-[12px] uppercase text-ink/60 mb-2 group-hover:text-white/60">Total Rides</div>
          <div className="flex flex-col justify-end flex-1">
            <div className="text-4xl font-black font-display leading-none mb-1">14,208</div>
            <div className="text-[11px] font-black uppercase text-secondary">
              +12.4% ↑
            </div>
          </div>
        </div>

        {/* KPI Card 2 */}
        <div onClick={onViewDrivers} className="col-span-3 neo-card cursor-pointer group hover:bg-ink hover:text-white transition-all">
          <div className="font-display font-black text-[12px] uppercase text-ink/60 mb-2 group-hover:text-white/60">Active Drivers</div>
          <div className="flex flex-col justify-end flex-1">
            <div className="text-4xl font-black font-display leading-none mb-1">842</div>
            <div className="text-[11px] font-black uppercase text-secondary">
              +5.1% ↑
            </div>
          </div>
        </div>

        {/* KPI Card 3 */}
        <div className="col-span-3 neo-card">
          <div className="font-display font-black text-[12px] uppercase text-ink/60 mb-2">Avg Waiting</div>
          <div className="flex flex-col justify-end flex-1">
            <div className="text-4xl font-black font-display leading-none mb-1">4m 12s</div>
            <div className="text-[11px] font-black uppercase text-accent">
              -2.4% ↓
            </div>
          </div>
        </div>

        {/* KPI Card 4 */}
        <div onClick={onViewRevenue} className="col-span-3 neo-card bg-primary cursor-pointer hover:bg-ink hover:text-white transition-all group">
          <div className="font-display font-black text-[12px] uppercase text-ink/60 mb-2 group-hover:text-white/60">Gross Revenue</div>
          <div className="flex flex-col justify-end flex-1">
            <div className="text-4xl font-black font-display leading-none mb-1">$128k</div>
            <div className="text-[11px] font-black uppercase text-ink">
              +18.2% ↑
            </div>
          </div>
        </div>

        {/* Main Chart Area */}
        <div className="col-span-8 row-span-6 neo-card">
          <div className="font-display font-black text-[12px] uppercase text-ink/60 mb-0 border-b-2 border-ink pb-2">Ride Volume Trend (7 Days)</div>
          <div className="flex-1 flex items-end gap-2.5 pt-5 pb-2 border-b-2 border-ink">
            {[30, 45, 35, 85, 60, 75, 95].map((h, i) => (
              <div 
                key={i} 
                className={`flex-1 min-h-[10px] relative ${i === 3 ? 'bg-secondary' : 'bg-ink'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between font-display font-black text-[10px] pt-2">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>

        {/* Side Panel */}
        <div className="col-span-4 row-span-6 flex flex-col gap-5">
          <div className="bg-accent text-white p-4 neo-border-3 neo-shadow-lg flex flex-col">
            <h4 className="font-display font-black uppercase mb-2">Surge Alert</h4>
            <p className="font-sans font-bold text-[12px] mb-3">High demand in Downtown District. Driver deficit: 45.</p>
            <button 
              onClick={onViewLive}
              className="border-2 border-white bg-transparent text-white font-display font-black uppercase p-2 hover:bg-white/10 transition-all cursor-pointer"
            >
              Deploy Now
            </button>
          </div>

          <div className="flex-1 neo-card">
            <div className="font-display font-black text-[12px] uppercase text-ink/60 mb-4">Revenue Mix</div>
            <div className="space-y-3">
              {[
                { label: 'Standard', value: '$82k', percent: 65, color: 'bg-ink' },
                { label: 'Premium', value: '$34k', percent: 25, color: 'bg-secondary' },
                { label: 'Pool', value: '$12k', percent: 10, color: 'bg-primary' },
              ].map((mix) => (
                <div key={mix.label}>
                  <div className="flex justify-between font-display font-black text-[11px] uppercase">
                    <span>{mix.label}</span>
                    <span>{mix.value}</span>
                  </div>
                  <div className="h-3 w-full border-2 border-ink bg-bg mt-1">
                    <div className={`h-full ${mix.color}`} style={{ width: `${mix.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reports Review Section */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <FileText size={32} className="text-ink" />
          <h3 className="text-3xl font-black font-display uppercase tracking-tighter">Recent Reports</h3>
          <div className="flex-1 border-t-4 border-ink ml-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recentReports.map((report) => (
            <div 
              key={report.id} 
              onClick={() => onReviewReport(report.id)}
              className="neo-card flex flex-col group hover:bg-ink hover:text-white transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 border-2 border-ink font-display font-black text-[10px] uppercase ${report.color} ${report.priority === 'High' ? 'text-white' : 'text-ink'}`}>
                  {report.type}
                </span>
                <span className="font-display font-black text-[10px] uppercase opacity-60 group-hover:opacity-100">{report.time}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-display font-black text-lg leading-tight uppercase mb-1">{report.detail}</h4>
                <p className="text-xs font-bold opacity-60 group-hover:opacity-80">CASE ID: {report.id}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-display font-black text-[11px] uppercase border-b-2 border-current group-hover:border-white">Review Case</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
