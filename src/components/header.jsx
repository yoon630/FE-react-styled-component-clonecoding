//Header components
import React from "react";
import styled from "styled-components";
import camera from "../assets/camera.svg";
import list from "../assets/list.svg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;

  background-color: #212529;
  color: white;
`;

const HeaderTitle = styled.h1`
  margin-right: 1000px;
`;

const Icon = styled.img`
  width: 70px;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Icon src={camera}></Icon>
      <HeaderTitle>Album</HeaderTitle>
      <Icon src={list}></Icon>
    </HeaderContainer>
  );
};

export default Header;
