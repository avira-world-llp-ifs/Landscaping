// "use client";

// import { useEffect, useState } from "react";

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
//     bgImage: "/forest-pine.jpg", // Correct path relative to the public folder
//   },
//   {
//     id: 1,
//     heading: "Enterprise Application Services",
//     description:
//       "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
//     linkText: "Learn More",
//     bgImage: "/landingpage3.jpg", // Correct path relative to the public folder
//   },
//   {
//     id: 2,
//     heading: "Digital Marketing Services",
//     description:
//       "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
//     linkText: "Learn More",
//     bgImage: "/sydney-harbour-bridge.jpg", // Correct path relative to the public folder
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
//             <div
//               key={slide.id}
//               className={`slide absolute top-0 w-full h-full transition-opacity duration-1000 ease-in-out z-10 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
//                 }`}
//             >
//               {/* Background Image */}
//               <div
//                 className="absolute top-0 w-full h-full bg-cover bg-center transition-all duration-1000"
//                 style={{
//                   backgroundImage: `url(${slide.bgImage})`, // Use bgImage directly
//                   opacity: isActive ? 1 : 0,
//                   transform: isActive ? "translateX(0)" : "translateX(20%)",
//                   borderRadius:"0 0 200px 0"
//                 }}
//               ></div>

//               {/* Blue Panel (Fades in after 2s) */}
//               <div
//                 className="absolute top-0 h-full text-white p-8 flex flex-col justify-center transition-all duration-1000"
//                 style={{
//                   backgroundColor:'var(--bs-blue)',
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
//                       fontSize: "2rem",
//                     }}
//                   >
//                     {slide.heading}
//                   </h2>
//                   <p
//                     className="mb-4"
//                     style={{
//                       fontFamily: "Roboto, sans-serif",
//                       fontSize: "1rem",
//                     }}
//                   >
//                     {slide.description}
//                   </p>
//                   <a
//                     className="underline"
//                     style={{
//                       fontFamily: "Roboto, sans-serif",
//                       fontSize: "1.2rem",
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
//           <span className=" font-bold text-xl" style={{color:"var(--bs-blue)"}}>
//             {String(currentSlide + 1).padStart(2, "0")}
//           </span>
//           <div className="w-32 h-1 bg-white rounded-full">
//             <div
//               className="h-full  rounded-full transition-all duration-300 ease-in-out"
//               style={{
//                 width: `${((currentSlide + 1) / slideCount) * 100}%`,
//                 backgroundColor:'#003087'
//               }}
//             ></div>
//           </div>
//           <span className="font-bold text-xl" style={{color:"var(--bs-blue)"}}>
//             {String(slideCount).padStart(2, "0")}
//           </span>
//         </div>

//         {/* Circular Navigation Buttons */}
        
//         <div className="flex gap-4 relative z-20 py-3 px-20">
//   <button
//     onClick={() =>
//       setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
//     }
//     className="text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl text-[#003087] hover:bg-[#003087] hover:text-white transition-all duration-300 ease-in-out leading-none"
//     style={{paddingBottom:3}}
//   >
//     &#60;
//   </button>
//   <button
//     onClick={() =>
//       setCurrentSlide((prev) => (prev + 1) % slideCount)
//     }
//     className="text-2xl w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-lg hover:shadow-xl text-[#003087] hover:bg-[#003087] hover:text-white transition-all duration-300 ease-in-out leading-none"
// style={{paddingBottom:3}}
  
//   >
//     &#62;
//   </button>
// </div>

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
    bgImage: "/forest-pine.jpg",
  },
  {
    id: 1,
    heading: "Enterprise Application Services",
    description:
      "The customer base is retained by complete and appropriate application maintenance and support service. Partner with us to get accurate service and retain the trust and usability factor of your user base.",
    linkText: "Learn More",
    bgImage: "/landingpage3.jpg",
  },
  {
    id: 2,
    heading: "Digital Marketing Services",
    description:
      "Nowadays people are busy and it has drastically changed the purchasing scenario. They rely on the digital world for most things, which calls for businesses to step into this realm and enhance their market presence.",
    linkText: "Learn More",
    bgImage: "/sydney-harbour-bridge.jpg",
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
    <div className="bg-[#f2efec]">
      <div
        className="relative h-[500px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden"
        style={{ borderRadius: "0 0 100px 0" }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute top-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute top-0 w-full h-full bg-cover bg-center transition-all duration-1000"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0)" : "translateX(20%)",
                  borderRadius: "0 0 100px 0",
                }}
              ></div>

              {/* Blue Panel (Fades in after 2s) */}
              <div
                className="absolute top-0 h-full text-white p-6 sm:p-8 flex flex-col justify-center transition-all duration-1000"
                style={{
                  backgroundColor: "var(--bs-blue)",
                  width: "100%",
                  maxWidth: "450px",
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
                  <h2 className="font-bold mb-3 text-xl sm:text-2xl md:text-3xl">
                    {slide.heading}
                  </h2>
                  <p className="mb-3 text-sm sm:text-base">
                    {slide.description}
                  </p>
                  <a
                    className="underline text-base sm:text-lg"
                    href="#"
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
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-6">
        {/* Slide Counter & Progress Bar */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg sm:text-xl text-blue-700">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <div className="w-28 sm:w-36 h-1 bg-gray-300 rounded-full">
            <div
              className="h-full rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: `${((currentSlide + 1) / slideCount) * 100}%`,
                backgroundColor: "#003087",
              }}
            ></div>
          </div>
          <span className="font-bold text-lg sm:text-xl text-blue-700">
            {String(slideCount).padStart(2, "0")}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-4 sm:mt-0">
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
            }
            className="text-lg w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-md hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out"
          >
            &#60;
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slideCount)
            }
            className="text-lg w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-gray-400 flex items-center justify-center bg-white shadow-md hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
}
