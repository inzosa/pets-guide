import styled from 'styled-components';

export const CardViewContainer = styled.div`
  display: flex;
`;

export const CardViewUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  width: 80rem;
  margin: auto;
`;

export const CardViewLi = styled.li`
  flex-basis: 30%;
  cursor: pointer;
`;

export const CardDescWrap = styled.div`
  width: 80%;
  height: 10rem;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 15px;
`;

export const CardDesc = styled.div`
  height: 70%;
`;
