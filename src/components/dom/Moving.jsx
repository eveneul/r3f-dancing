import React, { useRef } from "react";
import { isEnteredState } from "../../state/index";
import { useRecoilState } from "recoil";
import { Scroll, useScroll } from "@react-three/drei";
import { styled } from "styled-components";
import { useFrame } from "@react-three/fiber";

const Moving = () => {
  const [isEntered, setIsEntered] = useRecoilState(isEnteredState);

  const article01Ref = useRef(null);
  const article02Ref = useRef(null);
  const article03Ref = useRef(null);
  const article04Ref = useRef(null);
  const article05Ref = useRef(null);
  const article06Ref = useRef(null);
  const article07Ref = useRef(null);
  const article08Ref = useRef(null);

  const fixed = document.querySelector("#fixed");

  const scroll = useScroll();
  useFrame(() => {
    if (
      !isEntered ||
      !article01Ref.current ||
      !article02Ref.current ||
      !article03Ref.current ||
      !article04Ref.current ||
      !article08Ref.current ||
      !fixed
    )
      return;

    article01Ref.current.style.opacity = `${1 - scroll.range(0, 1 / 8)}`;
    article02Ref.current.style.opacity = `${1 - scroll.range(1 / 8, 1 / 8)}`;
    article03Ref.current.style.opacity = `${scroll.curve(2 / 8, 1 / 8)}`;
    article04Ref.current.style.opacity = `${scroll.curve(3 / 8, 1 / 8)}`;
    article08Ref.current.style.opacity = `${1 - scroll.range(7 / 8, 1 / 8)}`;

    if (scroll.visible(4 / 8, 3 / 8)) {
      fixed.style.display = "flex";
      fixed.style.opacity = `${scroll.curve(4 / 8, 3 / 8)}`;
    } else {
      fixed.style.opacity = `${scroll.range(7 / 8, 1 / 8)}`;
    }
  });

  /**
   * scroll.range =>
   */

  return (
    <>
      {!isEntered ? null : (
        <Scroll html>
          <ArticleWrapper ref={article01Ref}>
            <LeftBox>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, necessitatibus.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, necessitatibus.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, necessitatibus.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, necessitatibus.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, necessitatibus.</span>
            </LeftBox>
          </ArticleWrapper>
          <ArticleWrapper ref={article02Ref}>
            <RightBox>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
            </RightBox>
          </ArticleWrapper>
          <ArticleWrapper ref={article03Ref}>
            <CenterBox>Three.js R3F Drei Cannon</CenterBox>
          </ArticleWrapper>
          <ArticleWrapper
            ref={article04Ref}
            className="height-4">
            <RightBox>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi!</span>
            </RightBox>
          </ArticleWrapper>
          <ArticleWrapper ref={article08Ref}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, libero.
            <Footer>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, natus?</Footer>
          </ArticleWrapper>
        </Scroll>
      )}
    </>
  );
};

export default Moving;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  color: #fff;
  font-size: 24px;
  padding: 40px;

  &.height-4 {
    height: 400vh;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  /* min-width: fit-content; */
  height: 400px;
  border: 1px solid red;
  width: 50vh;

  & > span {
    &:nth-of-type(1) {
      font-size: 32px;
    }

    &:nth-of-type(2) {
      font-size: 48px;
    }

    &:nth-of-type(3) {
      font-size: 16px;
    }

    &:nth-of-type(4) {
      font-size: 24px;
    }

    &:nth-of-type(5) {
      font-size: 28px;
    }
  }
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 50vh;

  height: 400px;

  & > span {
    &:nth-of-type(1) {
      font-size: 32px;
      font-weight: 400;
    }

    &:nth-of-type(2) {
      font-size: 48px;
      font-weight: 500;
    }

    &:nth-of-type(3) {
      font-size: 16px;
      font-weight: 600;
    }

    &:nth-of-type(4) {
      font-size: 24px;
      font-weight: 700;
    }

    &:nth-of-type(5) {
      font-size: 28px;
      font-weight: 800;
    }
  }
`;

const CenterBox = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: blue;
`;

const Footer = styled.div`
  bottom: 10px;
  font-size: 8px;
  position: absolute;
`;
