import React from 'react'
import { SVGMotionProps, motion } from 'framer-motion'

export interface InfinityCloseProps extends SVGMotionProps<SVGSVGElement> {
  propsPath?: SVGMotionProps<SVGPathElement>
}

const InfinityClose = (props: InfinityCloseProps) => {
  return (
    <motion.svg
      width="2.4rem"
      height="2.4rem"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.69429 0.25L4.5 3.44429L1.30571 0.25L0.5 1.05571L3.69429 4.25L0.5 7.44429L1.30571 8.25L4.5 5.05571L7.69429 8.25L8.5 7.44429L5.30571 4.25L8.5 1.05571L7.69429 0.25Z"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{
          duration: 1,
          repeatDelay: 0.6,
          repeatType: 'reverse',
          velocity: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        {...props.propsPath}
      />
    </motion.svg>
  )
}
export default InfinityClose
