import React from 'react';
import { ArrowLeft, Car, Shield, AlertTriangle, CheckCircle, Camera, Wrench } from 'lucide-react';

interface VehicleInspectionProps {
  onBack: () => void;
}

export default function VehicleInspection({ onBack }: VehicleInspectionProps) {
  const vehicleData = {
    id: 'VIN-772910',
    model: 'Tesla Model 3',
    year: '2023',
    color: 'Midnight Silver',
    mileage: '12,450 mi',
    plate: 'RIDE-882',
    lastInspection: '2024-01-10'
  };

  const checklist = [
    { item: 'Brake Pad Thickness', status: 'Passed' },
    { item: 'Tire Tread Depth', status: 'Failed' },
    { item: 'Signal & Headlights', status: 'Passed' },
    { item: 'Interior Hygiene', status: 'Warning' },
    { item: 'Battery Health (EV)', status: 'Passed' },
    { item: 'Exterior Body Dents', status: 'Warning' },
  ];

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
          <h2 className="text-5xl font-black font-display uppercase tracking-tighter leading-none">Vehicle Inspection</h2>
          <p className="font-sans font-bold text-ink/60 uppercase tracking-widest text-sm mt-1">Safety & Compliance Audit</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Gallery Section */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <div className="neo-card bg-ink p-2">
            <div className="aspect-video bg-white overflow-hidden neo-border">
              <img 
                src="https://picsum.photos/seed/tesla-main/1200/800"
                alt="Main" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
             {[1, 2, 3].map(i => (
               <div key={i} className="aspect-square neo-card p-1 hover:p-0 transition-all cursor-pointer">
                  <img 
                    src={`https://picsum.photos/seed/tesla-${i}/400/400`}
                    alt={`View ${i}`}
                    className="w-full h-full object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
               </div>
             ))}
          </div>
        </div>

        {/* Audit Details */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="neo-card bg-primary">
            <h3 className="font-display font-black uppercase text-xl mb-4 border-b-2 border-ink pb-2">Vehicle Profile</h3>
            <div className="grid grid-cols-2 gap-y-4">
               <div>
                 <p className="text-[10px] font-black uppercase opacity-60">VIN</p>
                 <p className="font-display font-black uppercase">{vehicleData.id}</p>
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase opacity-60">LP</p>
                 <p className="font-display font-black uppercase">{vehicleData.plate}</p>
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase opacity-60">ODO</p>
                 <p className="font-display font-black uppercase">{vehicleData.mileage}</p>
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase opacity-60">Status</p>
                 <span className="bg-ink text-white px-2 py-0.5 text-[10px] font-black uppercase">Suspended</span>
               </div>
            </div>
          </div>

          <div className="neo-card flex-1">
            <h3 className="font-display font-black uppercase text-xl mb-4 border-b-2 border-ink pb-2 flex items-center justify-between">
              Checklist
              <span className="text-xs opacity-60">Audit: {vehicleData.lastInspection}</span>
            </h3>
            <div className="space-y-3">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-bg border-2 border-ink">
                  <span className="font-display font-bold uppercase text-xs">{item.item}</span>
                  <div className="flex items-center gap-2">
                    {item.status === 'Passed' && <CheckCircle className="text-green-600" size={16} />}
                    {item.status === 'Warning' && <AlertTriangle className="text-secondary" size={16} />}
                    {item.status === 'Failed' && <Shield className="text-accent" size={16} />}
                    <span className="font-display font-black text-[10px] uppercase">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-ink text-white font-display font-black uppercase py-4 neo-border neo-shadow hover:neo-shadow-blue transition-all">
                Pass Audit
              </button>
              <button className="flex-1 bg-accent text-white font-display font-black uppercase py-4 neo-border neo-shadow hover:translate-y-1 transition-all">
                Fail & Lock
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
