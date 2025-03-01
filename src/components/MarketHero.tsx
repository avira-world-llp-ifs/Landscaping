// // components/MarketHero.tsx
// "use client"
// import { useState, useEffect, useRef } from 'react';
// import styles from '../styles/MarketHero.module.css';

// interface SlideData {
//   title: string;
//   linkText: string;
//   link: string;
//   image: string;
//   description: string;
// }

// const MarketHero: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [loaded, setLoaded] = useState<boolean>(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const smallCanvasRef = useRef<HTMLCanvasElement | null>(null);
  
//   const slides: SlideData[] = [
//     {
//       title: "We Energies West Central Lateral Environmental Support",
//       linkText: " Read More",
//       link: "/en/projects/united-states-projects/w/we-energies-west-central-lateral-environmental-support.html",
//       image: "/content/dam/stantec/images/projects/0076/we-energies-2.jpg",
//       description: "Environmental support to help our client meet energy demands in their community"
//     },
//     {
//       title: "Perico Preserve Restoration",
//       linkText: "Read More",
//       link: "/en/projects/united-states-projects/p/perico-preserve-restoration-manatee-county-fl.html",
//       image: "/content/dam/stantec/images/projects/0001/perico-preserve-restoration-2.jpg",
//       description: "Abandoned farmland restored in Manatee County"
//     },
//     {
//       title: "Oneida Energy Storage Project - Environmental Assessment",
//       linkText: "Read More",
//       link: "/en/projects/canada-projects/o/oneida-energy-storage-environmental.html",
//       image: "/content/dam/stantec/images/projects/0067/oneida-energy-storage.jpg",
//       description: "Reviewing resources and noise to support Ontario's clean energy grid"
//     }
//   ];

//   const drawTimeoutIndicator = (canvas: HTMLCanvasElement | null, progress: number): void => {
//     if (!canvas) return;
    
//     const context = canvas.getContext('2d');
//     if (!context) return;
    
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     const radius = canvas.width / 2 - 2;
    
//     // Clear canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);
    
//     // Draw background circle
//     context.beginPath();
//     context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//     context.strokeStyle = '#f0f0f0';
//     context.lineWidth = 2;
//     context.stroke();
    
//     // Draw progress arc
//     context.beginPath();
//     context.arc(centerX, centerY, radius, -Math.PI / 2, (-Math.PI / 2) + (progress * 2 * Math.PI));
//     context.strokeStyle = '#000000';
//     context.lineWidth = 2;
//     context.stroke();
//   };

//   useEffect(() => {
//     setLoaded(true);
    
//     // Initialize canvas
//     if (canvasRef.current) {
//       drawTimeoutIndicator(canvasRef.current, 0);
//     }
//     if (smallCanvasRef.current) {
//       drawTimeoutIndicator(smallCanvasRef.current, 0);
//     }
    
//     // Auto-rotate slides every 8 seconds
//     const autoRotate = () => {
//       let progress = 0;
//       const interval = setInterval(() => {
//         progress += 0.01;
//         if (canvasRef.current) {
//           drawTimeoutIndicator(canvasRef.current, progress);
//         }
//         if (smallCanvasRef.current) {
//           drawTimeoutIndicator(smallCanvasRef.current, progress);
//         }
        
//         if (progress >= 1) {
//           clearInterval(interval);
//           nextSlide();
//         }
//       }, 80); // 8000ms / 100 steps = 80ms per step
      
//       return interval;
//     };
    
//     timeoutRef.current = autoRotate();
    
//     return () => {
//       if (timeoutRef.current) {
//         clearInterval(timeoutRef.current);
//       }
//     };
//   }, [currentSlide]);

//   const getPrevIndex = (index: number): number => {
//     return (index - 1 + slides.length) % slides.length;
//   };

//   const getNextIndex = (index: number): number => {
//     return (index + 1) % slides.length;
//   };

//   const prevSlide = (): void => {
//     if (timeoutRef.current) {
//       clearInterval(timeoutRef.current);
//     }
//     setCurrentSlide(getPrevIndex(currentSlide));
//   };

//   const nextSlide = (): void => {
//     if (timeoutRef.current) {
//       clearInterval(timeoutRef.current);
//     }
//     setCurrentSlide(getNextIndex(currentSlide));
//   };

//   const formatSlideNumber = (num: number): string => {
//     return num < 10 ? `0${num + 1}` : `${num + 1}`;
//   };

