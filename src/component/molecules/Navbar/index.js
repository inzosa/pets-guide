import { Link } from '../../atoms/Link';
import { NavbarUl } from './style';
import { NavbarLi } from './style';

export const Navbar = ({ navList, current, className }) => {
  console.log('Navbar rendering');
  const { navListName, navListAddress } = navList;

  return (
    <NavbarUl className={className}>
      {navListName.map((navName, index) => (
        <NavbarLi key={index}>
          <Link linkName={navName} linkAddress={navListAddress[index]} current={current} />
        </NavbarLi>
      ))}
    </NavbarUl>
  );
};
