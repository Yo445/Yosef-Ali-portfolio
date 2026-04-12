'use client';

import React, { useState, useEffect, useRef } from 'react';

function useLazyLoad(
  threshold = 0.1
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(() => {
    // SSR-safe + avoids effect setState
    if (typeof window === 'undefined') return false;
    return typeof IntersectionObserver === 'undefined';
  });

  useEffect(() => {
    if (isVisible) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // ✅ allowed (async callback)
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return [ref, isVisible];
}

interface LazyWrapperProps {
  children: React.ReactNode;
  minHeight?: number;
  className?: string;
}

export default function LazyWrapper({ children, minHeight = 566, className }: LazyWrapperProps) {
  const [ref, isVisible] = useLazyLoad();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={!isVisible ? { minHeight } : undefined}
    >
      {isVisible ? children : null}
    </div>
  );
}