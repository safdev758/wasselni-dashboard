import React from 'react';
import { ArrowLeft, MapPin, Clock, CircleDollarSign, User, Shield, Navigation, Star, Phone } from 'lucide-react';

interface RideReviewProps {
  onBack: () => void;
}

export default function RideReview({ onBack }: RideReviewProps) {
  const rideData = {
    id: '#RF-9042',
    date: 'Oct 24, 2024',
    startTime: '14:30',
    endTime: '14:55',
    duration: '25 min',
    distance: '8.4 miles',
    fare: '$45.00',
    status: 'Completed',
    origin: '124 Main St, Downtown',
    destination: 'Airport Terminal 2',
    customer: { name: 'Sarah Adams', id: 'USR-773', rating: 4.9 },
    driver: { name: 'Mike Thompson', id: 'DRV-102', rating: 4.9, vehicle: 'Toyota Prius (XYZ-9821)' },
    breakdown: [
      { label: 'Base Fare', value: '$5.00' },
      { label: 'Distance (8.4 mi)', value: '$22.00' },
      { label: 'Time (25 min)', value: '$12.50' },
      { label: 'Surge (1.2x)', value: '$5.50' },
    ]
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
          <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none">Ride Details</h2>
          <p className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm mt-1">Operational Audit Context</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Map & Path */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="neo-card p-2 bg-ink h-[500px]">
             <div className="w-full h-full bg-bg neo-border relative overflow-hidden">
                {/* Simulated Map */}
                <img 
                  src="https://picsum.photos/seed/ridemap/1200/800"
                  alt="Path Map" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                   <div className="bg-primary p-4 neo-border-3 font-display font-black uppercase text-xl shadow-lg border-ink rotate-2">
                      Map Data Simulated
                   </div>
                </div>
                
                {/* Route Markers */}
                <div className="absolute top-10 left-10 p-3 bg-white neo-border-3 border-ink flex items-center gap-2">
                   <div className="w-3 h-3 bg-secondary neo-border-2"></div>
                   <span className="font-display font-black text-xs uppercase">{rideData.origin}</span>
                </div>
                <div className="absolute bottom-10 right-10 p-3 bg-white neo-border-3 border-ink flex items-center gap-2">
                   <div className="w-3 h-3 bg-accent neo-border-2"></div>
                   <span className="font-display font-black text-xs uppercase">{rideData.destination}</span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="neo-card bg-bg flex flex-col justify-center items-center text-center p-6">
                <Clock className="mb-2" />
                <p className="text-[10px] font-black uppercase opacity-60">Duration</p>
                <p className="font-display font-black text-2xl uppercase tracking-tighter">{rideData.duration}</p>
             </div>
             <div className="neo-card bg-bg flex flex-col justify-center items-center text-center p-6">
                <Navigation className="mb-2" />
                <p className="text-[10px] font-black uppercase opacity-60">Distance</p>
                <p className="font-display font-black text-2xl uppercase tracking-tighter">{rideData.distance}</p>
             </div>
             <div className="neo-card bg-primary flex flex-col justify-center items-center text-center p-6">
                <CircleDollarSign className="mb-2" />
                <p className="text-[10px] font-black uppercase opacity-60">Total Fare</p>
                <p className="font-display font-black text-2xl uppercase tracking-tighter">{rideData.fare}</p>
             </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="neo-card space-y-4">
             <h3 className="font-display font-black uppercase text-xl border-b-2 border-ink pb-2">Fare Breakdown</h3>
             <div className="space-y-3">
                {rideData.breakdown.map((item, i) => (
                  <div key={i} className="flex justify-between font-display font-bold uppercase text-xs">
                     <span className="opacity-60">{item.label}</span>
                     <span>{item.value}</span>
                  </div>
                ))}
                <div className="border-t-2 border-ink pt-3 flex justify-between font-display font-black uppercase text-lg">
                   <span>Final Total</span>
                   <span>{rideData.fare}</span>
                </div>
             </div>
          </div>

          <div className="neo-card bg-white space-y-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary neo-border flex items-center justify-center text-white">
                   <User size={24} />
                </div>
                <div className="flex-1">
                   <p className="text-[10px] font-black uppercase opacity-60">Customer</p>
                   <h4 className="font-display font-black uppercase leading-tight">{rideData.customer.name}</h4>
                   <div className="flex items-center gap-1 text-[10px] font-black uppercase border-b border-ink w-fit">
                      <Star size={10} fill="currentColor" /> {rideData.customer.rating}
                   </div>
                </div>
                <button className="p-3 neo-border hover:bg-ink hover:text-white transition-colors">
                   <Phone size={18} />
                </button>
             </div>

             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary neo-border flex items-center justify-center text-ink">
                   <User size={24} />
                </div>
                <div className="flex-1">
                   <p className="text-[10px] font-black uppercase opacity-60">Driver</p>
                   <h4 className="font-display font-black uppercase leading-tight">{rideData.driver.name}</h4>
                   <p className="text-[10px] font-bold opacity-60 uppercase">{rideData.driver.vehicle}</p>
                </div>
                <button className="p-3 neo-border hover:bg-ink hover:text-white transition-colors">
                   <Phone size={18} />
                </button>
             </div>
          </div>

          <div className="neo-card bg-ink text-white">
             <h3 className="font-display font-black uppercase text-xl mb-4 flex items-center gap-2">
                <Shield size={20} className="text-primary" /> Admin Ops
             </h3>
             <div className="space-y-3">
                <button className="w-full bg-white text-ink font-display font-black uppercase py-4 neo-border hover:bg-primary transition-all">
                   Adjust Fare
                </button>
                <button className="w-full border-2 border-white/20 text-white font-display font-black uppercase py-4 hover:bg-white/10 transition-all">
                   Issue Refund
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
