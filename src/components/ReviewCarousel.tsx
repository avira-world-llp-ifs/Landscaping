// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css'; // Correct CSS import for Swiper 11

// // Import the necessary Swiper modules
// import  Pagination from 'swiper';
// import  Autoplay  from 'swiper';
// import  Navigation   from 'swiper';

// const ReviewsCarousel: React.FC = () => {
//   return (
//     <Swiper
//       slidesPerView={3} // Number of items visible at a time
//       spaceBetween={30} // Space between slides
//       loop={true} // Enable infinite loop
//       autoplay={{
//         delay: 3000, // Delay between slides in milliseconds (3 seconds)
//         disableOnInteraction: false, // Continue autoplay after interaction
//       }}
//       navigation={{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }}
//       pagination={{
//         el: '.swiper-pagination',
//         clickable: true,
//       }}
//       breakpoints={{
//         320: {
//           slidesPerView: 1, // 1 card visible on small screens
//           spaceBetween: 10,
//         },
//         768: {
//           slidesPerView: 2, // 2 cards visible on medium screens
//           spaceBetween: 20,
//         },
//         1024: {
//           slidesPerView: 3, // 3 cards visible on large screens
//           spaceBetween: 30,
//         },
//       }}
//       modules={[Navigation, Pagination, Autoplay]} // Register the modules here
//     >
//       {/* Use the same review card multiple times */}
//       {[...Array(5)].map((_, index) => (
//         <SwiperSlide className="reviews-carousel__item review-card" key={index}>
//           <div className="review-card__image">
//             <img
//               src="img/picture/avatar-paul.png"
//               srcSet="img/picture/avatar-paul@2x.png 2x"
//               width="112"
//               height="112"
//               alt="Paul"
//             />
//           </div>
//           <div className="review-card__name">Paul</div>
//           <div className="review-card__post">
//             Designer in <span>Paul.com</span>
//           </div>
//           <div className="review-card__text">
//             Projects for many large domestic and foreign corporations, enterprises in many fields such as finance, banking, F&B, education, communication.
//           </div>
//         </SwiperSlide>
//       ))}

//       {/* Navigation Arrows */}
//       <div className="swiper-button-next"></div>
//       <div className="swiper-button-prev"></div>

//       {/* Pagination */}
//       <div className="swiper-pagination"></div>
//     </Swiper>
//   );
// };

// export default ReviewsCarousel;
