import { Point, Points, useTexture } from "@react-three/drei";
import React, { useMemo } from "react";
import * as THREE from "three";

const StarParticles = () => {
  const starTexutre = useTexture("/texture/5.png");

  const { positions } = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < positions; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
    }

    return { positions };
  });

  const pointProps = {
    size: 0.5,
    color: new THREE.Color("#dc4f00"),
    sizeAttenuation: true,
    depthWrite: true,
    alphaMap: starTexutre,
    transparent: true,
    alphaTest: 0.001,
  };
  return (
    <>
      <Points position={positions.slice(0, positions.length / 3)}>
        <pointsMaterial {...pointProps} />
      </Points>
    </>
  );
};

export default StarParticles;
