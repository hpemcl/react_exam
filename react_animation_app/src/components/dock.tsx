import React, { ReactNode } from 'react';
import styles from './styles.module.css'; 

interface DockProps {
  children: ReactNode;
}

const Dock: React.FC<DockProps> = ({ children }) => {
  return (
    <div className={styles.dock}>
      {children}
    </div>
  );
};

export default Dock;
