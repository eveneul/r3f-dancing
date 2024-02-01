import { Html, useProgress } from "@react-three/drei";
import React from "react";
import { useRecoilState } from "recoil";
import { isEnteredState } from "../state";
import { Background, Container, EnterButton, ProgressBar } from "./ui/loading";

function Loader({ isCompleted }) {
  const [isEntered, setIsEntered] = useRecoilState(isEnteredState);
  const progress = useProgress();
  console.log(progress.progress, isEntered, "progress");

  // canvas 안에는 three.js만 넣어야 하는데 html을 넣으면 일반 태그로 넣을 수 있음
  return (
    <>
      {!isEntered ? (
        <Html center>
          <Background></Background>
          <Container>
            <ProgressBar>{isCompleted ? 100 : progress.progress} %</ProgressBar>
            <EnterButton
              onClick={() => {
                setIsEntered(true);
              }}>
              Enter
            </EnterButton>
          </Container>
        </Html>
      ) : null}
    </>
  );
}

export default Loader;
