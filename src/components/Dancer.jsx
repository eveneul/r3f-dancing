import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

function Dancer() {
  const { scene, animations } = useGLTF("/modeling/dancer.glb");
  const dancerRef = useRef(null);

  // animation 처리
  const { actions } = useAnimations(animations, dancerRef);

  useEffect(() => {
    actions["wave"].play();
  }, [actions, dancerRef, animations]);

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
