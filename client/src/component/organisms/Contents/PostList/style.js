import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 60%;
  margin: 10px auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
`;

export const StyledThead = styled.thead`
  background-color: #f4a654;
  height: 40px;
`;

export const StyledTbody = styled.tbody``;

export const StyledTr = styled.tr`
  border-bottom: 2px solid #f3e0c9;
`;

export const StyledTd = styled.td`
  text-align: ${(props) => (props.children.props ? '' : 'center')};
  padding: 8px;
`;
