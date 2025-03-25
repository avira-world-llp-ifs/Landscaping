"use client" 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home_About_Us.module.css'; // Import the CSS module
import styles5 from '../styles/Home_Projects.module.css'; // Import the CSS module
import styles4 from '../styles/Home_Review.module.css'; // Import the CSS module
import styles1 from '../styles/Home_Services.module.css'; // Import the CSS module
import styles3 from '../styles/Home_Sponsers.module.css'; // Import the CSS module
import styles2 from '../styles/Home_Statistics.module.css'; // Import the CSS module

import 'swiper/css';
import 'swiper/css/pagination';

import TestimonialCard from '@/components/testimonialCard';
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";


import ProjectCard from '@/components/ProjectCard';
import { ChevronRight } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Pic from "../public/about_section_image_download.jpg"




export default function Home() {
  const [filter, setFilter] = useState("all");
  const [domLoaded, setDomLoaded] = useState(false)

  // Fix for hydration issues with Swiper
  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  console.log(filteredProjects)
  const handleFilterChange = (category: string) => {
    setFilter(category);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Animation easing
      once: true, // Run animation only once
    });
  }, []);

  var settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  var settings1 = {


    autoplay: true,             // Enable auto-play
    autoplaySpeed: 2000,        // Auto-play speed (in milliseconds)
    dots: true,                 // Show navigation dots
    infinite: true,             // Infinite looping
    speed: 500,                 // Transition speed (in milliseconds)
    
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const startCountUp = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        numbersRef.current.forEach((el) => {
          if (!el) return; // Ensure element exists before accessing properties

          const endValue = parseInt(el.getAttribute("data-end-value") || "0", 10);
          let start = 0;
          const duration = 2000; // Animation duration in ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            el.innerText = Math.floor(progress * endValue).toString();
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.innerText = endValue.toString(); // Ensure final value is correct
            }
          };
          requestAnimationFrame(animate);
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(startCountUp),
      { threshold: 0.5 }
    );

    numbersRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // -------------------------------About Us Section Start ----------------------------------------------
    <div className='mt-60' style={{ marginLeft: '20px' }}>
      <div className={styles.pageContainer}>
        <section className={styles.webpage_about_section}>
          <div className="about-section__inner container">
            <div className={`${styles.no_gutters} row`} >
              <div className={`${styles.about_section_content} col-12 col-md-7`} >
                <h2 className={styles.about_us_heading} data-aos="fade">
                  About us
                </h2>
                <div className={styles.about_section_pseudoheading} data-aos="fade">
                  Strategy-led <span className='custom-blue'>design</span> in every detail
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
                  <img src={Pic.src} width="426" height="573" alt="House" style={{borderRadius:"0 70px 0 70px "}}/>
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

      {/* Services section start */}
      <section className={styles1.services_section_outer_container}>
        <div className={styles1.services_section_inner_container}>
          <div className={`${styles1.services_section_container} row`}>
            <div className={`${styles1.services_section_content} col-12 col-md-6 order-md-1 ml-auto`}>
              <h2 className={styles1.services_section_heading} data-aos="fade">Services</h2>
              <div className={styles1.services_section_pseudoheading} data-aos="fade">Thought out to the smallest detail</div>
              <ul className={styles1.services_section_list}>
                <li className={styles1.services_section_item} data-aos="fade">
                  <a className={styles1.services_section_link} href="projects-detail.html">01. Logo Design</a>
                </li>
                <li className={styles1.services_section_item} data-aos="fade">
                  <a className={styles1.services_section_link} href="projects-detail.html">02. Business Card Design</a>
                </li>
                <li className={styles1.services_section_item} data-aos="fade">
                  <a className={styles1.services_section_link} href="projects-detail.html">03. Stationery Design</a>
                </li>
                <li className={styles1.services_section_item} data-aos="fade">
                  <a className={styles1.services_section_link} href="projects-detail.html">04. Letterhead Design</a>
                </li>
                <li className={styles1.services_section_item} data-aos="fade">
                  <a className={styles1.services_section_link} href="projects-detail.html">05. Brouchers</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-5" >
              <div className={styles1.services_section_image} data-aos="fade" >
                <img src="/services_section_image.jpg" width="426" height="573" alt="House" style={{borderRadius:'0 70px 0 70px'}} />
                <a className={styles1.services_section_play} href="#video" >
                  <svg className="play-btn__icon" width="18" height="18">
                    {/* <video src='' /> */}
                  </svg>
                  <span className="visually-hidden">Play video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services section finishes */}


      {/* statistics sections start */}
      <div className={styles2.statistics_outer_container} data-aos="fade">
      <div className={styles2.statistics_container}>
        <div className={`${styles2.statistics} row`}>
          <div className={`${styles2.statistics_item} col-12 col-sm`}>
            <div className={styles2.statistics_item_value}>
              <span
                ref={(el) => (numbersRef.current[0] = el)}
                className="__js_number"
                data-end-value="20"
              >
                0
              </span>
            </div>
            <div className={styles2.statistics_item_text}>
              Years
              <br />
              working
            </div>
          </div>
          <div className={`${styles2.statistics_item} col-12 col-sm`}>
            <div className={styles2.statistics_item_value}>
              <span
                ref={(el) => (numbersRef.current[1] = el)}
                className="__js_number"
                data-end-value="7"
              >
                0
              </span>
            </div>
            <div className={styles2.statistics_item_text}>
              Talented
              <br />
              managers
            </div>
          </div>
          <div className={`${styles2.statistics_item} col-12 col-sm`}>
            <div className={styles2.statistics_item_value}>
              <span
                ref={(el) => (numbersRef.current[2] = el)}
                className="__js_number"
                data-end-value="100"
              >
                0
              </span>
            </div>
            <div className={styles2.statistics_item_text}>
              Completed
              <br />
              projects
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* projects */}
      <section className="webpage__latest-projects latest-projects">
        <header className={styles5.projects_header} data-aos="fade">
          <h2 className={styles5.projects_header_heading}>Latest projects</h2>
          <div className={styles5.project_filters}>
            <button
              className={`${styles5.filter_item} ${filter === 'all' ? styles5.active_filter : ''}`}
              type="button"
              onClick={() => handleFilterChange('all')}
            >
              all
            </button>
            <button
              className={`${styles5.filter_item} ${filter === 'building' ? styles5.active_filter : ''}`}
              type="button"
              onClick={() => handleFilterChange('building')}
            >
              Building
            </button>
            <button
              className={`${styles5.filter_item} ${filter === 'interior' ? styles5.active_filter : ''}`}
              type="button"
              onClick={() => handleFilterChange('interior')}
            >
              Interior
            </button>
          </div>

          <a className={styles5.projects_more} href="projects-grid.html">
            View all projects
            <ChevronRight />
          </a>
        </header>
        <div  style={{ display: 'flex', justifyContent: 'center' }}>

          <div className={styles5.projectInnerContainer} data-aos="fade">
            <div className={styles5.projectSliderContainer}>

              <Slider {...settings1}>
                {filteredProjects.map((project, index) => (

                  <ProjectCard key={index}

                    title={project.title}
                    imageUrl={project.link}
                    description={project.description}

                  />

                ))}
              </Slider>

            </div>
          </div>
        </div>
      </section>

      {/* sponsers */}
      <section className={styles3.sponsors_section}>
        <div className={styles3.sponsors_inner_container}>
          <ul className={styles3.sponsors_list}>
            <li className={styles3.sponsors_item} data-aos="fade" data-aos-delay="0">
              <img src="/sponsor1.png" width="117" height="47" alt="behr handelsagentur" />
            </li>
            <li className={styles3.sponsors_item} data-aos="fade" data-aos-delay="200">
              <img src="/sponsor2.png" width="139" height="68" alt="christopher willis" />
            </li>
            <li className={styles3.sponsors_item} data-aos="fade" data-aos-delay="400">
              <img src="/sponsor3.png" width="150" height="45" alt="artchive crafts gallery" />
            </li>
            <li className={styles3.sponsors_item} data-aos="fade" data-aos-delay="600">
              <img src="/sponsor4.png" width="125" height="32" alt="artchive crasfts gallery" />
            </li>
          </ul>
        </div>
      </section>


      {/* Review */}
      <div className={styles4.review_swiper_container} data-aos="fade">

        <div className={styles4.review_outer_container}>
          <div className={styles4.review_inner_container}>
            {/* <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2> */}


            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (

                <TestimonialCard key={index}
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  companyColor={testimonial.companyColor}
                  description={testimonial.description}
                  imageSrc={testimonial.imageSrc}
                />

              ))}
            </Slider>
          </div>
        </div>
      </div>




    </div>
  );
}

