import React from 'react';
import "./styles.css";
import { motion, Variants } from "framer-motion";

interface Props {
  emoji: string;

}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};



function Hey({ emoji }: Props) {
  const background = `linear-gradient(306deg`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320]
];

export default function InformationwWebsite() {
  return food.map(([emoji]) => (
    
    <Hey emoji={emoji} key={emoji} />
  ));
}

