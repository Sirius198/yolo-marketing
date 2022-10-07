import { FC, ReactHTML } from 'react';
import { Variants, Variant, HTMLMotionProps, motion } from 'framer-motion';

export interface PageFadeInUpAnimateProps extends React.PropsWithChildren {
  tagName?: keyof ReactHTML;
  className?: string;
  lifeCycleTransitions?: {
    initial?: Variant;
    enter?: Variant;
    exit?: Variant;
  };
}

const defaultProps: PageFadeInUpAnimateProps = {};

const PageFadeInUpAnimate: FC<PageFadeInUpAnimateProps> = (props) => {
  const {
    tagName = 'div',
    className,
    lifeCycleTransitions = {},
    children,
  } = props;

  const MotionComponent: FC<HTMLMotionProps<typeof tagName>> = (
    motion as any
  )[tagName];
  const animationVariants: Variants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: { y: 40, opacity: 0 },
    ...lifeCycleTransitions,
  };

  return (
    <MotionComponent
      className={`w-full $${className}`}
      initial={'initial'}
      animate={'animate'}
      // exit={"exit"}
      variants={animationVariants}
    >
      {children}
    </MotionComponent>
  );
};

PageFadeInUpAnimate.defaultProps = defaultProps;

export default PageFadeInUpAnimate;
