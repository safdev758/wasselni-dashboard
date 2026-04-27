import React from 'react';
import { Shield, Star, Car, MapPin, Calendar, CheckCircle, XCircle, AlertCircle, ArrowLeft } from 'lucide-react';

interface DriverReviewProps {
  onBack: () => void;
  onInspectVehicle: () => void;
  onViewRides: (driverId: string) => void;
}

export default function DriverReview({ onBack, onInspectVehicle, onViewRides }: DriverReviewProps) {
  const driverData = {
    id: 'DRV-9042',
    name: 'Marcus Chen',
    joined: 'Jan 2024',
    rating: 4.92,
    totalRides: 1240,
    vehicle: 'Tesla Model 3 (2023)',
    plate: 'RIDE-882',
    status: 'Pending Verification',
    documents: [
      { name: 'Driver License', status: 'Approved', date: '2024-01-15' },
      { name: 'Vehicle Insurance', status: 'Pending', date: '2024-10-20' },
      { name: 'Background Check', status: 'Approved', date: '2024-01-18' },
      { name: 'Vehicle Inspection', status: 'Flagged', date: '2024-10-22' },
    ],
    recentScores: [
      { metric: 'Safety', score: 98 },
      { metric: 'Reliability', score: 95 },
      { metric: 'Punctuality', score: 92 },
    ],
    rideHistory: [
      { id: '#RF-8821', date: '2024-10-24', route: 'Downtown → Airport', fare: '$45.20', status: 'Completed' },
      { id: '#RF-8819', date: '2024-10-24', route: 'North Ave → Central Station', fare: '$22.10', status: 'Completed' },
      { id: '#RF-8815', date: '2024-10-23', route: 'Mall of Stars → Hillside', fare: '$31.50', status: 'Completed' },
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
          <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none">Driver Review</h2>
          <p className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm mt-1">Audit & Verification Console</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Col: Profile info */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="neo-card bg-primary">
            <div className="flex flex-col items-center text-center py-6">
              <div className="w-32 h-32 neo-border-3 bg-white mb-4 relative overflow-hidden">
                 <img 
                    src={`https://picsum.photos/seed/${driverData.id}/300/300`} 
                    alt={driverData.name}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                 />
              </div>
              <h3 className="text-3xl font-black font-display uppercase leading-tight mb-1">{driverData.name}</h3>
              <div className="flex items-center gap-2 bg-ink text-white px-3 py-1 font-display font-black text-xs uppercase">
                <Shield size={14} /> {driverData.id}
              </div>
            </div>
            <div className="border-t-2 border-ink pt-4 mt-2 space-y-2">
              <div className="flex justify-between font-display font-bold uppercase text-xs">
                <span>Rating</span>
                <span className="flex items-center gap-1 font-black underline underline-offset-2"><Star size={12} fill="currentColor" /> {driverData.rating}</span>
              </div>
              <div className="flex justify-between font-display font-bold uppercase text-xs">
                <span>Rides</span>
                <span className="font-black underline underline-offset-2">{driverData.totalRides}</span>
              </div>
              <div className="flex justify-between font-display font-bold uppercase text-xs">
                <span>Joined</span>
                <span className="font-black underline underline-offset-2">{driverData.joined}</span>
              </div>
            </div>
          </div>

          <div className="neo-card border-ink border-4">
            <h4 className="font-display font-black uppercase text-lg mb-4 flex items-center gap-2">
              <Car size={20} /> Vehicle Details
            </h4>
            <div className="space-y-4">
              <div>
                <label className="font-display font-bold uppercase text-[10px] text-ink/60">Model</label>
                <p className="font-display font-black text-lg uppercase leading-none">{driverData.vehicle}</p>
              </div>
              <div>
                <label className="font-display font-bold uppercase text-[10px] text-ink/60">License Plate</label>
                <p className="font-display font-black text-lg uppercase leading-none">{driverData.plate}</p>
              </div>
              <div className="pt-4 border-t-2 border-ink">
                <button 
                  onClick={onInspectVehicle}
                  className="w-full bg-secondary text-white font-display font-black uppercase py-3 neo-border hover:neo-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                >
                  Inspect Vehicle
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Documents and Scores */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="neo-card">
             <div className="flex justify-between items-center mb-6 border-b-2 border-ink pb-2">
                <h4 className="font-display font-black uppercase text-xl">Verification Audit</h4>
                <span className="bg-primary px-3 py-1 font-display font-black text-xs uppercase border-2 border-ink">Pending</span>
             </div>
             
             <div className="space-y-4">
                {driverData.documents.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-bg border-2 border-ink hover:translate-x-1 transition-transform cursor-pointer group">
                    <div className="flex items-center gap-4">
                      {doc.status === 'Approved' ? <CheckCircle className="text-green-600" /> : doc.status === 'Pending' ? <AlertCircle className="text-secondary" /> : <XCircle className="text-accent" />}
                      <div>
                        <p className="font-display font-black uppercase text-sm leading-none">{doc.name}</p>
                        <p className="font-sans font-bold text-[10px] text-ink/60 uppercase mt-1">Updated: {doc.date}</p>
                      </div>
                    </div>
                    <button className="bg-white border-2 border-ink px-4 py-1 font-display font-black text-[10px] uppercase hover:bg-ink hover:text-white transition-colors shadow-[2px_2px_0px_#1a1a1a] active:shadow-none">View doc</button>
                  </div>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="neo-card bg-bg">
                <h4 className="font-display font-black uppercase text-lg mb-6 leading-tight">Performance Scores</h4>
                <div className="space-y-6">
                  {driverData.recentScores.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between font-display font-black text-xs uppercase mb-1">
                        <span>{s.metric}</span>
                        <span>{s.score}%</span>
                      </div>
                      <div className="h-4 w-full bg-white border-2 border-ink relative">
                        <div className="absolute top-0 left-0 h-full bg-ink" style={{ width: `${s.score}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             <div className="flex flex-col gap-5">
                <button className="flex-1 bg-ink text-white font-display font-black uppercase text-xl py-6 neo-border hover:bg-bg hover:text-ink transition-all flex flex-col items-center justify-center gap-2">
                   <p className="text-[10px] opacity-60">Action Required</p>
                   Approve Driver
                </button>
                <div className="flex gap-4">
                   <button className="flex-1 bg-accent text-white font-display font-black uppercase py-4 neo-border hover:opacity-90 active:translate-y-1 transition-all">Reject</button>
                   <button className="flex-1 bg-white text-ink font-display font-black uppercase py-4 neo-border hover:bg-zinc-100 active:translate-y-1 transition-all">Flag</button>
                </div>
             </div>
          </div>
        </div>

        {/* Ride History Section */}
        <div className="col-span-12 mt-8">
          <div className="neo-card bg-white">
            <h4 className="font-display font-black uppercase text-2xl mb-6 border-b-4 border-ink pb-2">Recent Ride History</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-bg border-b-2 border-ink font-display font-black uppercase text-xs">
                  <tr>
                    <th className="p-4 border-r-2 border-ink">Ride ID</th>
                    <th className="p-4 border-r-2 border-ink">Date</th>
                    <th className="p-4 border-r-2 border-ink">Route</th>
                    <th className="p-4 border-r-2 border-ink text-right">Fare</th>
                    <th className="p-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="font-display font-bold">
                  {driverData.rideHistory.map((ride) => (
                    <tr key={ride.id} className="border-b-2 border-ink hover:bg-bg/50 transition-colors">
                      <td className="p-4 border-r-2 border-ink text-sm">{ride.id}</td>
                      <td className="p-4 border-r-2 border-ink text-sm">{ride.date}</td>
                      <td className="p-4 border-r-2 border-ink text-sm uppercase">{ride.route}</td>
                      <td className="p-4 border-r-2 border-ink text-right font-black text-lg">{ride.fare}</td>
                      <td className="p-4 text-center">
                        <span className="bg-ink text-white px-2 py-1 text-[10px] uppercase font-black">
                          {ride.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between items-center font-display font-bold uppercase text-xs opacity-60">
              <span>Showing last 3 rides</span>
              <button 
                onClick={() => onViewRides(driverData.id)}
                className="border-b-2 border-ink hover:text-secondary hover:border-secondary transition-colors cursor-pointer"
              >
                View full log
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
