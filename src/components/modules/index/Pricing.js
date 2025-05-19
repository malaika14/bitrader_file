import React from "react";
import Link from "next/link";

const Pricing = ()=>{
    return(
        <section className="pricing padding-top padding-bottom">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5">Our <span>pricings </span>plan</h2>
          <p>We offer the best pricings around - from installations to repairs, maintenance, and more!</p>
        </div>
        <div className="container">
          <div className="pricing__wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 col-lg-4">
                <div className="pricing__item" data-aos="fade-right" data-aos-duration="1000">
                  <div className="pricing__item-inner">
                    <div className="pricing__item-content">
    
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">Standard</h6>
                        <h3 className="mb-25">$50/<span></span> </h3>
                      </div>
    
                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Minimal Initial Deposit 10$</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Spread 0.30</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Comission 00</li>
                         
                        </ul>
    
                      </div>
    
                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <Link href="signup" className="trk-btn trk-btn--outline">Continue</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="pricing__item " data-aos="fade-up" data-aos-duration="1000">
                  <div className="pricing__item-inner active">
                    <div className="pricing__item-content">
    
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">PRO</h6>
                        <h3 className="mb-25">$500/<span></span> </h3>
                      </div>
    
                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Minimal Initial Deposit 500$</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Spread 0.20</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Commission</li>
                          
                        </ul>
    
                      </div>
    
                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <Link href="signup" className="trk-btn trk-btn--outline active">Continue</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="pricing__item" data-aos="fade-left" data-aos-duration="1000">
                  <div className="pricing__item-inner">
                    <div className="pricing__item-content">
    
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">ECN</h6>
                        <h3 className="mb-25">$1000/<span></span> </h3>
                      </div>
    
                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Minimal Initial Deposit 1000$</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Spread 0.10</li>
                          <li className="pricing__list-item"><span><img src="/images/icon/check.svg" alt="check"
                                className="dark"/></span>
                            Commission 00</li>
                          
                        </ul>
    
                      </div>
    
                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <Link href="signup" className="trk-btn trk-btn--outline">Continue</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing__shape">
          <span className="pricing__shape-item pricing__shape-item--1"> <span></span> </span>
          <span className="pricing__shape-item pricing__shape-item--2"> <img src="/images/icon/1.png" alt="shape-icon"/>
          </span>
        </div>
      </section>
    )
}
export default Pricing;