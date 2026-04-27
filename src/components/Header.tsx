
import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-[220px] h-16 border-b-[3px] border-ink bg-bg flex items-center justify-between px-8 z-40">
      <div className="flex-1 flex items-center">
        <input
          type="text"
          className="w-[300px] neo-input"
          placeholder="SEARCH DATABASE..."
        />
      </div>

      <div className="flex items-center space-x-6 text-ink">
        <div className="flex items-center gap-3">
          <div className="font-display font-black text-[12px] uppercase">Admin: Alex V.</div>
          <div className="w-9 h-9 border-2 border-ink bg-primary">
            <img
              src="https://picsum.photos/seed/admin/200/200"
              alt="Admin Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
