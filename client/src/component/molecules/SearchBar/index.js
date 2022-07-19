import { AreaBox, Container, SearchBarBtn, SearchBarInput, SearchBarText, StyledFaSearch } from './style';

export const SearchBar = ({ handleSearch, text, searchBtn }) => {
  return (
    <Container>
      <SearchBarText>{text}</SearchBarText>
      <AreaBox>
        <SearchBarInput onChange={handleSearch} />
        <SearchBarBtn onClick={searchBtn}>
          <StyledFaSearch />
        </SearchBarBtn>
      </AreaBox>
    </Container>
  );
};