//   return (
//     <section className={`${styles.marketHero}`} aria-label="Animated Hero Component">
//       <div className={`${styles.marketHeroContainer} ${loaded ? styles.marketHeroContainerLoaded : ''}`}>
//         <ul className={styles.marketHeroSlider}>
//           {/* Current Slide */}
//           <li className={`${styles.marketHeroItem} ${styles.marketHeroItemCurrent}`}>
//             <div className={styles.marketHeroItemMediaWrapperContainer}>
//               <div 
//                 className={styles.marketHeroItemMediaWrapper} 
//                 style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
//                 data-title={slides[currentSlide].title}
//                 data-linktext={slides[currentSlide].linkText}
//                 data-link={slides[currentSlide].link}
//                 data-tabdescription={slides[currentSlide].description}
//               ></div>
//             </div>
//           </li>
          
//           {/* Next Slide */}
//           <li className={`${styles.marketHeroItem} ${styles.marketHeroItemNext}`}>
//             <div className={styles.marketHeroItemMediaWrapperContainer}>
//               <div 
//                 className={styles.marketHeroItemMediaWrapper} 
//                 style={{ backgroundImage: `url(${slides[getNextIndex(currentSlide)].image})` }}
//                 data-title={slides[getNextIndex(currentSlide)].title}
//                 data-linktext={slides[getNextIndex(currentSlide)].linkText}
//                 data-link={slides[getNextIndex(currentSlide)].link}
//                 data-tabdescription={slides[getNextIndex(currentSlide)].description}
//               ></div>
//             </div>
//           </li>
          
//           {/* Previous Slide */}
//           <li className={`${styles.marketHeroItem} ${styles.marketHeroItemPrev}`}>
//             <div className={styles.marketHeroItemMediaWrapperContainer}>
//               <div 
//                 className={styles.marketHeroItemMediaWrapper} 
//                 style={{ backgroundImage: `url(${slides[getPrevIndex(currentSlide)].image})` }}
//                 data-title={slides[getPrevIndex(currentSlide)].title}
//                 data-linktext={slides[getPrevIndex(currentSlide)].linkText}
//                 data-link={slides[getPrevIndex(currentSlide)].link}
//                 data-tabdescription={slides[getPrevIndex(currentSlide)].description}
//               ></div>
//             </div>
//           </li>
//         </ul>
        
//         <div className={`${styles.marketHeroCopy} ${styles.show}`}>
//           <div className={styles.marketHeroCopyBackgroud}></div>
//           <div className={styles.marketHeroCopyContent}>
//             <div className={styles.marketHeroBreadcrumbs}>
//               <ul className={styles.breadcrumbsModule} itemScope itemType="http://schema.org/BreadcrumbList">
//                 <li className={styles.breadcrumbsModuleItem} itemScope itemProp="itemListElement" itemType="http://schema.org/ListItem">
//                   <a href="/en/markets.html" itemProp="item" itemType="https://schema.org/Thing" className={styles.breadcrumbsModuleLink}>
//                     <span itemProp="name">Markets</span>
//                   </a>
//                   <meta itemProp="position" content="1" />
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.marketHeroBottomSection}>
//               <div className={styles.marketHeroHeader} data-carousel="true">
//                 <h1 className={styles.marketHeroTitle}>Environment</h1>
//               </div>
//               <div className={styles.marketHeroControls}>
//                 <div className={styles.marketHeroControlsWrapper}>
//                   <div className={styles.marketHeroProgress}>
//                     <span className={styles.marketHeroProgressCurrent} tabIndex={-1}>
//                       {formatSlideNumber(currentSlide)}
//                     </span>
//                     <span className={styles.marketHeroProgressSeparator} tabIndex={-1}></span>
//                     <span className={styles.marketHeroProgressTotal} tabIndex={-1}>
//                       {formatSlideNumber(slides.length - 1)}
//                     </span>
//                   </div>
//                   <article className={styles.marketHeroItemText} id="marketItemText">
//                     <a className={styles.marketHeroDescriptionLink} href={slides[currentSlide].link} target="_blank" rel="noreferrer">
//                       <h2 className={styles.marketHeroEyebrow}>{slides[currentSlide].title}</h2>
//                       <p className={styles.marketHeroArticleDescription}>{slides[currentSlide].description}</p>
//                       <p className={`${styles.marketHeroCta} ${styles.buttonSecondary} ${styles.buttonSecondaryBlueBlack}`}>
//                         {slides[currentSlide].linkText}
//                         <span className={styles.materialIcons}></span>
//                       </p>
//                     </a>
//                   </article>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className={styles.marketHeroBtnWrapper}>
//           <div className={styles.marketHeroBtnSlides}>
//             <span className={`${styles.marketHeroBtnCounter} ${styles.marketHeroCurrentSlide}`}>
//               {formatSlideNumber(currentSlide)}
//             </span>
//             <span className={styles.marketHeroBtnLine}></span>
//             <span className={`${styles.marketHeroBtnCounter} ${styles.marketHeroCurrentTotal}`}>
//               {formatSlideNumber(slides.length - 1)}
//             </span>
//           </div>
//           <div className={styles.marketHeroBtnButtons}>
//             <button 
//               className={`${styles.marketHeroBtn} ${styles.marketHeroBtnPrev}`}
//               aria-label="Previous Slide"
//               data-btn="prev"
//               type="button"
//               onClick={prevSlide}
//             >
//               <span className={styles.marketHeroBtnSpan} tabIndex={-1}></span>
//             </button>
//             <button 
//               className={`${styles.marketHeroBtn} ${styles.marketHeroBtnNext}`}
//               aria-label="Next Slide"
//               data-btn="next"
//               type="button"
//               onClick={nextSlide}
//             >
//               <canvas 
//                 className={styles.marketHeroTimeoutIndicator}
//                 width="60"
//                 height="60"
//                 ref={canvasRef}
//                 tabIndex={-1}
//               ></canvas>
//             </button>
//             <button 
//               className={`${styles.marketHeroBtn} ${styles.marketHeroBtnNext} ${styles.marketHeroBtnNextSmall}`}
//               aria-label="Next Slide"
//               data-btn="next"
//               type="button"
//               onClick={nextSlide}
//             >
//               <canvas 
//                 className={styles.marketHeroTimeoutIndicator}
//                 width="44"
//                 height="44"
//                 ref={smallCanvasRef}
//                 tabIndex={-1}
//               ></canvas>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketHero;

