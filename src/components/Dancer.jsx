import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRecoilValue } from "recoil";
import { isEnteredState } from "../state";
import Loader from "./Loader";
import gsap from "gsap";

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

  const three = useThree();

  useEffect(() => {
    if (!isEntered || !dancerRef.current) return;

    gsap.fromTo(three.camera.position, { x: -5, y: 5, z: 5 }, { x: 0, y: 6, z: 12, duration: 2.5 });
    gsap.fromTo(three.camera.rotation, { z: Math.PI }, { z: 0, duration: 2.5 });
  }, [gsap, isEntered, dancerRef.current]);

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
