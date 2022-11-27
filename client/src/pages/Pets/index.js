import Header from '../../component/organisms/Header';
import CardView from '../../component/organisms/Contents/CardView';
import Footer from '../../component/organisms/Footer';
import { SearchPets } from '../../component/organisms/Contents/SearchPets';
import { Container } from './style';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContentWrap } from '../style';
import axios from 'axios';

const Pets = () => {
  console.log('Pets rendering');
  const { type } = useParams();
  const [pets, setPets] = useState([]);
  const [isSelected, setIsSelected] = useState([]);

  useEffect(() => {
    axios
      .get(
        'http://localhost:5000/pets',
        {},
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const result = res.data;
        if (!type) setPets(result);
        else setPets(result.filter((pet) => pet.type === type));
      });
  }, [type]);

  // Card 클릭하면 설명 보여주기
  const onToggle = (id) => {
    const newArr = Array(pets.length).fill(false);
    newArr[id] = isSelected[id] ? false : true;
    setIsSelected(newArr);
  };

  // 검색어에 따라서 내용 변화
  const handleSearch = (e) => {
    axios.get('/db/pets.json').then((res) => {
      const result = res.data.result;
      setPets(result.filter((pet) => pet.name.replace(' ', '').indexOf(e.target.value.replace(' ', '')) !== -1));
    });
  };

  return (
    <>
      <Header />
      <ContentWrap>
        <Container>
          <SearchPets handleSearch={handleSearch} current={type} />
          <CardView onToggle={onToggle} data={pets} isSelected={isSelected} />
        </Container>
      </ContentWrap>
      <Footer />
    </>
  );
};

export default Pets;
