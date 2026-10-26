'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
} & Omit<HTMLMotionProps<'div'>, 'children'>;

/**
 * Reveal on enter-viewport. Avoid large negative viewport margins — they can
 * leave above-the-fold content stuck at opacity:0 (observed on /contact).
 * Also fail open after a short delay so a stuck scroll-lock / IO miss never
 * leaves whole homepage sections invisible.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setForceShow(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  if (reduce) {
    return <div {...(rest as object)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={forceShow ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.01, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.55, delay, ease }}
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
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setForceShow(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

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
      animate={forceShow ? 'show' : undefined}
      whileInView="show"
      viewport={{ once: true, amount: 0.01, margin: '0px 0px -8% 0px' }}
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
