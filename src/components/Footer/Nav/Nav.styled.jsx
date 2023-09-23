import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @media (min-width: 768px) {
      margin-top: 40px;
    }

    @media (min-width: 1024px) {
      margin-top: 0;
      gap: 16px;
      margin-left: 389px;
    }
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 22.4px;
  color: #f3f3f3;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #dcdcdc;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #f3f3f3;
    transition: width 0.3s ease-in-out;
  }

  &:active {
    color: #dcdcdc;
    &::before {
      width: 100%;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/drinks" activeClassName="active">
            Drinks
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            Add drink
          </NavLink>
        </li>
        <li>
          <NavLink to="/my" activeClassName="active">
            My drink
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorite" activeClassName="active">
            Favorites
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
