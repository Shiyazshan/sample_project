import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Left>
          <Text>Logo.</Text>
        </Left>
        <Right>
          <Ul>
            <NavLink className="link" to="/">
              <Nav>Home</Nav>
            </NavLink>
            <NavLink className="link"  to="/About">
              <Nav>About</Nav>
            </NavLink>
            <NavLink className="link"  to="/Features">
              <Nav>Features</Nav>
            </NavLink>
            <NavLink className="link"  to="/Contact">
              <Nav>Contact</Nav>
            </NavLink>
          </Ul>
        </Right>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #a9c9ff;
  background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
`;
const Left = styled.div`
  width: 30%;
`;
const Text = styled.h1``;
const Right = styled.div`
  width: 70%;
`;
const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;
// const NavLink = styled(NavLink)`
//   margin-right: 20px;
// `;
const Nav = styled.div``;
