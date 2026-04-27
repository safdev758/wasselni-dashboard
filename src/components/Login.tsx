import React, { useState } from 'react';
import { Mail, Lock, Zap, ArrowRight, AlertTriangle, Check } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onForgotPassword: () => void;
}

export default function Login({ onLogin, onForgotPassword }: LoginProps) {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans text-ink relative overflow-hidden bg-bg selection:bg-primary selection:text-ink">
      {/* Decorative Background Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-[0.03]">
        <h1 className="font-display font-black text-[30vw] leading-none text-ink whitespace-nowrap transform -rotate-6">
          RIDEFLOW
        </h1>
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-lg px-4 sm:px-6 relative z-10">
        {/* Auth Card - Neo-Brutalist Style */}
        <div className="bg-surface-container-lowest border-4 border-ink p-8 sm:p-12 shadow-[8px_8px_0px_0px_#1a1a1a] rounded-none flex flex-col gap-10">
          {/* Header Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="text-4xl text-ink fill-current" size={40} />
              <div className="h-1 w-12 bg-ink"></div>
            </div>
            <h1 className="font-display text-5xl font-black uppercase tracking-tighter text-ink leading-none">
              Admin<br />Login
            </h1>
            <div className="border-t-4 border-ink pt-3 mt-4 w-max">
              <p className="font-sans text-ink/60 font-bold uppercase tracking-widest text-xs">
                System Access Required
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            {/* Input Group: Email */}
            <div className="flex flex-col gap-2 relative group">
              <label className="font-display font-bold uppercase text-sm text-ink flex justify-between items-end" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-low border-b-4 border-x-0 border-t-0 border-ink py-4 px-3 pl-12 text-ink font-sans text-lg focus:outline-none focus:ring-0 focus:border-primary focus:bg-surface-container transition-colors rounded-none placeholder-ink/30 peer"
                  id="email"
                  name="email"
                  placeholder="admin@rideflow.system"
                  required
                  type="email"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-ink peer-focus:text-ink transition-colors" size={20} />
              </div>
            </div>

            {/* Input Group: Password */}
            <div className="flex flex-col gap-2 relative group">
              <label className="font-display font-bold uppercase text-sm text-ink flex justify-between items-end" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full bg-surface-container-low border-b-4 border-x-0 border-t-0 border-ink py-4 px-3 pl-12 text-ink font-sans text-lg focus:outline-none focus:ring-0 focus:border-primary focus:bg-surface-container transition-colors rounded-none placeholder-ink/30 peer"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type="password"
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-ink peer-focus:text-ink transition-colors" size={20} />
              </div>
            </div>

            {/* Form Options */}
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-3 cursor-pointer group relative">
                <input
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="absolute opacity-0 w-0 h-0"
                  type="checkbox"
                />
                <div className={`w-7 h-7 border-4 border-ink bg-white flex items-center justify-center transition-colors ${rememberMe ? 'bg-ink' : ''}`}>
                  {rememberMe && <Check className="text-primary font-bold" size={20} />}
                </div>
                <span className="font-sans font-bold text-sm text-ink uppercase select-none group-hover:text-secondary transition-colors">
                  Remember Me
                </span>
              </label>
              <button
                type="button"
                onClick={onForgotPassword}
                className="font-sans font-bold text-sm text-secondary underline decoration-2 decoration-secondary underline-offset-4 hover:text-ink hover:decoration-ink transition-colors uppercase"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Action */}
            <button
              className="mt-6 w-full bg-primary text-ink border-4 border-ink font-display font-black text-2xl uppercase py-5 px-6 shadow-[6px_6px_0px_0px_#1a1a1a] hover:bg-ink hover:text-primary active:shadow-none active:translate-x-[6px] active:translate-y-[6px] transition-all flex items-center justify-between group rounded-none"
              type="submit"
            >
              <span>Login</span>
              <ArrowRight className="text-3xl group-hover:translate-x-2 transition-transform border-2 border-transparent group-hover:border-primary rounded-full p-1" size={32} />
            </button>
          </form>

          {/* Decorative Warning */}
          <div className="bg-surface-container p-4 border-l-4 border-accent mt-2 flex gap-3 items-start">
            <AlertTriangle className="text-accent shrink-0" size={20} />
            <p className="font-sans text-xs text-ink/60 font-bold uppercase leading-relaxed">
              Unauthorized access to this system is strictly prohibited and monitored.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
