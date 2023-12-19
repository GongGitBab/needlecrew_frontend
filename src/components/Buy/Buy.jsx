import React from "react";
import Header from "../Header/Header";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigate를 import
import styled from "styled-components";

const Buy = () => {
  const location = useLocation();
  const { selectedImages, selectedCategory, itemValue, requestText } =
    location.state || {};
  const navigate = useNavigate();

    const moveMain = () => {
        navigate("/");
      };

    return (
        <RepairRequestDiv>
            <Header />
            
            {selectedCategory && (
            <div>
                <h2>{selectedCategory}</h2>
            </div>
            )}

            {selectedImages && (
            <div>
                {selectedImages.map((image, index) => (
                <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`selected-image-${index}`}
                    style={{ width: "200px", height: "200px", marginTop: "20px" }}
                />
                ))}
            </div>
            )}

            {requestText && (
            <div>
                <h2>직접 입력</h2>
                <p>{requestText}</p>
            </div>
            )}

            {itemValue && (
            <div>
                <h2>물품가액</h2>
                <p>{itemValue}</p>
            </div>
            )}

            
            <div style={{marginTop: 30 + 'px'}}>
                <p>예상 가격: -원</p>
                <p>예상 배송비: -원</p>
            </div>

            <FinishBtn onClick={moveMain}>
                결제 하기
            </FinishBtn>
        
        </RepairRequestDiv>
    );
};

const RepairRequestDiv = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

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
  margin: 10 auto;
  text-align: center;
`;

export default Buy;
