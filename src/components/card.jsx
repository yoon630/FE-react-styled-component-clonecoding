import React from "react";
import styled from "styled-components";
import img from "../assets/cat.webp";

const CardStyle = styled.div`
  width: 100%;
  height: 1530px;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  width: 720px;
  height: 1443px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
`;

//상자들 담을 큰 배열 컨테이너
const BoxArray = styled.div`
  width: 720px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 15px 10px 15px;
  justify-content: center;
`;
const TotalBox = styled.div`
  display: flex;
  /* padding: 20px 0px; */
  /* padding-left: -15px;
  padding-right: -15px; */
`;
const WrapCard = styled.div`
  /* display: flex; */
  width: 380px;
  height: 409.2px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 10px 15px;
`;
const ImageBox = styled.div`
  width: 380px;
  height: 225px;
`;

const Image = styled.img`
  width: 100%;
  height: 225px;
  padding: 0;
`;
const TextBox = styled.div`
  height: 158px;
  padding: 1.25rem;
  margin-bottom: 10px;
`;
const Text = styled.p`
  margin-top: 0;
  display: block;
  font-size: large;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  /* margin: 0px 0px 16px; */
`;
const ButtonGroup = styled.div`
  width: 87.19px;
  height: 30.6px;
  display: flex;
  margin-top: 20px;
`;

const IndividualButton = styled.button`
  width: 47.13px;
  color: #6c757d;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  border-color: #6c757d;
  background-color: white;
  margin: 0 0 0 -1px;
`;
const Card = () => {
  return (
    <CardStyle>
      <Container>
        <BoxArray>
          <TotalBox>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
          </TotalBox>
          <TotalBox>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
          </TotalBox>
          <TotalBox>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
            <WrapCard>
              <ImageBox>
                <Image src={img}></Image>
              </ImageBox>
              <TextBox>
                <Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Text>
                <ButtonGroup>
                  <IndividualButton>View</IndividualButton>
                  <IndividualButton>Edit</IndividualButton>
                </ButtonGroup>
              </TextBox>
            </WrapCard>
          </TotalBox>
        </BoxArray>
      </Container>
    </CardStyle>
  );
};

export default Card;
