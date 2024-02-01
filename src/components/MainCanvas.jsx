import { Box, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import * as THREE from "three";
import Dancer from "./Dancer";
import Moving from "./dom/Moving";
import Loader from "./Loader";
import { useRecoilValue } from "recoil";
import { isEnteredState } from "../state";

function MainCanvas() {
  const isEntered = useRecoilValue(isEnteredState);

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
        pages={isEntered ? 8 : 0} // 섹션이 8장이 있다
        damping={0.25} // 스무스하게 이동하고자 할 때
      >
        {/* 비동기 로직에서 무언가 로직이 리졸브되지 않았을 때 fallback 컴포넌트를 보여 주는데, 그걸 로더 컴포넌트로 보여 주겠다 */}
        <Suspense fallback={<Loader />}>
          <Moving />
          <Dancer />
        </Suspense>
      </ScrollControls>
    </Canvas>
  );
}

export default MainCanvas;
