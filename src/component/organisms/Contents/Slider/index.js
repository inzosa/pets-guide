import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { ButtonWrap, NextButton, PrevButton, SliderContainer } from './style';
import { Slide } from '../../../molecules/Slide';

const a = [
  'https://images.unsplash.com/photo-1581861503065-5b0da8756921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1460572894071-bde5697f7197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1608643088072-69b035cc8822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1598463166228-c0f90d180918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1547565295-182fb8657b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1581861503065-5b0da8756921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1460572894071-bde5697f7197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1608643088072-69b035cc8822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1598463166228-c0f90d180918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
  'https://images.unsplash.com/photo-1547565295-182fb8657b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=500',
];

const TotalCount = a.length / 3;

const Slider = () => {
  const [currentSlide, SetCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const prevBtn = () => {
    if (!currentSlide) {
      return;
    } else {
      SetCurrentSlide(currentSlide - 1);
    }
  };

  const nextBtn = () => {
    if (TotalCount <= currentSlide) {
      return;
    } else {
      SetCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentSlide}0%)`;
  }, [currentSlide]);

  return (
    <>
      <SliderContainer>
        <ButtonWrap>
          <PrevButton onClick={prevBtn}>
            <FaAngleLeft />
          </PrevButton>
          <NextButton onClick={nextBtn}>
            <FaAngleRight />
          </NextButton>
        </ButtonWrap>
        <Slide imgs={a} ref={slideRef} />
      </SliderContainer>
    </>
  );
};

export default Slider;
