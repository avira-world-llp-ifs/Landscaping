// // // // // // // // "use client";

// // // // // // // // import React from "react";
// // // // // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // // // // // Import modules from 'swiper/modules' instead of 'swiper'
// // // // // // // // import { EffectFade, Navigation, Pagination } from "swiper/modules";

// // // // // // // // import "swiper/css"; // core Swiper
// // // // // // // // import "swiper/css/effect-fade";
// // // // // // // // import "swiper/css/navigation";
// // // // // // // // import "swiper/css/pagination";

// // // // // // // // const slidesData = [
// // // // // // // //   {
// // // // // // // //     id: 1,
// // // // // // // //     title: "Home In Forest",
// // // // // // // //     backgroundImage: "/forest.jpg",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 2,
// // // // // // // //     title: "Villa In London",
// // // // // // // //     backgroundImage: "/london.jpg",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: 3,
// // // // // // // //     title: "Renovate Exterior With Garden",
// // // // // // // //     backgroundImage: "/garden.jpg",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // export default function HomeCarousel() {
// // // // // // // //   return (
// // // // // // // //     <div className="relative w-full h-[600px]">
// // // // // // // //       <Swiper
// // // // // // // //         modules={[EffectFade, Navigation, Pagination]}
// // // // // // // //         effect="fade"
// // // // // // // //         navigation
// // // // // // // //         pagination={{ clickable: true }}
// // // // // // // //         loop
// // // // // // // //         className="h-full w-full"
// // // // // // // //       >
// // // // // // // //         {slidesData.map((slide) => (
// // // // // // // //           <SwiperSlide key={slide.id}>
// // // // // // // //             <div
// // // // // // // //               className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
// // // // // // // //               style={{
// // // // // // // //                 backgroundImage: `url(${slide.backgroundImage})`,
// // // // // // // //               }}
// // // // // // // //             >
// // // // // // // //               {/* Optional dark overlay */}
// // // // // // // //               <div className="absolute inset-0 bg-black/30" />

// // // // // // // //               {/* “RESIDENTIAL” text on the left (vertical) */}
// // // // // // // //               <div className="absolute left-10 top-10 text-white font-bold text-sm tracking-widest rotate-90 origin-top-left">
// // // // // // // //                 RESIDENTIAL
// // // // // // // //               </div>

// // // // // // // //               {/* Big heading in the center */}
// // // // // // // //               <div className="relative z-10 text-center text-white">
// // // // // // // //                 <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
// // // // // // // //                   {slide.title}
// // // // // // // //                 </h1>
// // // // // // // //               </div>

// // // // // // // //               {/* Bottom row of items */}
// // // // // // // //               <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8 text-white font-bold text-sm md:text-base">
// // // // // // // //                 {slidesData.map((item, index) => (
// // // // // // // //                   <div key={item.id} className="flex flex-col items-center">
// // // // // // // //                     <span className="text-2xl md:text-3xl">
// // // // // // // //                       {String(index + 1).padStart(2, "0")}
// // // // // // // //                     </span>
// // // // // // // //                     <span className="mt-1">{item.title}</span>
// // // // // // // //                   </div>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </SwiperSlide>
// // // // // // // //         ))}
// // // // // // // //       </Swiper>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import React from "react";
// // // // // // // import { Swiper, SwiperSlide } from "swiper/react";
// // // // // // // import { EffectFade, Pagination, Autoplay } from "swiper/modules";

// // // // // // // import "swiper/css";
// // // // // // // import "swiper/css/effect-fade";
// // // // // // // import "swiper/css/pagination";

// // // // // // // type Slide = {
// // // // // // //   id: number;
// // // // // // //   title: string;
// // // // // // //   backgroundImage: string;
// // // // // // // };

// // // // // // // const slidesData: Slide[] = [
// // // // // // //   {
// // // // // // //     id: 1,
// // // // // // //     title: "Home In Forest",
// // // // // // //     backgroundImage: "/forest.jpg", // Update with your image path
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 2,
// // // // // // //     title: "Villa In London",
// // // // // // //     backgroundImage: "/london.jpg", // Update with your image path
// // // // // // //   },
// // // // // // //   {
// // // // // // //     id: 3,
// // // // // // //     title: "Renovate Exterior With Garden",
// // // // // // //     backgroundImage: "/garden.jpg", // Update with your image path
// // // // // // //   },
// // // // // // // ];

// // // // // // // export default function MultiSlideHero() {
// // // // // // //   return (
// // // // // // //     <div className="relative w-screen h-[600px]">
// // // // // // //       <Swiper
// // // // // // //         modules={[EffectFade, Pagination, Autoplay]}
// // // // // // //         effect="fade"
// // // // // // //         pagination={{ clickable: true }}
// // // // // // //         autoplay={{ delay: 4000, disableOnInteraction: false }}
// // // // // // //         loop={true}
// // // // // // //         className="w-full h-full"
// // // // // // //       >
// // // // // // //         {slidesData.map((slide) => (
// // // // // // //           <SwiperSlide key={slide.id}>
// // // // // // //             <div
// // // // // // //               className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
// // // // // // //               style={{ backgroundImage: `url(${slide.backgroundImage})` }}
// // // // // // //             >
// // // // // // //               {/* Dark overlay */}
// // // // // // //               <div className="absolute inset-0 bg-black/30"></div>
// // // // // // //               {/* Vertical "RESIDENTIAL" text on the left */}
// // // // // // //               <div className="absolute left-10 top-10 text-white font-bold text-sm tracking-widest rotate-90 origin-top-left">
// // // // // // //                 RESIDENTIAL
// // // // // // //               </div>
// // // // // // //               {/* Centered Heading */}
// // // // // // //               <div className="relative z-10 text-center text-white px-4">
// // // // // // //                 <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
// // // // // // //                   {slide.title}
// // // // // // //                 </h1>
// // // // // // //               </div>
// // // // // // //               {/* Bottom row with slide navigation (all slides listed) */}
// // // // // // //               <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-8 text-white font-bold text-sm md:text-base">
// // // // // // //                 {slidesData.map((item, idx) => (
// // // // // // //                   <div key={item.id} className="flex flex-col items-center">
// // // // // // //                     <span className="text-2xl md:text-3xl">
// // // // // // //                       {String(idx + 1).padStart(2, "0")}
// // // // // // //                     </span>
// // // // // // //                     <span className="mt-1">{item.title}</span>
// // // // // // //                   </div>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </SwiperSlide>
// // // // // // //         ))}
// // // // // // //       </Swiper>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // // "use client";

// // // // // // // import React, { useEffect, useState, useRef } from "react";

// // // // // // // type Slide = {
// // // // // // //     id: number;
// // // // // // //     heading: string;
// // // // // // //     description: string;
// // // // // // //     linkText: string;
// // // // // // //     bgImage: string;
// // // // // // // };

// // // // // // // const slides: Slide[] = [
// // // // // // //     {
// // // // // // //         id: 0,
// // // // // // //         heading: "Enterprise Business Solutions",
// // // // // // //         description:
// // // // // // //             "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with perfect enterprise business solution.",
// // // // // // //         linkText: "Learn More",
// // // // // // //         bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id: 1,
// // // // // // //         heading: "Enterprise Application Services",
// // // // // // //         description:
// // // // // // //             "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// // // // // // //         linkText: "Learn More",
// // // // // // //         bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// // // // // // //     },
// // // // // // //     {
// // // // // // //         id: 2,
// // // // // // //         heading: "Digital Marketing Services",
// // // // // // //         description:
// // // // // // //             "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// // // // // // //         linkText: "Learn More",
// // // // // // //         bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// // // // // // //     },
// // // // // // // ];

// // // // // // // export default function MultiLineSlideHero() {
// // // // // // //     const [currentSlide, setCurrentSlide] = useState<number>(0);
// // // // // // //     const slideCount = slides.length;
// // // // // // //     const autoSlideDelay = 4000;
// // // // // // //     const animTime = 500; // Duration for slide transition
// // // // // // //     const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);

// // // // // // //     // Function to change slide (wraps around)
// // // // // // //     const changeSlide = (newIndex: number) => {
// // // // // // //         if (newIndex < 0) {
// // // // // // //             newIndex = slideCount - 1;
// // // // // // //         } else if (newIndex >= slideCount) {
// // // // // // //             newIndex = 0;
// // // // // // //         }
// // // // // // //         setCurrentSlide(newIndex);
// // // // // // //     };

// // // // // // //     // Auto-slide every autoSlideDelay ms
// // // // // // //     useEffect(() => {
// // // // // // //         autoSlideTimeout.current = setTimeout(() => {
// // // // // // //             changeSlide(currentSlide + 1);
// // // // // // //         }, autoSlideDelay);
// // // // // // //         return () => {
// // // // // // //             if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
// // // // // // //         };
// // // // // // //     }, [currentSlide]);

// // // // // // //     // Navigation handlers
// // // // // // //     const navigateLeft = () => changeSlide(currentSlide - 1);
// // // // // // //     const navigateRight = () => changeSlide(currentSlide + 1);
// // // // // // //     const goToSlide = (index: number) => changeSlide(index);

// // // // // // //     return (
// // // // // // //         <div style={{background:"rgba(242,239,236)"}}>

// // // // // // //             <div className="slider-container relative h-[500px] overflow-hidden" style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}>
// // // // // // //                 {/* Left and Right Controls */}
// // // // // // //                 <div
// // // // // // //                     className="slider-control left absolute top-0 left-0 w-[12%] h-full cursor-pointer bg-gradient-to-r from-black/20 to-transparent"
// // // // // // //                     onClick={navigateLeft}
// // // // // // //                 ></div>
// // // // // // //                 <div
// // // // // // //                     className="slider-control right absolute top-0 right-0 w-[12%] h-full cursor-pointer bg-gradient-to-r from-transparent to-black/20"
// // // // // // //                     onClick={navigateRight}
// // // // // // //                 ></div>