// components/MarketHero.tsx


// "use client"
// import { useState, useEffect, useRef, useCallback } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from '../styles/MarketHero.module.css';

// interface SlideData {
//   title: string;
//   linkText: string;
//   link: string;
//   image: string;
//   description: string;
// }

// const MarketHero: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [loaded, setLoaded] = useState<boolean>(false);
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const animationRef = useRef<number | null>(null);
//   const progressRef = useRef<number>(0);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const smallCanvasRef = useRef<HTMLCanvasElement | null>(null);
  
//   const slides: SlideData[] = [
//     {
//       title: "We Energies West Central Lateral Environmental Support",
//       linkText: "Read More",
//       link: "/en/projects/united-states-projects/w/we-energies-west-central-lateral-environmental-support.html",
//       image: "/content/dam/stantec/images/projects/0076/we-energies-2.jpg",
//       description: "Environmental support to help our client meet energy demands in their community"
//     },
//     {
//       title: "Perico Preserve Restoration",
//       linkText: "Read More",
//       link: "/en/projects/united-states-projects/p/perico-preserve-restoration-manatee-county-fl.html",
//       image: "/content/dam/stantec/images/projects/0001/perico-preserve-restoration-2.jpg",
//       description: "Abandoned farmland restored in Manatee County"
//     },
//     {
//       title: "Oneida Energy Storage Project - Environmental Assessment",
//       linkText: "Read More",
//       link: "/en/projects/canada-projects/o/oneida-energy-storage-environmental.html",
//       image: "/content/dam/stantec/images/projects/0067/oneida-energy-storage.jpg",
//       description: "Reviewing resources and noise to support Ontario's clean energy grid"
//     },
//     {
//       title: "Resilient Coastal Infrastructure Design",
//       linkText: "Read More",
//       link: "/en/projects/united-states-projects/r/resilient-coastal-infrastructure.html",
//       image: "/content/dam/stantec/images/projects/0082/coastal-infrastructure.jpg",
//       description: "Innovative solutions to protect shorelines and coastal communities from rising sea levels"
//     }
//   ];

//   const drawTimeoutIndicator = useCallback((canvas: HTMLCanvasElement | null, progress: number): void => {
//     if (!canvas) return;
    
//     const context = canvas.getContext('2d');
//     if (!context) return;
    
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     const radius = canvas.width / 2 - 3;
    
//     // Clear canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);
    
//     // Draw background circle
//     context.beginPath();
//     context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//     context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
//     context.lineWidth = 2;
//     context.stroke();
    
