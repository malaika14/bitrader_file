/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
function Team({ team }) {
 
  return (
    <section className="team padding-top padding-bottom bg-color">
    <div className="section-header section-header--max50">
      <h2 className="mb-15 mt-minus-5">Meet our <span>advisers</span></h2>
      <p>Hey everyone, meet our amazing advisers! They're here to help and guide us through anything.</p>
    </div>
    

          <div className="col-sm-6 col-lg-3">
            <div className="team__item team__item--shape" data-aos="fade-up" data-aos-duration="900">
              <div className="team__item-inner team__item-inner--shape">
                <div className="team__item-thumb team__item-thumb--style1">
                  <img src="/images/team/6.png" alt="Team Image" className="dark"/>
                </div>
                <div className="team__item-content team__item-content--style1">
                  <div className="team__item-author team__item-author--style1">
                    <div className="team__item-authorinfo">
                
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
          
          <div className="text-center">
            <Link href="team" className="trk-btn trk-btn--border trk-btn--primary mt-25">View more </Link>
          </div>
      
   
  
  </section>
  );
}

export default Team;
