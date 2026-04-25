import { useEffect, useRef } from 'react';
import { animate, useInView } from 'motion/react';

interface StatCounterProps {
  value: string;
}

export default function StatCounter({ value }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse value like "420K" or "12.5K" or "64"
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, numericPart, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          // Handle decimals if they exist in numericPart (though usually stats are rounded)
          const formatted = numericPart % 1 === 0 
            ? Math.round(latest).toString() 
            : latest.toFixed(1);
          node.textContent = formatted + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericPart, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}
