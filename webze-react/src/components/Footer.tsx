import React from 'react';
import RealLogo from './RealLogo';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: '/assets/img/icon/facebook.svg', href: '#!' },
    { icon: '/assets/img/icon/twitter.svg', href: '#!' },
    { icon: '/assets/img/icon/telegram.svg', href: '#!' },
    { icon: '/assets/img/icon/discord.svg', href: '#!' }
  ];

  return (
    <footer className="footer__area">
      <div className="container">
        <div className="footer__top">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="footer__content">
                <div className="footer__logo">
                  <a href="/">
                    <RealLogo width={160} height={52} />
                  </a>
                </div>
                <span className="sub-title">Built for the attention economy</span>
                <h2 className="title">
                  Join the <span>REAL 2049</span> network
                </h2>
                <div className="team__social-wrap">
                  <ul className="list-wrap">
                    {socialLinks.map((social, index) => (
                      <li key={index}>
                        <a href={social.href} onClick={(e) => e.preventDefault()}>
                          <div className="shape">
                            <img src="/assets/img/icon/icons_bg.svg" alt="shape" />
                          </div>
                          <img src={social.icon} alt="icon" className="icon" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="copyright-text">
            <p>
              Copyright & design by{' '}
              <a 
                href="#!" 
                onClick={(e) => e.preventDefault()}
                style={{ color: 'var(--tg-primary-color)' }}
              >
                @Real2049
              </a>{' '}
              - 2025
            </p>
          </div>
        </div>
      </div>
      <div className="footer__shape">
        <img 
          src="/assets/img/images/footer_shape01.png" 
          alt="shape" 
          className="alltuchtopdown" 
        />
        <img 
          src="/assets/img/images/footer_shape02.png" 
          alt="shape" 
          className="alltuchtopdown" 
        />
      </div>
    </footer>
  );
};

export default Footer;
