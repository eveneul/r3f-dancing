import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRecoilValue } from "recoil";
import { isEnteredState } from "../state";
import Loader from "./Loader";
import gsap from "gsap";

function Dancer() {
  const [tl, setTl] = useState(gsap.timeline());

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
    if (!isEntered) return;
    tl.seek(scroll.offset * tl.duration());
    // 타임라인을 스크롤 기반으로 제어할 수 있음
  });

  const three = useThree();

  useEffect(() => {
    if (!isEntered || !dancerRef.current) return;

    tl.from(dancerRef.current.rotation, { y: -4 * Math.PI, duration: 4 }, 0.5);
  }, [isEntered, dancerRef.current]);

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
