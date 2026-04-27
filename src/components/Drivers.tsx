
import React, { useState, useEffect } from 'react';
import { Download, Filter, MoreHorizontal, Star, User, Search } from 'lucide-react';
import { adminAPI } from '../services/api';
import { View } from '../types';

interface DriversProps {
  onReviewDriver: (id: string) => void;
}

type DriverRow = {
  id: string;
  name: string;
  phone: string;
  vehicle: string;
  plate: string;
  rating: number | string;
  status: string;
  earnings: string;
  color: string;
};

export default function Drivers({ onReviewDriver }: DriversProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [drivers, setDrivers] = useState<DriverRow[]>([]);

  useEffect(() => {
    adminAPI.listDrivers().then((data) => {
      if (data?.drivers) {
        setDrivers(data.drivers.map((d: Record<string, unknown>) => ({
          id: (d.id as string)?.substring(0, 8) || '',
          name: d.name as string || 'Unnamed',
          phone: d.phone as string || '',
          vehicle: (d.vehicle_make as string || '') + ' ' + (d.vehicle_model as string || ''),
          plate: d.plate_number as string || '',
          rating: d.rating as number || 0,
          status: d.is_online ? 'Online' : (d.status === 'pending' ? 'Doc Review' : 'Offline'),
          earnings: '',
          color: d.is_online ? 'bg-primary' : (d.status === 'pending' ? 'bg-accent text-white' : 'bg-ink/10'),
        })));
      }
    }).catch(() => {});
  }, []);

  const filteredDrivers = drivers.filter(driver => 
    driver.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    driver.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-6xl font-black font-display uppercase tracking-tighter leading-none mb-2">Driver Management</h2>
          <p className="text-ink/60 font-medium border-l-4 border-primary pl-4 uppercase text-lg">Monitor fleet and performance.</p>
        </div>
        <div className="flex gap-4">
          <div className="neo-border p-4 bg-primary neo-shadow min-w-[140px]">
            <p className="font-display font-bold uppercase text-xs mb-1">Active Now</p>
            <p className="text-4xl font-black font-display">248</p>
          </div>
          <div className="neo-border p-4 bg-white neo-shadow min-w-[140px]">
            <p className="font-display font-bold uppercase text-xs mb-1">Pending Verif.</p>
            <p className="text-4xl font-black font-display text-accent">12</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-white neo-border neo-shadow">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            {['All Drivers', 'Online', 'Needs Verification'].map((f, i) => (
              <button key={f} className={`px-4 py-2 font-display font-bold uppercase text-sm ${i === 0 ? 'bg-ink text-white' : 'hover:bg-ink/10'}`}>
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 border-2 border-ink bg-bg px-3 py-2 w-64">
            <Search size={16} className="text-ink/50" />
            <input 
              type="text" 
              placeholder="SEARCH NAME OR ID..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent font-display font-bold text-xs uppercase focus:outline-none w-full placeholder:text-ink/40 text-ink"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button className="neo-button bg-white px-4 py-2 text-sm flex items-center gap-2">
            <Filter size={16} /> Filter
          </button>
          <button className="neo-button bg-white px-4 py-2 text-sm flex items-center gap-2">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      <div className="neo-border neo-shadow-lg bg-white overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white border-b-4 border-ink font-display font-black uppercase text-sm">
            <tr>
              <th className="p-4 border-r-2 border-ink w-20 text-center">ID</th>
              <th className="p-4 border-r-2 border-ink">Driver</th>
              <th className="p-4 border-r-2 border-ink">Vehicle</th>
              <th className="p-4 border-r-2 border-ink text-center">Rating</th>
              <th className="p-4 border-r-2 border-ink">Status</th>
              <th className="p-4 border-r-2 border-ink text-right">Weekly Earnings</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="font-display font-bold">
            {filteredDrivers.map((driver) => (
              <tr key={driver.id} className="border-b-2 border-ink hover:bg-ink/5 group">
                <td className="p-4 border-r-2 border-ink text-center text-ink/40">{driver.id}</td>
                <td className="p-4 border-r-2 border-ink">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 neo-border bg-bg flex items-center justify-center overflow-hidden">
                      <User size={24} className="text-ink/20" />
                    </div>
                    <div>
                      <div className="uppercase text-lg leading-tight">{driver.name}</div>
                      <div className="font-sans text-xs text-ink/40">{driver.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-r-2 border-ink">
                  <div className="uppercase">{driver.vehicle}</div>
                  <div className="text-xs bg-ink text-white px-2 py-0.5 inline-block">{driver.plate}</div>
                </td>
                <td className="p-4 border-r-2 border-ink text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-black">{driver.rating}</span>
                    {driver.rating !== 'N/A' && <Star size={18} className="fill-primary text-primary" />}
                  </div>
                </td>
                <td className="p-4 border-r-2 border-ink">
                  <span className={`inline-block px-3 py-1 neo-border text-xs uppercase neo-shadow ${driver.color}`}>
                    {driver.status}
                  </span>
                </td>
                <td className="p-4 border-r-2 border-ink text-right text-2xl font-black">{driver.earnings}</td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => onReviewDriver(driver.id)}
                    className="px-4 py-2 font-display font-black uppercase text-xs neo-border bg-white hover:bg-primary transition-all active:translate-y-1"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
