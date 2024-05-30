import { forwardRef } from 'react';
import Slider, { Settings } from 'react-slick';

import styles from './ReusableSlider.module.scss';

interface ReusableSliderProps {
  slidesToShow?: number;
  children?: React.ReactNode;
  infinite?: boolean;
  dots?: boolean;
  arrows?: boolean;
  slidesToScroll?: number;
  draggable?: boolean;
  swipe?: boolean;
  dotsStyles?: string;
  speed?: number;
  beforeChange?: (prev: any, next: any) => void;
  afterChange?: (index: number) => void;
  vertical?: boolean;
  verticalSwiping?: boolean;
  swipeToSlide?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
}

type ForwardedRefType = Slider | null;

const ReusableSlider = forwardRef<ForwardedRefType, ReusableSliderProps>(
  (
    {
      children,
      slidesToShow = 1,
      infinite = false,
      dots = false,
      arrows = false,
      slidesToScroll = 1,
      draggable = true,
      swipe = true,
      dotsStyles,
      speed = 900,
      beforeChange,
      vertical = false,
      verticalSwiping = false,
      afterChange,
      swipeToSlide,
      autoplay = false,
      autoplaySpeed = 4000,
    },
    ref
  ) => {
    const sliderSettings: Settings = {
      slidesToShow,
      slidesToScroll,
      infinite,
      dots,
      arrows,
      draggable,
      swipe,
      vertical,
      verticalSwiping,
      swipeToSlide,
      autoplay,
      autoplaySpeed,
      appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
      dotsClass: `${styles.dots} ${dotsStyles || ''}`,
      customPaging: i => (
        <button type="button" aria-label={`Go to the slide ${i + 1}`}></button>
      ),
    };
    return (
      <Slider
        {...sliderSettings}
        speed={speed}
        ref={ref}
        beforeChange={beforeChange}
        afterChange={afterChange}
      >
        {children}
      </Slider>
    );
  }
);

ReusableSlider.displayName = 'ReusableSlider';

export default ReusableSlider;
