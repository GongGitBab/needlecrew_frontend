import styled from "styled-components";
import { useState } from "react";
import Header from "../Header/Header";

const RepairRequest = () => {
  const [page, setPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 각 카테고리에 해당하는 아이템 리스트
  const categories = {
    하의: ["바지", "치마", "반바지"],
    상의: ["맨투맨", "셔츠", "티셔츠"],
    // 여러 카테고리 추가 가능
  };

  const buttonClick = () => {
    setPage(page + 1);
  };

  const backButtonClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSelectButtonClick = (buttonType) => {
    setSelectedButton(buttonType);

    // 2번째 페이지에서 선택한 카테고리 저장
    if (page === 2) {
      setSelectedCategory(buttonType);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <div>
            <Title>출발지 선택</Title>
            <SubTitle>고객님의 의류의 출발지를 선택해주세요.</SubTitle>
            <SelectButton
              isSelected={selectedButton === "쇼핑몰에서 보내요"}
              onClick={() => handleSelectButtonClick("쇼핑몰에서 보내요")}
            >
              쇼핑몰에서 보내요
            </SelectButton>
            <SelectButton
              isSelected={selectedButton === "우리집에서 보내요"}
              onClick={() => handleSelectButtonClick("우리집에서 보내요")}
            >
              우리집에서 보내요
            </SelectButton>
          </div>
        );
      case 2:
        return (
          <div>
            <Title>의류 선택</Title>
            <SubTitle>어떤 옷을 수선하고 싶으세요?</SubTitle>
            <SelectButton
              isSelected={selectedButton === "하의"}
              onClick={() => handleSelectButtonClick("하의")}
            >
              하의
            </SelectButton>
            <SelectButton
              isSelected={selectedButton === "상의"}
              onClick={() => handleSelectButtonClick("상의")}
            >
              상의
            </SelectButton>
          </div>
        );
      case 3:
        // categories[selectedCategory]가 정의되었는지 확인 후 map을 사용합니다.
        return (
          <div>
            <Title>카테고리 선택</Title>
            <SubTitle>
              수선하고자 하는 아이템의 카테고리를 선택해주세요.
            </SubTitle>
            {categories[selectedCategory] ? (
              // categories[selectedCategory]가 정의되어 있으면 map을 사용합니다.
              categories[selectedCategory].map((item) => (
                <SelectButton
                  key={item}
                  isSelected={selectedButton === item}
                  onClick={() => handleSelectButtonClick(item)}
                >
                  {item}
                </SelectButton>
              ))
            ) : (
              <p>선택한 카테고리에 대한 항목이 없습니다.</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <RepairRequestDiv>
      <Header />
      {renderPage()}
      {page > 1 && <Button onClick={backButtonClick}>이전 단계</Button>}
      <Button onClick={buttonClick}>다음 단계</Button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #21242c;
  font-weight: 600;
  border-radius: 30px;
  border: 2px solid
    ${(props) => (props.isSelected ? "#257CFF" : "rgb(187, 188, 194)")};
  width: 450px;
  height: 50px;
  margin-bottom: 20px;
  background-color: white;
  cursor: pointer;
`;

const Button = styled.button`
  display: inline;
  color: #257cff;
  cursor: pointer;
`;

export default RepairRequest;
