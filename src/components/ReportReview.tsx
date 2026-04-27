import React from 'react';
import { ArrowLeft, AlertTriangle, User, Shield, MessageSquare, Clock, CheckCircle, XCircle } from 'lucide-react';

interface ReportReviewProps {
  onBack: () => void;
}

export default function ReportReview({ onBack }: ReportReviewProps) {
  const reportData = {
    id: 'REP-102',
    type: 'Safety Violation',
    priority: 'Critical',
    time: 'Oct 23, 14:22',
    status: 'In Review',
    reporter: { name: 'Alice Wong', role: 'Passenger', id: 'USR-8821' },
    subject: { name: 'Marcus Chen', role: 'Driver', id: 'DRV-9042' },
    description: 'Driver was operating vehicle in an erratic manner. Exceeded speed limit by 20mph in school zone. Captured on dashcam.',
    evidenceCount: 2
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-4 border-b-4 border-ink pb-6">
        <button 
          onClick={onBack}
          className="p-3 neo-border bg-white hover:bg-ink hover:text-white transition-colors group"
        >
          <ArrowLeft size={24} className="group-active:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none">Report Audit</h2>
          <p className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm mt-1">Incident Investigation Console</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Incident Info */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="neo-card border-4 border-accent bg-accent/5">
             <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                   <div className="p-3 bg-accent text-white neo-border">
                      <AlertTriangle size={24} />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black font-display uppercase leading-tight">{reportData.type}</h3>
                      <p className="font-sans font-bold text-xs uppercase opacity-60">ID: {reportData.id} • {reportData.time}</p>
                   </div>
                </div>
                <span className="bg-accent text-white px-4 py-1 font-display font-black text-xs uppercase neo-border">{reportData.priority}</span>
             </div>
             
             <div className="bg-white p-6 neo-border-3 mb-6">
                <h4 className="font-display font-black uppercase text-xs opacity-60 mb-2 flex items-center gap-2">
                   <MessageSquare size={14} /> Description
                </h4>
                <p className="font-sans font-bold text-lg leading-relaxed text-ink">"{reportData.description}"</p>
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="neo-card bg-white p-4">
                   <h4 className="font-display font-black uppercase text-xs opacity-60 mb-3">Evidence Artifacts</h4>
                   <div className="flex gap-2">
                      {[1, 2].map(i => (
                        <div key={i} className="w-20 h-20 neo-border bg-bg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                           <img 
                              src={`https://picsum.photos/seed/report-${i}/200/200`}
                              alt="Evidence" 
                              className="w-full h-full object-cover grayscale"
                              referrerPolicy="no-referrer"
                           />
                        </div>
                      ))}
                   </div>
                </div>
                <div className="neo-card bg-white p-4">
                   <h4 className="font-display font-black uppercase text-xs opacity-60 mb-3">System Logs</h4>
                   <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase bg-bg p-1 border border-ink">GPS Violation: 45MPH in 25 Zone</div>
                      <div className="text-[10px] font-black uppercase bg-bg p-1 border border-ink">Erratic Steering Detected</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Involved Parties & Actions */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="neo-card space-y-4">
             <h3 className="font-display font-black uppercase text-xl border-b-2 border-ink pb-2">Parties Involved</h3>
             
             <div className="p-4 bg-primary border-2 border-ink flex items-center gap-4">
                <div className="w-12 h-12 bg-white neo-border flex items-center justify-center">
                   <User size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase opacity-60">Reporter (Passenger)</p>
                   <p className="font-display font-black uppercase">{reportData.reporter.name}</p>
                </div>
             </div>

             <div className="p-4 bg-secondary text-white border-2 border-ink flex items-center gap-4">
                <div className="w-12 h-12 bg-white text-ink neo-border flex items-center justify-center">
                   <User size={24} />
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase opacity-80">Subject (Driver)</p>
                   <p className="font-display font-black uppercase">{reportData.subject.name}</p>
                </div>
             </div>
          </div>

          <div className="neo-card bg-ink text-white">
             <h3 className="font-display font-black uppercase text-xl mb-6 flex items-center gap-2">
                <Shield size={20} /> Resolution
             </h3>
             <div className="space-y-4">
                <button className="w-full bg-primary text-ink font-display font-black uppercase py-4 neo-border hover:neo-shadow-blue active:translate-y-1 transition-all">
                   Suspend Account
                </button>
                <button className="w-full bg-accent text-white font-display font-black uppercase py-4 neo-border hover:neo-shadow active:translate-y-1 transition-all">
                   Permanent Ban
                </button>
                <button className="w-full border-2 border-white bg-transparent text-white font-display font-black uppercase py-4 hover:bg-white/10 transition-all">
                   Dismiss Case
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
