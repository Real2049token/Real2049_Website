import React, { useEffect, useRef } from 'react';
import { safeJQuery } from '../utils/safeInit';

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize marquee animation
    const timer = setTimeout(() => {
      safeJQuery(($) => {
        if (marqueeRef.current) {
          $(marqueeRef.current).find('.marquee__group').marquee({
            duration: 15000,
            gap: 50,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true
          });
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="marquee__area section-pt-120">
      <div className="slider__marquee clearfix marquee-wrap" ref={marqueeRef}>
        <div className="marquee_mode marquee__group">
          <h6 className="marquee__item">Transparent loyalty incentives and measurable creator campaigns</h6>
          <h6 className="marquee__item">Transparent loyalty incentives and measurable creator campaigns</h6>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
