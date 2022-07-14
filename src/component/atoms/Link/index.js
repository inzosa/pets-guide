import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    color: coral;
  }

  &.active {
    color: ${(props) => {
      if (!props.current) {
        return 'coral';
      } else if (props.to === props.current) {
        return 'coral';
      }
    }};
  }
`;

export const Link = ({ linkName, linkAddress = linkName, current, className }) => {
  return (
    <StyledNavLink to={`${linkAddress}`} current={current} className={className}>
      {linkName}
    </StyledNavLink>
  );
};
