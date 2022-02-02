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
            <NavLink className="link" to="/about">
              <Nav>About</Nav>
            </NavLink>
            <NavLink className="link" to="/features">
              <Nav>Features</Nav>
            </NavLink>
            <NavLink className="link" to="/contact">
              <Nav>Contact</Nav>
            </NavLink>
            <NavLink className="link" to="/request">
              <Nav>Axios</Nav>
            </NavLink>
          </Ul>
        </Right>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

const HeaderContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #a9c9ff;
  background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
  box-shadow: -3px 16px 32px -12px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -3px 16px 32px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 16px 32px -12px rgba(0, 0, 0, 0.75);
  width: 100%;
  position: fixed;
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

const Nav = styled.div``;
