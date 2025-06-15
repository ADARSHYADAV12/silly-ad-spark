
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import AdGenerator from '@/components/dashboard/AdGenerator';

import { useUser } from '@clerk/clerk-react';

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-yellow-50 to-coral-50">
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 ml-64">
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome{user?.firstName ? `, ${user.firstName}` : ''}!</h1>
            <AdGenerator />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
