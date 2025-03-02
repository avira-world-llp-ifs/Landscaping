// import HomeCarousel from "@/components/HomeCarousel";
// import MegaMenuNavbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <div>
//       <section className="webpage__about-section about-section">
//         <div className="about-section__inner container">
//           <div className="row no-gutters">
//             <div className="about-section__content col-12 col-md-7">
//               <h2 className="about-section__heading heading-small aos-init aos-animate" data-aos="fade">About us</h2>
//               <div className="about-section__pseudoheading heading aos-init aos-animate" data-aos="fade">Strategy-led <span className="color-yellow">design</span> in every detail</div>
//               <div className="about-section__text aos-init aos-animate" data-aos="fade">Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing</div>
//               <a className="about-section__btn btn aos-init aos-animate" href="about.html" data-aos="fade">Learn more</a>
//             </div>
//             <div className="col-12 col-md-5 aos-init aos-animate" data-aos="fade">
//               <div className="about-section__image">
//                 <img src="/landingpage3.jpg" width="426" height="573" alt="House"/>
//               </div>
//               <div className="about-section__cite-wrapper">
//                 <blockquote className="about-section__blockquote">“If you will be coping someone, you will never be the best”</blockquote>
//                 <cite className="about-section__cite">Paul.
//                   <br/>Designer
//                 </cite>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import styles from '../styles/Page1.module.css'; // Import the CSS module

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  return (
    // -------------------------------About Us Section Start ----------------------------------------------
    <div className='mt-60'>
      <div className={styles.pageContainer}>
        <section className={styles.webpage_about_section}>
          <div className="about-section__inner container">
            <div className={styles.no_gutters} >
              <div className={`${styles.about_section_content} col-12 col-md-7`} >
                <h2 className={styles.about_us_heading} data-aos="fade">
                  About us
                </h2>
                <div className={styles.about_section_pseudoheading} data-aos="fade">
                  Strategy-led <span style={{ color: "#FBC710" }}>design</span> in every detail
                </div>
                <div className={styles.about_section_text} data-aos="fade">
                  Founded in 2007, Sparch specializes in providing innovative services such as website design, brand identity, and marketing.
                </div>
                <a className={styles.about_section_learn_more} href="about.html" data-aos="fade">
                  Learn more
                </a>
              </div>
              <div className={`${styles.about_us_right_image_container} col-12 col-md-5`} data-aos="fade">
                <div className={styles.about_image}>
                  <img src="/about_section_image_download.jpg" width="426" height="573" alt="House" />
                </div>
                <div className={styles.about_section_cite_wrapper}>
                  <blockquote className={styles.about_section_blockquote}>
                    If you will be copying someone, you will never be the best”
                  </blockquote>
                  <cite className={styles.about_section_cite}>
                    Paul.<br />Designer
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    {/* about us section ends */}
    </div>
  );
}