//     // Draw progress arc
//     context.beginPath();
//     context.arc(centerX, centerY, radius, -Math.PI / 2, (-Math.PI / 2) + (progress * 2 * Math.PI));
//     context.strokeStyle = '#ffffff';
//     context.lineWidth = 2;
//     context.stroke();
//   }, []);

//   const animateProgress = useCallback(() => {
//     if (isPaused) return;
    
//     progressRef.current += 0.005;
    
//     if (canvasRef.current) {
//       drawTimeoutIndicator(canvasRef.current, progressRef.current);
//     }
//     if (smallCanvasRef.current) {
//       drawTimeoutIndicator(smallCanvasRef.current, progressRef.current);
//     }
    
//     if (progressRef.current >= 1) {
//       progressRef.current = 0;
//       nextSlide();
//       return;
//     }
    
//     animationRef.current = requestAnimationFrame(animateProgress);
//   }, [isPaused, drawTimeoutIndicator]);

//   const startProgressAnimation = useCallback(() => {
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }
    
//     progressRef.current = 0;
//     animationRef.current = requestAnimationFrame(animateProgress);
//   }, [animateProgress]);

//   const getPrevIndex = (index: number): number => {
//     return (index - 1 + slides.length) % slides.length;
//   };

//   const getNextIndex = (index: number): number => {
//     return (index + 1) % slides.length;
//   };

//   const prevSlide = useCallback((): void => {
//     if (isTransitioning) return;
    
//     setIsTransitioning(true);
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }
    
//     setCurrentSlide(getPrevIndex(currentSlide));
//     setTimeout(() => {
//       setIsTransitioning(false);
//       startProgressAnimation();
//     }, 500);
//   }, [currentSlide, isTransitioning, startProgressAnimation]);

//   const nextSlide = useCallback((): void => {
//     if (isTransitioning) return;
    
//     setIsTransitioning(true);
//     if (animationRef.current) {
//       cancelAnimationFrame(animationRef.current);
//     }
    
//     setCurrentSlide(getNextIndex(currentSlide));
//     setTimeout(() => {
//       setIsTransitioning(false);
//       startProgressAnimation();
//     }, 500);
//   }, [currentSlide, isTransitioning, startProgressAnimation]);

//   const handleSlideHover = (hover: boolean) => {
//     setIsPaused(hover);
//   };

//   const handleKeyDown = useCallback((event: KeyboardEvent) => {
//     if (event.key === 'ArrowLeft') {
//       prevSlide();
//     } else if (event.key === 'ArrowRight') {
//       nextSlide();
//     }
//   }, [prevSlide, nextSlide]);

//   const formatSlideNumber = (num: number): string => {
//     return num < 10 ? `0${num + 1}` : `${num + 1}`;
//   };

//   useEffect(() => {
//     // Set loaded state after a short delay to trigger entrance animations
//     const loadTimer = setTimeout(() => {
//       setLoaded(true);
//     }, 100);
    
//     // Initialize canvas
//     if (canvasRef.current) {
//       drawTimeoutIndicator(canvasRef.current, 0);
//     }
//     if (smallCanvasRef.current) {
//       drawTimeoutIndicator(smallCanvasRef.current, 0);
//     }
    
//     // Start progress animation
//     startProgressAnimation();
    
//     // Add keyboard event listeners
//     window.addEventListener('keydown', handleKeyDown);
    
//     return () => {
//       clearTimeout(loadTimer);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [drawTimeoutIndicator, startProgressAnimation, handleKeyDown]);

//   useEffect(() => {
//     if (isPaused) {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     } else {
//       animationRef.current = requestAnimationFrame(animateProgress);
//     }
    
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isPaused, animateProgress]);

//   return (
//     <section 
//       className={`${styles.marketHero}`} 
//       aria-label="Animated Hero Component"
//       onMouseEnter={() => handleSlideHover(true)}
//       onMouseLeave={() => handleSlideHover(false)}
//     >
//       <div className={`${styles.marketHeroContainer} ${loaded ? styles.marketHeroContainerLoaded : ''}`}>
//         <ul className={`${styles.marketHeroSlider} ${isTransitioning ? styles.transitioning : ''}`}>
//           {/* Current Slide */}
//           <li className={`${styles.marketHeroItem} ${styles.marketHeroItemCurrent}`}>
//             <div className={styles.marketHeroItemMediaWrapperContainer}>
//               <div 
//                 className={styles.marketHeroItemMediaWrapper} 
//                 style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
//                 data-title={slides[currentSlide].title}
//                 aria-hidden="true"
//               >
//                 <div className={styles.overlayGradient}></div>
//               </div>
//             </div>
//           </li>
          
