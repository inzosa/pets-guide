import { Image } from '../../atoms/Image';
import { Text } from '../../atoms/Text';
import { CardWrap, ImageWrap } from './style';

export const CardItem = ({ img, name }) => {
  return (
    <CardWrap>
      <ImageWrap>
        <Image src={img} />
      </ImageWrap>
      <Text>{name}</Text>
    </CardWrap>
  );
};