// // // // // // //                 {/* Pagination Bullets */}
// // // // // // //                 <ul className="slider-pagi absolute z-10 left-1/2 bottom-8 transform -translate-x-1/2 flex space-x-2">
// // // // // // //                     {slides.map((slide, index) => (
// // // // // // //                         <li
// // // // // // //                             key={slide.id}
// // // // // // //                             className={`slider-pagi__elem w-8 h-8 rounded-full border-2 border-white cursor-pointer ${index === currentSlide ? "active" : ""
// // // // // // //                                 }`}
// // // // // // //                             onClick={() => goToSlide(index)}
// // // // // // //                         ></li>
// // // // // // //                     ))}
// // // // // // //                 </ul>

// // // // // // //                 {/* Slider */}
// // // // // // //                 <div
// // // // // // //                     className="slider relative h-full"
// // // // // // //                     style={{
// // // // // // //                         transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
// // // // // // //                         transition: `transform ${animTime}ms ease`,
// // // // // // //                     }}
// // // // // // //                 >
// // // // // // //                     {slides.map((slide, index) => (
// // // // // // //                         <div
// // // // // // //                             key={slide.id}
// // // // // // //                             className={`slide absolute top-0 w-full h-full ${index === currentSlide ? "active" : ""}`}
// // // // // // //                             style={{ left: `${index * 100}%` }}
// // // // // // //                         >
// // // // // // //                             {/* Slide Background */}
// // // // // // //                             <div
// // // // // // //                                 className="slide__bg absolute top-0 w-full h-full bg-cover bg-center"
// // // // // // //                                 style={{ backgroundImage: `url(${slide.bgImage})` }}
// // // // // // //                             ></div>

// // // // // // //                             {/* Slide Content */}
// // // // // // //                             <div className="slide__content relative w-full h-full">
// // // // // // //                                 <svg
// // // // // // //                                     className="slide__overlay absolute bottom-0 left-0 w-full h-full"
// // // // // // //                                     viewBox="0 0 720 405"
// // // // // // //                                     preserveAspectRatio="xMaxYMax slice"
// // // // // // //                                 >
// // // // // // //                                     <path
// // // // // // //                                         className="slide__overlay-path"
// // // // // // //                                         d="M0,0 150,0 500,405 0,405"
// // // // // // //                                         fill="#303030"
// // // // // // //                                         opacity="0.8"
// // // // // // //                                     />
// // // // // // //                                 </svg>
// // // // // // //                                 <div className="slide__text absolute" style={{ bottom: "15%", left: "12%", color: "#fff" }}>
// // // // // // //                                     <h2 className="slide__text-heading" style={{ fontFamily: "Roboto, sans-serif", fontSize: "5rem", marginBottom: "2rem" }}>
// // // // // // //                                         {slide.heading}
// // // // // // //                                     </h2>
// // // // // // //                                     <p className="slide__text-desc" style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.8rem", marginBottom: "1.5rem" }}>
// // // // // // //                                         {slide.description}
// // // // // // //                                     </p>
// // // // // // //                                     <a className="slide__text-link" style={{ fontFamily: "Roboto, sans-serif", fontSize: "2.3rem" }}>
// // // // // // //                                         {slide.linkText}
// // // // // // //                                     </a>
// // // // // // //                                 </div>
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     ))}
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }
// // // // // // "use client";

// // // // // // import React, { useEffect, useState, useRef } from "react";

// // // // // // type Slide = {
// // // // // //   id: number;
// // // // // //   heading: string;
// // // // // //   description: string;
// // // // // //   linkText: string;
// // // // // //   bgImage: string;
// // // // // // };

// // // // // // const slides: Slide[] = [
// // // // // //   {
// // // // // //     id: 0,
// // // // // //     heading: "Enterprise Business Solutions",
// // // // // //     description:
// // // // // //       "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with perfect enterprise business solution.",
// // // // // //     linkText: "Learn More",
// // // // // //     bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     heading: "Enterprise Application Services",
// // // // // //     description:
// // // // // //       "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// // // // // //     linkText: "Learn More",
// // // // // //     bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     heading: "Digital Marketing Services",
// // // // // //     description:
// // // // // //       "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// // // // // //     linkText: "Learn More",
// // // // // //     bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// // // // // //   },
// // // // // // ];

// // // // // // export default function MultiLineSlideHero() {
// // // // // //   const [currentSlide, setCurrentSlide] = useState<number>(0);
// // // // // //   const slideCount = slides.length;
// // // // // //   const autoSlideDelay = 4000;
// // // // // //   const animTime = 500; // Duration for slide transition
// // // // // //   const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);

// // // // // //   // Change slide with wrap-around
// // // // // //   const changeSlide = (newIndex: number) => {
// // // // // //     if (newIndex < 0) {
// // // // // //       newIndex = slideCount - 1;
// // // // // //     } else if (newIndex >= slideCount) {
// // // // // //       newIndex = 0;
// // // // // //     }
// // // // // //     setCurrentSlide(newIndex);
// // // // // //   };

// // // // // //   // Auto-slide every autoSlideDelay ms
// // // // // //   useEffect(() => {
// // // // // //     autoSlideTimeout.current = setTimeout(() => {
// // // // // //       changeSlide(currentSlide + 1);
// // // // // //     }, autoSlideDelay);
// // // // // //     return () => {
// // // // // //       if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
// // // // // //     };
// // // // // //   }, [currentSlide]);

// // // // // //   const navigateLeft = () => changeSlide(currentSlide - 1);
// // // // // //   const navigateRight = () => changeSlide(currentSlide + 1);
// // // // // //   const goToSlide = (index: number) => changeSlide(index);

// // // // // //   return (
// // // // // //     <div style={{ background: "rgba(242,239,236)" }}>
// // // // // //       <div
// // // // // //         className="slider-container relative h-[500px] overflow-hidden"
// // // // // //         style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
// // // // // //       >
// // // // // //         {/* Pagination Bullets */}
// // // // // //         <ul className="slider-pagi absolute z-10 left-1/2 bottom-8 transform -translate-x-1/2 flex space-x-2">
// // // // // //           {slides.map((slide, index) => (
// // // // // //             <li
// // // // // //               key={slide.id}
// // // // // //               className={`slider-pagi__elem w-8 h-8 rounded-full border-2 border-white cursor-pointer ${
// // // // // //                 index === currentSlide ? "active" : ""
// // // // // //               }`}
// // // // // //               onClick={() => goToSlide(index)}
// // // // // //             ></li>
// // // // // //           ))}
// // // // // //         </ul>

// // // // // //         {/* Slider */}
// // // // // //         <div
// // // // // //           className="slider relative h-full"
// // // // // //           style={{
// // // // // //             transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
// // // // // //             transition: `transform ${animTime}ms ease`,
// // // // // //           }}
// // // // // //         >
// // // // // //           {slides.map((slide, index) => (
// // // // // //             <div
// // // // // //               key={slide.id}
// // // // // //               className={`slide absolute top-0 w-full h-full ${index === currentSlide ? "active" : ""}`}
// // // // // //               style={{ left: `${index * 100}%` }}
// // // // // //             >
// // // // // //               {/* Slide Background */}
// // // // // //               <div
// // // // // //                 className="slide__bg absolute top-0 w-full h-full bg-cover bg-center"
// // // // // //                 style={{ backgroundImage: `url(${slide.bgImage})` }}
// // // // // //               ></div>

// // // // // //               {/* Slide Content */}
// // // // // //               <div className="slide__content relative w-full h-full">
// // // // // //                 <svg
// // // // // //                   className="slide__overlay absolute bottom-0 left-0 w-full h-full"
// // // // // //                   viewBox="0 0 720 405"
// // // // // //                   preserveAspectRatio="xMaxYMax slice"
// // // // // //                 >
// // // // // //                   <path
// // // // // //                     className="slide__overlay-path"
// // // // // //                     d="M0,0 150,0 500,405 0,405"
// // // // // //                     fill="#303030"
// // // // // //                     opacity="0.8"
// // // // // //                   />
// // // // // //                 </svg>
// // // // // //                 <div
// // // // // //                   className="slide__text absolute"
// // // // // //                   style={{ bottom: "15%", left: "12%", color: "#fff" }}
// // // // // //                 >
// // // // // //                   <h2
// // // // // //                     className="slide__text-heading"
// // // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "5rem", marginBottom: "2rem" }}
// // // // // //                   >
// // // // // //                     {slide.heading}
// // // // // //                   </h2>
// // // // // //                   <p
// // // // // //                     className="slide__text-desc"
// // // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.8rem", marginBottom: "1.5rem" }}
// // // // // //                   >
// // // // // //                     {slide.description}
// // // // // //                   </p>
// // // // // //                   <a
// // // // // //                     className="slide__text-link"
// // // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "2.3rem" }}
// // // // // //                   >
// // // // // //                     {slide.linkText}
// // // // // //                   </a>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* New Controls Container Below the Slider */}
// // // // // //       <div className="flex justify-between items-center mt-4 px-4">
// // // // // //         <button
// // // // // //           onClick={navigateLeft}
// // // // // //           className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
// // // // // //         >
// // // // // //           Prev
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={navigateRight}
// // // // // //           className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
// // // // // //         >
// // // // // //           Next
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // "use client";

// // // // // import React, { useEffect, useState, useRef } from "react";

// // // // // type Slide = {
// // // // //   id: number;
// // // // //   heading: string;
// // // // //   description: string;
// // // // //   linkText: string;
// // // // //   bgImage: string;
// // // // // };

