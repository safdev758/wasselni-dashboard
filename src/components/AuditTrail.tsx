import React from 'react';
import { ArrowLeft, Shield, Clock, User, HardDrive, Key, AlertTriangle, Search, Filter } from 'lucide-react';

interface AuditTrailProps {
  onBack: () => void;
  filterByEntity?: string;
}

export default function AuditTrail({ onBack, filterByEntity }: AuditTrailProps) {
  const auditLogs = [
    { id: 'LOG-8820', timestamp: 'Oct 24, 2024 - 16:22:10', admin: 'Super Admin', action: 'Update Platform Commission', entity: 'System Config', status: 'Success', severity: 'Critical' },
    { id: 'LOG-8821', timestamp: 'Oct 24, 2024 - 16:15:45', admin: 'Auto-Sentinel', action: 'Flag Driver Account', entity: 'DRV-9042', status: 'Auto-Triggered', severity: 'High' },
    { id: 'LOG-8822', timestamp: 'Oct 24, 2024 - 15:50:12', admin: 'Ops Manager', action: 'Manual Refund Issued', entity: 'TXN-90238', status: 'Success', severity: 'Medium' },
    { id: 'LOG-8823', timestamp: 'Oct 24, 2024 - 15:42:00', admin: 'Super Admin', action: 'Login Successful', entity: 'Admin-01', status: 'Logged', severity: 'Low' },
    { id: 'LOG-8824', timestamp: 'Oct 24, 2024 - 14:10:05', admin: 'Security-Bot', action: 'Password Reset Attempt', entity: 'USR-773', status: 'Blocked', severity: 'High' },
  ].filter(log => !filterByEntity || log.entity === filterByEntity || log.admin === filterByEntity);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="flex items-center justify-between border-b-4 border-ink pb-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-3 neo-border bg-white hover:bg-ink hover:text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none text-ink">System Audit</h2>
            <p className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm mt-1">Immutable Immutable Security Logs</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
           {filterByEntity && (
             <div className="px-3 py-1 bg-primary text-ink font-display font-black text-[10px] uppercase neo-border">
                Filtering: {filterByEntity}
             </div>
           )}
           <button className="bg-ink text-white neo-border px-6 py-2 font-display font-black uppercase text-sm hover:bg-secondary transition-all">
              Live Monitoring
           </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
         {/* Sidebar Stats */}
         <div className="col-span-12 lg:col-span-3 space-y-6">
            <div className="neo-card bg-bg border-opacity-40">
               <h4 className="font-display font-black uppercase text-xs mb-4 border-b-2 border-ink pb-2">Log Health</h4>
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold uppercase opacity-60">Status</span>
                     <span className="text-[10px] font-black uppercase text-green-600">SYNCED</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold uppercase opacity-60">Uptime</span>
                     <span className="text-[10px] font-black uppercase">99.99%</span>
                  </div>
               </div>
            </div>

            <div className="neo-card bg-ink text-white">
               <h4 className="font-display font-black uppercase text-xs mb-4 border-b-2 border-white/20 pb-2">Quick Probe</h4>
               <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-3 border border-white/20 hover:bg-white/10 transition-colors">
                     <span className="text-[10px] font-black uppercase">Auth Failures</span>
                     <Key size={14} className="text-primary" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 border border-white/20 hover:bg-white/10 transition-colors">
                     <span className="text-[10px] font-black uppercase">Privilege ESC.</span>
                     <Shield size={14} className="text-accent" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 border border-white/20 hover:bg-white/10 transition-colors">
                     <span className="text-[10px] font-black uppercase">Admin Overrides</span>
                     <AlertTriangle size={14} className="text-secondary" />
                  </button>
               </div>
            </div>
         </div>

         {/* Logs Table */}
         <div className="col-span-12 lg:col-span-9 space-y-6">
            <div className="neo-card p-0 overflow-hidden">
               <div className="p-4 bg-bg border-b-4 border-ink flex justify-between items-center">
                  <div className="flex items-center gap-4 flex-1">
                     <Search size={18} className="opacity-40" />
                     <input 
                       type="text" 
                       placeholder="PROBE LOG ID, ACTION, OR ENTITY..." 
                       className="w-full bg-transparent font-display font-black uppercase text-xs focus:outline-none placeholder:opacity-40"
                     />
                  </div>
                  <button className="p-2 neo-border bg-white ml-4">
                     <Filter size={18} />
                  </button>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-ink text-white font-display font-black uppercase text-[10px]">
                           <th className="p-4 border-r border-white/10">Timestamp</th>
                           <th className="p-4 border-r border-white/10">Actor</th>
                           <th className="p-4 border-r border-white/10 border-b-2 border-white/20">Action Log</th>
                           <th className="p-4 border-r border-white/10">Entity Context</th>
                           <th className="p-4 text-center">Severity</th>
                        </tr>
                     </thead>
                     <tbody className="font-display font-bold text-xs uppercase">
                        {auditLogs.map((log) => (
                          <tr key={log.id} className="border-b-2 border-ink hover:bg-bg/50 transition-colors group">
                             <td className="p-4 border-r-2 border-ink whitespace-nowrap opacity-60 font-sans font-bold">{log.timestamp}</td>
                             <td className="p-4 border-r-2 border-ink">
                                <span className={log.admin === 'Super Admin' ? 'text-secondary' : 'text-ink'}>{log.admin}</span>
                             </td>
                             <td className="p-4 border-r-2 border-ink font-black">{log.action}</td>
                             <td className="p-4 border-r-2 border-ink"><span className="p-1 neo-border bg-white text-[9px]">{log.entity}</span></td>
                             <td className="p-4 text-center">
                                <span className={`inline-block px-2 py-1 text-[9px] font-black border-2 border-black ${
                                   log.severity === 'Critical' ? 'bg-accent text-white' : 
                                   log.severity === 'High' ? 'bg-primary' : 
                                   log.severity === 'Medium' ? 'bg-secondary text-white' : 'bg-bg text-ink'
                                }`}>
                                   {log.severity}
                                </span>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="p-4 border-t-4 border-ink bg-bg flex justify-between items-center font-display font-black uppercase text-[10px]">
                  <span>Total System Operations Analyzed: 148,002</span>
                  <div className="flex gap-2">
                     <button className="px-4 py-2 neo-border bg-white hover:bg-ink hover:text-white transition-all">Prev</button>
                     <button className="px-4 py-2 neo-border bg-ink text-white hover:bg-secondary transition-all">Next</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
