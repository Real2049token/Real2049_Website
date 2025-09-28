import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: '/assets/img/icon/features_icon01.png',
      title: 'Verifiable inventory',
      titleHighlight: 'inventory',
      description: 'Hotels, malls, and attractions commit room nights, dining capacity, and timed entries',
      type: 'large'
    },
    {
      id: 2,
      icon: '/assets/img/icon/features_icon02.png',
      title: 'Creator packages',
      titleHighlight: 'packages',
      description: 'Creators compose experiences as ERC-1155 packages with performance-based payouts',
      type: 'large'
    },
    {
      id: 3,
      icon: '/assets/img/icon/features_icon03.png',
      title: 'REAL points',
      titleHighlight: 'points',
      description: 'Utility tokens unlock earlier booking windows and priority access',
      type: 'small'
    },
    {
      id: 4,
      icon: '/assets/img/icon/features_icon04.png',
      title: 'Smart escrow',
      titleHighlight: 'escrow',
      description: 'Automated payouts settle post check-in with holdbacks and clawbacks',
      type: 'small'
    },
    {
      id: 5,
      icon: '/assets/img/icon/features_icon05.png',
      title: 'Network governance',
      titleHighlight: 'governance',
      description: 'Multi-stakeholder participation with clear decision rights and policies',
      type: 'small'
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
    <section id="features" className="features__area section-pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-80" style={{ width: '100%' }}>
              <span className="sub-title">built for the attention economy</span>
              <h2 className="title" style={{ textAlign: 'center', margin: '0 auto' }}>
                Predictable <span>access</span> for operators
              </h2>
            </div>
          </div>
        </div>
        <div className="row gutter-y-40 justify-content-center align-items-stretch">
          {features.slice(0, 2).map((feature) => (
            <div key={feature.id} className="col-lg-6 d-flex">
              <div className="features__item w-100">
                <div className="features__icon">
                  <img src={feature.icon} alt="icon" />
                </div>
                <div className="features__content">
                  <h4 className="title">
                    {renderTitle(feature.title, feature.titleHighlight)}
                  </h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
          {features.slice(2).map((feature) => (
            <div key={feature.id} className="col-lg-4 col-md-6 d-flex">
              <div className="features__item features__item-two w-100">
                <div className="features__icon">
                  <img src={feature.icon} alt="icon" />
                </div>
                <div className="features__content">
                  <h4 className="title">
                    {renderTitle(feature.title, feature.titleHighlight)}
                  </h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="features__shape">
        <img src="/assets/img/images/features_shape.png" alt="shape" />
      </div>
    </section>
  );
};

export default Features;