// // // // // const slides: Slide[] = [
// // // // //   {
// // // // //     id: 0,
// // // // //     heading: "Enterprise Business Solutions",
// // // // //     description:
// // // // //       "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with perfect enterprise business solution.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// // // // //   },
// // // // //   {
// // // // //     id: 1,
// // // // //     heading: "Enterprise Application Services",
// // // // //     description:
// // // // //       "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     heading: "Digital Marketing Services",
// // // // //     description:
// // // // //       "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// // // // //   },
// // // // // ];

// // // // // export default function MultiLineSlideHero() {
// // // // //   const [currentSlide, setCurrentSlide] = useState<number>(0);
// // // // //   const slideCount = slides.length;
// // // // //   const autoSlideDelay = 4000;
// // // // //   const animTime = 500; // Duration for slide transition
// // // // //   const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);
// // // // //   const progressTimeout = useRef<NodeJS.Timeout | null>(null);

// // // // //   // Change slide with wrap-around
// // // // //   const changeSlide = (newIndex: number) => {
// // // // //     if (newIndex < 0) {
// // // // //       newIndex = slideCount - 1;
// // // // //     } else if (newIndex >= slideCount) {
// // // // //       newIndex = 0;
// // // // //     }
// // // // //     setCurrentSlide(newIndex);
// // // // //   };

// // // // //   // Auto-slide every autoSlideDelay ms
// // // // //   useEffect(() => {
// // // // //     autoSlideTimeout.current = setTimeout(() => {
// // // // //       changeSlide(currentSlide + 1);
// // // // //     }, autoSlideDelay);
// // // // //     return () => {
// // // // //       if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
// // // // //     };
// // // // //   }, [currentSlide]);

// // // // //   // Add progress timeout control
// // // // //   useEffect(() => {
// // // // //     if (progressTimeout.current) clearTimeout(progressTimeout.current);

// // // // //     // Timeout indicator on next button
// // // // //     progressTimeout.current = setTimeout(() => {
// // // // //       // Add timeout indicator functionality here
// // // // //     }, autoSlideDelay);
// // // // //     return () => {
// // // // //       if (progressTimeout.current) clearTimeout(progressTimeout.current);
// // // // //     };
// // // // //   }, [currentSlide]);

// // // // //   const navigateLeft = () => changeSlide(currentSlide - 1);
// // // // //   const navigateRight = () => changeSlide(currentSlide + 1);
// // // // //   const goToSlide = (index: number) => changeSlide(index);

// // // // //   return (
// // // // //     <div style={{ background: "rgba(242,239,236)" }}>
// // // // //       <div
// // // // //         className="slider-container relative h-[500px] overflow-hidden"
// // // // //         style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
// // // // //       >
// // // // //         {/* Pagination Bullets */}
// // // // //         <ul className="slider-pagi absolute z-10 left-1/2 bottom-8 transform -translate-x-1/2 flex space-x-2">
// // // // //           {slides.map((slide, index) => (
// // // // //             <li
// // // // //               key={slide.id}
// // // // //               className={`slider-pagi__elem w-8 h-8 rounded-full border-2 border-white cursor-pointer ${
// // // // //                 index === currentSlide ? "active" : ""
// // // // //               }`}
// // // // //               onClick={() => goToSlide(index)}
// // // // //             ></li>
// // // // //           ))}
// // // // //         </ul>

// // // // //         {/* Slider */}
// // // // //         <div
// // // // //           className="slider relative h-full"
// // // // //           style={{
// // // // //             transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
// // // // //             transition: `transform ${animTime}ms ease`,
// // // // //           }}
// // // // //         >
// // // // //           {slides.map((slide, index) => (
// // // // //             <div
// // // // //               key={slide.id}
// // // // //               className={`slide absolute top-0 w-full h-full ${index === currentSlide ? "active" : ""}`}
// // // // //               style={{ left: `${index * 100}%` }}
// // // // //             >
// // // // //               {/* Slide Background */}
// // // // //               <div
// // // // //                 className="slide__bg absolute top-0 w-full h-full bg-cover bg-center"
// // // // //                 style={{ backgroundImage: `url(${slide.bgImage})` }}
// // // // //               ></div>

// // // // //               {/* Slide Content */}
// // // // //               <div className="slide__content relative w-full h-full">
// // // // //                 <svg
// // // // //                   className="slide__overlay absolute bottom-0 left-0 w-full h-full"
// // // // //                   viewBox="0 0 720 405"
// // // // //                   preserveAspectRatio="xMaxYMax slice"
// // // // //                 >
// // // // //                   <path
// // // // //                     className="slide__overlay-path"
// // // // //                     d="M0,0 150,0 500,405 0,405"
// // // // //                     fill="#303030"
// // // // //                     opacity="0.8"
// // // // //                   />
// // // // //                 </svg>
// // // // //                 <div
// // // // //                   className="slide__text absolute"
// // // // //                   style={{ bottom: "15%", left: "12%", color: "#fff" }}
// // // // //                 >
// // // // //                   <h2
// // // // //                     className="slide__text-heading"
// // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "5rem", marginBottom: "2rem" }}
// // // // //                   >
// // // // //                     {slide.heading}
// // // // //                   </h2>
// // // // //                   <p
// // // // //                     className="slide__text-desc"
// // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.8rem", marginBottom: "1.5rem" }}
// // // // //                   >
// // // // //                     {slide.description}
// // // // //                   </p>
// // // // //                   <a
// // // // //                     className="slide__text-link"
// // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "2.3rem" }}
// // // // //                   >
// // // // //                     {slide.linkText}
// // // // //                   </a>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* New Controls Container Below the Slider */}
// // // // //       <div className="full-width-animated-hero__controls flex justify-between items-center mt-4 px-4">
// // // // //         <div className="full-width-animated-hero__progress">
// // // // //           <span
// // // // //             className="full-width-animated-hero__progress-current"
// // // // //             tabIndex={-1}
// // // // //           >
// // // // //             {String(currentSlide + 1).padStart(2, "0")}
// // // // //           </span>
// // // // //           <span className="full-width-animated-hero__progress-separator" tabIndex={-1}>
// // // // //             /
// // // // //           </span>
// // // // //           <span
// // // // //             className="full-width-animated-hero__progress-total"
// // // // //             tabIndex={-1}
// // // // //           >
// // // // //             {String(slideCount).padStart(2, "0")}
// // // // //           </span>
// // // // //         </div>
// // // // //         <div className="full-width-animated-hero__btn-wrapper">
// // // // //           <button
// // // // //             className="full-width-animated-hero__btn full-width-animated-hero__btn--prev"
// // // // //             aria-label="Previous Slide"
// // // // //             data-btn="prev"
// // // // //             type="button"
// // // // //             onClick={navigateLeft}
// // // // //           >
// // // // //             <span
// // // // //               className="full-width-animated-hero__btn-span"
// // // // //               tabIndex={-1}
// // // // //             ></span>
// // // // //           </button>
// // // // //           <button
// // // // //             className="full-width-animated-hero__btn full-width-animated-hero__btn--next"
// // // // //             aria-label="Next Slide"
// // // // //             data-btn="next"
// // // // //             type="button"
// // // // //             onClick={navigateRight}
// // // // //           >
// // // // //             <canvas
// // // // //               className="full-width-animated-hero__timeout-indicator"
// // // // //               width="60"
// // // // //               height="60"
// // // // //               tabIndex={-1}
// // // // //             ></canvas>
// // // // //           </button>
// // // // //           <button
// // // // //             className="full-width-animated-hero__btn full-width-animated-hero__btn--next full-width-animated-hero__btn--next-small"
// // // // //             aria-label="Next Slide"
// // // // //             data-btn="next"
// // // // //             type="button"
// // // // //           >
// // // // //             <canvas
// // // // //               className="full-width-animated-hero__timeout-indicator"
// // // // //               tabIndex={-1}
// // // // //               width="40"
// // // // //               height="40"
// // // // //             ></canvas>
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // ----------------------------------------------------working as expected------------------------
// // // // // "use client";

// // // // // import React, { useEffect, useState, useRef } from "react";

// // // // // type Slide = {
// // // // //   id: number;
// // // // //   heading: string;
// // // // //   description: string;
// // // // //   linkText: string;
// // // // //   bgImage: string;
// // // // // };

// // // // // const slides: Slide[] = [
// // // // //   {
// // // // //     id: 0,
// // // // //     heading: "Enterprise Business Solutions",
// // // // //     description:
// // // // //       "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with perfect enterprise business solution.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// // // // //   },
// // // // //   {
// // // // //     id: 1,
// // // // //     heading: "Enterprise Application Services",
// // // // //     description:
// // // // //       "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     heading: "Digital Marketing Services",
// // // // //     description:
// // // // //       "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// // // // //   },
// // // // // ];

// // // // // export default function MultiLineSlideHero() {
// // // // //   const [currentSlide, setCurrentSlide] = useState<number>(0);
// // // // //   const slideCount = slides.length;
// // // // //   const autoSlideDelay = 4000;
// // // // //   const animTime = 500; // Duration for slide transition
// // // // //   const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);
// // // // //   const progressTimeout = useRef<NodeJS.Timeout | null>(null);

// // // // //   // Change slide with wrap-around
// // // // //   const changeSlide = (newIndex: number) => {
// // // // //     if (newIndex < 0) {
// // // // //       newIndex = slideCount - 1;
// // // // //     } else if (newIndex >= slideCount) {
// // // // //       newIndex = 0;
// // // // //     }
// // // // //     setCurrentSlide(newIndex);
// // // // //   };

// // // // //   // Auto-slide every autoSlideDelay ms
// // // // //   useEffect(() => {
// // // // //     autoSlideTimeout.current = setTimeout(() => {
// // // // //       changeSlide(currentSlide + 1);
// // // // //     }, autoSlideDelay);
// // // // //     return () => {
// // // // //       if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
// // // // //     };
// // // // //   }, [currentSlide]);

