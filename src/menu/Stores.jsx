import React from "react";
import styled from "styled-components";
import map from "../img/map.jpg";

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

const Map = styled.img`
  width: calc(80%);
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

const Stores = () => {
  return (
    <Container>
      <Title>대리점 찾기</Title>
      <Search placeholder="찾고자하는 지역을 입력해주세요" />
      <Wrapper>
        <Map src={map} />
        <ContentWrapper>
          <Content>
            <P className="title">KS조치원점</P>
            <P className="position">
              세종특별자치시 조치원읍 새내2길 42 세종 조치원읍 남리 360
            </P>
            <P className="phone">000-000-0000</P>
          </Content>
          <Content>
            <P className="title">KS조치원점</P>
            <P className="position">
              세종특별자치시 조치원읍 새내2길 42 세종 조치원읍 남리 360
            </P>
            <P className="phone">000-000-0000</P>
          </Content>
          <Content>
            <P className="title">KS조치원점</P>
            <P className="position">
              세종특별자치시 조치원읍 새내2길 42 세종 조치원읍 남리 360
            </P>
            <P className="phone">000-000-0000</P>
          </Content>
          <Content>
            <P className="title">KS조치원점</P>
            <P className="position">
              세종특별자치시 조치원읍 새내2길 42 세종 조치원읍 남리 360
            </P>
            <P className="phone">000-000-0000</P>
          </Content>
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

export default Stores;
