import styled from 'styled-components';

export const PostContainer = styled.div`
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  width: 50%;
  height: 700px;
  margin: 30px auto;
`;

export const PostTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
`;

export const PostWriter = styled.div`
  margin-left: 20px;
  padding-left: 10px;
  font-weight: bold;
`;

export const PostDate = styled.div`
  margin: 0 20px 0 20px;
  padding: 0 0 10px 10px;
  border-bottom: 1px solid #d9d9d9;
  color: grey;
`;

export const PostContent = styled.div`
  margin: 20px;
  padding-left: 10px;
`;
