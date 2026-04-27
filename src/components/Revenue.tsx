
import React from 'react';
import { Download, Calendar, TrendingUp, Wallet, CreditCard, Banknote, AlertCircle } from 'lucide-react';

interface RevenueProps {
  onViewTransactions: () => void;
}

export default function Revenue({ onViewTransactions }: RevenueProps) {
  const transactions = [
    { id: '#RF-9921', date: 'Oct 24, 14:32', customer: 'Sarah J.', method: 'Visa *4242', amount: '$32.50', status: 'Cleared', color: 'bg-primary' },
    { id: '#RF-9920', date: 'Oct 24, 14:15', customer: 'Michael T.', method: 'Apple Pay', amount: '$18.00', status: 'Cleared', color: 'bg-primary' },
    { id: '#RF-9919', date: 'Oct 24, 13:50', customer: 'Alex R.', method: 'MC *8812', amount: '$45.00', status: 'Failed', color: 'bg-accent text-white' },
    { id: '#RF-9918', date: 'Oct 24, 13:10', customer: 'Jessica M.', method: 'Cash', amount: '$22.00', status: 'Pending', color: 'bg-ink/20' },
  ];

  return (
    <div className="space-y-12">
      <header className="mb-12 flex justify-between items-end border-b-4 border-ink pb-6">
        <div>
          <h2 className="text-6xl font-display font-black uppercase text-ink leading-none tracking-tighter">Financials</h2>
          <p className="text-lg font-bold text-ink/60 mt-2 max-w-2xl border-l-4 border-primary pl-4">
            Overview of network revenue, driver payouts, and transaction health.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white neo-border px-6 py-3 font-display font-bold uppercase neo-shadow hover:bg-primary transition-colors flex items-center gap-2">
            <Calendar size={18} />
            Last 30 Days
          </button>
          <button className="bg-ink text-white border-2 border-ink px-6 py-3 font-display font-bold uppercase neo-shadow-lg hover:bg-secondary transition-colors flex items-center gap-2">
            <Download size={18} />
            Export CSV
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-primary border-4 border-ink p-6 neo-shadow-lg relative overflow-hidden group">
          <TrendingUp size={150} className="absolute -right-10 -top-10 opacity-10 rotate-12" />
          <h3 className="font-display font-bold uppercase mb-2 tracking-tight text-xl">Net Revenue</h3>
          <div className="text-6xl font-display font-black tracking-tighter">$84,290</div>
          <div className="mt-4 inline-flex items-center gap-2 bg-white px-3 py-1 neo-border">
            <TrendingUp size={16} />
            <span className="font-bold">+14.5% vs last month</span>
          </div>
        </div>

        <div className="bg-white border-4 border-ink p-6 neo-shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold uppercase text-ink/60 mb-2 tracking-tight text-xl flex items-center gap-2">
              <Wallet size={20} /> Driver Payouts
            </h3>
            <div className="text-5xl font-display font-black tracking-tighter">$62,150</div>
          </div>
          <div className="mt-6">
            <div className="w-full bg-bg h-4 neo-border relative">
              <div className="absolute top-0 left-0 h-full bg-ink w-[75%] border-r-2 border-ink"></div>
            </div>
            <p className="text-sm font-display uppercase font-bold mt-2 text-right">75% of Gross</p>
          </div>
        </div>

        <div className="bg-secondary border-4 border-ink p-6 neo-shadow-lg text-white flex flex-col justify-center items-center text-center">
          <h3 className="font-display font-bold uppercase mb-2 tracking-tight text-xl">Avg. Order Value</h3>
          <div className="text-7xl font-display font-black tracking-tighter shadow-ink">$24<span className="text-3xl">.50</span></div>
          <p className="font-display font-bold uppercase mt-4 border-t-2 border-white/40 pt-2 w-full">Based on 3,440 Rides</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border-4 border-ink neo-shadow-lg p-6">
          <div className="flex justify-between items-center mb-6 border-b-4 border-ink pb-4">
            <h3 className="text-3xl font-display font-black uppercase text-ink">Revenue Trend</h3>
            <div className="flex gap-2 font-display font-bold uppercase text-sm border-2 border-ink p-1 bg-bg">
              <button className="px-3 py-1 bg-ink text-white">Wk</button>
              <button className="px-3 py-1 hover:bg-black/10">Mo</button>
            </div>
          </div>
          <div className="h-80 w-full relative border-l-4 border-b-4 border-ink flex items-end pt-8 px-4 gap-4">
            {[40, 60, 55, 80, 95, 70, 100].map((h, i) => (
              <div 
                key={i} 
                className="w-full bg-primary border-2 border-ink relative group hover:bg-secondary transition-colors cursor-pointer"
                style={{ height: `${h}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 font-display font-bold bg-ink text-white px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap neo-border">
                  ${(h/10).toFixed(1)}k
                </div>
              </div>
            ))}
            <div className="absolute -bottom-8 left-0 w-full flex justify-between px-6 font-display font-bold text-xs text-ink/60 uppercase">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-accent text-white border-4 border-ink neo-shadow-lg p-6">
            <h3 className="text-2xl font-display font-black uppercase mb-4 border-b-2 border-white pb-2 flex justify-between items-center">
              Disputes <AlertCircle size={32} />
            </h3>
            <div className="text-5xl font-display font-black">12 <span className="text-xl font-display opacity-60">Active</span></div>
            <p className="font-bold bg-ink text-white p-2 border-2 border-white inline-block mt-4 uppercase text-xs">$420 at risk</p>
          </div>
          
          <div className="bg-bg border-4 border-ink neo-shadow-lg p-6 flex-1">
            <h3 className="text-xl font-display font-black uppercase mb-6">Payment Methods</h3>
            <div className="space-y-6">
              {[
                { label: 'Credit Card', percent: 65, color: 'bg-secondary' },
                { label: 'Digital Wallet', percent: 25, color: 'bg-primary' },
                { label: 'Cash', percent: 10, color: 'bg-ink' },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between font-display font-bold text-sm uppercase mb-1">
                    <span>{m.label}</span>
                    <span>{m.percent}%</span>
                  </div>
                  <div className="w-full bg-white h-6 neo-border">
                    <div className={`${m.color} h-full border-r-2 border-ink`} style={{ width: `${m.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white border-4 border-ink neo-shadow-lg">
        <div className="p-6 border-b-4 border-ink bg-bg flex justify-between items-center">
          <h3 className="text-3xl font-display font-black uppercase tracking-tighter text-on-surface">Recent Transactions</h3>
          <button 
            onClick={onViewTransactions}
            className="font-display font-bold uppercase border-b-4 border-ink hover:bg-primary transition-colors px-2"
          >
            View All
          </button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-ink/5 border-b-4 border-ink font-display font-black uppercase text-sm">
              <th className="p-4 border-r-2 border-ink">Txn ID</th>
              <th className="p-4 border-r-2 border-ink">Customer</th>
              <th className="p-4 border-r-2 border-ink">Method</th>
              <th className="p-4 border-r-2 border-ink text-right">Amount</th>
              <th className="p-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            {transactions.map((t) => (
              <tr key={t.id} className={`border-b-2 border-ink hover:bg-ink/5 transition-colors ${t.status === 'Failed' ? 'bg-accent/5' : ''}`}>
                <td className="p-4 border-r-2 border-ink font-display">{t.id}</td>
                <td className="p-4 border-r-2 border-ink">{t.customer}</td>
                <td className="p-4 border-r-2 border-ink flex items-center gap-2">
                  {t.method.includes('Visa') ? <CreditCard size={16} /> : t.method.includes('Apple') ? <Wallet size={16} /> : <Banknote size={16} />}
                  {t.method}
                </td>
                <td className="p-4 border-r-2 border-ink text-right font-display font-black text-xl">{t.amount}</td>
                <td className="p-4 text-center">
                  <span className={`inline-block px-3 py-1 neo-border font-display text-xs uppercase ${t.color}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
