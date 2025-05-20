/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";

function Roadmap() {
  const route = useRouter()
  return (
    <section className="roadmap roadmap--style1 padding-top  padding-bottom bg-color" id="roadmap">
    <div className="container">
      <div className="section-header section-header--max50">
        <h2 className="mb-15 mt-minus-5">Product <span> roadmap</span></h2>
        <p>A product roadmap shows the path ahead, helps teams plan, and guides the delivery of the product.</p>
      </div>
      <div className="roadmap__wrapper">
        <div className="row gy-4 gy-md-0 gx-5">
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init aos-animate" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Sign UP</h3>
                    <span>P1</span>
                  </div>
                  <p>Start your trading journey with TM9FX. Create your free account to access secure crypto, forex, and stock trading tools. Fast signup. No hidden fees.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init aos-animate" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Sign In</h3>
                    <span>P2</span>
                  </div>
                  <p>Securely log in to your TM9FX account to manage your crypto, forex, FBS, and stock trades. Fast, reliable, and safe user access.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Real Trading Account</h3>
                    <span>P3</span>
                  </div>
                  <p>Open a real trading account on TM9FX. Set your trading and investor passwords to start live forex, crypto, FBS, and stock trading.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Deposit</h3>
                    <span>P4</span>
                  </div>
                  <p>Easily fund yourTM9FX account via manual deposit or instant card payment. Start trading crypto, forex, FBS & stocks with flexible funding options.</p>
                </div>
              </div>

            </div>
          </div>
          <div className="col-md-6 offset-md-6">
            <div className="roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>Start Trading</h3>
                    <span>P5</span>
                  </div>
                  <p>Begin live trading on TM9fx. Access real-time charts, place buy/sell orders, and manage your portfolio across crypto, forex, stocks, and FBS markets.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init" data-aos="fade-right"
              data-aos-duration="800">
              <div className="roadmap__item-inner">
                <div className="roadmap__item-content">
                  <div className="roadmap__item-header">
                    <h3>WithDraw</h3>
                    <span>P6</span>
                  </div>
                  <p>Withdraw your profits from TM9FX easily. Submit a withdrawal request and receive funds securely within 6 to 24 hours.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="roadmap__shape">
      <span className="roadmap__shape-item roadmap__shape-item--1"> <span></span> </span>
      <span className="roadmap__shape-item roadmap__shape-item--2"> <img src="/images/icon/1.png" alt="shape-icon"/>
      </span>
    </div>
  </section>
  );
}

export default Roadmap;
