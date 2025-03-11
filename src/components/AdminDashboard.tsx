
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Mock data for demonstration
const mockTransactions = [
  {
    id: 'TXN123456789',
    donor: 'Amit Sharma',
    amount: '2000',
    frequency: 'monthly',
    date: '2023-08-15',
    status: 'success',
  },
  {
    id: 'TXN987654321',
    donor: 'Priya Patel',
    amount: '5000',
    frequency: 'one-time',
    date: '2023-08-14',
    status: 'success',
  },
  {
    id: 'TXN456789123',
    donor: 'Rajesh Kumar',
    amount: '1000',
    frequency: 'monthly',
    date: '2023-08-12',
    status: 'success',
  },
  {
    id: 'TXN789123456',
    donor: 'Sunita Desai',
    amount: '500',
    frequency: 'one-time',
    date: '2023-08-10',
    status: 'failed',
  },
  {
    id: 'TXN321654987',
    donor: 'Vikram Singh',
    amount: '10000',
    frequency: 'one-time',
    date: '2023-08-08',
    status: 'success',
  },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'monthly' | 'one-time'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter transactions based on tab and search
  const filteredTransactions = mockTransactions.filter(tx => {
    const matchesTab = 
      activeTab === 'all' || 
      (activeTab === 'monthly' && tx.frequency === 'monthly') ||
      (activeTab === 'one-time' && tx.frequency === 'one-time');
    
    const matchesSearch = 
      tx.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });
  
  // Calculate totals
  const totalAmount = filteredTransactions
    .filter(tx => tx.status === 'success')
    .reduce((sum, tx) => sum + parseFloat(tx.amount), 0);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage and track donations</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Total Donations</h3>
          <p className="text-3xl font-bold">₹{totalAmount.toLocaleString('en-IN')}</p>
          <p className="text-sm text-gray-500 mt-2">{filteredTransactions.length} transactions</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
          <h3 className="text-sm font-medium text-gray-500 mb-1">Monthly Recurring</h3>
          <p className="text-3xl font-bold">
            ₹{mockTransactions
                .filter(tx => tx.frequency === 'monthly' && tx.status === 'success')
                .reduce((sum, tx) => sum + parseFloat(tx.amount), 0)
                .toLocaleString('en-IN')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {mockTransactions.filter(tx => tx.frequency === 'monthly').length} subscribers
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
          <h3 className="text-sm font-medium text-gray-500 mb-1">One-time Donations</h3>
          <p className="text-3xl font-bold">
            ₹{mockTransactions
                .filter(tx => tx.frequency === 'one-time' && tx.status === 'success')
                .reduce((sum, tx) => sum + parseFloat(tx.amount), 0)
                .toLocaleString('en-IN')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {mockTransactions.filter(tx => tx.frequency === 'one-time').length} donations
          </p>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={cn(
                "px-4 py-2 text-sm rounded-lg transition-all",
                activeTab === 'all' 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={cn(
                "px-4 py-2 text-sm rounded-lg transition-all",
                activeTab === 'monthly' 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab('one-time')}
              className={cn(
                "px-4 py-2 text-sm rounded-lg transition-all",
                activeTab === 'one-time' 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              One-time
            </button>
          </div>
          
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-6 py-3 text-left tracking-wider">Donor</th>
                <th className="px-6 py-3 text-left tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left tracking-wider">Type</th>
                <th className="px-6 py-3 text-left tracking-wider">Date</th>
                <th className="px-6 py-3 text-left tracking-wider">Status</th>
                <th className="px-6 py-3 text-right tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTransactions.map(tx => (
                <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{tx.donor}</div>
                    <div className="text-xs text-gray-500">{tx.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">₹{parseFloat(tx.amount).toLocaleString('en-IN')}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      "px-2 py-1 text-xs rounded-full",
                      tx.frequency === 'monthly' 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-gray-100 text-gray-800"
                    )}>
                      {tx.frequency === 'monthly' ? 'Monthly' : 'One-time'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(tx.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={cn(
                      "px-2 py-1 text-xs rounded-full",
                      tx.status === 'success' 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    )}>
                      {tx.status === 'success' ? 'Successful' : 'Failed'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">
                      View Receipt
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
