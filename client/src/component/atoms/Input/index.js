import styled from 'styled-components';

const StyledInput = styled.input`
  height: ${(props) => (props.id === 'username' || props.id === 'password' ? '20px' : '')};
  border-radius: 5px;
`;

export const Input = ({ id, className, onChange, type = 'text' }) => {
  return <StyledInput type={type} id={id} className={className} onChange={onChange} autoComplete={type === 'password' ? 'off' : ''} />;
};
