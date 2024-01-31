import { Box, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import Dancer from "./Dancer";

function MainCanvas() {
  const canvasProps = {
    id: "canvas",
    gl: { alpha: true, antialias: true },
    shadows: "soft",
    camera: {
      fov: 75,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 2000,
      position: [0, 6, 12],
    },
    scene: {
      background: new THREE.Color(0x000000),
    },
  };

  return (
    <Canvas {...canvasProps}>
      <ScrollControls
        pages={8} // 섹션이 8장이 있다
        damping={0.25} // 스무스하게 이동하고자 할 때
      >
        <Dancer />
      </ScrollControls>
    </Canvas>
  );
}

export default MainCanvas;
