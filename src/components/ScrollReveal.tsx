import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  staggerChildren = true,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {staggerChildren && React.isValidElement(children)
        ? React.Children.map(children.props.children, (child, index) =>
            React.isValidElement(child) ? (
              <div
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transition: `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
                    isVisible ? index * 80 : 0
                  }ms, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${
                    isVisible ? index * 80 : 0
                  }ms`,
                }}
              >
                {child}
              </div>
            ) : (
              child
            )
          )
        : children}
    </div>
  );
}
