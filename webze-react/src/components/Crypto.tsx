import React from 'react';

const Crypto: React.FC = () => {
  const cryptoItems = [
    {
      id: 1,
      icon: '/assets/img/icon/crypto_icon01.svg',
      title: 'Read our lightpaper',
      highlight: 'lightpaper',
      buttonText: 'View Documentation',
      buttonClass: 'tg-btn tg-btn-two'
    },
    {
      id: 2,
      icon: '/assets/img/icon/crypto_icon02.svg',
      title: 'Initial Supply Cohort 81 Hotels',
      highlight: '81 Hotels',
      buttonText: 'Partner Application',
      buttonClass: 'tg-btn tg-btn-two'
    },
    {
      id: 3,
      icon: '/assets/img/icon/crypto_icon03.svg',
      title: 'Network Participants Growing',
      highlight: 'Growing',
      buttonText: 'Join Community',
      buttonClass: 'tg-btn tg-btn-two'
    }
  ];

  const renderTitle = (title: string, highlight: string) => {
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}<span>{highlight}</span>{parts[1]}
      </>
    );
  };


  return (
    <section className="crypto__area section-py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__title text-center mb-80">
              <span className="sub-title">network value</span>
              <h2 className="title">
                B2B value for <span>hotels</span> <br /> & operators.
              </h2>
            </div>
          </div>
        </div>
        <div className="row gutter-y-30 justify-content-center align-items-stretch">
          {cryptoItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 d-flex">
              <div className="crypto__item w-100">
                <div className="crypto__icon">
                  <img src={item.icon} alt="icon" />
                </div>
                <div className="crypto__content">
                  <h2 className="title">
                    {renderTitle(item.title, item.highlight)}
                  </h2>
                  <a 
                    href="#!" 
                    className={item.buttonClass}
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="crypto__shape">
        <img src="/assets/img/images/features_shape.png" alt="shape" />
      </div>
    </section>
  );
};

export default Crypto;