//           {/* Next Slide */}
//           <li className={`${styles.marketHeroItem} ${styles.marketHeroItemNext}`}>
//             <div className={styles.marketHeroItemMediaWrapperContainer}>
//               <div 
//                 className={styles.marketHeroItemMediaWrapper} 
//                 style={{ backgroundImage: `url(${slides[getNextIndex(currentSlide)].image})` }}
//                 data-title={slides[getNextIndex(currentSlide)].title}
//                 aria-hidden="true"
//               >
//                 <div className={styles.overlayGradient}></div>
//               </div>
//             </div>
//           </li>
          
//           {/* Previous Slide */}
//           <li className={`${styles.marketHeroItem} ${styles.marketHeroItemPrev}`}>
//             <div className={styles.marketHeroItemMediaWrapperContainer}>
//               <div 
//                 className={styles.marketHeroItemMediaWrapper} 
//                 style={{ backgroundImage: `url(${slides[getPrevIndex(currentSlide)].image})` }}
//                 data-title={slides[getPrevIndex(currentSlide)].title}
//                 aria-hidden="true"
//               >
//                 <div className={styles.overlayGradient}></div>
//               </div>
//             </div>
//           </li>
//         </ul>
        
//         <div className={`${styles.marketHeroCopy} ${styles.show}`}>
//           <div className={styles.marketHeroCopyBackgroud}></div>
//           <div className={styles.marketHeroCopyContent}>
//             <div className={styles.marketHeroBreadcrumbs}>
//               <ul className={styles.breadcrumbsModule} itemScope itemType="http://schema.org/BreadcrumbList">
//                 <li className={styles.breadcrumbsModuleItem} itemScope itemProp="itemListElement" itemType="http://schema.org/ListItem">
//                   <Link href="/en/markets.html" itemProp="item" itemType="https://schema.org/Thing" className={styles.breadcrumbsModuleLink}>
//                     <span itemProp="name">Markets</span>
//                   </Link>
//                   <meta itemProp="position" content="1" />
//                 </li>
//                 <li className={styles.breadcrumbsModuleItem} itemScope itemProp="itemListElement" itemType="http://schema.org/ListItem">
//                   <Link href="/en/markets/environment.html" itemProp="item" itemType="https://schema.org/Thing" className={styles.breadcrumbsModuleLink}>
//                     <span itemProp="name">Environment</span>
//                   </Link>
//                   <meta itemProp="position" content="2" />
//                 </li>
//               </ul>
//             </div>
//             <div className={styles.marketHeroBottomSection}>
//               <div className={styles.marketHeroHeader} data-carousel="true">
//                 <h1 className={styles.marketHeroTitle}>Environment</h1>
//               </div>
//               <div className={styles.marketHeroControls}>
//                 <div className={styles.marketHeroControlsWrapper}>
//                   <div className={styles.marketHeroProgress}>
//                     <span className={styles.marketHeroProgressCurrent} tabIndex={-1}>
//                       {formatSlideNumber(currentSlide)}
//                     </span>
//                     <span className={styles.marketHeroProgressSeparator} tabIndex={-1}></span>
//                     <span className={styles.marketHeroProgressTotal} tabIndex={-1}>
//                       {formatSlideNumber(slides.length - 1)}
//                     </span>
//                   </div>
//                   <article 
//                     className={`${styles.marketHeroItemText} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`} 
//                     id="marketItemText"
//                   >
//                     <Link className={styles.marketHeroDescriptionLink} href={slides[currentSlide].link}>
//                       <h2 className={styles.marketHeroEyebrow}>{slides[currentSlide].title}</h2>
//                       <p className={styles.marketHeroArticleDescription}>{slides[currentSlide].description}</p>
//                       <div className={`${styles.marketHeroCta}`}>
//                         <span className={styles.linkText}>{slides[currentSlide].linkText}</span>
//                         <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                           <line x1="5" y1="12" x2="19" y2="12"></line>
//                           <polyline points="12 5 19 12 12 19"></polyline>
//                         </svg>
//                       </div>
//                     </Link>
//                   </article>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className={styles.marketHeroNavigation}>
//           <div className={styles.marketHeroBtnWrapper}>
//             <div className={styles.marketHeroBtnSlides}>
//               <span className={`${styles.marketHeroBtnCounter} ${styles.marketHeroCurrentSlide}`}>
//                 {formatSlideNumber(currentSlide)}
//               </span>
//               <span className={styles.marketHeroBtnLine}></span>
//               <span className={`${styles.marketHeroBtnCounter} ${styles.marketHeroCurrentTotal}`}>
//                 {formatSlideNumber(slides.length - 1)}
//               </span>
//             </div>
//             <div className={styles.marketHeroBtnButtons}>
//               <button 
//                 className={`${styles.marketHeroBtn} ${styles.marketHeroBtnPrev}`}
//                 aria-label="Previous Slide"
//                 data-btn="prev"
//                 type="button"
//                 onClick={prevSlide}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
//                   <line x1="19" y1="12" x2="5" y2="12"></line>
//                   <polyline points="12 19 5 12 12 5"></polyline>
//                 </svg>
//               </button>
//               <button 
//                 className={`${styles.marketHeroBtn} ${styles.marketHeroBtnNext}`}
//                 aria-label="Next Slide"
//                 data-btn="next"
//                 type="button"
//                 onClick={nextSlide}
//               >
//                 <canvas 
//                   className={styles.marketHeroTimeoutIndicator}
//                   width="60"
//                   height="60"
//                   ref={canvasRef}
//                   tabIndex={-1}
//                 ></canvas>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
//                   <line x1="5" y1="12" x2="19" y2="12"></line>
//                   <polyline points="12 5 19 12 12 19"></polyline>
//                 </svg>
//               </button>
//               <button 
//                 className={`${styles.marketHeroBtn} ${styles.marketHeroBtnNext} ${styles.marketHeroBtnNextSmall}`}
//                 aria-label="Next Slide"
//                 data-btn="next"
//                 type="button"
//                 onClick={nextSlide}
//               >
//                 <canvas 
//                   className={styles.marketHeroTimeoutIndicator}
//                   width="44"
//                   height="44"
//                   ref={smallCanvasRef}
//                   tabIndex={-1}
//                 ></canvas>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
//                   <line x1="5" y1="12" x2="19" y2="12"></line>
//                   <polyline points="12 5 19 12 12 19"></polyline>
//                 </svg>
//               </button>
//             </div>
//           </div>
          