// // // // //   // Add progress timeout control
// // // // //   useEffect(() => {
// // // // //     if (progressTimeout.current) clearTimeout(progressTimeout.current);

// // // // //     // Timeout indicator on next button
// // // // //     progressTimeout.current = setTimeout(() => {
// // // // //       // Add timeout indicator functionality here
// // // // //     }, autoSlideDelay);
// // // // //     return () => {
// // // // //       if (progressTimeout.current) clearTimeout(progressTimeout.current);
// // // // //     };
// // // // //   }, [currentSlide]);

// // // // //   const navigateLeft = () => changeSlide(currentSlide - 1);
// // // // //   const navigateRight = () => changeSlide(currentSlide + 1);
// // // // //   const goToSlide = (index: number) => changeSlide(index);

// // // // //   return (
// // // // //     <div style={{ background: "rgba(242,239,236)" }}>
// // // // //       <div
// // // // //         className="slider-container relative h-[500px] overflow-hidden"
// // // // //         style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
// // // // //       >
// // // // //         {/* Pagination Bullets */}
// // // // //         <ul className="slider-pagi absolute z-10 left-1/2 bottom-8 transform -translate-x-1/2 flex space-x-2">
// // // // //           {slides.map((slide, index) => (
// // // // //             <li
// // // // //               key={slide.id}
// // // // //               className={`slider-pagi__elem w-8 h-8 rounded-full border-2 border-white cursor-pointer ${
// // // // //                 index === currentSlide ? "active" : ""
// // // // //               }`}
// // // // //               onClick={() => goToSlide(index)}
// // // // //             ></li>
// // // // //           ))}
// // // // //         </ul>

// // // // //         {/* Slider */}
// // // // //         <div
// // // // //           className="slider relative h-full"
// // // // //           style={{
// // // // //             transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
// // // // //             transition: `transform ${animTime}ms ease`,
// // // // //           }}
// // // // //         >
// // // // //           {slides.map((slide, index) => (
// // // // //             <div
// // // // //               key={slide.id}
// // // // //               className={`slide absolute top-0 w-full h-full ${index === currentSlide ? "active" : ""}`}
// // // // //               style={{ left: `${index * 100}%` }}
// // // // //             >
// // // // //               {/* Slide Background */}
// // // // //               <div
// // // // //                 className="slide__bg absolute top-0 w-full h-full bg-cover bg-center"
// // // // //                 style={{ backgroundImage: `url(${slide.bgImage})` }}
// // // // //               ></div>

// // // // //               {/* Slide Content */}
// // // // //               <div className="slide__content relative w-full h-full">
// // // // //                 <svg
// // // // //                   className="slide__overlay absolute bottom-0 left-0 w-full h-full"
// // // // //                   viewBox="0 0 720 405"
// // // // //                   preserveAspectRatio="xMaxYMax slice"
// // // // //                 >
// // // // //                   <path
// // // // //                     className="slide__overlay-path"
// // // // //                     d="M0,0 150,0 500,405 0,405"
// // // // //                     fill="#303030"
// // // // //                     opacity="0.8"
// // // // //                   />
// // // // //                 </svg>
// // // // //                 <div
// // // // //                   className="slide__text absolute"
// // // // //                   style={{ bottom: "15%", left: "12%", color: "#fff" }}
// // // // //                 >
// // // // //                   <h2
// // // // //                     className="slide__text-heading"
// // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "5rem", marginBottom: "2rem" }}
// // // // //                   >
// // // // //                     {slide.heading}
// // // // //                   </h2>
// // // // //                   <p
// // // // //                     className="slide__text-desc"
// // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.8rem", marginBottom: "1.5rem" }}
// // // // //                   >
// // // // //                     {slide.description}
// // // // //                   </p>
// // // // //                   <a
// // // // //                     className="slide__text-link"
// // // // //                     style={{ fontFamily: "Roboto, sans-serif", fontSize: "2.3rem" }}
// // // // //                   >
// // // // //                     {slide.linkText}
// // // // //                   </a>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* New Controls Container Below the Slider */}
// // // // //       <div className="full-width-animated-hero__controls flex justify-between items-center mt-4 px-4">
// // // // //         <div className="full-width-animated-hero__progress">
// // // // //           <span
// // // // //             className="full-width-animated-hero__progress-current"
// // // // //             tabIndex={-1}
// // // // //           >
// // // // //             {String(currentSlide + 1).padStart(2, "0")}
// // // // //           </span>
// // // // //           <span className="full-width-animated-hero__progress-separator" tabIndex={-1}>
// // // // //             /
// // // // //           </span>
// // // // //           <span
// // // // //             className="full-width-animated-hero__progress-total"
// // // // //             tabIndex={-1}
// // // // //           >
// // // // //             {String(slideCount).padStart(2, "0")}
// // // // //           </span>
// // // // //         </div>
// // // // //         <div className="full-width-animated-hero__btn-wrapper">
// // // // //           <button
// // // // //             className="full-width-animated-hero__btn full-width-animated-hero__btn--prev"
// // // // //             aria-label="Previous Slide"
// // // // //             data-btn="prev"
// // // // //             type="button"
// // // // //             onClick={navigateLeft}
// // // // //           >
// // // // //             <span
// // // // //               className="full-width-animated-hero__btn-span"
// // // // //               tabIndex={-1}
// // // // //             ></span>
// // // // //           </button>
// // // // //           <button
// // // // //             className="full-width-animated-hero__btn full-width-animated-hero__btn--next"
// // // // //             aria-label="Next Slide"
// // // // //             data-btn="next"
// // // // //             type="button"
// // // // //             onClick={navigateRight}
// // // // //           >
// // // // //             <canvas
// // // // //               className="full-width-animated-hero__timeout-indicator"
// // // // //               width="60"
// // // // //               height="60"
// // // // //               tabIndex={-1}
// // // // //             ></canvas>
// // // // //           </button>
// // // // //           <button
// // // // //             className="full-width-animated-hero__btn full-width-animated-hero__btn--next full-width-animated-hero__btn--next-small"
// // // // //             aria-label="Next Slide"
// // // // //             data-btn="next"
// // // // //             type="button"
// // // // //           >
// // // // //             <canvas
// // // // //               className="full-width-animated-hero__timeout-indicator"
// // // // //               tabIndex={-1}
// // // // //               width="40"
// // // // //               height="40"
// // // // //             ></canvas>
// // // // //             <button className="full-width-animated-hero__btn full-width-animated-hero__btn--prev" aria-label="Previous Slide" data-btn="prev" type="button">
// // // // // 						<span className="full-width-animated-hero__btn-span"></span>
// // // // // 					</button>
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // --------------------------------------------------------------------------------------------------------------



// // // // // "use client";

// // // // // import React, { useEffect, useState, useRef } from "react";

// // // // // type Slide = {
// // // // //   id: number;
// // // // //   heading: string;
// // // // //   description: string;
// // // // //   linkText: string;
// // // // //   bgImage: string;
// // // // // };

// // // // // const slides: Slide[] = [
// // // // //   {
// // // // //     id: 0,
// // // // //     heading: "Enterprise Business Solutions",
// // // // //     description:
// // // // //       "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with perfect enterprise business solution.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// // // // //   },
// // // // //   {
// // // // //     id: 1,
// // // // //     heading: "Enterprise Application Services",
// // // // //     description:
// // // // //       "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     heading: "Digital Marketing Services",
// // // // //     description:
// // // // //       "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// // // // //     linkText: "Learn More",
// // // // //     bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// // // // //   },
// // // // // ];

// // // // // export default function MultiLineSlideHero() {
// // // // //   const [currentSlide, setCurrentSlide] = useState<number>(0);
// // // // //   const slideCount = slides.length;
// // // // //   const autoSlideDelay = 4000;
// // // // //   const animTime = 500; // Duration for slide transition
// // // // //   const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);

// // // // //   // Changes slide index with wrap-around
// // // // //   const changeSlide = (newIndex: number) => {
// // // // //     if (newIndex < 0) {
// // // // //       newIndex = slideCount - 1;
// // // // //     } else if (newIndex >= slideCount) {
// // // // //       newIndex = 0;
// // // // //     }
// // // // //     setCurrentSlide(newIndex);
// // // // //   };

// // // // //   // Auto-slide every autoSlideDelay ms
// // // // //   useEffect(() => {
// // // // //     autoSlideTimeout.current = setTimeout(() => {
// // // // //       changeSlide(currentSlide + 1);
// // // // //     }, autoSlideDelay);
// // // // //     return () => {
// // // // //       if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
// // // // //     };
// // // // //   }, [currentSlide]);

// // // // //   // Manual navigation
// // // // //   const navigateLeft = () => changeSlide(currentSlide - 1);
// // // // //   const navigateRight = () => changeSlide(currentSlide + 1);
// // // // //   const goToSlide = (index: number) => changeSlide(index);

// // // // //   return (
// // // // //     <div style={{ background: "rgba(242,239,236)" }}>
// // // // //       <div
// // // // //         className="slider-container relative h-[500px] overflow-hidden"
// // // // //         style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
// // // // //       >
// // // // //         {/* Pagination Bullets */}
// // // // //         <ul className="slider-pagi absolute z-10 left-1/2 bottom-8 transform -translate-x-1/2 flex space-x-2">
// // // // //           {slides.map((slide, index) => (
// // // // //             <li
// // // // //               key={slide.id}
// // // // //               className={`slider-pagi__elem w-8 h-8 rounded-full border-2 border-white cursor-pointer ${
// // // // //                 index === currentSlide ? "active" : ""
// // // // //               }`}
// // // // //               onClick={() => goToSlide(index)}
// // // // //             ></li>
// // // // //           ))}
// // // // //         </ul>

