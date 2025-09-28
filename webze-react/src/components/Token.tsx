import React, { useEffect, useRef } from 'react';
import { safeJQuery } from '../utils/safeInit';
import AnimatedCounter from './AnimatedCounter';
import ScrollytellingSection from './ScrollytellingSection';
import Scene3D from './Scene3D';

const Token: React.FC = () => {
  const countdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize countdown
    const timer = setTimeout(() => {
      safeJQuery(($) => {
        if (countdownRef.current) {
          $(countdownRef.current).countdown('2026/12/30', function(this: HTMLElement, event: any) {
            const format = '<div class="time-count"><span>%D</span>days</div>' +
                          '<div class="time-count"><span>%H</span>hours</div>' +
                          '<div class="time-count"><span>%M</span>minutes</div>' +
                          '<div class="time-count"><span>%S</span>seconds</div>';
            $(this).html(event.strftime(format));
          });
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <section id="token" className="token__area section-py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="token__content" data-aos="fade-right" data-aos-delay="0" data-aos-duration="600">
              <div className="section__title mb-40">
                <span className="sub-title">utility & access</span>
                <h2 className="title">
                  REAL 2049 <span>points</span> <br /> unlock perks!
                </h2>
              </div>
              <p>
                REAL points behave like interoperable loyalty miles across hotels and venues. Unlock earlier booking windows, priority queues, and exclusive experiences.
              </p>
              <a href="#!" className="tg-btn tg-btn-two" onClick={(e) => e.preventDefault()}>
                Learn More
              </a>
              
              {/* 3D Hotel & Crypto Showcase */}
              <ScrollytellingSection effect="scale" delay={0.8}>
                <div style={{ marginTop: '3rem' }}>
                  <h5 style={{ 
                    textAlign: 'center', 
                    color: 'var(--tg-primary-color)',
                    marginBottom: '1rem',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Hotel & Crypto Integration
                  </h5>
                  <Scene3D 
                    className="scene-3d-container"
                    style={{ 
                      height: '300px',
                      borderRadius: '10px',
                      border: '1px solid var(--tg-border-1)',
                      background: 'rgba(255, 255, 255, 0.02)'
                    }} 
                  />
                </div>
              </ScrollytellingSection>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="token__wrap" data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">
              <div className="token__wrap-inner">
                <h4 className="title">Pilot launch countdown:</h4>
                <div className="countdown__wrap">
                  <div 
                    className="coming-time" 
                    data-countdown="2026/12/30"
                    ref={countdownRef}
                  >
                    {/* Countdown will be populated by JavaScript */}
                    <div className="time-count">
                      <span>45</span>
                      days
                    </div>
                    <div className="time-count">
                      <span>24</span>
                      hours
                    </div>
                    <div className="time-count">
                      <span>60</span>
                      minutes
                    </div>
                    <div className="time-count">
                      <span>60</span>
                      seconds
                    </div>
                  </div>
                </div>
                <ScrollytellingSection effect="scale" delay={0.5}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    gap: '1.5rem', 
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                  }}>
                    <AnimatedCounter 
                      end={81} 
                      label="Hotels Committed" 
                      className="flex-fill text-center" 
                    />
                    <AnimatedCounter 
                      end={2000} 
                      label="Room Nights" 
                      suffix="+" 
                      className="flex-fill text-center"
                    />
                    <AnimatedCounter 
                      end={45} 
                      label="Days to Launch" 
                      className="flex-fill text-center"
                    />
                  </div>
                </ScrollytellingSection>
                <div className="token__progress-wrap">
                  <ul className="list-wrap token__progress-title">
                    <li>Phase 0</li>
                    <li>Phase 3</li>
                  </ul>
                  <div 
                    className="progress" 
                    role="progressbar" 
                    aria-label="Pilot Progress" 
                    aria-valuenow={25} 
                    aria-valuemin={0} 
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
              <div className="copy-text">
                <mark>REALChain • Avalanche • Integra</mark>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="token__shape">
        <img src="/assets/img/images/features_shape.png" alt="" />
      </div>
    </section>
  );
};

export default Token;
