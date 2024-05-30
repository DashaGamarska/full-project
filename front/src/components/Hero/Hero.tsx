'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Slider from 'react-slick';
import { avenir } from '@components/app/fonts';

import Container from '../Container/Container';
import ReusableSlider from '../ReusableSlider/ReusableSlider';
import Section from '../Section/Section';
import CustomLink from '../shared/CustomLink/CustomLink';
import Typography from '../Typography/Typography';

import { generateHeroCards } from './heroCards';

import styles from './Hero.module.scss';

interface HeroI {
  dict: { heading: string[][]; buttonText: string };
}

const Hero: React.FC<HeroI> = ({ dict }) => {
  const sliderRef = useRef<Slider | null>(null);
  const heroData = generateHeroCards(dict);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const disablePrevButton = currentSlide === 0;
  const disableNextButton = currentSlide === heroData.length - 1;

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth',
    });
  };

  return (
    <Section className={styles.sectionWrapper}>
      <Container>
        <div className={styles.body}>
          <div className={styles.controls}>
            <button
              type="button"
              onClick={handlePrevClick}
              className={`${styles.prevButton} ${
                disablePrevButton ? styles.disabled : ''
              }`}
              disabled={disablePrevButton}
              aria-label="Previous Slide"
            >
              <HiOutlineChevronLeft className={styles.arrowIcon} />
            </button>
            <button
              type="button"
              onClick={handleNextClick}
              className={`${styles.nextButton} ${
                disableNextButton ? styles.disabled : ''
              }`}
              disabled={disableNextButton}
              aria-label="Next Slide"
            >
              <HiOutlineChevronRight className={styles.arrowIcon} />
            </button>
          </div>
          <ReusableSlider
            ref={sliderRef}
            beforeChange={(prev, next) => setCurrentSlide(next)}
            dotsStyles={styles.dots}
            dots
          >
            {heroData.map(({ id, backgroundImage, headings }) => (
              <div key={id} className={styles.slider_body}>
                <Image
                  src={backgroundImage}
                  alt="Background Image"
                  quality={100}
                  priority
                  fill
                  sizes="(min-width: 1230) 1200px,
                    (min-width: 1024) 976px,
                    (min-width: 768px) 720px,
                    (min-width: 667px) 619px,
                    327px"
                  className={styles.bgImage}
                />
                <div className={styles.content}>
                  <div className={styles.heading}>
                    {headings.map((title: string, index: number) => (
                      <Typography
                        key={index}
                        variant="heading1"
                        className={avenir.className}
                        color="var(--cl-secondary-50)"
                      >
                        {title}
                      </Typography>
                    ))}
                  </div>
                  <CustomLink
                    variant="primary"
                    href="#compass"
                    className={styles.hero_link}
                    onClick={handleScroll}
                  >
                    {dict.buttonText}
                  </CustomLink>
                </div>
              </div>
            ))}
          </ReusableSlider>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
