import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRecoilValue } from "recoil";
import { isEnteredState } from "../state";
import Loader from "./Loader";

function Dancer() {
  const isEntered = useRecoilValue(isEnteredState);

  const { scene, animations } = useGLTF("/modeling/dancer.glb");
  const dancerRef = useRef(null);

  // animation 처리
  const { actions } = useAnimations(animations, dancerRef);

  useEffect(() => {
    if (!isEntered) return;
    actions["wave"].play();
  }, [actions, dancerRef, animations, isEntered]);

  const scroll = useScroll();

  useFrame(() => {
    // console.log(scroll.offset); // lenis의 scroll progress와 비슷한 개념
  });

  return (
    <>
      {isEntered ? (
        <>
          <primitive
            ref={dancerRef}
            object={scene}
            scale={0.07}
          />
          <ambientLight intensity={10} />
        </>
      ) : (
        <Loader isCompleted />
      )}
    </>
  );
}

export default Dancer;