// // // // //         {/* Slider */}
// // // // //         <div
// // // // //           className="slider relative h-full"
// // // // //           style={{
// // // // //             transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
// // // // //             transition: `transform ${animTime}ms ease`,
// // // // //           }}
// // // // //         >
// // // // //           {slides.map((slide, index) => (
// // // // //             <div
// // // // //               key={slide.id}
// // // // //               className={`slide absolute top-0 w-full h-full ${
// // // // //                 index === currentSlide ? "active" : ""
// // // // //               }`}
// // // // //               style={{ left: `${index * 100}%` }}
// // // // //             >
// // // // //               {/* Slide Background */}
// // // // //               <div
// // // // //                 className="slide__bg absolute top-0 w-full h-full bg-cover bg-center"
// // // // //                 style={{ backgroundImage: `url(${slide.bgImage})` }}
// // // // //               ></div>

// // // // //               {/* Slide Content */}
// // // // //               <div className="slide__content relative w-full h-full">
// // // // //                 <svg
// // // // //                   className="slide__overlay absolute bottom-0 left-0 w-full h-full"
// // // // //                   viewBox="0 0 720 405"
// // // // //                   preserveAspectRatio="xMaxYMax slice"
// // // // //                 >
// // // // //                   <path
// // // // //                     className="slide__overlay-path"
// // // // //                     d="M0,0 150,0 500,405 0,405"
// // // // //                     fill="#303030"
// // // // //                     opacity="0.8"
// // // // //                   />
// // // // //                 </svg>
// // // // //                 <div
// // // // //                   className="slide__text absolute"
// // // // //                   style={{ bottom: "15%", left: "12%", color: "#fff" }}
// // // // //                 >
// // // // //                   <h2
// // // // //                     className="slide__text-heading"
// // // // //                     style={{
// // // // //                       fontFamily: "Roboto, sans-serif",
// // // // //                       fontSize: "5rem",
// // // // //                       marginBottom: "2rem",
// // // // //                     }}
// // // // //                   >
// // // // //                     {slide.heading}
// // // // //                   </h2>
// // // // //                   <p
// // // // //                     className="slide__text-desc"
// // // // //                     style={{
// // // // //                       fontFamily: "Roboto, sans-serif",
// // // // //                       fontSize: "1.8rem",
// // // // //                       marginBottom: "1.5rem",
// // // // //                     }}
// // // // //                   >
// // // // //                     {slide.description}
// // // // //                   </p>
// // // // //                   <a
// // // // //                     className="slide__text-link"
// // // // //                     style={{
// // // // //                       fontFamily: "Roboto, sans-serif",
// // // // //                       fontSize: "2.3rem",
// // // // //                     }}
// // // // //                   >
// // // // //                     {slide.linkText}
// // // // //                   </a>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Circular Navigation Buttons Below the Slider */}
// // // // //       <div className="flex justify-end items-center gap-4 mt-4 mr-6">
// // // // //         {/* Left Button */}
// // // // //         <button
// // // // //           onClick={navigateLeft}
// // // // //           className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition"
// // // // //         >
// // // // //           <span className="text-orange-500 text-xl">&#60;</span>
// // // // //         </button>
// // // // //         {/* Right Button */}
// // // // //         <button
// // // // //           onClick={navigateRight}
// // // // //           className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition"
// // // // //         >
// // // // //           <span className="text-orange-500 text-xl">&#62;</span>
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // "use client";

// // // // // import React, { useEffect, useState, useRef } from "react";

// // // // // type Slide = {
// // // // //     id: number;
// // // // //     heading: string;
// // // // //     description: string;
// // // // //     linkText: string;
// // // // //     bgImage: string;
// // // // // };

// // // // // const slides: Slide[] = [
// // // // //     {
// // // // //         id: 0,
// // // // //         heading: "Enterprise Business Solutions",
// // // // //         description:
// // // // //             "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with perfect enterprise business solution.",
// // // // //         linkText: "Learn More",
// // // // //         bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// // // // //     },
// // // // //     {
// // // // //         id: 1,
// // // // //         heading: "Enterprise Application Services",
// // // // //         description:
// // // // //             "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// // // // //         linkText: "Learn More",
// // // // //         bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// // // // //     },
// // // // //     {
// // // // //         id: 2,
// // // // //         heading: "Digital Marketing Services",
// // // // //         description:
// // // // //             "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// // // // //         linkText: "Learn More",
// // // // //         bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// // // // //     },
// // // // // ];

// // // // // export default function MultiLineSlideHero() {
// // // // //     const [currentSlide, setCurrentSlide] = useState<number>(0);
// // // // //     const slideCount = slides.length;
// // // // //     const autoSlideDelay = 4000;
// // // // //     const animTime = 500; // Duration for slide transition
// // // // //     const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);

// // // // //     // Changes slide index with wrap-around
// // // // //     const changeSlide = (newIndex: number) => {
// // // // //         if (newIndex < 0) {
// // // // //             newIndex = slideCount - 1;
// // // // //         } else if (newIndex >= slideCount) {
// // // // //             newIndex = 0;
// // // // //         }
// // // // //         setCurrentSlide(newIndex);
// // // // //     };

// // // // //     // Auto-slide every autoSlideDelay ms
// // // // //     useEffect(() => {
// // // // //         autoSlideTimeout.current = setTimeout(() => {
// // // // //             changeSlide(currentSlide + 1);
// // // // //         }, autoSlideDelay);
// // // // //         return () => {
// // // // //             if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
// // // // //         };
// // // // //     }, [currentSlide]);

// // // // //     // Manual navigation
// // // // //     const navigateLeft = () => changeSlide(currentSlide - 1);
// // // // //     const navigateRight = () => changeSlide(currentSlide + 1);
// // // // //     const goToSlide = (index: number) => changeSlide(index);

// // // // //     return (
// // // // //         <div style={{ background: "rgba(242,239,236)" }}>
// // // // //             <div
// // // // //                 className="slider-container relative h-[470px] overflow-hidden"
// // // // //                 style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
// // // // //             >

// // // // //                 {/* Slider */}
// // // // //                 <div
// // // // //                     className="slider relative h-full"
// // // // //                     style={{
// // // // //                         transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
// // // // //                         transition: `transform ${animTime}ms ease`,
// // // // //                     }}
// // // // //                 >
// // // // //                     {slides.map((slide, index) => (
// // // // //                         <div
// // // // //                             key={slide.id}
// // // // //                             className={`slide absolute top-0 w-full h-full ${index === currentSlide ? "active" : ""}`}
// // // // //                             style={{ left: `${index * 100}%` }}
// // // // //                         >
// // // // //                             {/* Slide Background */}
// // // // //                             <div
// // // // //                                 className="slide__bg absolute top-0 w-full h-full bg-cover bg-center"
// // // // //                                 style={{ backgroundImage: `url(${slide.bgImage})` }}
// // // // //                             ></div>

// // // // //                             {/* Slide Content */}
// // // // //                             <div className="slide__content relative w-full h-full">
// // // // //                                 <svg
// // // // //                                     className="slide__overlay absolute bottom-0 left-0 w-full h-full"
// // // // //                                     viewBox="0 0 720 405"
// // // // //                                     preserveAspectRatio="xMaxYMax slice"
// // // // //                                 >
// // // // //                                     <path
// // // // //                                         className="slide__overlay-path"
// // // // //                                         d="M0,0 150,0 500,405 0,405"
// // // // //                                         fill="#303030"
// // // // //                                         opacity="0.8"
// // // // //                                     />
// // // // //                                 </svg>
// // // // //                                 <div
// // // // //                                     className="slide__text absolute"
// // // // //                                     style={{ bottom: "15%", left: "12%", color: "#fff" }}
// // // // //                                 >
// // // // //                                     <h2
// // // // //                                         className="slide__text-heading"
// // // // //                                         style={{
// // // // //                                             fontFamily: "Roboto, sans-serif",
// // // // //                                             fontSize: "5rem",
// // // // //                                             marginBottom: "2rem",
// // // // //                                         }}
// // // // //                                     >
// // // // //                                         {slide.heading}
// // // // //                                     </h2>
// // // // //                                     <p
// // // // //                                         className="slide__text-desc"
// // // // //                                         style={{
// // // // //                                             fontFamily: "Roboto, sans-serif",
// // // // //                                             fontSize: "1.8rem",
// // // // //                                             marginBottom: "1.5rem",
// // // // //                                         }}
// // // // //                                     >
// // // // //                                         {slide.description}
// // // // //                                     </p>
// // // // //                                     <a
// // // // //                                         className="slide__text-link"
// // // // //                                         style={{
// // // // //                                             fontFamily: "Roboto, sans-serif",
// // // // //                                             fontSize: "2.3rem",
// // // // //                                         }}
// // // // //                                     >
// // // // //                                         {slide.linkText}
// // // // //                                     </a>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     ))}
// // // // //                 </div>
// // // // //             </div>
// // // // //             <div className="flex justify-end items-center relative">
// // // // //                 <div className="absolute z-20 top-1/2 left-6 transform -translate-y-1/2 flex items-center gap-2">
// // // // //                     <span
// // // // //                         className="text-black font-bold text-xl"
// // // // //                     >
// // // // //                         {String(currentSlide + 1).padStart(2, "0")}
// // // // //                     </span>
// // // // //                     <div className="w-32 h-1 bg-white rounded-full ">
// // // // //                         <div
// // // // //                             className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
// // // // //                             style={{
// // // // //                                 width: `${((currentSlide + 1) / slideCount) * 100}%`,
// // // // //                             }}
// // // // //                         ></div>
// // // // //                     </div>

// // // // //                     <span
// // // // //                         className="text-black font-bold text-xl"
// // // // //                     >
// // // // //                         {String(slideCount).padStart(2, "0")}
// // // // //                     </span>

// // // // //                 </div>

