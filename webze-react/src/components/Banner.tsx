import React from 'react';
import { motion } from 'framer-motion';
import ScrollytellingSection from './ScrollytellingSection';
import StunningHeroBackground from './StunningHeroBackground';

const Banner: React.FC = () => {

  return (
    <section
      className="banner__area banner__bg"
      data-background="/assets/img/banner/hero_bg.svg"
      style={{ 
        backgroundImage: 'url(/assets/img/banner/hero_bg.svg)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}
    >
      {/* Stunning Hero Background */}
      <StunningHeroBackground />
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-11 col-sm-12">
            <div className="banner__content" style={{ padding: '0 15px' }}>
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
                    display: 'block',
                    marginBottom: '20px',
                    fontSize: 'clamp(12px, 2.5vw, 16px)',
                    lineHeight: '1.4'
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
                    margin: '0 auto 30px',
                    color: 'white',
                    fontSize: 'clamp(28px, 6vw, 64px)',
                    lineHeight: '1.2',
                    fontWeight: '700',
                    letterSpacing: '-0.02em'
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
                  style={{
                    fontSize: 'clamp(16px, 3vw, 20px)',
                    lineHeight: '1.6',
                    marginBottom: '40px',
                    maxWidth: '600px',
                    margin: '0 auto',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
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
          src="/assets/img/banner/hero_icon_01.png"
          alt="Globe Icon"
          className="alltuchtopdown"
          style={{
            position: 'absolute',
            left: 'clamp(2%, 13%, 15%)',
            bottom: 'clamp(10px, 5vh, 60px)',
            zIndex: -1,
            width: 'clamp(100px, 20vw, 280px)',
            height: 'auto',
            filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.2))',
            opacity: 'clamp(0.4, 0.6, 0.8)'
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
          src="/assets/img/banner/hero_icon_02.png"
          alt="Wallet Icon"
          className="rotateme"
          style={{
            position: 'absolute',
            left: 'clamp(30%, 42%, 50%)',
            bottom: 'clamp(-60px, -10vh, -135px)',
            zIndex: -1,
            width: 'clamp(100px, 18vw, 260px)',
            height: 'auto',
            filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))',
            opacity: 'clamp(0.5, 0.7, 0.9)'
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
          src="/assets/img/banner/hero_icon_03.png"
          alt="Coin Icon"
          className="alltuchtopdown"
          style={{
            position: 'absolute',
            right: 'clamp(2%, 17%, 20%)',
            bottom: 'clamp(10px, 5vh, 60px)',
            zIndex: -1,
            width: 'clamp(110px, 20vw, 280px)',
            height: 'auto',
            filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.2))',
            opacity: 'clamp(0.4, 0.6, 0.8)'
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
            top: 'clamp(20px, 8vh, 80px)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: -2,
            width: 'clamp(200px, 60vw, 800px)',
            height: 'auto',
            opacity: 'clamp(0.2, 0.3, 0.4)'
          }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
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
