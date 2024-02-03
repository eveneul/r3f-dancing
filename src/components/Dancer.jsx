import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import {
  Points,
  useAnimations,
  useGLTF,
  useProgress,
  useScroll,
  useTexture,
} from "@react-three/drei";
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
  const dancingAnimation = new DancingAnimation(
    dancerRef.current,
    three.camera,
    isEntered
  );

  const [tl, setTl] = useState(gsap.timeline());
  const scroll = useScroll();

  useFrame(() => {
    if (!isEntered) return;
    tl.seek(scroll.offset * tl.duration());
    // 타임라인을 스크롤 기반으로 제어할 수 있게 선언
  });

  useEffect(() => {
    if (!isEntered || !dancerRef.current || !tl) return;
    // 0.5는 타임라인 상에서 0.5
    tl.from(dancerRef.current.rotation, { duration: 4, y: -4 * Math.PI }, 0.5)
      .from(dancerRef.current.position, { duration: 4, x: 3 }, "<")
      .to(three.camera.position, { duration: 10, x: 2, z: 8 }, "<");
  }, [three.camera.position, isEntered]);

  useEffect(() => {
    /** Animation */
  }, []);

  /**
   * Point
   */

  const { positions } = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 25;
    }
    return { positions };
  }, []);

  const texture = useTexture("/texture/5.png");

  const pointMaterialProps = {
    size: 0.5,
    color: new THREE.Color("#dc4f00"),
    sizeAttenuation: true,
    depthWrite: true,
    transparent: true,
    alphaMap: texture,
    alphaTest: 0.001,
  };

  console.log(positions.slice((positions.length * 2) / 3));

  return (
    <>
      {isEntered ? (
        <>
          <primitive ref={dancerRef} object={scene} scale={0.07} />
          <Light />
          <Place />
          <Floor />
          <rectAreaLight position={[0, 10, 0]} intensity={30} />
          <pointLight
            position={[0, 5, 0]}
            intensity={45}
            castShadow
            receiveShadow
          />
          <hemisphereLight
            position={[0, 5, 0]}
            intensity={0}
            groundColor={"lime"}
            color={"blue"}
          />
          <Points positions={positions.slice(0, positions.length / 3)}>
            <pointsMaterial {...pointMaterialProps} />
          </Points>
          <Points
            positions={positions.slice(
              positions.length / 3,
              (positions.length * 2) / 3
            )}
          >
            <pointsMaterial {...pointMaterialProps} />
          </Points>
          <Points positions={positions.slice((positions.length * 2) / 3)}>
            <pointsMaterial {...pointMaterialProps} />
          </Points>
        </>
      ) : (
        <Loader isCompleted />
      )}
    </>
  );
}

export default Dancer;
