import { forwardRef } from 'react';
import styled from 'styled-components';
import { Image } from '../../atoms/Image';
import { StyledSlide } from './style';

const StyledDiv = styled.div`
  width: 400px;
  margin: 0 5px;
`;

export const Slide = forwardRef(({ imgs }, ref) => {
  return (
    <StyledSlide ref={ref}>
      {imgs.map((img, index) => (
        <StyledDiv key={index}>
          <Image src={img} />
        </StyledDiv>
      ))}
    </StyledSlide>
  );
});
