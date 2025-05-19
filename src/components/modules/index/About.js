/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import CountUp from "react-countup";

function About() {
  return (
    <section className="about about--style1">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5 gy-4 gy-sm-0 align-items-center">

            {/* LEFT SIDE: IMAGE */}
            <div className="col-lg-6">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img
                      className="dark"
                      src="/images/about/1.png"
                      alt="about-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: TEXT CONTENT */}
            <div className="col-lg-6">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <h2>
                    Meet <span>our company</span> unless miss the opportunity
                  </h2>
                  <p className="mb-0">
                    Hey there! So glad you stopped by to Meet Our Company. Don't
                    miss out on this opportunity to learn about what we do and
                    the amazing team that makes it all happen! Our company is
                    all about creating innovative solutions and providing
                    top-notch services to our clients. From start to finish,
                    we're dedicated to delivering results that exceed
                    expectations.
                  </p>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
