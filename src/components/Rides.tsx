
import React from 'react';
import { Download, Filter, ArrowDown } from 'lucide-react';

interface RidesProps {
  onReviewRide: (id: string) => void;
}

export default function Rides({ onReviewRide }: RidesProps) {
  const rides = [
    { id: '#RF-9042', date: 'Oct 24, 14:30', customer: 'Sarah Adams', driver: 'Mike T.', route: '124 Main St → Airport T2', fare: '$45.00', status: 'Completed', statusColor: 'bg-ink text-white' },
    { id: '#RF-9043', date: 'Oct 24, 14:45', customer: 'James Riley', driver: 'Sarah K.', route: 'Downtown Hotel → Convention Center', fare: '$18.50', status: 'Active', statusColor: 'bg-primary' },
    { id: '#RF-9044', date: 'Oct 24, 15:10', customer: 'Peter Lin', driver: 'Dave W.', route: 'Central Station → North Point Park', fare: '$22.00', status: 'Canceled', statusColor: 'bg-accent text-white' },
    { id: '#RF-9045', date: 'Oct 24, 16:00', customer: 'Elena Myer', driver: 'Mike T.', route: 'Tech Hub → Westside Mall', fare: '$31.00', status: 'Completed', statusColor: 'bg-ink text-white' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10 border-b-4 border-ink pb-4">
        <div>
          <h2 className="text-7xl font-black font-display uppercase tracking-tighter leading-none">Ride Log</h2>
          <p className="font-bold uppercase mt-2 text-ink/60 text-lg">System Activity & Records</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-white neo-button px-4 py-2">
            <Filter size={18} />
            Filter
          </button>
          <button className="flex items-center gap-2 bg-white neo-button px-4 py-2">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white border-4 border-ink neo-shadow-lg overflow-x-auto">
        <table className="w-full text-left min-w-[900px]">
          <thead>
            <tr className="bg-ink/5 border-b-4 border-ink font-display uppercase text-sm tracking-widest">
              <th className="p-5 border-r-2 border-ink">ID</th>
              <th className="p-5 border-r-2 border-ink flex items-center justify-between cursor-pointer hover:bg-primary transition-colors group">
                Date <ArrowDown size={16} />
              </th>
              <th className="p-5 border-r-2 border-ink">Customer</th>
              <th className="p-5 border-r-2 border-ink">Driver</th>
              <th className="p-5 border-r-2 border-ink w-1/4">Route</th>
              <th className="p-5 border-r-2 border-ink">Fare</th>
              <th className="p-5">Status</th>
            </tr>
          </thead>
          <tbody className="font-display font-bold">
            {rides.map((ride, i) => (
              <tr key={ride.id} className={`border-b-2 border-ink hover:bg-ink/5 group ${i === 1 ? 'bg-primary/10' : ''}`}>
                <td className="p-5 border-r-2 border-ink">{ride.id}</td>
                <td className="p-5 border-r-2 border-ink whitespace-nowrap">{ride.date}</td>
                <td className="p-5 border-r-2 border-ink">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary neo-border rounded-full flex items-center justify-center text-white text-xs">
                      {ride.customer.split(' ').map(n => n[0]).join('')}
                    </div>
                    {ride.customer}
                  </div>
                </td>
                <td className="p-5 border-r-2 border-ink">{ride.driver}</td>
                <td className="p-5 border-r-2 border-ink text-sm font-normal text-ink/60">{ride.route}</td>
                <td className="p-5 border-r-2 border-ink text-xl font-black">{ride.fare}</td>
                <td className="p-5 flex items-center justify-between">
                  <span className={`inline-block px-3 py-1 font-display text-xs uppercase tracking-wider neo-border neo-shadow ${ride.statusColor}`}>
                    {ride.status}
                  </span>
                  <button 
                    onClick={() => onReviewRide(ride.id)}
                    className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 bg-ink text-white font-display font-black text-[10px] uppercase neo-border"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-t-4 border-ink bg-bg p-4 flex justify-between items-center font-display font-bold uppercase text-sm">
          <span>Showing 1-4 of 1,204</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 neo-border hover:bg-ink hover:text-white transition-colors disabled:opacity-50" disabled>PREV</button>
            <button className="px-4 py-2 neo-border bg-primary neo-shadow active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
