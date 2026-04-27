import React from 'react';
import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

interface ResetPasswordProps {
  onBackToLogin: () => void;
}

export default function ResetPassword({ onBackToLogin }: ResetPasswordProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send reset link logic here
    alert('Reset link dispatched to your email.');
    onBackToLogin();
  };

  return (
    <div className="bg-bg text-ink min-h-screen flex items-center justify-center p-4 md:p-8 font-sans antialiased selection:bg-primary selection:text-ink">
      <main className="w-full max-w-lg">
        {/* Brutalist Card Container */}
        <div className="bg-surface-container-lowest border-[4px] border-ink p-8 md:p-12 shadow-[8px_8px_0px_#1a1a1a] flex flex-col gap-8 relative">
          {/* Header Section */}
          <div className="flex flex-col gap-2">
            <span className="font-display font-black italic text-xl tracking-tighter text-ink mb-4">RIDE_ADMIN</span>
            <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-ink leading-[1.1]">
              Reset<br />Password
            </h1>
            <p className="font-sans text-ink/60 font-medium mt-2 max-w-sm">
              Enter your authorized administrator email address. A secure reset link will be dispatched immediately.
            </p>
          </div>

          {/* Form Section */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="font-display font-bold uppercase text-sm tracking-widest text-ink flex items-center justify-between" htmlFor="email">
                Admin Email
                <Lock className="text-accent fill-current" size={16} />
              </label>
              {/* Brutalist Input: Thick borders, heavy bottom border focus state */}
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink">
                  <Mail size={20} />
                </span>
                <input
                  className="w-full bg-surface-container-low border-[3px] border-ink border-b-[6px] pl-12 pr-4 py-4 font-sans font-semibold text-ink placeholder:text-ink/30 focus:outline-none focus:border-secondary focus:border-b-[6px] focus:bg-secondary/5 transition-colors"
                  id="email"
                  name="email"
                  placeholder="admin@rideflow.system"
                  required
                  type="email"
                />
              </div>
            </div>

            {/* Brutalist Button: Solid fill, thick border, push-down animation via active state */}
            <button
              className="mt-4 w-full bg-primary text-ink border-[4px] border-ink py-4 px-6 font-display font-black text-xl uppercase tracking-wider shadow-[6px_6px_0px_#1a1a1a] hover:bg-ink hover:text-primary active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all flex items-center justify-center gap-3 group"
              type="submit"
            >
              Send Reset Link
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
            </button>
          </form>

          {/* Footer Action */}
          <div className="mt-4 border-t-[3px] border-ink pt-6 flex justify-center">
            <button
              onClick={onBackToLogin}
              className="inline-flex items-center gap-2 font-display font-bold text-ink hover:text-secondary hover:underline decoration-2 underline-offset-4 uppercase tracking-tight transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Login
            </button>
          </div>

          {/* Decorative geometric element */}
          <div className="absolute -top-[4px] -right-[4px] w-8 h-8 bg-accent border-[4px] border-ink z-10 hidden sm:block"></div>
        </div>
      </main>
    </div>
  );
}
