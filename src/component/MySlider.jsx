
// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Navigation, Pagination } from "swiper/modules";

// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";

// // import "./MySlider.css";

// // const MySlider = ({ slides }) => {
// //   return (
// //     <div className="slider-wrapper">
// //       <Swiper
// //         modules={[Autoplay, Navigation, Pagination]}
// //         slidesPerView={1}
// //         loop={true}
// //         autoplay={{ delay: 3000, disableOnInteraction: false }}
// //         navigation
// //         pagination={{ clickable: true }}
// //       >
// //         {slides.map((slide) => (
// //           <SwiperSlide key={slide.id}>
// //             <div
// //               className="slide-bg"
// //               style={{ backgroundImage: `url(${slide.img})` }}
// //             >
// //               <div className="slide-overlay">

// //                 {(slide.title || slide.subtitle) && (
// //                   <div className="slide-text">
// //                     {slide.title && <h2>{slide.title}</h2>}
// //                     {slide.subtitle && <p>{slide.subtitle}</p>}
// //                   </div>
// //                 )}

// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default MySlider;
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import "./MySlider.css";

// const MySlider = ({ slides }) => {
//   return (
//     <div className="slider-wrapper">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className="slide-bg"
//               style={{ backgroundImage: `url(${slide.img})` }}
//             >
//               <div className="slide-overlay">

//                 {(slide.title || slide.subtitle) && (
//                   <div className="slide-text">
//                     {slide.title && <h2>{slide.title}</h2>}
//                     {slide.subtitle && <p>{slide.subtitle}</p>}
//                   </div>
//                 )}

//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MySlider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./MySlider.css";

const MySlider = ({ slides }) => {
  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="slide-overlay">

                {(slide.title || slide.subtitle) && (
                  <div className="slide-text">
                    {slide.title && <h2>{slide.title}</h2>}
                    {slide.subtitle && <p>{slide.subtitle}</p>}
                  </div>
                )}

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MySlider;
