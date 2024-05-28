import React, { ReactNode } from 'react';

interface DockProps {
  children: ReactNode;
}

const Dock: React.FC<DockProps> = ({ children }) => {
  return (
    <div className="flex justify-center space-x-4 bg-gray-900 p-4 fixed bottom-0 w-full">
      {children}
    </div>
  );
};

export default Dock;
