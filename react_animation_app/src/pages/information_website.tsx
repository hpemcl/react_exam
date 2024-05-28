import React from 'react';
import Dock from '../components/dock';
import DockCard from '../components/dockCard';
import AnimatingAuto from '../components/animatingAuto';
import DockDivider from '../components/dockDivider';
import Image from 'next/image';
import '../app/globals.css';
import './styles.css';
import '../components/styles.module.css';

const NAV_ITEMS = [
  'Product',
  'Download',
  'Sign Up',
  'About',
  'Contact'
];

const InformationWebsite: React.FC = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <Dock>
        {NAV_ITEMS.map((label, index) => (
          <>
            <DockCard key={index} label={label} />
            {index < NAV_ITEMS.length - 1 && <DockDivider key={`divider-${index}`} />}
          </>
        ))}
      </Dock>
      <header className="min-h-screen flex flex-row justify-between items-center p-8 space-x-6">
        <div className="flex flex-col justify-center items-start space-y-6 max-w-xl">
          <span className="bg-white text-black text-sm px-5 py-2 rounded-full">React Animation App</span>
          <h1 className="text-6xl font-bold">Welcome to react animation demonstration</h1>
          <p className="text-lg">Dette er en page som er lavet med react spring. 
          Der er blevet en animation oppe i navbaren hvis man hover over den. 
          Der er også blevet en animation ved længere ned tallene</p>
          <div className="space-x-4">
            <button className="bg-blue-600 px-6 py-2 rounded-full">Get started</button>
            <button className="bg-gray-700 px-6 py-2 rounded-full">Live Demo</button>
          </div>
        </div>
        <Image src="/images/information.jpg" alt="Image" width={500} height={300} className="rounded-lg shadow-lg" />
      </header>
      <div className="py-16 text-center">
        <p className="text-lg">The world’s most innovative companies use our app</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-5xl">
            <div className="text-center bg-white text-black rounded px-8 py-5">
              <h3 className="text-2xl font-bold">8000+</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center bg-white text-black rounded px-8 py-5">
              <h3 className="text-2xl font-bold">900m+</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center bg-white text-black rounded px-8 py-5">
              <h3 className="text-2xl font-bold">99.9%</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center bg-white text-black rounded px-8 py-5">
              <h3 className="text-2xl font-bold">12m</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Deploy faster</h2>
          <p className="mt-4 text-lg">Welcome to react animation demonstration</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-blue-500 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Lorem ipsum</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn more</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-blue-500 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Lorem ipsum</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn more</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-blue-500 mx-auto mb-4"></div>
            <h3 className="text-xl font-bold">Lorem ipsum</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Learn more</button>
          </div>
        </div>
      </div>
      <div className="py-16 bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our track record</h2>
          <p className="mt-4 text-lg">Trusted by thousands of developers worldwide</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold"><AnimatingAuto target={8000} /></h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold"><AnimatingAuto target={900000000} /></h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold"><AnimatingAuto target={99.9} /></h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold"><AnimatingAuto target={12000000} /></h3>
              <p className="mt-2">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-8 bg-gray-800 text-center">
        <p>© 2020 Your Company, Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
          <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
          <Image src="/images/tiktok.svg" alt="TikTok" width={24} height={24} />
          <Image src="/images/twitter-x.svg" alt="Twitter" width={24} height={24} />
          <Image src="/images/youtube.svg" alt="YouTube" width={24} height={24} />
        </div>
      </footer>
    </div>
  );
};

export default InformationWebsite;
