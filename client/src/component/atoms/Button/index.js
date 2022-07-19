import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
`;

export const Button = ({ className, onClick, children, disabled = false }) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
