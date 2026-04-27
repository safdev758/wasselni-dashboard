
import React from 'react';
import { LayoutDashboard, ShieldCheck, Users, Car, CircleDollarSign, Settings, Plus } from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard' as View, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'drivers' as View, label: 'Drivers', icon: ShieldCheck },
    { id: 'users' as View, label: 'Users', icon: Users },
    { id: 'rides' as View, label: 'Rides', icon: Car },
    { id: 'revenue' as View, label: 'Revenue', icon: CircleDollarSign },
    { id: 'settings' as View, label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-[220px] border-r-[3px] border-ink bg-bg flex flex-col h-full p-6 z-50">
      <div className="mb-10">
        <h1 className="text-2xl font-black text-ink uppercase tracking-tight font-display leading-none">RIDE_FLOW</h1>
      </div>

      <div className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 p-3 font-display font-black uppercase text-[13px] tracking-tight transition-all border-2 ${
                isActive
                  ? 'bg-primary text-ink border-ink neo-shadow'
                  : 'text-ink border-transparent hover:bg-secondary hover:text-white hover:border-ink'
              }`}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* New Dispatch Button Removed */}
    </nav>
  );
}
