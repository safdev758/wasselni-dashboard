
import React, { useState, useEffect } from 'react';
import { Download, MoreHorizontal, User } from 'lucide-react';
import { adminAPI } from '../services/api';

interface UsersProps {
  onReviewUser: (id: string) => void;
}

type UserRow = {
  id: string;
  name: string;
  tier: string;
  email: string;
  rides: number;
  status: string;
  statusColor: string;
};

export default function Users({ onReviewUser }: UsersProps) {
  const [users, setUsers] = useState<UserRow[]>([]);

  useEffect(() => {
    adminAPI.listUsers().then((data) => {
      if (data?.users) {
        setUsers(data.users.map((u: Record<string, unknown>) => ({
          id: (u.id as string)?.substring(0, 8) || '',
          name: u.name as string || 'Unnamed',
          tier: 'Standard',
          email: u.email as string || '',
          rides: u.total_rides as number || 0,
          status: 'Active',
          statusColor: 'bg-secondary/10',
        })));
      }
    }).catch(() => {});
  }, []);

  return (
    <div className="space-y-8">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black font-display uppercase mb-2">User Registry</h2>
          <p className="text-lg font-bold text-ink/60">Manage active riders and corporate accounts.</p>
        </div>
        <div className="flex space-x-4">
          <select className="bg-white border-2 border-ink py-3 px-4 font-display font-bold uppercase neo-shadow appearance-none">
            <option>ALL STATUSES</option>
            <option>ACTIVE</option>
            <option>SUSPENDED</option>
          </select>
          <button className="bg-ink text-white border-2 border-ink px-6 py-3 font-display font-bold uppercase neo-shadow hover:bg-white hover:text-ink transition-colors flex items-center space-x-2">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      <div className="neo-border-3 neo-shadow-lg bg-white overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-3 border-ink bg-primary text-ink font-display text-lg uppercase">
              <th className="p-4 border-r-2 border-ink w-24">ID</th>
              <th className="p-4 border-r-2 border-ink">User Details</th>
              <th className="p-4 border-r-2 border-ink">Contact</th>
              <th className="p-4 border-r-2 border-ink text-center">Total Rides</th>
              <th className="p-4 border-r-2 border-ink">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b-2 border-ink hover:bg-ink/5 transition-colors">
                <td className="p-4 border-r-2 border-ink font-display font-bold">{user.id}</td>
                <td className="p-4 border-r-2 border-ink">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 neo-border bg-bg flex items-center justify-center overflow-hidden">
                      <User size={20} className="text-ink/20" />
                    </div>
                    <div>
                      <p className="font-bold text-ink">{user.name}</p>
                      <p className="text-sm text-ink/60 font-display uppercase">{user.tier}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-r-2 border-ink font-bold text-ink/60">{user.email}</td>
                <td className="p-4 border-r-2 border-ink text-center font-display font-black text-2xl">{user.rides}</td>
                <td className="p-4 border-r-2 border-ink">
                  <span className={`inline-block px-3 py-1 neo-border font-display font-bold text-sm uppercase ${user.statusColor}`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => onReviewUser(user.id)}
                    className="px-4 py-2 font-display font-black uppercase text-xs neo-border bg-white hover:bg-secondary hover:text-white transition-all active:translate-y-1"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 border-t-3 border-ink flex items-center justify-between bg-white">
          <span className="font-display font-bold uppercase text-sm">Showing 1-4 of 1,204 Users</span>
          <div className="flex space-x-2">
            <button className="px-4 py-2 neo-border font-display font-bold uppercase hover:bg-ink hover:text-white transition-colors disabled:opacity-50" disabled>Prev</button>
            <button className="px-4 py-2 neo-border bg-ink text-white font-display font-bold uppercase">1</button>
            <button className="px-4 py-2 neo-border font-display font-bold uppercase hover:bg-ink hover:text-white transition-colors">2</button>
            <button className="px-4 py-2 neo-border font-display font-bold uppercase hover:bg-ink hover:text-white transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