//           <div className={styles.marketHeroIndicators}>
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 className={`${styles.marketHeroIndicator} ${index === currentSlide ? styles.marketHeroIndicatorActive : ''}`}
//                 aria-label={`Go to slide ${index + 1}`}
//                 onClick={() => {
//                   if (animationRef.current) {
//                     cancelAnimationFrame(animationRef.current);
//                   }
//                   setCurrentSlide(index);
//                   setTimeout(() => {
//                     startProgressAnimation();
//                   }, 500);
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketHero;

"use client"
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/MarketHero.module.css';

interface SlideData {
  title: string;
  linkText: string;
  link: string;
  image: string;
  description: string;
}

const MarketHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const smallCanvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const slides: SlideData[] = [
    {
      title: "We Energies West Central Lateral Environmental Support",
      linkText: "Read More",
      link: "/en/projects/united-states-projects/w/we-energies-west-central-lateral-environmental-support.html",
      image: "/content/dam/stantec/images/projects/0076/we-energies-2.jpg",
      description: "Environmental support to help our client meet energy demands in their community"
    },
    {
      title: "Perico Preserve Restoration",
      linkText: "Read More",
      link: "/en/projects/united-states-projects/p/perico-preserve-restoration-manatee-county-fl.html",
      image: "/content/dam/stantec/images/projects/0001/perico-preserve-restoration-2.jpg",
      description: "Abandoned farmland restored in Manatee County"
    },
    {
      title: "Oneida Energy Storage Project - Environmental Assessment",
      linkText: "Read More",
      link: "/en/projects/canada-projects/o/oneida-energy-storage-environmental.html",
      image: "/content/dam/stantec/images/projects/0067/oneida-energy-storage.jpg",
      description: "Reviewing resources and noise to support Ontario's clean energy grid"
    },
    {
      title: "Resilient Coastal Infrastructure Design",
      linkText: "Read More",
      link: "/en/projects/united-states-projects/r/resilient-coastal-infrastructure.html",
      image: "/content/dam/stantec/images/projects/0082/coastal-infrastructure.jpg",
      description: "Innovative solutions to protect shorelines and coastal communities from rising sea levels"
    }
  ];

  const drawTimeoutIndicator = useCallback((canvas: HTMLCanvasElement | null, progress: number): void => {
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 3;
    
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    context.lineWidth = 2;
    context.stroke();
    
    // Draw progress arc
    context.beginPath();
    context.arc(centerX, centerY, radius, -Math.PI / 2, (-Math.PI / 2) + (progress * 2 * Math.PI));
    context.strokeStyle = '#ffffff';
    context.lineWidth = 2;
    context.stroke();
  }, []);

  const animateProgress = useCallback(() => {
    if (isPaused) return;
    
    progressRef.current += 0.005;
    
    if (canvasRef.current) {
      drawTimeoutIndicator(canvasRef.current, progressRef.current);
    }
    if (smallCanvasRef.current) {
      drawTimeoutIndicator(smallCanvasRef.current, progressRef.current);
    }
    
    if (progressRef.current >= 1) {
      progressRef.current = 0;
      nextSlide();
      return;
    }
    
    animationRef.current = requestAnimationFrame(animateProgress);
  }, [isPaused, drawTimeoutIndicator]);

  const startProgressAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    progressRef.current = 0;
    animationRef.current = requestAnimationFrame(animateProgress);
  }, [animateProgress]);

  const getPrevIndex = (index: number): number => {
    return (index - 1 + slides.length) % slides.length;
  };

  const getNextIndex = (index: number): number => {
    return (index + 1) % slides.length;
  };

  const prevSlide = useCallback((): void => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setCurrentSlide(getPrevIndex(currentSlide));
    setTimeout(() => {
      setIsTransitioning(false);
      startProgressAnimation();
    }, 500);
  }, [currentSlide, isTransitioning, startProgressAnimation]);

  const nextSlide = useCallback((): void => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setCurrentSlide(getNextIndex(currentSlide));
    setTimeout(() => {
      setIsTransitioning(false);
      startProgressAnimation();
    }, 500);
  }, [currentSlide, isTransitioning, startProgressAnimation]);

  const handleSlideHover = (hover: boolean) => {
    setIsPaused(hover);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  }, [prevSlide, nextSlide]);

  const formatSlideNumber = (num: number): string => {
    return num < 10 ? `0${num + 1}` : `${num + 1}`;
  };

  useEffect(() => {
    // Set loaded state after a short delay to trigger entrance animations
    const loadTimer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    // Initialize canvas
    if (canvasRef.current) {
      drawTimeoutIndicator(canvasRef.current, 0);
    }
    if (smallCanvasRef.current) {
      drawTimeoutIndicator(smallCanvasRef.current, 0);
    }
    
    // Start progress animation
    startProgressAnimation();
    
    // Add keyboard event listeners
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearTimeout(loadTimer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawTimeoutIndicator, startProgressAnimation, handleKeyDown]);

  useEffect(() => {
    if (isPaused) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    } else {
      animationRef.current = requestAnimationFrame(animateProgress);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, animateProgress]);

  return (
    <section 
      className={`${styles.marketHero}`} 
      aria-label="Animated Hero Component"
      onMouseEnter={() => handleSlideHover(true)}
      onMouseLeave={() => handleSlideHover(false)}
    >
      <div className={`${styles.marketHeroContainer} ${loaded ? styles.marketHeroContainerLoaded : ''}`}>
        <ul className={`${styles.marketHeroSlider} ${isTransitioning ? styles.transitioning : ''}`}>
          {/* Current Slide */}
          <li className={`${styles.marketHeroItem} ${styles.marketHeroItemCurrent}`}>
            <div className={styles.marketHeroItemMediaWrapperContainer}>
              <div 
                className={styles.marketHeroItemMediaWrapper} 
                style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                data-title={slides[currentSlide].title}
                aria-hidden="true"
              >
                <div className={styles.overlayGradient}></div>
              </div>
            </div>
          </li>
          
          {/* Next Slide */}
          <li className={`${styles.marketHeroItem} ${styles.marketHeroItemNext}`}>
            <div className={styles.marketHeroItemMediaWrapperContainer}>
              <div 
                className={styles.marketHeroItemMediaWrapper} 
                style={{ backgroundImage: `url(${slides[getNextIndex(currentSlide)].image})` }}
                data-title={slides[getNextIndex(currentSlide)].title}
                aria-hidden="true"
              >
                <div className={styles.overlayGradient}></div>
              </div>
            </div>
          </li>
          
          {/* Previous Slide */}
          <li className={`${styles.marketHeroItem} ${styles.marketHeroItemPrev}`}>
            <div className={styles.marketHeroItemMediaWrapperContainer}>
              <div 
                className={styles.marketHeroItemMediaWrapper} 
                style={{ backgroundImage: `url(${slides[getPrevIndex(currentSlide)].image})` }}
                data-title={slides[getPrevIndex(currentSlide)].title}
                aria-hidden="true"
              >
                <div className={styles.overlayGradient}></div>
              </div>
            </div>
          </li>
        </ul>
        
        <div className={`${styles.marketHeroCopy} ${styles.show}`}>
          <div className={styles.marketHeroCopyBackgroud}></div>
          <div className={styles.marketHeroCopyContent}>
            <div className={styles.marketHeroBreadcrumbs}>
              <ul className={styles.breadcrumbsModule} itemScope itemType="http://schema.org/BreadcrumbList">
                <li className={styles.breadcrumbsModuleItem} itemScope itemProp="itemListElement" itemType="http://schema.org/ListItem">
                  <Link href="/en/markets.html" itemProp="item" itemType="https://schema.org/Thing" className={styles.breadcrumbsModuleLink}>
                    <span itemProp="name">Markets</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li className={styles.breadcrumbsModuleItem} itemScope itemProp="itemListElement" itemType="http://schema.org/ListItem">
                  <Link href="/en/markets/environment.html" itemProp="item" itemType="https://schema.org/Thing" className={styles.breadcrumbsModuleLink}>
                    <span itemProp="name">Environment</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
              </ul>
            </div>
            <div className={styles.marketHeroBottomSection}>
              <div className={styles.marketHeroHeader} data-carousel="true">
                <h1 className={styles.marketHeroTitle}>Environment</h1>
              </div>
              <div className={styles.marketHeroControls}>
                <div className={styles.marketHeroControlsWrapper}>
                  <div className={styles.marketHeroProgress}>
                    <span className={styles.marketHeroProgressCurrent} tabIndex={-1}>
                      {formatSlideNumber(currentSlide)}
                    </span>
                    <span className={styles.marketHeroProgressSeparator} tabIndex={-1}></span>
                    <span className={styles.marketHeroProgressTotal} tabIndex={-1}>
                      {formatSlideNumber(slides.length - 1)}
                    </span>
                  </div>
                  <article 
                    className={`${styles.marketHeroItemText} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`} 
                    id="marketItemText"
                  >
                    <Link className={styles.marketHeroDescriptionLink} href={slides[currentSlide].link}>
                      <h2 className={styles.marketHeroEyebrow}>{slides[currentSlide].title}</h2>
                      <p className={styles.marketHeroArticleDescription}>{slides[currentSlide].description}</p>
                      <div className={`${styles.marketHeroCta}`}>
                        <span className={styles.linkText}>{slides[currentSlide].linkText}</span>
                        <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </Link>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.marketHeroNavigation}>
          <div className={styles.marketHeroBtnWrapper}>
            <div className={styles.marketHeroBtnSlides}>
              <span className={`${styles.marketHeroBtnCounter} ${styles.marketHeroCurrentSlide}`}>
                {formatSlideNumber(currentSlide)}
              </span>
              <span className={styles.marketHeroBtnLine}></span>
              <span className={`${styles.marketHeroBtnCounter} ${styles.marketHeroCurrentTotal}`}>
                {formatSlideNumber(slides.length - 1)}
              </span>
            </div>
            <div className={styles.marketHeroBtnButtons}>
              <button 
                className={`${styles.marketHeroBtn} ${styles.marketHeroBtnPrev}`}
                aria-label="Previous Slide"
                data-btn="prev"
                type="button"
                onClick={prevSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button 
                className={`${styles.marketHeroBtn} ${styles.marketHeroBtnNext}`}
                aria-label="Next Slide"
                data-btn="next"
                type="button"
                onClick={nextSlide}
              >
                <canvas 
                  className={styles.marketHeroTimeoutIndicator}
                  width="60"
                  height="60"
                  ref={canvasRef}
                  tabIndex={-1}
                ></canvas>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button 
                className={`${styles.marketHeroBtn} ${styles.marketHeroBtnNext} ${styles.marketHeroBtnNextSmall}`}
                aria-label="Next Slide"
                data-btn="next"
                type="button"
                onClick={nextSlide}
              >
                <canvas 
                  className={styles.marketHeroTimeoutIndicator}
                  width="44"
                  height="44"
                  ref={smallCanvasRef}
                  tabIndex={-1}
                ></canvas>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
          
          <div className={styles.marketHeroIndicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.marketHeroIndicator} ${index === currentSlide ? styles.marketHeroIndicatorActive : ''}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => {
                  if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                  }
                  setCurrentSlide(index);
                  setTimeout(() => {
                    startProgressAnimation();
                  }, 500);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketHero;