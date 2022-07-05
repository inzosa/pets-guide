import { memo } from 'react';
import { SearchBar } from '../../../molecules/SearchBar';
import { SearchBarContainer, SearchNavbar } from './style';

const linkList = {
  navListName: ['전체', '개', '고양이', '도마뱀', '햄스터', '뱀', '거미', '물고기', '고슴도치', '새', '거북', '개구리', '곤충'],
  navListAddress: ['', 'dog', 'cat', 'lizard', 'hamster', 'snake', 'spider', 'fish', 'hedgehog', 'bird', 'turtle', 'frog', 'insect'],
};

export const SearchPets = memo(({ handleSearch, current }) => {
  console.log('SearchPets rendering');

  return (
    <SearchBarContainer>
      <SearchBar handleSearch={handleSearch} text={'애완동물 검색'} />
      <SearchNavbar navList={linkList} current={current} />
    </SearchBarContainer>
  );
});
