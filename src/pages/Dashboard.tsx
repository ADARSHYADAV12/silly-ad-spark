
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import AdGenerator from '@/components/dashboard/AdGenerator';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-yellow-50 to-coral-50">
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 ml-64">
          <AdGenerator />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
