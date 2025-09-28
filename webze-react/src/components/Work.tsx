import React from 'react';

const Work: React.FC = () => {
  const workItems = [
    {
      number: '01',
      title: 'Operators commit inventory',
      highlight: 'inventory',
      description: 'Hotels, malls, and attractions commit room nights, dining capacity, and timed entries via signed feeds.',
      side: 'left'
    },
    {
      number: '02',
      title: 'Creators compose experiences',
      highlight: 'experiences',
      description: 'Package inventory into on-brand experiences as ERC-1155 tokens with approved assets.',
      side: 'left'
    },
    {
      number: '03',
      title: 'Guests access with REAL points',
      highlight: 'REAL points',
      description: 'Earlier booking windows, priority queues, and exclusive access for token holders.',
      side: 'right'
    },
    {
      number: '04',
      title: 'Smart contract settlement',
      highlight: 'settlement',
      description: 'Automated payouts after check-in with escrow, holdbacks, and performance tracking.',
      side: 'right'
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
    <section id="work" className="work__area section-py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-80">
              <span className="sub-title">how it works?</span>
              <h2 className="title">
                End-to-end <span>attention</span> distribution
              </h2>
            </div>
          </div>
        </div>
        <div className="work__item-wrap">
          <div className="work__img">
            <img 
              src="/assets/img/images/work_img.png" 
              alt="img" 
              className="alltuchtopdown" 
            />
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 d-flex flex-column" data-aos="fade-right" data-aos-delay="0" data-aos-duration="600">
              {workItems
                .filter(item => item.side === 'left')
                .map((item, index) => (
                  <div 
                    key={item.number} 
                    className={`work__item ${index === 1 ? 'mb-0' : ''}`}
                  >
                    <h1 className="number">{item.number}</h1>
                    <h4 className="title">
                      {renderTitle(item.title, item.highlight)}
                    </h4>
                    <p>{item.description}</p>
                  </div>
                ))}
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">
              {workItems
                .filter(item => item.side === 'right')
                .map((item, index) => (
                  <div 
                    key={item.number} 
                    className={`work__item work__item-right ${index === 1 ? 'mb-0' : ''}`}
                  >
                    <h1 className="number">{item.number}</h1>
                    <h4 className="title">
                      {renderTitle(item.title, item.highlight)}
                    </h4>
                    <p>{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="work__shape">
        <img src="/assets/img/images/features_shape.png" alt="shape" />
      </div>
    </section>
  );
};

export default Work;
