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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  /* justify-content: center; */
`;

const BnaeerContentTitle = styled.div`
  width: 610px;
  height: 48px;
  align-items: center;
  justify-content: center;
  color: #343a40;
  font-weight: 300;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;
const BnaeerContentsub = styled.div`
  width: 610px;
  height: 90px;
  font-size: large;
  color: #6c757d;
`;
const ButtonContainer = styled.p`
  display: flex;
  color: white;
  width: 610px;
  height: 55px;
  text-align: center;
  justify-content: center;
`;
const BannerButtonMain = styled.button`
  width: 160px;
  height: 37px;
  display: inline-block;
  font-weight: 400;
  font-size: 15px;
  text-align: center;

  color: white;
  background-color: #007bff;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  margin: 8px 5px 0px 5px;
  border: none;
  cursor: pointer;
`;
const BannerButtonSecond = styled.button`
  width: 160px;
  height: 37px;
  display: inline-block;

  font-size: 15px;
  font-weight: 400;

  color: white;
  background-color: #6c757d;
  border-radius: 0.25rem;
  border: none;
  padding: 0.375rem 0.75rem;
  margin: 8px 5px 0px 5px;

  cursor: pointer;
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
