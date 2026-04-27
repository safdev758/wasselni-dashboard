import React from 'react';
import { ArrowLeft, MapPin, Navigation, Car, Users, Zap, Search, Bell } from 'lucide-react';

interface LiveTrackingProps {
  onBack: () => void;
}

export default function LiveTracking({ onBack }: LiveTrackingProps) {
  const activeDispatches = [
    { id: 'DP-102', driver: 'Marcus C.', customer: 'Alice W.', zone: 'Downtown', status: 'En Route' },
    { id: 'DP-105', driver: 'Elena R.', customer: 'James T.', zone: 'Airport', status: 'Pickup' },
    { id: 'DP-108', driver: 'David L.', customer: 'Sarah S.', zone: 'Westside', status: 'Wait List' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between border-b-4 border-ink pb-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-3 neo-border bg-white hover:bg-ink hover:text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none text-ink">Fleet Command</h2>
            <p className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm mt-1">Real-Time Platform Pulse</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 neo-border bg-bg overflow-hidden">
                  <img src={`https://picsum.photos/seed/fleet-${i}/100/100`} alt="Avatar" className="grayscale" referrerPolicy="no-referrer" />
                </div>
              ))}
           </div>
           <span className="font-display font-black text-xs uppercase px-3 py-1 bg-green-500 text-white neo-border">248 Active</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Map Area */}
        <div className="col-span-12 lg:col-span-9">
           <div className="neo-card p-2 bg-ink h-[600px] relative overflow-hidden group">
              <div className="absolute inset-4 bg-bg neo-border overflow-hidden">
                 <img 
                   src="https://picsum.photos/seed/citymap/1600/1000" 
                   className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-10000 linear" 
                   alt="Live Map"
                   referrerPolicy="no-referrer"
                 />
                 
                 {/* Live Map Indicators */}
                 <div className="absolute top-[20%] left-[30%] animate-pulse">
                    <div className="w-6 h-6 bg-secondary neo-border-2 rounded-full flex items-center justify-center">
                       <Car size={12} className="text-white" />
                    </div>
                 </div>
                 <div className="absolute top-[50%] left-[60%] animate-pulse delay-75">
                    <div className="w-6 h-6 bg-accent neo-border-2 rounded-full flex items-center justify-center">
                       <Zap size={12} className="text-white" />
                    </div>
                 </div>
              </div>
              
              {/* Map Overlays */}
              <div className="absolute top-8 right-8 space-y-3">
                 <div className="bg-white/90 backdrop-blur neo-border p-3 space-y-2">
                    <div className="flex items-center gap-2 font-display font-black text-[10px] uppercase">
                       <div className="w-2 h-2 bg-secondary"></div> <span>Standard Dispatch</span>
                    </div>
                    <div className="flex items-center gap-2 font-display font-black text-[10px] uppercase">
                       <div className="w-2 h-2 bg-primary"></div> <span>Premium Fleet</span>
                    </div>
                    <div className="flex items-center gap-2 font-display font-black text-[10px] uppercase">
                       <div className="w-2 h-2 bg-accent"></div> <span>High Demand Zone</span>
                    </div>
                 </div>
                 <button className="w-full bg-ink text-white font-display font-black uppercase text-xs py-2 hover:bg-white hover:text-ink transition-all neo-border">
                    Refresh Feed
                 </button>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/95 neo-border p-4 flex gap-6">
                 <div>
                    <h5 className="font-display font-black text-[10px] uppercase opacity-60">Avg. Matching</h5>
                    <p className="font-display font-black text-2xl uppercase leading-none">1.2m</p>
                 </div>
                 <div className="border-l-2 border-ink pl-6">
                    <h5 className="font-display font-black text-[10px] uppercase opacity-60">System Load</h5>
                    <p className="font-display font-black text-2xl uppercase leading-none text-green-600">Stable</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Dispatch Logs */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
           <div className="neo-card bg-primary">
              <h3 className="font-display font-black uppercase text-xl mb-4 flex items-center gap-2">
                 <Search size={20} /> Monitoring
              </h3>
              <input 
                type="text" 
                placeholder="PROBE DRIVER ID..." 
                className="w-full bg-white/50 border-2 border-ink p-3 font-display font-bold uppercase text-xs focus:bg-white transition-all outline-none"
              />
           </div>

           <div className="neo-card flex-1 flex flex-col">
              <h3 className="font-display font-black uppercase text-xl mb-4 border-b-2 border-ink pb-2">Active Dispatches</h3>
              <div className="space-y-4 flex-1">
                 {activeDispatches.map((dispatch) => (
                   <div key={dispatch.id} className="p-3 border-2 border-ink hover:bg-bg cursor-pointer transition-all space-y-1 group">
                      <div className="flex justify-between font-display font-black text-[10px] uppercase">
                         <span className="opacity-60">{dispatch.id}</span>
                         <span className="text-secondary group-hover:underline">{dispatch.status}</span>
                      </div>
                      <p className="font-display font-black uppercase text-sm leading-tight">{dispatch.driver} → {dispatch.customer}</p>
                      <p className="text-[10px] font-bold uppercase opacity-60">{dispatch.zone} Sector</p>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-6 bg-ink text-white font-display font-black uppercase py-4 neo-border hover:bg-secondary transition-all">
                 View Global Log
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}
