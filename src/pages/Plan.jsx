import React, { useState } from 'react';

export default function Plan() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="w-full bg-white py-16 px-4 md:px-16 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">Mentorship Plan</h2>
        <p className="text-gray-500 mb-8">No contracts. No surprise fees.</p>

        {/* Toggle */}
        <div className="inline-flex rounded-md overflow-hidden mb-12">
          <button
            className={`px-6 py-2 text-sm font-medium ${
              billingCycle === 'monthly'
                ? 'bg-black text-white'
                : 'bg-white text-black border border-gray-300'
            }`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium ${
              billingCycle === 'yearly'
                ? 'bg-black text-white'
                : 'bg-white text-black border border-gray-300'
            }`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
          </button>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Starter */}
          <div className="bg-white shadow-md rounded-lg border-l-[10px] border-orange-400 p-6 relative">
            <h3 className="text-3xl font-semibold mb-1">$20 <span className="text-sm font-normal">/month</span></h3>
            <p className="text-lg font-medium mb-4">Starter</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
              Choose Plan
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white shadow-md rounded-lg border-l-[10px] border-pink-500 p-6 relative">
            <h3 className="text-3xl font-semibold mb-1">$100 <span className="text-sm font-normal">/month</span></h3>
            <p className="text-lg font-medium mb-4">Pro</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">
              Choose Plan
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white shadow-md rounded-lg border-l-[10px] border-purple-600 p-6 relative">
            <h3 className="text-3xl font-semibold mb-1">$200 <span className="text-sm font-normal">/month</span></h3>
            <p className="text-lg font-medium mb-4">Enterprise</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>All limited links</li>
              <li>Own analytics platform</li>
              <li>Chat support</li>
              <li>Optimize hashtags</li>
              <li>Unlimited users</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}