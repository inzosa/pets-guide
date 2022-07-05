import { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Slide } from '../../../molecules/Slide';
import { ButtonWrap, NextButton, PrevButton } from '../Slider/style';
import { CarouselContainer } from './style';

import cat1 from '../../../../assets/images/Slide/cat1.jpg';
import cat2 from '../../../../assets/images/Slide/cat2.jpg';
import cat3 from '../../../../assets/images/Slide/cat3.jpg';
import cat4 from '../../../../assets/images/Slide/cat4.jpg';

const Carousel_imgs = [cat1, cat2, cat3, cat4, cat1, cat2, cat3, cat4];
const TotalCount = Carousel_imgs.length - 1;

const Carousel = () => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevBtn = () => {
    console.log(slideRef.current);
    if (!currentSlide) {
      setCurrentSlide(TotalCount);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextBtn = () => {
    if (TotalCount <= currentSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transform = `translateX(${-400 * currentSlide}px)`;
  }, [currentSlide]);

  return (
    <>
      <CarouselContainer>
        <ButtonWrap>
          <PrevButton onClick={prevBtn}>
            <FaAngleLeft />
          </PrevButton>
          <NextButton onClick={nextBtn}>
            <FaAngleRight />
          </NextButton>
        </ButtonWrap>
        <Slide imgs={Carousel_imgs} ref={slideRef} />
      </CarouselContainer>
    </>
  );
};

export default Carousel;
