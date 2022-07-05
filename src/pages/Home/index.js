import { Text } from '../../component/atoms/Text';
import Carousel from '../../component/organisms/Contents/Carousel';
import Slider from '../../component/organisms/Contents/Slider';
import Footer from '../../component/organisms/Footer';
import Header from '../../component/organisms/Header';
import { ContentWrap } from '../style';

const Home = () => {
  return (
    <>
      <Header />
      <ContentWrap>
        <Carousel />
        <Text>추천하는 고양이</Text>
        <Slider />
        <br />
        <br />
        <Text>추천하는 강아지</Text>
        <Slider />
      </ContentWrap>
      <Footer />
    </>
  );
};

export default Home;
