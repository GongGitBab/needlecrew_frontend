import styled from "styled-components";

export const SubTitle = styled.p`
    font-size: 20px;
    color: black;
`

export const UploadInput = styled.input`
  display: none; // Hide the default file input
`;

export const UploadLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #21242c;
  font-weight: 600;
  border-radius: 30px;
  border: 4px dotted gray;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;
  margin: 0 auto;

  &:hover {
    background-color: #257CFF;
    color: white;
  }
`;
