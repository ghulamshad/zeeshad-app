'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<'div'>, 'children'>;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div {...(rest as object)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-8% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }}
    >
      {children}
    </motion.div>
  );
}

export { motion, ease };
