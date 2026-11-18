import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

interface CountUpStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
}

export const CountUpStat: React.FC<CountUpStatProps> = ({
  value,
  prefix = '',
  suffix = '',
  padZero = false,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(
    prefersReducedMotion ? value : 0
  );

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, prefersReducedMotion]);

  const formatted = padZero && displayValue < 10
    ? `0${displayValue}`
    : displayValue.toLocaleString('pt-BR');

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
