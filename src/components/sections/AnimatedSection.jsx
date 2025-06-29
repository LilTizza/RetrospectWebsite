import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, id, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      id={id} 
      className={`${className} will-animate ${inView ? 'is-in-view' : ''}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;