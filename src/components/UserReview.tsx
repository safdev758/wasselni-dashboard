import React from 'react';
import { Shield, Star, MapPin, Calendar, CreditCard, ArrowLeft, History, AlertTriangle } from 'lucide-react';

interface UserReviewProps {
  onBack: () => void;
  onViewAudit: (entityId: string) => void;
  onViewRides: (userId: string) => void;
}

export default function UserReview({ onBack, onViewAudit, onViewRides }: UserReviewProps) {
  const userData = {
    id: 'USR-8821',
    name: 'Alice Wong',
    joined: 'Mar 2023',
    rating: 4.88,
    totalRides: 42,
    tier: 'Premium Tier',
    status: 'Active',
    email: 'alice.w@example.com',
    paymentMethods: [
      { type: 'Visa', last4: '4242', status: 'Primary' },
      { type: 'Apple Pay', last4: '---', status: 'Active' },
    ],
    rideHistory: [
      { id: '#RF-9012', date: '2024-10-24', route: 'Downtown Hotel → Airport', fare: '$42.50', driver: 'Marcus C.' },
      { id: '#RF-8988', date: '2024-10-20', route: '6th St Mall → Home', fare: '$18.00', driver: 'Elena R.' },
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
          <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none">User Profile</h2>
          <p className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm mt-1">Passenger Audit Console</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Profile Card */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="neo-card bg-secondary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
               <History size={120} strokeWidth={4} />
            </div>
            <div className="flex flex-col items-center text-center py-6 relative z-10">
              <div className="w-32 h-32 neo-border-3 bg-white mb-4 relative overflow-hidden">
                 <img 
                    src={`https://picsum.photos/seed/${userData.id}/300/300`} 
                    alt={userData.name}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                 />
              </div>
              <h3 className="text-3xl font-black font-display uppercase leading-tight mb-1">{userData.name}</h3>
              <span className="bg-white text-ink px-3 py-1 font-display font-black text-xs uppercase neo-border">{userData.tier}</span>
            </div>
            
            <div className="border-t-2 border-white/20 pt-4 mt-2 space-y-2 relative z-10">
              <div className="flex justify-between font-display font-bold uppercase text-xs">
                <span>Rating</span>
                <span className="flex items-center gap-1 font-black underline underline-offset-2"><Star size={12} fill="currentColor" /> {userData.rating}</span>
              </div>
              <div className="flex justify-between font-display font-bold uppercase text-xs">
                <span>Rides</span>
                <span className="font-black underline underline-offset-2">{userData.totalRides}</span>
              </div>
            </div>
          </div>

          <div className="neo-card">
            <h4 className="font-display font-black uppercase text-lg mb-4 border-b-2 border-ink pb-2">Account Status</h4>
            <div className="space-y-4">
               <div className="flex justify-between items-center">
                  <span className="font-display font-black text-xs uppercase">Current</span>
                  <span className="bg-green-500 text-white px-2 py-1 text-[10px] font-black uppercase neo-border">VERIFIED</span>
               </div>
               <button className="w-full bg-accent text-white font-display font-black uppercase py-4 neo-border hover:neo-shadow active:translate-y-1 transition-all">
                  Suspend Account
               </button>
            </div>
          </div>
        </div>

        {/* Details & History */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
           <div className="neo-card bg-bg">
              <h4 className="font-display font-black uppercase text-xl mb-6 border-b-2 border-ink pb-2">Recent Ride History</h4>
              <div className="space-y-4">
                 {userData.rideHistory.map((ride, i) => (
                   <div key={i} className="bg-white p-4 neo-border flex justify-between items-center group cursor-pointer hover:bg-ink hover:text-white transition-all">
                      <div>
                         <p className="font-display font-black uppercase leading-tight">{ride.route}</p>
                         <p className="text-[10px] font-bold opacity-60 uppercase mt-1">Driver: {ride.driver} • {ride.date}</p>
                      </div>
                      <div className="text-right">
                         <p className="font-display font-black text-xl leading-none">{ride.fare}</p>
                         <p className="text-[10px] uppercase font-bold opacity-60">ID: {ride.id}</p>
                      </div>
                   </div>
                 ))}
                 <button 
                   onClick={() => onViewRides(userData.id)}
                   className="w-full border-t-2 border-ink pt-4 font-display font-black uppercase text-xs text-ink/60 hover:text-ink"
                 >
                   View complete ride log
                 </button>
              </div>
           </div>

           <div className="neo-card">
              <h4 className="font-display font-black uppercase text-xl mb-6 border-b-2 border-ink pb-2">Financial Profile</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <p className="text-[10px] font-black uppercase opacity-60 mb-2">Stored Methods</p>
                    <div className="space-y-2">
                       {userData.paymentMethods.map((m, i) => (
                         <div key={i} className="flex items-center gap-3 p-3 border-2 border-ink bg-white">
                            <CreditCard size={18} />
                            <div>
                               <p className="font-display font-black text-xs uppercase">{m.type} ****{m.last4}</p>
                               <p className="text-[10px] font-bold opacity-60 uppercase">{m.status}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex flex-col justify-center gap-4 bg-ink p-6 text-white neo-border">
                    <div className="flex items-center gap-3">
                       <Shield className="text-primary" />
                       <h5 className="font-display font-black uppercase text-sm leading-tight">Fraud Detection</h5>
                    </div>
                    <p className="text-[10px] uppercase font-bold text-white/60">Risk Score: 0.02 (Low)</p>
                    <button 
                      onClick={() => onViewAudit(userData.id)}
                      className="border border-white/40 bg-white/10 text-white font-display font-black uppercase text-[10px] py-1"
                    >
                      Audit Logs
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