// // // // //                 {/* Circular Navigation Buttons Below the Slider */}
// // // // //                 <div className="flex gap-4 relative z-20 py-3 px-20">
// // // // //                     {/* Left Button */}
// // // // //                     <button
// // // // //                         onClick={navigateLeft}
// // // // //                         className="text-orange-500 text-2xl w-12 h-12 rounded-full border-1 border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out "
// // // // //                     >
// // // // //                         &#60;
// // // // //                     </button>
// // // // //                     {/* Right Button */}
// // // // //                     <button
// // // // //                         onClick={navigateRight}
// // // // //                         className="text-orange-500 text-2xl w-12 h-12 rounded-full border-1 border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
// // // // //                     >
// // // // //                         &#62;
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // "use client";

// // // // import React, { useEffect, useState, useRef } from "react";

// // // // type Slide = {
// // // //     id: number;
// // // //     heading: string;
// // // //     description: string;
// // // //     linkText: string;
// // // //     bgImage: string;
// // // // };

// // // // const slides: Slide[] = [
// // // //     {
// // // //         id: 0,
// // // //         heading: "Enterprise Business Solutions",
// // // //         description:
// // // //             "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with perfect enterprise business solution.",
// // // //         linkText: "Learn More",
// // // //         bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// // // //     },
// // // //     {
// // // //         id: 1,
// // // //         heading: "Enterprise Application Services",
// // // //         description:
// // // //             "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// // // //         linkText: "Learn More",
// // // //         bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// // // //     },
// // // //     {
// // // //         id: 2,
// // // //         heading: "Digital Marketing Services",
// // // //         description:
// // // //             "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// // // //         linkText: "Learn More",
// // // //         bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// // // //     },
// // // // ];

// // // // export default function MultiLineSlideHero() {
// // // //     const [currentSlide, setCurrentSlide] = useState<number>(0);
// // // //     const slideCount = slides.length;
// // // //     const autoSlideDelay = 4000;
// // // //     const animTime = 500; // Duration for slide transition
// // // //     const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);

// // // //     // Changes slide index with wrap-around
// // // //     const changeSlide = (newIndex: number) => {
// // // //         if (newIndex < 0) {
// // // //             newIndex = slideCount - 1;
// // // //         } else if (newIndex >= slideCount) {
// // // //             newIndex = 0;
// // // //         }
// // // //         setCurrentSlide(newIndex);
// // // //     };

// // // //     // Auto-slide every autoSlideDelay ms
// // // //     useEffect(() => {
// // // //         autoSlideTimeout.current = setTimeout(() => {
// // // //             changeSlide(currentSlide + 1);
// // // //         }, autoSlideDelay);
// // // //         return () => {
// // // //             if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
// // // //         };
// // // //     }, [currentSlide]);

// // // //     // Manual navigation
// // // //     const navigateLeft = () => changeSlide(currentSlide - 1);
// // // //     const navigateRight = () => changeSlide(currentSlide + 1);
// // // //     const goToSlide = (index: number) => changeSlide(index);

// // // //     return (
// // // //         <div style={{ background: "rgba(242,239,236)" }}>
// // // //             <div
// // // //                 className="slider-container relative h-[470px] overflow-hidden"
// // // //                 style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
// // // //             >

// // // //                 {/* Slider */}
// // // //                 <div
// // // //                     className="slider relative h-full"
// // // //                     style={{
// // // //                         transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
// // // //                         transition: `transform ${animTime}ms ease`,
// // // //                     }}
// // // //                 >
// // // //                     {slides.map((slide, index) => (
// // // //                         <div
// // // //                             key={slide.id}
// // // //                             className={`slide absolute top-0 w-full h-full ${index === currentSlide ? "active" : ""}`}
// // // //                             style={{ left: `${index * 100}%` }}
// // // //                         >
// // // //                             {/* Slide Background with Animation */}
// // // //                             <div
// // // //                                 className="slide__bg absolute top-0 w-full h-full bg-cover bg-center slide-bg-animation"
// // // //                                 style={{ backgroundImage: `url(${slide.bgImage})` }}
// // // //                             ></div>

// // // //                             {/* Slide Content with Fade-in Text */}
// // // //                             <div className="slide__content relative w-full h-full">
// // // //                                 <svg
// // // //                                     className="slide__overlay absolute bottom-0 left-0 w-full h-full"
// // // //                                     viewBox="0 0 720 405"
// // // //                                     preserveAspectRatio="xMaxYMax slice"
// // // //                                 >
// // // //                                     <path
// // // //                                         className="slide__overlay-path"
// // // //                                         d="M0,0 150,0 500,405 0,405"
// // // //                                         fill="#303030"
// // // //                                         opacity="0.8"
// // // //                                     />
// // // //                                 </svg>
// // // //                                 <div
// // // //                                     className="slide__text absolute w-full h-full flex items-center justify-center text-center opacity-0 slide-text-animation"
// // // //                                     style={{ color: "#fff" }}
// // // //                                 >
// // // //                                     <div>
// // // //                                         <h2
// // // //                                             className="slide__text-heading"
// // // //                                             style={{
// // // //                                                 fontFamily: "Roboto, sans-serif",
// // // //                                                 fontSize: "5rem",
// // // //                                                 marginBottom: "2rem",
// // // //                                             }}
// // // //                                         >
// // // //                                             {slide.heading}
// // // //                                         </h2>
// // // //                                         <p
// // // //                                             className="slide__text-desc"
// // // //                                             style={{
// // // //                                                 fontFamily: "Roboto, sans-serif",
// // // //                                                 fontSize: "1.8rem",
// // // //                                                 marginBottom: "1.5rem",
// // // //                                             }}
// // // //                                         >
// // // //                                             {slide.description}
// // // //                                         </p>
// // // //                                         <a
// // // //                                             className="slide__text-link"
// // // //                                             style={{
// // // //                                                 fontFamily: "Roboto, sans-serif",
// // // //                                                 fontSize: "2.3rem",
// // // //                                             }}
// // // //                                         >
// // // //                                             {slide.linkText}
// // // //                                         </a>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     ))}
// // // //                 </div>
// // // //             </div>
// // // //             <div className="flex justify-end items-center relative">
// // // //                 <div className="absolute z-20 top-1/2 left-6 transform -translate-y-1/2 flex items-center gap-2">
// // // //                     <span
// // // //                         className="text-black font-bold text-xl"
// // // //                     >
// // // //                         {String(currentSlide + 1).padStart(2, "0")}
// // // //                     </span>
// // // //                     <div className="w-32 h-1 bg-white rounded-full ">
// // // //                         <div
// // // //                             className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
// // // //                             style={{
// // // //                                 width: `${((currentSlide + 1) / slideCount) * 100}%`,
// // // //                             }}
// // // //                         ></div>
// // // //                     </div>

// // // //                     <span
// // // //                         className="text-black font-bold text-xl"
// // // //                     >
// // // //                         {String(slideCount).padStart(2, "0")}
// // // //                     </span>
// // // //                 </div>

// // // //                 {/* Circular Navigation Buttons */}
// // // //                 <div className="flex gap-4 relative z-20 py-3 px-20">
// // // //                     <button
// // // //                         onClick={navigateLeft}
// // // //                         className="text-orange-500 text-2xl w-12 h-12 rounded-full border-1 border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out "
// // // //                     >
// // // //                         &#60;
// // // //                     </button>
// // // //                     <button
// // // //                         onClick={navigateRight}
// // // //                         className="text-orange-500 text-2xl w-12 h-12 rounded-full border-1 border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
// // // //                     >
// // // //                         &#62;
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }
// // // "use client";

// // // import React, { useEffect, useState, useRef } from "react";

// // // type Slide = {
// // //   id: number;
// // //   heading: string;
// // //   description: string;
// // //   linkText: string;
// // //   bgImage: string;
// // // };

// // // const slides: Slide[] = [
// // //   {
// // //     id: 0,
// // //     heading: "Enterprise Business Solutions",
// // //     description:
// // //       "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with a perfect enterprise business solution.",
// // //     linkText: "Learn More",
// // //     bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// // //   },
// // //   {
// // //     id: 1,
// // //     heading: "Enterprise Application Services",
// // //     description:
// // //       "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// // //     linkText: "Learn More",
// // //     bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// // //   },
// // //   {
// // //     id: 2,
// // //     heading: "Digital Marketing Services",
// // //     description:
// // //       "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// // //     linkText: "Learn More",
// // //     bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// // //   },
// // // ];

// // // export default function MultiLineSlideHero() {
// // //   const [currentSlide, setCurrentSlide] = useState<number>(0);
// // //   const slideCount = slides.length;
// // //   const autoSlideDelay = 4000;
// // //   const animTime = 500; // Transition duration
// // //   const autoSlideTimeout = useRef<NodeJS.Timeout | null>(null);

// // //   // Changes slide index with wrap-around
// // //   const changeSlide = (newIndex: number) => {
// // //     if (newIndex < 0) {
// // //       newIndex = slideCount - 1;
// // //     } else if (newIndex >= slideCount) {
// // //       newIndex = 0;
// // //     }
// // //     setCurrentSlide(newIndex);
// // //   };

// // //   // Auto-slide every autoSlideDelay ms
// // //   useEffect(() => {
// // //     autoSlideTimeout.current = setTimeout(() => {
// // //       changeSlide(currentSlide + 1);
// // //     }, autoSlideDelay);

// // //     return () => {
// // //       if (autoSlideTimeout.current) clearTimeout(autoSlideTimeout.current);
// // //     };
// // //   }, [currentSlide]);

// // //   // Manual navigation
// // //   const navigateLeft = () => changeSlide(currentSlide - 1);
// // //   const navigateRight = () => changeSlide(currentSlide + 1);

