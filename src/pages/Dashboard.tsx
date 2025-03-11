
import React from 'react';
import AdminDashboard from '@/components/AdminDashboard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-blue-600 font-medium text-lg">
                NGO Name
              </Link>
            </div>
            <div className="flex items-center space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 text-sm text-gray-700 hover:text-blue-600 rounded-lg transition-colors"
              >
                Home
              </Link>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <AdminDashboard />
    </div>
  );
};

export default Dashboard;
