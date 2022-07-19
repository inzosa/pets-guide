import { forwardRef } from 'react';
import { Image } from '../../atoms/Image';
import { ImageWrap, StyledSlide } from './style';

export const Slide = forwardRef(({ imgs }, ref) => {
  return (
    <StyledSlide ref={ref}>
      {imgs.map((img, index) => (
        <ImageWrap key={index}>
          <Image src={img} />
        </ImageWrap>
      ))}
    </StyledSlide>
  );
});
