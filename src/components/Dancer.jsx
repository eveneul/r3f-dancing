import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Dancer() {
  const { scene, animations } = useGLTF("/modeling/dancer.glb");
  const dancerRef = useRef(null);

  // animation 처리
  const { actions } = useAnimations(animations, dancerRef);

  useEffect(() => {
    actions["wave"].play();
  }, [actions, dancerRef, animations]);

  const scroll = useScroll();

  useFrame(() => {
    console.log(scroll.offset); // lenis의 scroll progress와 비슷한 개념
  });

  return (
    <>
      <primitive
        ref={dancerRef}
        object={scene}
        scale={0.07}
      />
      <ambientLight intensity={10} />
    </>
  );
}

export default Dancer;
