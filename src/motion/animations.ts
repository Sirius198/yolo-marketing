import { Variants, MotionProps } from 'framer-motion';

export const motionFadeInAnimation = (
  direction: 'up' | 'down' = 'up'
): Variants => {
  return {
    initial: {
      y: direction === 'up' ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };
};

export const motionFadeInUp: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  variants: motionFadeInAnimation(),
};

export const motionFadeInDown: MotionProps = {
  initial: 'initial',
  animate: 'animate',
  variants: motionFadeInAnimation('down'),
};

// https://youtu.be/-1ihhsv88O0?t=685
export const staggerChildrenAnimation: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
};

export const dropFromTopAnimation: Variants = {
  initial: {
    y: -1000,
  },
  animate: {
    y: 0,
    transition: {
      delay: 2.6, // experiment and set value,
      duration: 0.8,
      type: 'spring',
    },
  },
};

export const dropFromTo: MotionProps = {
  variants: dropFromTopAnimation,
  initial: 'initial',
  animate: 'animate',
};

export const bounceAnimation: Variants = {
  initial: {},
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 1.6,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const bounce: MotionProps = {
  variants: bounceAnimation,
  initial: 'initial',
  animate: 'animate',
};

export const scatterContainerAnimation: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 3,
    },
  },
};

export const scatterItemWrapperAnimation: Variants = {
  initial: {
    y: -800,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.4,
      type: 'spring',
    },
  },
};

export const scatterItemAnimation: Variants = {
  initial: {},
  animate: (i: number) => {
    return {
      x: [20, 0, 20],
      transition: {
        delay: 2,
        duration: 1 * i,
        ease: 'linear',
        repeat: Infinity,
      },
    };
  },
  // animate: (i: number) => ({
  //   x: [20, 0, 20],
  //   transition: {
  //     delay: 2,
  //     duration: 1 * i,
  //     ease: "linear",
  //     repeat: Infinity,
  //   }),
  // },
};
