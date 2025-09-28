import React from 'react';
import { motion } from 'framer-motion';
import ScrollytellingSection from './ScrollytellingSection';
import StunningHeroBackground from './StunningHeroBackground';

const Banner: React.FC = () => {

  return (
    <section
      className="banner__area banner__bg"
      data-background="/assets/img/banner/hero_bg.svg"
      style={{ backgroundImage: 'url(/assets/img/banner/hero_bg.svg)' }}
    >
      {/* Stunning Hero Background */}
      <StunningHeroBackground />
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="banner__content">
              <ScrollytellingSection effect="fadeUp" delay={0}>
                <motion.span
                  className="sub-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    background: 'linear-gradient(90deg, #06b6d4, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Hospitality & Venue Access Network
                </motion.span>
              </ScrollytellingSection>
              
              <ScrollytellingSection effect="fadeUp" delay={0.3}>
                <h2 
                  className="title" 
                  style={{ 
                    textAlign: 'center', 
                    margin: '0 auto',
                    color: 'white'
                  }}
                >
                  The{' '}
                  <span 
                    style={{ 
                      background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 50%, #f59e0b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.5))'
                    }}
                  >
                    future
                  </span>{' '}
                  of travel industry
                </h2>
              </ScrollytellingSection>
              <ScrollytellingSection effect="slideIn" delay={0.5}>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Hotels, malls, and attractions commit verifiable inventory. Creators package experiences, bring audiences, and get performance-based payouts.
                </motion.p>
              </ScrollytellingSection>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__shape">
        <motion.img
          src="/assets/img/banner/hero_img01.png"
          alt="shape"
          className="alltuchtopdown"
          style={{
            position: 'absolute',
            left: '13%',
            bottom: '42px',
            zIndex: -1
          }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.img
          src="/assets/img/banner/hero_img02.png"
          alt="shape"
          className="rotateme"
          style={{
            position: 'absolute',
            left: '42%',
            bottom: '-135px',
            zIndex: -1
          }}
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.img
          src="/assets/img/banner/hero_img03.png"
          alt="shape"
          className="alltuchtopdown"
          style={{
            position: 'absolute',
            right: '17%',
            bottom: '45px',
            zIndex: -1
          }}
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.img
          src="/assets/img/banner/hero_bg_shape.svg"
          alt="shape"
          className="banner__bg-shape"
          style={{
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: -2
          }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
