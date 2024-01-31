import { Box, OrbitControls } from "@react-three/drei";
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
      <OrbitControls />
      <Dancer />
    </Canvas>
  );
}

export default MainCanvas;
