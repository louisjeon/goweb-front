import React, { useState } from "react";
import styled from "styled-components";
import MapView from "./MapView";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const Title = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 50px;
  font: bold 30px "arial";
  color: #57abef;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

const Search = styled.input`
  margin: 30px 0;
  padding-left: 10px;
  width: calc(80%);
  height: 40px;
  border-radius: 5px;
  font: bold 15px "arial";
  border: 1px solid gray;
  @media screen and (min-width: 768px) {
    width: calc(50%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: calc(100%);
  }
`;

const ContentWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

const MapViewWrapper = styled.div`
  width: 90vw;
  height: 500px;
  overflow: hidden;
  border: 2px solid black;
  @media screen and (min-width: 768px) {
    width: calc(40%);
    margin-right: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100%);
  border-top: 0.5px solid black;
  &:last-child {
    border-bottom: 0.5px solid black;
  }
  &:hover {
    color: gray;
  }
`;

const P = styled.p`
  width: calc(80%);
  &.title {
    font: bold 17px "arial";
    margin: 10px;
    margin-left: 30px;
  }
  &.position {
    width: calc(50%);
    font: 400 13px "arial";
    margin: 10px 0;
    margin-left: 30px;
  }
  &.phone {
    font: 400 13px "arial";
    margin: 10px 0;
    margin-left: 30px;
  }
  &.page {
    margin: 0;
    font: 400 12px "arial";
    text-align: center;
    line-height: 30px;
  }
`;

const ButtonWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

const Button = styled.button`
  margin: 0;
  width: 80px;
  height: 30px;
  background: white;
  border: 1px solid gray;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: gray;
    border: transparent;
  }
`;

const BikeMap = () => {
  const [titles, setTitle] = useState([]);
  const [index, setIndex] = useState(0);

  const loadTitle = (titles) => {
    setTitle(titles);
  };
  return (
    <Container>
      <Title>자전거 길 찾기</Title>
      <Search placeholder="찾고자하는 지역을 입력해주세요" />
      <Wrapper>
        <MapViewWrapper>
          <MapView propFunction={loadTitle} index={index} />
        </MapViewWrapper>
        <ContentWrapper>
          {titles.map((title, index) => (
            <Content key={index}>
              <P className="title" id={index} onClick={() => setIndex(index)}>
                {title}
              </P>
            </Content>
          ))}
        </ContentWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button>이전</Button>
        <P className="page">1 / 10</P>
        <Button>다음</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default BikeMap;
