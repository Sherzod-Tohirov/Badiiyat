import Slider from "react-slick";
import "./mainslider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
export const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: null,
    nextArrow: null
    
  };
  const {t} = useTranslation();
  return (
      <div className="container">
        <Slider {...settings} className="relative">
              <div className="slider__item">
                  <div className="slider__title-wrapper">
                    <h2 className="slider__title">
                      {t("slider.first.title")}
                    </h2>
                  </div>
              </div>
              <div className="slider__item">
                  <div className="slider__title-wrapper">
                    <h2 className="slider__title">
                    {t("slider.second.title")}
                    </h2>
                  </div>
              </div>
              <div className="slider__item">
                  <div className="slider__title-wrapper">
                    <h2 className="slider__title">
                    {t("slider.third.title")}
                    </h2>
                  </div>
              </div>
              <div className="slider__item">
                  <div className="slider__title-wrapper">
                    <h2 className="slider__title">
                      {t("slider.fourth.title")}
                    </h2>
                  </div>
              </div>
        </Slider>
      </div>
  );
}