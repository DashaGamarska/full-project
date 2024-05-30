'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import ReusableSlider from '@components/components/ReusableSlider/ReusableSlider';

import styles from './ProductImgGallery.module.scss';

const ProductImgGallery = ({ images }: { images: string[] }) => {
  const totalImages = images.length;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const initialPercentage = ((activeImageIndex + 1) / totalImages) * 100;

  const [progressBarHeight, setProgressBarHeight] = useState(initialPercentage);
  const sliderRef = useRef<Slider | null>(null);

  const handleSmallImageClick = (index: number) => {
    setActiveImageIndex(index);
    const newPercentage = ((index + 1) / totalImages) * 100;
    setProgressBarHeight(newPercentage);
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className={styles.product_detail_images__wrapper}>
      <div className={styles.slider__img_container}>
        <ReusableSlider
          vertical
          verticalSwiping
          ref={sliderRef}
          swipeToSlide={true}
          afterChange={(index: number) => handleSmallImageClick(index)}
        >
          {images.map((imageSrc, i) => (
            <div key={i} className={styles.slider__img_inner_container}>
              <Image
                className={styles.slider__image}
                src={imageSrc}
                priority
                fill
                alt="Candle-making kit in a box"
                sizes="(min-width: 1230) 458px,
                (min-width: 1024) 350px"
              />
            </div>
          ))}
        </ReusableSlider>
      </div>
      <div className={styles.product_detail_images__progress_bar}>
        <div
          className={styles.product_detail_images__progress_bar_progress}
          style={{ height: `${progressBarHeight}%` }}
        ></div>
      </div>
      <ul className={styles.product_detail_images__container}>
        {images.map((imageSrc, index) => (
          <li
            key={index}
            className={styles.product_detail_images__inner_container}
            onClick={() => handleSmallImageClick(index)}
          >
            <Image
              className={`${index === activeImageIndex ? styles.active : ''}`}
              src={imageSrc}
              priority
              fill
              alt="Candle-making kit in a box"
              sizes="(min-width: 1230) 86px,
              (min-width: 1024) 86px,
              100%"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductImgGallery;
