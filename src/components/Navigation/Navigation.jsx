import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const makeLinkIsActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeLinkIsActive}>
        Home
      </NavLink>
      <NavLink to="/movies" className={makeLinkIsActive}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
