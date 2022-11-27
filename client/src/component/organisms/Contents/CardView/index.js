import { CardItem } from '../../../molecules/CardItem';
import { CardViewContainer, CardDescWrap, CardViewLi, CardViewUl, CardDesc } from './style';
import { Text } from '../../../atoms/Text';

const CardView = ({ data, onToggle, isSelected }) => {
  console.log('CardView rendering');
  return (
    <CardViewContainer>
      <CardViewUl>
        {data.map((item) => (
          <CardViewLi key={item._id} onClick={() => onToggle(item._id)}>
            <CardItem img={item.src} name={item.name} />

            {isSelected[item._id] && (
              <CardDescWrap>
                <Text>{item.type}</Text>
                <CardDesc>{item.desc}</CardDesc>
                <Text>원산지: {item.origin}</Text>
              </CardDescWrap>
            )}
          </CardViewLi>
        ))}
      </CardViewUl>
    </CardViewContainer>
  );
};

export default CardView;
