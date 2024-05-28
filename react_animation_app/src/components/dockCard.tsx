import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface DockCardProps {
  label: string;
}

const DockCard: React.FC<DockCardProps> = ({ label }) => {
  const [isHovered, setHovered] = React.useState(false);

  const props = useSpring({
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={props}
      className="w-16 h-16 flex items-center justify-center text-white cursor-pointer"
    >
      {label}
    </animated.div>
  );
};

export default DockCard;
