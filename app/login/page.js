'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function loginHandler() {
        // give the API call
        // successfull redirect to page, 
    }


  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
            onClick={loginHandler}
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          New user?{' '}    
                  <a href="#" className="text-blue-500 hover:underline"
                  onClick={() => router.push('/login/register')}>
            Click here to register
          </a>
        </p>
      </div>
    </div>
  );
}
