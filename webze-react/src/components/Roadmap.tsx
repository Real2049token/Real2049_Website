import React from 'react';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      year: 'Phase 0',
      icon: '/assets/img/icon/roadmap_icon01.png',
      description: 'Pilot readiness—contracts, SLAs, redemption engine, receipt spec'
    },
    {
      year: 'Phase 1',
      icon: '/assets/img/icon/roadmap_icon02.png',
      description: 'Hotel cohorts + venue campaigns, escrowed creator payouts, dispute workflows'
    },
    {
      year: 'Phase 2',
      icon: '/assets/img/icon/roadmap_icon03.png',
      description: 'Interoperability where compliant, creator-tier framework, governance formation'
    },
    {
      year: 'Phase 3',
      icon: '/assets/img/icon/roadmap_icon04.png',
      description: 'Regional partners/tourism boards, analytics suite, advanced inventory strategies'
    }
  ];

  return (
    <section id="roadmap" className="roadmap__area section-py-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div 
              className="section__title text-center mb-80" 
              data-aos="fade-up" 
              data-aos-delay="0"
              data-aos-duration="600"
            >
              <span className="sub-title">roadmap</span>
              <h2 className="title">
                Development <span>phases</span> & milestones
              </h2>
            </div>
          </div>
        </div>
        <div className="roadmap__item-wrap" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600">
          <div className="row gutter-y-40">
            {roadmapItems.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="roadmap__item">
                  <div className="roadmap__icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div className="roadmap__content">
                    <h3 className="title">{item.year}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="roadmap__shape">
        <img src="/assets/img/images/features_shape.png" alt="shape" />
      </div>
    </section>
  );
};

export default Roadmap;
