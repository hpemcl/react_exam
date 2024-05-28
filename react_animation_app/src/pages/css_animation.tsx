import React from 'react';
import Dock from '../components/dock';
import DockCard from '../components/dockCard';
import DockDivider from '../components/dockDivider';
import Image from 'next/image';
import "./styles.css";
import "../app/globals.css";




const NAV_ITEMS = [
  'Product',
  'Download',
  'Sign Up',
  'About',
  'Contact'
];

const CssAnimation: React.FC = () => {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <header className="min-h-screen flex flex-col justify-center items-start p-8 space-y-6">
        <span className="bg-blue-500 text-sm px-4 py-1 rounded-full">Latest update</span>
        <h1 className="text-6xl font-bold max-w-xl">Welcome to react animation demonstration</h1>
        <p className="text-lg max-w-xl">Lorem ipsum dolor sit amet, consectetur sadipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
        <div className="space-x-4">
          <button className="bg-blue-600 px-6 py-2 rounded">Get started</button>
          <button className="bg-gray-700 px-6 py-2 rounded">Live Demo</button>
        </div>
        <Image src="/path/to/your/image.jpg" alt="Image" width={500} height={300} />
      </header>
      <section className="py-16 text-center">
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur sadipiscing elit, sed</p>
        <div className="flex justify-center space-x-4 mt-8">
          <button className="bg-white text-black px-4 py-2 rounded">Sponsor</button>
          <button className="bg-white text-black px-4 py-2 rounded">Sponsor</button>
          <button className="bg-white text-black px-4 py-2 rounded">Sponsor</button>
          <button className="bg-white text-black px-4 py-2 rounded">Sponsor</button>
          <button className="bg-white text-black px-4 py-2 rounded">Sponsor</button>
        </div>
      </section>
      <section className="py-16">
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
      </section>
      <section className="py-16 bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Deploy faster</h2>
          <p className="mt-4 text-lg">Welcome to react animation demonstration</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold">8000+</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">900m+</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">99.9%</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">12m</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </section>
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
      <Dock>
        {NAV_ITEMS.map((label, index) => (
          <DockCard key={index} label={label} />
        ))}
      </Dock>
    </div>
  );
};

export default CssAnimation;