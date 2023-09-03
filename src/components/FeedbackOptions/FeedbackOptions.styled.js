import styled from 'styled-components';

export const WrapperButton = styled.div`
  margin-left: 40px;
`;

export const Button = styled.button`
  font-size: 20px;
  margin: 10px;
  padding: 4px;
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: lightgray;
  }
  &:active {
    background-color: #2196f3;
  }
`;
