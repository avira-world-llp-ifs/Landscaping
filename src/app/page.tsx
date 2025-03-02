"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect, useState } from 'react';
import styles from '../styles/Home_About_Us.module.css'; // Import the CSS module
import styles1 from '../styles/Home_Services.module.css'; // Import the CSS module
import styles3 from '../styles/Home_Sponsers.module.css'; // Import the CSS module
import styles2 from '../styles/Home_Statistics.module.css'; // Import the CSS module


import 'swiper/css';
import 'swiper/css/pagination';



const projects = [
  {
    title: "Villa In London",
    description:
      "Projects for many large domestic and foreign corporations in finance, banking, F&B, education, and communication.",
    image: "/img/picture/latest-projects/1.jpg",
    link: "/projects/villa-london",
    category: "building",
  },
  {
    title: "Spain Working Building",
    description:
      "Projects for many large domestic and foreign corporations in finance, banking, F&B, education, and communication.",
    image: "/img/picture/latest-projects/2.jpg",
    link: "/projects/spain-building",
    category: "building",
  },
  {
    title: "House Near Boston",
    description:
      "Projects for many large domestic and foreign corporations in finance, banking, F&B, education, and communication.",
    image: "/img/picture/latest-projects/3.jpg",
    link: "/projects/house-boston",
    category: "interior",
  },
];


