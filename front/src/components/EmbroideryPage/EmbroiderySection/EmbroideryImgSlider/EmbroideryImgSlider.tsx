'use client';
import Image from 'next/image';
import ReusableSlider from '@components/components/ReusableSlider/ReusableSlider';

import styles from './EmbroideryImgSlider.module.scss';

interface EmbroideryImgSliderProps {
  img: string[];
}

const EmbroideryImgSlider: React.FC<EmbroideryImgSliderProps> = ({ img }) => {

  return (
    <div className={styles.img_container}>
      <ReusableSlider dotsStyles={styles.dots} dots infinite autoplay>
        {Array.isArray(img) &&
          img.map((imageSrc, index) => (
            <div key={index} className={styles.img_inner_container}>
              <Image
                className={styles.image}
                src={imageSrc}
                priority
                fill
                alt="Embroidery"
              />
            </div>
          ))}
      </ReusableSlider>
    </div>
  );
};

export default EmbroideryImgSlider;
