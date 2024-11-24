import React from 'react'
import {
  SVGMotionProps,
  motion
} from 'framer-motion'

export interface InfinityAcceptProps extends SVGMotionProps<SVGSVGElement> {
  propsPath?: SVGMotionProps<SVGPathElement>

  animationActived?: boolean
}

const InfinityAccept = ({ animationActived = true, propsPath, ...props }: InfinityAcceptProps) => {
  return (
    <motion.svg
      width="2rem"
      height="2rem"
      fill="none"
      stroke="currentColor"
      viewBox="30 35 90 90"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        d="M38 74.707l24.647 24.646L116.5 45.5"
        fill="none"
        strokeWidth={20}
        strokeLinecap="round"
        initial={animationActived ? { pathLength: 0, pathOffset: 0 } : {}}
        animate={animationActived ? { pathLength: 1, pathOffset: 0 } : {}}
        transition={animationActived
          ? {
              duration: 0.3,
              repeatDelay: 0.6,
              repeatType: 'reverse',
              repeat: Infinity,
              ease: 'easeInOut'
            }
          : {}}
        {...propsPath}
      />
    </motion.svg>
  )
}
export default InfinityAccept
