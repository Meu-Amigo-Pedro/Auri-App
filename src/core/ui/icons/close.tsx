import { motion } from 'framer-motion'
import { BaseAnimationIconProps } from "./base";

const CloseIcon = (props: BaseAnimationIconProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <motion.path
      id="SVGRepo_iconCarrier"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m4 4 16 16m0-16L4 20"
    />
  </motion.svg>
);

export default CloseIcon;
