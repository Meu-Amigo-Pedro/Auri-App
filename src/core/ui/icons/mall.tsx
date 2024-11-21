import { motion } from 'framer-motion'
import { BaseAnimationIconProps } from './base'

const MallIcon = (props: BaseAnimationIconProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <motion.g
      fill="#121417"
      fillRule="evenodd"
      clipPath="url(#clip0_1_10)"
      clipRule="evenodd"
    >
      <motion.path d="M4.609 10.691c.964-.23 2.132-.365 3.391-.365s2.427.135 3.391.365c.914.218 1.941.731 2.394 1.087L8.283 2.954a.333.333 0 0 0-.566 0l-5.502 8.824c.453-.356 1.48-.869 2.394-1.087" />
      <motion.path d="m13.333 12.421-.008-.03a1 1 0 0 0-.065-.17c-.423-.291-1.267-.7-2.024-.881-.907-.217-2.022-.347-3.236-.347s-2.33.13-3.237.347c-.763.182-1.615.597-2.035.888a1 1 0 0 0-.051.135c-.01.032-.01.048-.01.05 0 .008.003.113.228.297.22.181.58.374 1.081.55.999.346 2.421.573 4.024.573s3.025-.227 4.024-.574c.502-.175.86-.367 1.081-.549.195-.16.224-.26.228-.289M1.65 11.423 7.15 2.6a1 1 0 0 1 1.698 0l5.502 8.825.017.028-.583.324.583-.324v.001l.002.003.003.006.01.018a3 3 0 0 1 .124.262c.056.133.16.4.16.669 0 .568-.333 1.013-.715 1.327-.387.319-.907.575-1.49.778-1.173.409-2.751.649-4.462.649s-3.288-.24-4.462-.649c-.583-.203-1.103-.46-1.49-.778-.382-.314-.715-.76-.715-1.327 0-.289.098-.549.165-.7a3 3 0 0 1 .148-.283l.003-.004zm10.345-1.255L8 3.76l-3.996 6.408q.227-.072.45-.125C5.476 9.799 6.697 9.659 8 9.659s2.524.14 3.546.384q.223.053.45.125" />
    </motion.g>
    <motion.defs>
      <motion.clipPath id="clip0_1_10">
        <motion.path fill="#fff" d="M0 .5h16v16H0z" />
      </motion.clipPath>
    </motion.defs>
  </motion.svg>
);

export default MallIcon;
