import { Circle } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

const Floor = () => {
  const circleProps = {
    castShadow: true,
    receiveShadow: true,
    args: [8, 32],
    // rotationX: Math.PI / 2,
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -7, 0],
  };

  const circleRef = useRef(null);

  const circleMaterialProps = {
    color: new THREE.Color("#FCC14F"),
    side: THREE.DoubleSide,
  };

  return (
    <>
      <Circle
        {...circleProps}
        ref={circleRef}>
        <meshStandardMaterial {...circleMaterialProps} />
      </Circle>
    </>
  );
};

export default Floor;