export default function Home() {
  const [filter, setFilter] = useState("all");


  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter);

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
            <div className={`${styles.no_gutters} row`} >
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
            <div className="col-12 col-md-6 col-lg-5">
              <div className={styles1.services_section_image} data-aos="fade">
                <img src="/services_section_image.jpg" width="426" height="573" alt="House" />
                <a className={styles1.services_section_play} href="#video">
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
                <span className="__js_number" data-end-value="20">20</span>
              </div>
              <div className={styles2.statistics_item_text}>Years
                <br />working
              </div>
            </div>
            <div className={`${styles2.statistics_item} col-12 col-sm`}>
              <div className={styles2.statistics_item_value}>
                <span className={styles2.statistics_item_number} data-end-value="7">7</span>
              </div>
              <div className={styles2.statistics_item_text}>Talanted
                <br />managers
              </div>
            </div>
            <div className={`${styles2.statistics_item} col-12 col-sm`}>
              <div className={styles2.statistics_item_value}>
                <span className="__js_number" data-end-value="100">100</span>
              </div>
              <div className={styles2.statistics_item_text}>Complitly
                <br />projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* projects */}
      {/* <section className="webpage__latest-projects latest-projects">
        <header className="latest-projects__header container aos-init aos-animate" data-aos="fade">
          <h2 className="latest-projects__heading heading">Latest projects</h2>

          <div className="latest-projects__filter filter">
            <button className="filter__item filter__item--active __js_latest-projects-filter-item" type="button" data-filter="*">all</button>
            <button className="filter__item __js_latest-projects-filter-item" type="button" data-filter=".__js_building">Building</button>
            <button className="filter__item __js_latest-projects-filter-item" type="button" data-filter=".__js_interior">Interior</button>
          </div>
          <a className="latest-projects__more more" href="projects-grid.html">View all projects
            <svg width="20" height="20">
              <use ></use>
            </svg>
          </a>
        </header>
        <div className="latest-projects__inner container aos-init aos-animate" data-aos="fade">
          <div className="latest-projects__carousel swiper-container __js_latest-projects-carousel swiper-container-initialized swiper-container-horizontal">
            <div className="swiper-wrapper" id="swiper-wrapper-9e436d697b72e3f8" aria-live="polite" style={{ transform: "translate3d(0px, 0px, 0px);" }}>
              <a className="card swiper-slide __js_building swiper-slide-active" href="projects-detail.html" role="group" aria-label="1 / 8" style={{ width: "330px", marginRight: "30px" }}>
                <div className="card__image">
                  <img src="img/picture/latest-projects/1.jpg" width="430" height="573" alt="" />
                </div>
                <div className="card__content">
                  <h3 className="card__heading">Villa
                    <br />In
                    <br />London
                  </h3>
                  <div className="card__text">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&amp;B, education, communication.</div>
                  <div className="card__bottom">
                    <span className="card__link">See project
                      <svg width="20" height="20">
                        <use></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <a className="card swiper-slide __js_building swiper-slide-next" href="projects-detail.html" role="group" aria-label="2 / 8" style={{ width: "330px", marginRight: "30px" }}>
                <div className="card__image">
                  <img src="img/picture/latest-projects/2.jpg" width="430" height="573" alt="" />
                </div>
                <div className="card__content">
                  <h3 className="card__heading">Spain
                    <br />Working
                    <br />Building
                  </h3>
                  <div className="card__text">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&amp;B, education, communication.</div>
                  <div className="card__bottom">
                    <span className="card__link">See project
                      <svg width="20" height="20">
                        <use></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <a className="card swiper-slide __js_interior" href="projects-detail.html" role="group" aria-label="3 / 8" style={{ width: "330px", marginRight: "30px" }}>
                <div className="card__image">
                  <img src="img/picture/latest-projects/3.jpg" width="430" height="573" alt="" />
                </div>
                <div className="card__content">
                  <h3 className="card__heading">House
                    <br />Near
                    <br />Boston
                  </h3>
                  <div className="card__text">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&amp;B, education, communication.</div>
                  <div className="card__bottom">
                    <span className="card__link">See project
                      <svg width="20" height="20">
                        <use ></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <a className="card swiper-slide __js_building" href="projects-detail.html" role="group" aria-label="4 / 8" style={{ width: "330px", marginRight: "30px" }}>
                <div className="card__image">
                  <img src="img/picture/latest-projects/4.jpg" width="430" height="573" alt="" />
                </div>
                <div className="card__content">
                  <h3 className="card__heading">Villa
                    <br />On The
                    <br />River
                  </h3>
                  <div className="card__text">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&amp;B, education, communication.</div>
                  <div className="card__bottom">
                    <span className="card__link">See project
                      <svg width="20" height="20">
                        <use ></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <a className="card swiper-slide __js_building" href="projects-detail.html" role="group" aria-label="5 / 8" style={{ width: "330px", marginRight: "30px" }}>
                <div className="card__image">
                  <img src="img/picture/latest-projects/1.jpg" width="430" height="573" alt="" />
                </div>
                <div className="card__content">
                  <h3 className="card__heading">Villa
                    <br />In
                    <br />London
                  </h3>
                  <div className="card__text">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&amp;B, education, communication.</div>
                  <div className="card__bottom">
                    <span className="card__link">See project
                      <svg width="20" height="20">
                        <use ></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <a className="card swiper-slide __js_building" href="projects-detail.html" role="group" aria-label="6 / 8" style={{ width: "330px", marginRight: "30px" }}>
                <div className="card__image">
                  <img src="img/picture/latest-projects/2.jpg" width="430" height="573" alt="" />
                </div>
                <div className="card__content">
                  <h3 className="card__heading">Spain
                    <br />Working
                    <br />Building
                  </h3>
                  <div className="card__text">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&amp;B, education, communication.</div>
                  <div className="card__bottom">
                    <span className="card__link">See project
                      <svg width="20" height="20">
                        <use ></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <a className="card swiper-slide __js_interior" href="projects-detail.html" role="group" aria-label="7 / 8" style={{ width: "330px", marginRight: "30px" }}>
                <div className="card__image">
                  <img src="img/picture/latest-projects/3.jpg" width="430" height="573" alt="" />
                </div>
                <div className="card__content">
                  <h3 className="card__heading">House
                    <br />Near
                    <br />Boston
                  </h3>
                  <div className="card__text">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&amp;B, education, communication.</div>
                  <div className="card__bottom">
                    <span className="card__link">See project
                      <svg width="20" height="20">
                        <use ></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              <a className="card swiper-slide __js_building" href="projects-detail.html" role="group" aria-label="8 / 8" style={{ width: "330px", marginRight: "30px" }}>
                <div className="card__image">
                  <img src="img/picture/latest-projects/4.jpg" width="430" height="573" alt="" />
                </div>
                <div className="card__content">
                  <h3 className="card__heading">Villa
                    <br />On The
                    <br />River
                  </h3>
                  <div className="card__text">Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&amp;B, education, communication.</div>
                  <div className="card__bottom">
                    <span className="card__link">See project
                      <svg width="20" height="20">
                        <use ></use>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" aria-label="Go to slide 1"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 3"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 4"></span><span className="swiper-pagination-bullet" role="button" aria-label="Go to slide 5"></span></div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </div>
      </section> */}
      {/* <section className="webpage__latest-projects latest-projects py-12 bg-gray-100">
      <header className="latest-projects__header container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Latest Projects</h2>
        <div className="latest-projects__filter filter flex justify-center space-x-4">
          <button className="filter__item filter__item--active text-orange-500 border-b-2 border-orange-500">
            All
          </button>
          <button className="filter__item text-gray-600 hover:text-orange-500">Building</button>
          <button className="filter__item text-gray-600 hover:text-orange-500">Interior</button>
        </div>
      </header>

      <div className="latest-projects__inner container mx-auto mt-8" data-aos="fade-up">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Link href={project.link} className="block shadow-lg rounded-lg overflow-hidden bg-white">
                <div className="relative">
                  <Image
                    src={project.image}
                    width={430}
                    height={573}
                    alt={project.title}
                    className="w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <span className="text-orange-500 font-medium mt-2 block">See Project →</span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section> */}

      {/* sponsors */}

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
    </div>
  );
}
