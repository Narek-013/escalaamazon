import { Image } from "../../Images/Image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useCallback, useRef } from "react";

// Подключение модуля Navigation
SwiperCore.use([]);

function Slider() {
  const swiperRef = useRef<any>(null);

  const slideNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
    
  }, [swiperRef]);

  const slidePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }, [swiperRef]);

  return (
    <section className="slider">
      <div className="slider-item_container _container">
        <Swiper
          spaceBetween={30}
          loop={true}
          slidesPerView={"auto"}
          ref={swiperRef}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="slider-item">
                <img src={Image.sliderShape} alt="slider shape" />
                <p>
                  We will also facilitate the business marketing of these
                  products with our SEO experts so that they become a ready to
                  use website &amp; help sell product from company.
                </p>
                <div>
                  <img src={Image.sliderUser} alt="user" />
                  <ul>
                    <li>Salim Ahmed</li>
                    <li>UI Designer</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="slider__container _container">
        <button onClick={slidePrev}>
          <img src={Image.sliderLeft} alt="previous slide" />
        </button>
        <button onClick={slideNext} className="slidenext">
          <img src={Image.sliderRight} alt="next slide" />
        </button>
      </div>
    </section>
  );
}

export default Slider;