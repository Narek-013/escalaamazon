import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Image } from "../../Images/Image";
import ProductItemAmazon from "../../uikit/ProductItemAmazon/ProductItemAmazon";

function AmazonItem() {
    return (
        <section className="amazon-item">
            <div className="amazon-item__container _container">
                <img className="amazon-img" src={Image.amazonImg} alt="img" />
                <div className="amazon-items">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={'auto'}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                    >
                        <SwiperSlide>
                            <ProductItemAmazon title="National plate " img={Image.amazonItemImg} price="$19.99" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItemAmazon title="Funny bag " img={Image.amazonItemImg3} price="$29.99" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItemAmazon title="Handmade plate" img={Image.amazonItemImg2}price="$39.99" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItemAmazon title="National plate " img={Image.amazonItemImg} price="$19.99" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItemAmazon title="Funny bag " img={Image.amazonItemImg3} price="$29.99" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItemAmazon title="Handmade plate" img={Image.amazonItemImg2}price="$39.99" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItemAmazon title="National plate " img={Image.amazonItemImg} price="$19.99" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItemAmazon title="Funny bag " img={Image.amazonItemImg3} price="$29.99" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItemAmazon title="Handmade plate" img={Image.amazonItemImg2}price="$39.99" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default AmazonItem;