import React, { useEffect } from 'react';
import './App.css';
import './styles/modern-theme.css';
import { safeInitAOS, safeInitWOW } from './utils/safeInit';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';
import Preloader from './components/Preloader';
import ScrollTop from './components/ScrollTop';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Marquee from './components/Marquee';
import Token from './components/Token';
import Work from './components/Work';
import Exchange from './components/Exchange';
import Crypto from './components/Crypto';
import FAQ from './components/FAQ';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize animations immediately for faster loading
    safeInitAOS();
    safeInitWOW();

    // Remove preloader after component mount (reduced time)
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }
  }, []);

  return (
    <div className="App">
      <ParticlesBackground />
      <ScrollProgressIndicator />
      <Preloader />
      <ScrollTop />
      <Header />
      <main className="main-area fix">
        <Banner />
        <Features />
        <Marquee />
        <Token />
        <div className="section-divider">
          <div className="container">
            <span></span>
          </div>
        </div>
        <Work />
        <Exchange />
        <Crypto />
        <FAQ />
        <div className="section-divider">
          <div className="container">
            <span></span>
          </div>
        </div>
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default App;