import { motion } from 'framer-motion'
import { BaseAnimationIconProps } from './base';

const ArrowLeftIcon = (props: BaseAnimationIconProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 22 22"
    {...props}
  >
    <motion.path
      id="SVGRepo_iconCarrier"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15 6-6 6 6 6"
    />
  </motion.svg>
);

export default ArrowLeftIcon;
