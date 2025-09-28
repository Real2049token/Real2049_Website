import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string>('collapseOne');

  const faqItems = [
    {
      id: 'collapseOne',
      question: 'What are REAL points and how do they work?',
      answer: 'REAL points behave like interoperable loyalty miles across hotels and venues. They unlock earlier booking windows, priority queues, exclusive experiences, and are consumed on use.'
    },
    {
      id: 'collapseTwo',
      question: 'How do creators get paid for their campaigns?',
      answer: 'Creators receive escrowed, performance-based payouts that settle post check-in with holdbacks and clawbacks. Attribution is deterministic through campaign IDs.'
    },
    {
      id: 'collapseThree',
      question: 'What chains will REAL operate on?',
      answer: 'REAL launches on REALChain (Stage 1) for inclusive governance, then adds interoperability with Avalanche C-Chain and Integra (Stage 2) where compliant.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };

  return (
    <section className="faq__area section-py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq__img" data-aos="fade-right" data-aos-delay="0" data-aos-duration="600">
              <img src="/assets/img/images/faq_img.png" alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq__content" data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">
              <div className="section__title mb-60">
                <span className="sub-title">faq & answers</span>
                <h2 className="title">
                  Common <span>questions</span> <br /> about REAL
                </h2>
              </div>
              <div className="faq__wrap">
                <div className="accordion" id="accordionExample">
                  {faqItems.map((item, index) => (
                    <div key={item.id} className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${activeAccordion === item.id ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAccordion(item.id)}
                          aria-expanded={activeAccordion === item.id}
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={item.id}
                        className={`accordion-collapse collapse ${activeAccordion === item.id ? 'show' : ''}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
