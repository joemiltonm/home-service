'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { pincodes } from "./pin";
import { useState, useEffect } from "react";


export default function Home() {
  const router = useRouter()
  const [pincode, setPincode] = useState()
  const [availabilityCheck, setAvailabilityCheck] = useState(false)

  useEffect(() => {
        if (pincodes.includes(Number(pincode))) {
          setAvailabilityCheck(true)
        }
        else {
          setAvailabilityCheck(false)
        }
    }, [pincode])


  return (
    <main className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8 border">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Urban Company Logo"
            width={50}
            height={50}
          />
          <span className="ml-2 font-bold text-xl">HomeCrew</span>
        </div>
        <div className="flex items-center space-x-6">
          <label>Check availability</label>
          <div>
          <input
            type="text"
            placeholder="pincode"
            className={`border p-2 focus:outline-none rounded-lg ${availabilityCheck ? 'glow-green' : ''}`}
            onChange={(e) => setPincode(e.target.value)}
            />
        </div>
        </div>
        <div className="space-x-6 flex items-center">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out"
            onClick={() => router.push('/login')}>Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 px-8 flex">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">Home services at ease</h1>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Women's Salon & Spa", img: '/images/placeholder.png' },
              { title: "Men's Salon & Massage", img: '/images/placeholder.png' },
              { title: 'AC & Appliance Repair', img: '/images/placeholder.png' },
              { title: 'Cleaning & Pest Control', img: '/images/placeholder.png' },
              { title: 'Electrician, Plumber & Carpenter', img: '/images/placeholder.png' },
              { title: 'Native Water Purifier', img: '/images/placeholder.png' },
              { title: 'Native Smart Locks', img: '/images/placeholder.png' },
              { title: 'Painting & Waterproofing', img: '/images/placeholder.png' },
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center p-4 border rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <Image
                  src={service.img} 
                  alt={service.title}
                  width={40}
                  height={40}
                />
                <span className="ml-4">{service.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-1/2">
          <Image
            src="/images/filler.png" 
            alt="Main Service"
            layout="fill"
            className="rounded-lg px-10"
          />
        </div>
      </section>
    </main>
  );
}
