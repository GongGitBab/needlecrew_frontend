import styled from "styled-components";

export default function RepairRequest() {
  return (
    <RepairRequestDiv>
      <Title>출발지 선택</Title>
      <SubTitle>고객님의 의류의 출발지를 선택해주세요.</SubTitle>
      <SelectButton>쇼핑몰에서 보내요</SelectButton>
      <SelectButton>우리집에서 보내요</SelectButton>
    </RepairRequestDiv>
  );
}

let RepairRequestDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

let Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

let SubTitle = styled.p`
  color: #70737c;
  margin-bottom: 20px;
`;

let SelectButton = styled.button`
  color: #21242c;
  font-weight: 600;
  border-radius: 30px;
  border: 1px solid rgb(187, 188, 194);
  width: 450px;
  height: 50px;
  margin-bottom: 20px;
  background-color: white;
`;