// // //   return (
// // //     <div style={{ background: "rgba(242,239,236)" }}>
// // //       <div
// // //         className="slider-container relative h-[470px] overflow-hidden"
// // //         style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
// // //       >
// // //         {/* Slider */}
// // //         <div
// // //           className="slider relative h-full"
// // //           style={{
// // //             transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
// // //             transition: `transform ${animTime}ms ease`,
// // //           }}
// // //         >
// // //           {slides.map((slide, index) => {
// // //             const isActive = index === currentSlide;
// // //             return (
// // //               <div
// // //                 key={slide.id}
// // //                 className={`slide absolute top-0 w-full h-full ${
// // //                   isActive ? "active" : ""
// // //                 }`}
// // //                 style={{ left: `${index * 100}%` }}
// // //               >
// // //                 {/* Background Image */}
// // //                 <div
// // //                   className="absolute top-0 w-full h-full bg-cover bg-center"
// // //                   style={{
// // //                     backgroundImage: `url(${slide.bgImage})`,
// // //                   }}
// // //                 ></div>

// // //                 {/* Blue Panel (Fades & slides in from left) */}
// // //                 <div
// // //                   className="absolute top-0 h-full bg-blue-600 text-white p-8 flex flex-col justify-center"
// // //                   style={{
// // //                     width: "30%",
// // //                     // Fade + Slide-in effect
// // //                     transform: isActive ? "translateX(0)" : "translateX(-20%)",
// // //                     opacity: isActive ? 1 : 0,
// // //                     transition: "transform 0.6s ease, opacity 0.6s ease",
// // //                   }}
// // //                 >
// // //                   {/* Text inside the panel (delayed fade-in) */}
// // //                   <div
// // //                     style={{
// // //                       transform: isActive ? "translateX(0)" : "translateX(-10%)",
// // //                       opacity: isActive ? 1 : 0,
// // //                       transition: "transform 0.5s 0.3s ease, opacity 0.5s 0.3s ease",
// // //                     }}
// // //                   >
// // //                     <h2
// // //                       className="font-bold mb-4"
// // //                       style={{
// // //                         fontFamily: "Roboto, sans-serif",
// // //                         fontSize: "3rem",
// // //                       }}
// // //                     >
// // //                       {slide.heading}
// // //                     </h2>
// // //                     <p
// // //                       className="mb-4"
// // //                       style={{
// // //                         fontFamily: "Roboto, sans-serif",
// // //                         fontSize: "1.4rem",
// // //                       }}
// // //                     >
// // //                       {slide.description}
// // //                     </p>
// // //                     <a
// // //                       className="underline"
// // //                       style={{
// // //                         fontFamily: "Roboto, sans-serif",
// // //                         fontSize: "1.6rem",
// // //                       }}
// // //                     >
// // //                       {slide.linkText}
// // //                     </a>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>

// // //       {/* Bottom Navigation */}
// // //       <div className="flex justify-end items-center relative">
// // //         {/* Progress Bar & Slide Count */}
// // //         <div className="absolute z-20 top-1/2 left-6 transform -translate-y-1/2 flex items-center gap-2">
// // //           <span className="text-black font-bold text-xl">
// // //             {String(currentSlide + 1).padStart(2, "0")}
// // //           </span>
// // //           <div className="w-32 h-1 bg-white rounded-full">
// // //             <div
// // //               className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
// // //               style={{
// // //                 width: `${((currentSlide + 1) / slideCount) * 100}%`,
// // //               }}
// // //             ></div>
// // //           </div>
// // //           <span className="text-black font-bold text-xl">
// // //             {String(slideCount).padStart(2, "0")}
// // //           </span>
// // //         </div>

// // //         {/* Circular Navigation Buttons */}
// // //         <div className="flex gap-4 relative z-20 py-3 px-20">
// // //           <button
// // //             onClick={navigateLeft}
// // //             className="text-orange-500 text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
// // //           >
// // //             &#60;
// // //           </button>
// // //           <button
// // //             onClick={navigateRight}
// // //             className="text-orange-500 text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
// // //           >
// // //             &#62;
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import React, { useEffect, useState, useRef } from "react";

// // type Slide = {
// //     id: number;
// //     heading: string;
// //     description: string;
// //     linkText: string;
// //     bgImage: string;
// // };

// // const slides: Slide[] = [
// //     {
// //         id: 0,
// //         heading: "Enterprise Business Solutions",
// //         description:
// //             "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with a perfect enterprise business solution.",
// //         linkText: "Learn More",
// //         bgImage: "https://i.imgur.com/igp9ZTZ.jpg",
// //     },
// //     {
// //         id: 1,
// //         heading: "Enterprise Application Services",
// //         description:
// //             "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
// //         linkText: "Learn More",
// //         bgImage: "https://i.imgur.com/AxH0QU1.jpg",
// //     },
// //     {
// //         id: 2,
// //         heading: "Digital Marketing Services",
// //         description:
// //             "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
// //         linkText: "Learn More",
// //         bgImage: "https://i.imgur.com/nHIM5ZD.jpg",
// //     },
// // ];

// // export default function MultiLineSlideHero() {
// //     const [currentSlide, setCurrentSlide] = useState<number>(0);
// //     const slideCount = slides.length;
// //     const animTime = 500;
// //     const autoSlideDelay = 7000; // Total delay before next slide
// //     const [animateState, setAnimateState] = useState({
// //         showBlueBox: false,
// //         showText: false,
// //     });

// //     useEffect(() => {
// //         // Reset animations for each new slide
// //         setAnimateState({ showBlueBox: false, showText: false });

// //         // Step 2: Show blue box after 2 seconds
// //         const blueBoxTimer = setTimeout(() => {
// //             setAnimateState((prev) => ({ ...prev, showBlueBox: true }));
// //         }, 2000);

// //         // Step 4: Show text after 3 seconds
// //         const textTimer = setTimeout(() => {
// //             setAnimateState((prev) => ({ ...prev, showText: true }));
// //         }, 3000);

// //         // Step 6: Move to next slide after total animation
// //         const autoSlideTimeout = setTimeout(() => {
// //             setCurrentSlide((prev) => (prev + 1) % slideCount);
// //         }, autoSlideDelay);

// //         return () => {
// //             clearTimeout(blueBoxTimer);
// //             clearTimeout(textTimer);
// //             clearTimeout(autoSlideTimeout);
// //         };
// //     }, [currentSlide]);

// //     return (
// //         <div style={{ background: "rgba(242,239,236)" }}>
// //             <div
// //                 className="slider-container relative h-[470px] overflow-hidden"
// //                 style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}>

// //                 {slides.map((slide, index) => {
// //                     const isActive = index === currentSlide;
// //                     return (
// //                         <div
// //                             key={slide.id}
// //                             className={`slide absolute top-0 w-full h-full ${isActive ? "active" : ""
// //                                 }`}
// //                             style={{
// //                                 transition: "transform 1s ease-in-out",
// //                                 transform: isActive ? "translateX(0)" : "translateX(100%)",
// //                                 display: isActive ? "block" : "none",
// //                             }}
// //                         >
// //                             {/* Background Image */}
// //                             <div
// //                                 className="absolute top-0 w-full h-full bg-cover bg-center"
// //                                 style={{
// //                                     backgroundImage: `url(${slide.bgImage})`,
// //                                 }}
// //                             ></div>

// //                             {/* Blue Panel (Fades in after 2s) */}
// //                             <div
// //                                 className="absolute top-0 h-full bg-blue-600 text-white p-8 flex flex-col justify-center"
// //                                 style={{
// //                                     width: "30%",
// //                                     transform: animateState.showBlueBox
// //                                         ? "translateX(0)"
// //                                         : "translateX(-20%)",
// //                                     opacity: animateState.showBlueBox ? 1 : 0,
// //                                     transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
// //                                 }}
// //                             >
// //                                 {/* Text (Fades in after 3s) */}
// //                                 <div
// //                                     style={{
// //                                         opacity: animateState.showText ? 1 : 0,
// //                                         transform: animateState.showText
// //                                             ? "translateX(0)"
// //                                             : "translateX(-10%)",
// //                                         transition: "opacity 1s ease, transform 1s ease",
// //                                     }}
// //                                 >
// //                                     <h2
// //                                         className="font-bold mb-4"
// //                                         style={{
// //                                             fontFamily: "Roboto, sans-serif",
// //                                             fontSize: "3rem",
// //                                         }}
// //                                     >
// //                                         {slide.heading}
// //                                     </h2>
// //                                     <p
// //                                         className="mb-4"
// //                                         style={{
// //                                             fontFamily: "Roboto, sans-serif",
// //                                             fontSize: "1.4rem",
// //                                         }}
// //                                     >
// //                                         {slide.description}
// //                                     </p>
// //                                     <a
// //                                         className="underline"
// //                                         style={{
// //                                             fontFamily: "Roboto, sans-serif",
// //                                             fontSize: "1.6rem",
// //                                         }}
// //                                     >
// //                                         {slide.linkText}
// //                                     </a>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     );
// //                 })}
// //             </div>

// //             {/* Bottom Navigation */}
// //             <div className="flex justify-end items-center relative">
// //                 {/* Progress Bar & Slide Count */}
// //                 <div className="absolute z-20 top-1/2 left-6 transform -translate-y-1/2 flex items-center gap-2">
// //                     <span className="text-black font-bold text-xl">
// //                         {String(currentSlide + 1).padStart(2, "0")}
// //                     </span>
// //                     <div className="w-32 h-1 bg-white rounded-full">
// //                         <div
// //                             className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
// //                             style={{
// //                                 width: `${((currentSlide + 1) / slideCount) * 100}%`,
// //                             }}
// //                         ></div>
// //                     </div>
// //                     <span className="text-black font-bold text-xl">
// //                         {String(slideCount).padStart(2, "0")}
// //                     </span>
// //                 </div>

