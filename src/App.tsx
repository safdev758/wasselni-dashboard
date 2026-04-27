/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Drivers from './components/Drivers';
import Users from './components/Users';
import Rides from './components/Rides';
import Revenue from './components/Revenue';
import Settings from './components/Settings';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import DriverReview from './components/DriverReview';
import VehicleInspection from './components/VehicleInspection';
import ReportReview from './components/ReportReview';
import UserReview from './components/UserReview';
import RideReview from './components/RideReview';
import LiveTracking from './components/LiveTracking';
import TransactionHistory from './components/TransactionHistory';
import AuditTrail from './components/AuditTrail';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsResetting(false);
  };

  const handleForgotPassword = () => {
    setIsResetting(true);
  };

  const handleBackToLogin = () => {
    setIsResetting(false);
  };

  if (!isAuthenticated) {
    if (isResetting) {
      return <ResetPassword onBackToLogin={handleBackToLogin} />;
    }
    return <Login onLogin={handleLogin} onForgotPassword={handleForgotPassword} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return (
        <Dashboard 
          onReviewReport={() => setCurrentView('report_review')} 
          onViewLive={() => setCurrentView('live_tracking')}
          onViewDrivers={() => setCurrentView('drivers')}
          onViewRides={() => setCurrentView('rides')}
          onViewRevenue={() => setCurrentView('revenue')}
        />
      );
      case 'drivers': return <Drivers onReviewDriver={() => setCurrentView('driver_review')} />;
      case 'users': return <Users onReviewUser={() => setCurrentView('user_review')} />;
      case 'rides': return <Rides onReviewRide={() => setCurrentView('ride_review')} />;
      case 'revenue': return (
        <Revenue 
          onViewTransactions={() => setCurrentView('transaction_history')} 
        />
      );
      case 'settings': return <Settings />;
      case 'driver_review': return (
        <DriverReview 
          onBack={() => setCurrentView('drivers')} 
          onInspectVehicle={() => setCurrentView('vehicle_inspection')}
          onViewRides={() => setCurrentView('rides')}
        />
      );
      case 'vehicle_inspection': return <VehicleInspection onBack={() => setCurrentView('driver_review')} />;
      case 'report_review': return <ReportReview onBack={() => setCurrentView('dashboard')} />;
      case 'user_review': return (
        <UserReview 
          onBack={() => setCurrentView('users')} 
          onViewAudit={() => setCurrentView('audit_trail')}
          onViewRides={() => setCurrentView('rides')}
        />
      );
      case 'ride_review': return <RideReview onBack={() => setCurrentView('rides')} />;
      case 'live_tracking': return <LiveTracking onBack={() => setCurrentView('dashboard')} />;
      case 'transaction_history': return <TransactionHistory onBack={() => setCurrentView('revenue')} />;
      case 'audit_trail': return <AuditTrail onBack={() => setCurrentView('settings')} />;
      default: return <Dashboard onReviewReport={() => setCurrentView('report_review')} onViewLive={() => setCurrentView('live_tracking')} onViewDrivers={() => setCurrentView('drivers')} onViewRides={() => setCurrentView('rides')} onViewRevenue={() => setCurrentView('revenue')} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-bg selection:bg-primary selection:text-ink">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 ml-[220px] flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 mt-16 p-8 lg:p-10 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
