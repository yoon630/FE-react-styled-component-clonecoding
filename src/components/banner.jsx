import React from "react";
import styled from "styled-components";

const BannerBack = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const BannerContainer = styled.div`
  width: 640px;
  height: 215px;
  align-items: center;
  justify-content: center;
`;

const BnaeerContentTitle = styled.div`
  width: 610px;
  height: 48px;
  align-items: center;
  justify-content: space-evenly;
  color: #343a40;
  font-weight: 400;
  font-size: xx-large;
  margin-bottom: 10px;
`;
const BnaeerContentsub = styled.div`
  width: 610px;
  height: 90px;
  font-size: large;
  color: #6c757d;
`;
const ButtonContainer = styled.div`
  display: flex;
  color: white;
  width: 200px;
  height: 60px;
  align-items: center;
`;
const BannerButtonMain = styled.button`
  width: 160px;
  height: 37px;
  display: flex;
  font-size: 12px;
  color: white;
  background-color: #007bff;
  border-radius: 20px;
`;
const BannerButtonSecond = styled.button`
  width: 160px;
  height: 37px;
  display: flex;
  font-size: 12px;
  color: white;
  background-color: #6c757d;
  border-radius: 20px;
`;

const Banner = () => {
  return (
    <BannerBack>
      <BannerContainer>
        <BnaeerContentTitle>Album example </BnaeerContentTitle>
        <BnaeerContentsub>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </BnaeerContentsub>
        <ButtonContainer>
          <BannerButtonMain>Main call to action</BannerButtonMain>
          <BannerButtonSecond>Secondary action</BannerButtonSecond>
        </ButtonContainer>
      </BannerContainer>
    </BannerBack>
  );
};

export default Banner;
