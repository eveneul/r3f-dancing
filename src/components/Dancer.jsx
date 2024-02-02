import React, { useEffect, useMemo, useRef, useState } from "react";
import { Points, useAnimations, useGLTF, useProgress, useScroll, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRecoilValue } from "recoil";
import { isEnteredState } from "../state";
import Loader from "./Loader";
import gsap from "gsap";
import Floor from "./meshes/Floor";
import Place from "./meshes/Place";
import Stars from "./meshes/Stars";
import * as THREE from "three";
import Light from "./Light";
import DancingAnimation from "./animation/Dancing";

let tl;

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

  const three = useThree();

  /**
   * DancingAnimation(모델 ref, camera, isEntered)
   */
  const dancingAnimation = new DancingAnimation(dancerRef.current, three.camera, isEntered);

  const scroll = useScroll();

  useFrame(() => {
    if (!isEntered) return;
    tl.seek(scroll.offset * tl.duration());
  });

  console.log(tl);

  useEffect(() => {
    if (!isEntered || !dancerRef.current) return;

    tl = gsap.timeline();

    dancingAnimation.entered();
    tl.from(dancerRef.current.rotation, { y: -4 * Math.PI, duration: 2.5 }, 0.8)
      .from(dancerRef.current.position, { duration: 3, x: 3 }, "<")
      .to(three.camera.position, { x: 2, z: 8, duration: 10 }, "<")
      .to(three.camera.position, { duration: 20, x: 0, z: 6 });
  }, [dancerRef.current, three.camera, isEntered]);

  useEffect(() => {
    /** Animation */
  }, []);

  return (
    <>
      {isEntered ? (
        <>
          <primitive
            ref={dancerRef}
            object={scene}
            scale={0.07}
          />
          <Light />
          <Place />
          <Floor />
        </>
      ) : (
        <Loader isCompleted />
      )}
    </>
  );
}

export default Dancer;
