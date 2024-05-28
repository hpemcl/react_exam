import React from 'react';
import styles from './styles.module.css'; 

interface DockCardProps {
  label: string;
}

const DockCard: React.FC<DockCardProps> = ({ label }) => {
  return <div className={styles['dock-card']}>{label}</div>;
};

export default DockCard;
