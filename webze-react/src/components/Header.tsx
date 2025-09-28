import React, { useState, useEffect } from 'react';
import RealLogo from './RealLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header id="home">
        <div
          id="sticky-header"
          className={`tg-header__area transparent-header ${isSticky ? 'sticky-menu' : ''}`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <a href="/">
                        <RealLogo width={150} height={45} />
                      </a>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li>
                          <a
                            href="#home"
                            className="section-link"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('home');
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#features"
                            className="section-link"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('features');
                            }}
                          >
                            features
                          </a>
                        </li>
                        <li>
                          <a
                            href="#token"
                            className="section-link"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('token');
                            }}
                          >
                            token
                          </a>
                        </li>
                        <li>
                          <a
                            href="#work"
                            className="section-link"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('work');
                            }}
                          >
                            how it works
                          </a>
                        </li>
                        <li>
                          <a
                            href="#roadmap"
                            className="section-link"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('roadmap');
                            }}
                          >
                            roadmap
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <div style={{ textAlign: 'center' }}>
                            <div 
                              className="coming-soon-text"
                              style={{ 
                                fontSize: '10px', 
                                background: 'linear-gradient(90deg, #06b6d4, #6366f1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textTransform: 'uppercase',
                                marginBottom: '5px',
                                letterSpacing: '0.5px',
                                fontWeight: '600'
                              }}
                            >
                              Starting Soon
                            </div>
                            <a 
                              href="#!" 
                              className="tg-btn modern-button" 
                              onClick={(e) => e.preventDefault()}
                              style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                                border: 'none',
                                boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)'
                              }}
                            >
                              Presale
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-nav-toggler" onClick={toggleMenu}>
                      <i className="tg-flaticon-menu-1"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`tgmobile__menu ${isMenuOpen ? 'mobile-menu-visible' : ''}`}>
          <nav className="tgmobile__menu-box">
            <div className="close-btn" onClick={toggleMenu}>
              <i className="tg-flaticon-close-1"></i>
            </div>
            <div className="nav-logo">
              <a href="/">
                <RealLogo width={170} height={56} />
              </a>
            </div>
            <div className="tgmobile__search">
              <form action="#">
                <input type="text" placeholder="Search here..." />
                <button type="submit"><i className="fas fa-search"></i></button>
              </form>
            </div>
            <div className="tgmobile__menu-outer">
              <div className="navigation">
                <ul>
                  <li>
                    <a
                      href="#home"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('features');
                      }}
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#token"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('token');
                      }}
                    >
                      Token
                    </a>
                  </li>
                  <li>
                    <a
                      href="#work"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('work');
                      }}
                    >
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#roadmap"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('roadmap');
                      }}
                    >
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social-links">
              <ul className="list-wrap">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          className={`tgmobile__menu-backdrop ${isMenuOpen ? 'mobile-menu-visible' : ''}`}
          onClick={toggleMenu}
        ></div>
      </header>
    </>
  );
};

export default Header;
