import React from 'react';
import { ArrowLeft, Download, Filter, Search, ArrowUpRight, ArrowDownLeft, ShieldCheck, AlertCircle } from 'lucide-react';

interface TransactionHistoryProps {
  onBack: () => void;
}

export default function TransactionHistory({ onBack }: TransactionHistoryProps) {
  const transactions = [
    { id: 'TXN-90241', date: 'Oct 24, 2024 - 15:42', type: 'Credit', provider: 'Visa ending 4242', amount: '$45.00', status: 'Settled', volume: 'High' },
    { id: 'TXN-90240', date: 'Oct 24, 2024 - 15:15', type: 'Debit', provider: 'Driver Payout - Bank of America', amount: '-$120.00', status: 'Pending', volume: 'Critical' },
    { id: 'TXN-90239', date: 'Oct 24, 2024 - 14:30', type: 'Credit', provider: 'Apple Pay', amount: '$18.50', status: 'Settled', volume: 'Med' },
    { id: 'TXN-90238', date: 'Oct 23, 2024 - 22:10', type: 'Credit', provider: 'Mastercard ending 8812', amount: '$31.20', status: 'Failed', volume: 'High' },
    { id: 'TXN-90237', date: 'Oct 23, 2024 - 21:55', type: 'Credit', provider: 'Corporate Account - #442', amount: '$242.00', status: 'Settled', volume: 'Enterprise' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between border-b-4 border-ink pb-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-3 neo-border bg-white hover:bg-ink hover:text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none text-ink">Financial Ledger</h2>
            <p className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm mt-1">Full Transaction Ecosystem Audit</p>
          </div>
        </div>
        <div className="flex gap-4">
           <button className="bg-white neo-border px-6 py-2 font-display font-black uppercase text-sm hover:bg-bg transition-all">
              Filter By Range
           </button>
           <button className="bg-ink text-white neo-border px-6 py-2 font-display font-black uppercase text-sm hover:bg-secondary transition-all flex items-center gap-2">
              <Download size={18} /> Export Records
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <div className="neo-card bg-bg border-opacity-20 flex flex-col justify-center">
            <h4 className="font-display font-black uppercase text-[10px] opacity-60 mb-1">Total Settled (24h)</h4>
            <p className="font-display font-black text-3xl uppercase">$14,282.00</p>
         </div>
         <div className="neo-card bg-bg border-opacity-20 flex flex-col justify-center">
            <h4 className="font-display font-black uppercase text-[10px] opacity-60 mb-1">Pending Volume</h4>
            <p className="font-display font-black text-3xl uppercase">$2,110.50</p>
         </div>
         <div className="neo-card bg-accent text-white flex flex-col justify-center">
            <h4 className="font-display font-black uppercase text-[10px] opacity-60 mb-1">Stalled/Failed</h4>
            <p className="font-display font-black text-3xl uppercase">1.2%</p>
         </div>
         <div className="neo-card bg-primary flex flex-col justify-center">
            <h4 className="font-display font-black uppercase text-[10px] opacity-60 mb-1">Platform Margin</h4>
            <p className="font-display font-black text-3xl uppercase">25.0%</p>
         </div>
      </div>

      <div className="neo-card overflow-hidden p-0">
         <div className="p-6 bg-white border-b-4 border-ink flex justify-between items-center">
            <div className="flex items-center gap-4 w-1/3">
               <Search className="opacity-40" />
               <input 
                 type="text" 
                 placeholder="SEARCH TRANSACTION ID, CUSTOMER, OR PROVIDER..." 
                 className="w-full bg-transparent font-display font-black uppercase text-xs focus:outline-none placeholder:opacity-30"
               />
            </div>
            <div className="flex gap-2">
               <button className="px-3 py-1 neo-border font-display font-black text-[10px] uppercase bg-bg">All</button>
               <button className="px-3 py-1 neo-border font-display font-black text-[10px] uppercase hover:bg-bg transition-all">Credits</button>
               <button className="px-3 py-1 neo-border font-display font-black text-[10px] uppercase hover:bg-bg transition-all">Debits</button>
            </div>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="bg-ink text-white font-display font-black uppercase text-[10px] tracking-widest">
                     <th className="p-4 border-r border-white/20">Transaction ID</th>
                     <th className="p-4 border-r border-white/20">Timestamp</th>
                     <th className="p-4 border-r border-white/20">Provider context</th>
                     <th className="p-4 border-r border-white/20 text-right">Amount</th>
                     <th className="p-4 text-center">Status</th>
                  </tr>
               </thead>
               <tbody className="font-display font-bold">
                  {transactions.map((t) => (
                    <tr key={t.id} className="border-b-2 border-ink hover:bg-bg transition-colors group">
                       <td className="p-4 border-r-2 border-ink">
                          <div className="flex items-center gap-2">
                             {t.type === 'Credit' ? <ArrowDownLeft className="text-secondary" size={16} /> : <ArrowUpRight className="text-accent" size={16} />}
                             <span>{t.id}</span>
                          </div>
                       </td>
                       <td className="p-4 border-r-2 border-ink text-xs opacity-60">{t.date}</td>
                       <td className="p-4 border-r-2 border-ink text-xs uppercase">{t.provider}</td>
                       <td className={`p-4 border-r-2 border-ink text-right font-black text-lg ${t.type === 'Debit' ? 'text-accent' : 'text-ink'}`}>
                          {t.amount}
                       </td>
                       <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                             {t.status === 'Settled' ? <ShieldCheck size={14} className="text-green-600" /> : <AlertCircle size={14} className={t.status === 'Failed' ? 'text-accent' : 'text-primary'} />}
                             <span className="text-[10px] uppercase font-black">{t.status}</span>
                          </div>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className="p-4 bg-bg border-t-4 border-ink flex justify-between items-center font-display font-black uppercase text-[10px]">
            <span>Audit Page 1 of 24</span>
            <div className="flex gap-2">
               <button className="px-4 py-2 neo-border bg-white hover:bg-ink hover:text-white transition-all">Previous</button>
               <button className="px-4 py-2 neo-border bg-ink text-white hover:bg-secondary transition-all">Next Audit Segment</button>
            </div>
         </div>
      </div>
    </div>
  );
}
