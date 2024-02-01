import { keyframes, styled } from "styled-components";

const buttonBlink = keyframes`
0%{opacity: 0;}
50%{opacity: 1;}
100%{opacity: 0;}
`;
export const Background = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
  border-radius: 50%;
  filter: blur(300px);
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const ProgressBar = styled.div`
  font-size: 24px;
  color: #ccc;
`;

export const EnterButton = styled.button`
  animation: ${buttonBlink} 1.5s infinite;
  transition-duration: 0.4s;
  font-size: 16px;
  outline: none;
  border: 0.5px solid #999;
  padding: 8px 18px;
  background-color: transparent;
  color: #ccc;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    color: #dc4f00;
  }
`;
