import React from 'react';

const Exchange: React.FC = () => {
  const exchangeIcons = [
    '/assets/img/icon/exchange_icon01.svg',
    '/assets/img/icon/exchange_icon02.svg',
    '/assets/img/icon/exchange_icon03.svg',
    '/assets/img/icon/exchange_icon04.svg'
  ];

  return (
    <section className="exchange__area section-pb-120" data-aos="fade-up" data-aos-delay="0" data-aos-duration="600">
      <div className="container">
        <div className="exchange__inner-wrap">
          <div className="exchange__content">
            <div className="icon">
              <img src="/assets/img/images/exchange_img.png" alt="img" />
            </div>
            <div className="content">
              <h4 className="title">
                Network <span>partners</span>
              </h4>
              <p>Hotels, malls, attractions, and venues participating in the REAL ecosystem.</p>
            </div>
          </div>
          <div className="exchange__icons">
            <ul className="list-wrap">
              {exchangeIcons.map((icon, index) => (
                <li key={index}>
                  <img src={icon} alt="icon" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exchange;
