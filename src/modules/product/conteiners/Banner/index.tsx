import { useTranslation } from "react-i18next";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import CoreSwiper from "modules/core/components/CoreSwiper";
import Button from "components/Button";
import { slides } from "./slides";
import styles from "./index.module.scss";

export interface SlidesProps {
  id: number;
  image: string;
  imageSmall: string;
  text: string;
}

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.swiper} collection-swiper`}>
      <CoreSwiper
        modules={[Pagination, Autoplay]}
        navigation={true}
        pagination={{
          clickable: true,
          enabled: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
        autoplay={{
          delay: 5000,
        }}
      >
        {slides.map(({ text, image, imageSmall, id }) => (
          <SwiperSlide key={id}>
            <div className={styles.itemsWrapper}>
              <picture>
                <source media="(max-width: 480px)" srcSet={imageSmall} />
                <img src={image} alt={text} className={styles.image} />
              </picture>
              <p className={styles.text}>{text}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.wrapperButton}>
          <Button title={t("addToCart")} />
        </div>
      </CoreSwiper>
    </div>
  );
};

export default Banner;
