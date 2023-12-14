import styled from "styled-components";
import { useState } from "react";
import Header from "../Header/Header";

const RepairRequest = () => {
  const [page, setPage] = useState(1);

  const buttonClick = () => {
    setPage(page + 1);
  };

  const backButtonClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <div>
            <Title>출발지 선택</Title>
            <SubTitle>고객님의 의류의 출발지를 선택해주세요.</SubTitle>
            <SelectButton>쇼핑몰에서 보내요</SelectButton>
            <SelectButton>우리집에서 보내요</SelectButton>
            <Button onClick={buttonClick}>다음 단계</Button>
          </div>
        );
      case 2:
        return (
          <div>
            <Title>의류 선택</Title>
            <SubTitle>어떤 옷을 수선하고 싶으세요?</SubTitle>
            <SelectButton>하의</SelectButton>
            <SelectButton>상의</SelectButton>
            <SelectButton>아우터</SelectButton>
            <SelectButton>원피스</SelectButton>
            <SelectButton>정장/교복</SelectButton>
            <Button onClick={buttonClick}>다음 단계</Button>
          </div>
        );
      // 다른 페이지에 대한 내용 추가
      default:
        return null;
    }
  };

  return (
    <RepairRequestDiv>
      <Header />
      {renderPage()}
      {page > 1 && <Button onClick={backButtonClick}>이전 단계</Button>}
    </RepairRequestDiv>
  );
};

const RepairRequestDiv = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  color: #70737c;
  margin-bottom: 20px;
`;

const SelectButton = styled.button`
  color: #21242c;
  font-weight: 600;
  border-radius: 30px;
  border: 1px solid rgb(187, 188, 194);
  width: 450px;
  height: 50px;
  margin-bottom: 20px;
  background-color: white;
`;

const Button = styled.button`
  color: #257cff;
`;

export default RepairRequest;
