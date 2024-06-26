import React, { useState } from 'react';
import useMeasure from 'react-use-measure';
import { useSpring, animated } from '@react-spring/web';
import styles from './styles.module.css';

interface AnimatingAutoProps {
  target: number;
}

const AnimatingAuto: React.FC<AnimatingAutoProps> = ({ target }) => {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props = useSpring({ width: open ? target : 0 });

  return (
    <div className={styles.container} onClick={() => toggle(!open)}>
      <div ref={ref} className={styles.main}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
      </div>
    </div>
  );
};

export default AnimatingAuto;
