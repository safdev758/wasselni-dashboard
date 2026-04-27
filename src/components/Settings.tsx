
import React, { useState } from 'react';
import { Camera, Lock, AlertTriangle, Delete, RotateCcw, CheckCircle } from 'lucide-react';

export default function Settings() {
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleAction = (action: string) => {
    setSaveStatus(action);
    setTimeout(() => setSaveStatus(null), 2000);
  };

  return (
    <div className="space-y-16 max-w-6xl">
      <header className="border-b-[6px] border-ink pb-8 flex justify-between items-end">
        <div>
          <h2 className="font-display text-8xl font-black uppercase tracking-tighter leading-none">Settings</h2>
          <p className="font-bold text-xl mt-4 text-ink/60">System & Account Configuration</p>
        </div>
        {saveStatus && (
          <div className="bg-green-500 text-white px-4 py-2 neo-border font-display font-black uppercase text-xs flex items-center gap-2 animate-bounce">
            <CheckCircle size={16} /> {saveStatus} SUCCESSFUL
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
        <section className="xl:col-span-8 space-y-12">
          {/* Profile Section */}
          <div className="bg-white p-8 border-4 border-ink neo-shadow-lg relative">
            <div className="absolute -top-6 -left-6 bg-primary text-ink font-display font-bold uppercase py-2 px-4 neo-border border-ink">
              Profile
            </div>
            <div className="mt-6 flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0 flex flex-col items-center gap-4">
                <div className="w-32 h-32 neo-border bg-bg relative overflow-hidden group cursor-pointer shadow-[4px_4px_0px_0px_#1a1a1a]">
                  <img
                    src="https://picsum.photos/seed/admin-profile/300/300"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ink/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" size={32} />
                  </div>
                </div>
                <button className="font-display font-bold uppercase text-xs tracking-widest border-b-2 border-ink hover:text-secondary hover:border-secondary transition-colors text-ink">
                  Update Avatar
                </button>
              </div>
              <div className="flex-1 w-full space-y-6">
                <div>
                  <label className="font-display font-bold uppercase text-sm mb-2 block text-ink">Full Name</label>
                  <input className="neo-input w-full" type="text" defaultValue="Super Admin" />
                </div>
                <div>
                  <label className="font-display font-bold uppercase text-sm mb-2 block text-ink">Email Address</label>
                  <input className="neo-input w-full" type="email" defaultValue="admin@rideflow.app" />
                </div>
                <div>
                  <label className="font-display font-bold uppercase text-sm mb-2 block text-ink">Role</label>
                  <input className="neo-input w-full bg-bg/50 border-dashed cursor-not-allowed" disabled type="text" defaultValue="System Administrator" />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => handleAction('PROFILE')}
                className="px-8 py-3 bg-ink text-white font-display font-bold uppercase tracking-wider neo-button"
              >
                Save Profile
              </button>
            </div>
          </div>

          {/* Platform Config Section */}
          <div className="bg-ink p-8 border-4 border-ink neo-shadow-lg relative text-white">
            <div className="absolute -top-6 -right-6 bg-accent text-white font-display font-bold uppercase py-2 px-4 neo-border border-ink">
              Platform Config
            </div>
            <div className="mt-6 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="font-display font-bold uppercase text-sm text-primary">Default Commission Rate (%)</label>
                  <div className="flex items-center">
                    <input className="w-24 bg-transparent border-4 border-primary text-primary p-3 text-4xl font-display font-black text-center focus:outline-none focus:bg-primary focus:text-ink" type="number" defaultValue="25" />
                  </div>
                  <p className="text-xs font-bold text-white/40 uppercase">Applied to all new driver registrations.</p>
                </div>
                <div className="space-y-4">
                  <label className="font-display font-bold uppercase text-sm text-primary">Base Fare ($)</label>
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-display font-black text-primary">$</span>
                    <input className="w-32 bg-transparent border-4 border-primary text-primary p-3 text-4xl font-display font-black focus:outline-none focus:bg-primary focus:text-ink" type="number" step="0.5" defaultValue="5.00" />
                  </div>
                </div>
              </div>
              <div className="h-1 bg-primary/20 w-full"></div>
              <div className="flex items-center justify-between p-6 border-4 border-primary bg-white/5">
                <div>
                  <h4 className="font-display font-black text-2xl text-primary uppercase">Surge Pricing</h4>
                  <p className="text-sm text-white/60 mt-1 uppercase font-bold">Multiply fares during high demand.</p>
                </div>
                <button className="w-16 h-8 bg-bg neo-border relative">
                  <div className="absolute top-1 right-1 bottom-1 w-6 bg-primary neo-border border-ink"></div>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="xl:col-span-4 space-y-12">
          {/* Security Card */}
          <div className="bg-white p-8 neo-border neo-shadow-lg border-ink border-4">
            <h3 className="font-display font-black text-2xl uppercase border-b-4 border-ink pb-4 mb-6 flex items-center justify-between text-ink">
              Security <Lock size={24} />
            </h3>
            <div className="space-y-6">
              <div>
                <label className="font-display font-bold uppercase text-xs mb-1 block text-ink">Current Password</label>
                <input className="neo-input w-full" type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="font-display font-bold uppercase text-xs mb-1 block text-ink">New Password</label>
                <input className="neo-input w-full" type="password" placeholder="••••••••" />
              </div>
              <button 
                onClick={() => handleAction('PASSWORD')}
                className="w-full py-4 bg-bg text-ink font-display font-bold uppercase neo-border border-ink hover:bg-primary transition-colors"
              >
                Change Password
              </button>
            </div>
            <div className="mt-8 pt-6 border-t-4 border-dashed border-ink">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-bold uppercase text-sm text-ink">Two-Factor Auth</span>
                <span className="px-2 py-1 bg-primary text-ink text-xs font-bold uppercase neo-border border-ink">Active</span>
              </div>
              <button className="w-full py-3 bg-white text-accent font-display font-bold uppercase border-2 border-accent hover:bg-accent hover:text-white transition-colors">
                Disable 2FA
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-accent/10 p-8 border-4 border-accent neo-shadow-lg">
            <h3 className="font-display font-black text-xl uppercase text-accent mb-4 flex items-center gap-2">
              <AlertTriangle size={24} /> Danger Zone
            </h3>
            <p className="font-bold text-sm text-accent/80 mb-6 uppercase">These actions are irreversible.</p>
            <div className="space-y-4">
              <button 
                onClick={() => handleAction('CACHE PURGE')}
                className="w-full py-4 bg-white text-accent font-display font-bold uppercase neo-border border-accent hover:bg-accent hover:text-white transition-all flex justify-between px-6 items-center"
              >
                Purge Cache <Delete size={20} />
              </button>
              <button 
                onClick={() => handleAction('SYSTEM RESET')}
                className="w-full py-4 bg-accent text-white font-display font-black uppercase neo-border border-ink hover:bg-ink transition-all flex justify-between px-6 items-center"
              >
                Reset Platform <RotateCcw size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