// //                 {/* Circular Navigation Buttons */}
// //                 <div className="flex gap-4 relative z-20 py-3 px-20">
// //                     <button
// //                         onClick={() =>
// //                             setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
// //                         }
// //                         className="text-orange-500 text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
// //                     >
// //                         &#60;
// //                     </button>
// //                     <button
// //                         onClick={() =>
// //                             setCurrentSlide((prev) => (prev + 1) % slideCount)
// //                         }
// //                         className="text-orange-500 text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
// //                     >
// //                         &#62;
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import "@/app/public/landingpage3.jpg"

// type Slide = {
//   id: number;
//   heading: string;
//   description: string;
//   linkText: string;
//   bgImage: string;
// };

// const slides: Slide[] = [
//   {
//     id: 0,
//     heading: "Enterprise Business Solutions",
//     description:
//       "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with a perfect enterprise business solution.",
//     linkText: "Learn More",
//     bgImage: "@/app/public/landingpage3.jpg",
//   },
//   {
//     id: 1,
//     heading: "Enterprise Application Services",
//     description:
//       "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
//     linkText: "Learn More",
//     bgImage: "public/landingpage3.jpg",
//   },
//   {
//     id: 2,
//     heading: "Digital Marketing Services",
//     description:
//       "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
//     linkText: "Learn More",
//     bgImage: "public/landingpage3.jpg",
//   },
// ];

// export default function MultiLineSlideHero() {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const slideCount = slides.length;
//   const autoSlideDelay = 7000;
//   const [animateState, setAnimateState] = useState({
//     showBlueBox: false,
//     showText: false,
//   });

//   useEffect(() => {
//     setAnimateState({ showBlueBox: false, showText: false });

//     const blueBoxTimer = setTimeout(() => {
//       setAnimateState((prev) => ({ ...prev, showBlueBox: true }));
//     }, 2000);

//     const textTimer = setTimeout(() => {
//       setAnimateState((prev) => ({ ...prev, showText: true }));
//     }, 3000);

//     const autoSlideTimeout = setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % slideCount);
//     }, autoSlideDelay);

//     return () => {
//       clearTimeout(blueBoxTimer);
//       clearTimeout(textTimer);
//       clearTimeout(autoSlideTimeout);
//     };
//   }, [currentSlide]);

//   return (
//     <div style={{ background: "rgba(242,239,236)" }}>
//       <div
//         className="slider-container relative h-[500px] overflow-hidden z-10"
//         style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
//       >
//         {slides.map((slide, index) => {
//           const isActive = index === currentSlide;
//           return (
//             // <div
//             //   key={slide.id}
//             //   className={`slide absolute top-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//             //     isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
//             //   }`}
//             // >
//             <div
//               key={slide.id}
//               className={`slide absolute top-0 w-full h-full transition-opacity duration-1000 ease-in-out z-10 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
//                 }`}
//             >
//               {/* Background Image */}
//               <div
//                 className="absolute top-0 w-full h-full bg-cover bg-center transition-all duration-1000"
//                 style={{
//                   backgroundImage: {Pic},
//                   opacity: isActive ? 1 : 0,
//                   transform: isActive ? "translateX(0)" : "translateX(20%)",
//                 }}
//               ></div>

//               {/* Blue Panel (Fades in after 2s) */}
//               <div
//                 className="absolute top-0 h-full bg-blue-600 text-white p-8 flex flex-col justify-center transition-all duration-1000"
//                 style={{
//                   width: "30%",
//                   transform: animateState.showBlueBox
//                     ? "translateX(0)"
//                     : "translateX(-20%)",
//                   opacity: animateState.showBlueBox ? 1 : 0,
//                 }}
//               >
//                 {/* Text (Fades in after 3s) */}
//                 <div
//                   style={{
//                     opacity: animateState.showText ? 1 : 0,
//                     transform: animateState.showText
//                       ? "translateX(0)"
//                       : "translateX(-10%)",
//                     transition: "opacity 1s ease, transform 1s ease",
//                   }}
//                 >
//                   <h2
//                     className="font-bold mb-4"
//                     style={{
//                       fontFamily: "Roboto, sans-serif",
//                       fontSize: "3rem",
//                     }}
//                   >
//                     {slide.heading}
//                   </h2>
//                   <p
//                     className="mb-4"
//                     style={{
//                       fontFamily: "Roboto, sans-serif",
//                       fontSize: "1.4rem",
//                     }}
//                   >
//                     {slide.description}
//                   </p>
//                   <a
//                     className="underline"
//                     style={{
//                       fontFamily: "Roboto, sans-serif",
//                       fontSize: "1.6rem",
//                     }}
//                   >
//                     {slide.linkText}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Bottom Navigation */}
//       <div className="flex justify-end items-center relative">
//         <div className="absolute z-20 top-1/2 left-6 transform -translate-y-1/2 flex items-center gap-2">
//           <span className="text-black font-bold text-xl">
//             {String(currentSlide + 1).padStart(2, "0")}
//           </span>
//           <div className="w-32 h-1 bg-white rounded-full">
//             <div
//               className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
//               style={{
//                 width: `${((currentSlide + 1) / slideCount) * 100}%`,
//               }}
//             ></div>
//           </div>
//           <span className="text-black font-bold text-xl">
//             {String(slideCount).padStart(2, "0")}
//           </span>
//         </div>

//         {/* Circular Navigation Buttons */}
//         <div className="flex gap-4 relative z-20 py-3 px-20">
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
//             }
//             className="text-orange-500 text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
//           >
//             &#60;
//           </button>
//           <button
//             onClick={() =>
//               setCurrentSlide((prev) => (prev + 1) % slideCount)
//             }
//             className="text-orange-500 text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
//           >
//             &#62;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

type Slide = {
  id: number;
  heading: string;
  description: string;
  linkText: string;
  bgImage: string;
};

const slides: Slide[] = [
  {
    id: 0,
    heading: "Enterprise Business Solutions",
    description:
      "The competitive scenario of business has called for efficient operational activities, leveraging investment cost and overall high profitability. Our experts will guide you to achieve all with a perfect enterprise business solution.",
    linkText: "Learn More",
    bgImage: "/forest-pine.jpg", // Correct path relative to the public folder
  },
  {
    id: 1,
    heading: "Enterprise Application Services",
    description:
      "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
    linkText: "Learn More",
    bgImage: "/landingpage3.jpg", // Correct path relative to the public folder
  },
  {
    id: 2,
    heading: "Digital Marketing Services",
    description:
      "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
    linkText: "Learn More",
    bgImage: "/sydney-harbour-bridge.jpg", // Correct path relative to the public folder
  },
];

export default function MultiLineSlideHero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideCount = slides.length;
  const autoSlideDelay = 7000;
  const [animateState, setAnimateState] = useState({
    showBlueBox: false,
    showText: false,
  });

  useEffect(() => {
    setAnimateState({ showBlueBox: false, showText: false });

    const blueBoxTimer = setTimeout(() => {
      setAnimateState((prev) => ({ ...prev, showBlueBox: true }));
    }, 2000);

    const textTimer = setTimeout(() => {
      setAnimateState((prev) => ({ ...prev, showText: true }));
    }, 3000);

    const autoSlideTimeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, autoSlideDelay);

    return () => {
      clearTimeout(blueBoxTimer);
      clearTimeout(textTimer);
      clearTimeout(autoSlideTimeout);
    };
  }, [currentSlide]);

  return (
    <div style={{ background: "rgba(242,239,236)" }}>
      <div
        className="slider-container relative h-[500px] overflow-hidden z-10"
        style={{ paddingTop: "0px", borderRadius: "0 0 200px 0" }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`slide absolute top-0 w-full h-full transition-opacity duration-1000 ease-in-out z-10 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
            >
              {/* Background Image */}
              <div
                className="absolute top-0 w-full h-full bg-cover bg-center transition-all duration-1000"
                style={{
                  backgroundImage: `url(${slide.bgImage})`, // Use bgImage directly
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0)" : "translateX(20%)",
                  borderRadius:"0 0 200px 0"
                }}
              ></div>

              {/* Blue Panel (Fades in after 2s) */}
              <div
                className="absolute top-0 h-full bg-blue-600 text-white p-8 flex flex-col justify-center transition-all duration-1000"
                style={{
                  width: "30%",
                  transform: animateState.showBlueBox
                    ? "translateX(0)"
                    : "translateX(-20%)",
                  opacity: animateState.showBlueBox ? 1 : 0,
                }}
              >
                {/* Text (Fades in after 3s) */}
                <div
                  style={{
                    
                    opacity: animateState.showText ? 1 : 0,
                    transform: animateState.showText
                      ? "translateX(0)"
                      : "translateX(-10%)",
                    transition: "opacity 1s ease, transform 1s ease",
                  }}
                >
                  <h2
                    className="font-bold mb-4"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "2rem",
                    }}
                  >
                    {slide.heading}
                  </h2>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1rem",
                    }}
                  >
                    {slide.description}
                  </p>
                  <a
                    className="underline"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1.2rem",
                    }}
                  >
                    {slide.linkText}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-end items-center relative">
        <div className="absolute z-20 top-1/2 left-6 transform -translate-y-1/2 flex items-center gap-2">
          <span className="text-black font-bold text-xl">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <div className="w-32 h-1 bg-white rounded-full">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: `${((currentSlide + 1) / slideCount) * 100}%`,
              }}
            ></div>
          </div>
          <span className="text-black font-bold text-xl">
            {String(slideCount).padStart(2, "0")}
          </span>
        </div>

        {/* Circular Navigation Buttons */}
        <div className="flex gap-4 relative z-20 py-3 px-20">
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
            }
            className="text-orange-500 text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            &#60;
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slideCount)
            }
            className="text-orange-500 text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
}
