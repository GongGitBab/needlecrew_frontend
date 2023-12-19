import { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";  // useHistory 대신 useNavigate 사용
import styled from "styled-components";
import Header from "../Header/Header";
import * as _ from "./style";
import camera from "../../assets/camera.png";

const RepairRequest = () => {
  const navigate = useNavigate();  // useHistory 대신 useNavigate 사용
  const [page, setPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [itemValue, setItemValue] = useState("");  // 추가: 물품가액 입력 값 상태
  const [requestText, setRequestText] = useState("");  // 추가: 의뢰 내용 입력 값 상태

  const categories = {
    하의: ["스커트", "바지"],
    '정장/교복': ["여성", "남성"],
    원피스: ["청원피스", "쭈리원피스", "정장원피스", "일반원피스", "쉬폰원피스", "셔츠원피스", "가죽원피스"],
    아우터: ["코트", "점퍼", "재킷"],
    상의: ["맨투맨", "셔츠", "티셔츠"],
  };

  const buttonClick = () => {
    setPage(page + 1);
  };

  const backButtonClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSelectButtonClick = (buttonType, files) => {
    setSelectedButton(buttonType);

    if (page === 2) {
      setSelectedCategory(buttonType);
    } else if (page === 4) {
      setSelectedImages((prevImages) => [...prevImages, ...files]);
    }
  };

  const navigateToBuy = () => {
    navigate("/buy", { state: { selectedImages, selectedCategory, itemValue, requestText } });
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
              isSelected={selectedButton === "정장/교복"}
              onClick={() => handleSelectButtonClick("정장/교복")}
            >
              정장/교복
            </SelectButton>
            <SelectButton
              isSelected={selectedButton === "원피스"}
              onClick={() => handleSelectButtonClick("원피스")}
            >
              원피스
            </SelectButton>
            <SelectButton
              isSelected={selectedButton === "아우터"}
              onClick={() => handleSelectButtonClick("아우터")}
            >
              아우터
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
        return (
          <div>
            <Title>카테고리 선택</Title>
            <SubTitle>
              수선하고자 하는 아이템의 카테고리를 선택해주세요.
            </SubTitle>
            {categories[selectedCategory] ? (
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
      case 4:
        return (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <form>
              <Title>직접입력하기</Title>
              <SubTitle>사진업로드</SubTitle>
              <_.UploadLabel>
                <img src={camera} style={{ width: "50px" }} alt="camera-icon" />
                <_.UploadInput
                  type="file"
                  onChange={(e) => handleSelectButtonClick("image", e.target.files)}
                  multiple
                />
              </_.UploadLabel>
              {selectedImages.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`selected-image-${index}`}
                  style={{ width: "200px", height: "200px", marginTop: "20px" }}
                />
              ))}
              <SubTitle>물품가액</SubTitle>
              <Input
                type="text"
                placeholder="물품가액을 입력해주세요"
                value={itemValue}
                onChange={(e) => setItemValue(e.target.value)}
              />
              <SubTitle>의뢰내용</SubTitle>
              <TextArea
                placeholder="수선하고자 하는 부위를 상세히 기입해주셔야 수선진행에 차질이 없습니다"
                value={requestText}
                onChange={(e) => setRequestText(e.target.value)}
              />
              <FinishBtn onClick={navigateToBuy}>작성완료</FinishBtn>
            </form>
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

      {page !== 4 ? (
        <ButtonWrapper>
          {page > 1 && <Button onClick={backButtonClick}>이전 단계</Button>}
          <Button onClick={buttonClick}>다음 단계</Button>
        </ButtonWrapper>
      ) : null}
    </RepairRequestDiv>
  );
};

const FinishBtn = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  color: #257cff;
  cursor: pointer;
  background: black;
  width: 150px;
  height: 60px;
  color: white;
  font-size: 25px;
  border-radius: 10px;
  margin-top: 30px;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #21242c;
  font-weight: 600;
  border-raius: 30px;
  border: 2px solid gray;
  width: 750px;
  height: 60px;
  margin-bottom: 20px;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #21242c;
  font-weight: 600;
  border-radius: 30px;
  border: 2px solid gray;
  width: 700px;
  resize: none;
  height: 300px;
  margin-bottom: 20px;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;
  padding: 20px;
`;

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  texts-align:center;
`;

const RepairRequestDiv = styled.div`
  margin-top: 100px;
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
  margin: 0 auto;
  text-align: center;
`;

const SubTitle = styled.p`
  color: #70737c;
  margin-bottom: 20px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
  background: black;
  width: 150px;
  height: 60px;
  color: white;
  font-size: 25px;
  border-radius: 10px;
`;

export default RepairRequest;
