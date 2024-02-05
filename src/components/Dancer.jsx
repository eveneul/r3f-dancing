import React, { memo, useEffect, useMemo, useRef, useState } from "react";
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

const colors = {
  placeMaterialColor: "#dc4f00",
};

function Dancer() {
  const isEntered = useRecoilValue(isEnteredState);

  const { scene, animations } = useGLTF("/modeling/dancer.glb");
  const [currentAnimation, setCurrentAnimation] = useState("wave");
  const [rotateFinished, setRotateFinished] = useState(false);
  // 카메라가 회전을 마무리했는지
  const dancerRef = useRef(null);
  const placeRef = useRef(null);
  const star01Ref = useRef(null);
  const star02Ref = useRef(null);
  const star03Ref = useRef(null);
  const rectAreaLightRef = useRef(null);
  const hemisphereLightRef = useRef(null);

  // animation 처리
  const { actions } = useAnimations(animations, dancerRef);

  const three = useThree();

  /**
   * DancingAnimation(모델 ref, camera, isEntered)
   */
  const dancingAnimation = new DancingAnimation(dancerRef.current, three.camera, isEntered);

  const [tl, setTl] = useState(gsap.timeline());
  const scroll = useScroll();

  useFrame(() => {
    if (!isEntered) return;
    tl.seek(scroll.offset * tl.duration());
    // 타임라인을 스크롤 기반으로 제어할 수 있게 선언

    placeRef.current.material.color = new THREE.Color(colors.placeMaterialColor);

    if (rotateFinished) {
      setCurrentAnimation("breakdanceingEnd");
    } else {
      setCurrentAnimation("wave");
    }
  });

  useEffect(() => {
    if (!isEntered) return;
    three.camera.lookAt(1, 2, 0);
    three.scene.background = new THREE.Color(colors.placeMaterialColor);
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
    actions["wave"].play();
  }, [actions, dancerRef, animations, isEntered, three.scene]);

  useEffect(() => {
    if (!isEntered || !dancerRef.current || !tl) return;

    const pivot = new THREE.Group();
    pivot.position.copy(dancerRef.current.position);
    pivot.add(three.camera);
    three.scene.add(pivot);

    dancingAnimation.entered();
    gsap.fromTo(colors, { placeMaterialColor: "#0c0400" }, { placeMaterialColor: "#dc4f00", duration: 2.5 });
    gsap.to(star01Ref.current, { yoyo: true, duration: 2, repeat: -1, ease: "linear", size: 0.05 });
    gsap.to(star02Ref.current, { yoyo: true, duration: 3, repeat: -1, ease: "linear", size: 0.05 });
    gsap.to(star03Ref.current, { yoyo: true, duration: 4, repeat: -1, ease: "linear", size: 0.05 });

    // 0.5는 타임라인 상에서 0.5
    tl.from(dancerRef.current.rotation, { duration: 4, y: -4 * Math.PI }, 0.5)
      .from(dancerRef.current.position, { duration: 4, x: 3 }, "<")
      .to(three.camera.position, { duration: 10, x: 2, z: 8 }, "<")
      .to(colors, { duration: 10, placeMaterialColor: "#0c0400" }, "<")
      .to(pivot.rotation, { duration: 10, y: Math.PI })
      .to(three.camera.position, { duration: 10, x: -4, z: 12 }, "<")
      .to(three.camera.position, { duration: 10, x: 0, z: 6 })
      .to(three.camera.position, {
        duration: 10,
        x: 0,
        z: 16,
        onUpdate: () => {
          setRotateFinished(false);
        },
      })
      .to(hemisphereLightRef.current, { duration: 5, intensity: 30 })
      .to(pivot.rotation, { duration: 15, y: Math.PI * 4, onUpdate: () => setRotateFinished(true) }, "<")
      .to(colors, { duration: 10, placeMaterialColor: "#dc4f00" });
  }, [three.camera.position, isEntered]);

  useEffect(() => {
    let timeout;
    if (currentAnimation === "wave") {
      actions[currentAnimation]?.reset().fadeIn(0.5).play();
    } else {
      actions[currentAnimation]?.reset().fadeIn(0.5).play().setLoop(THREE.LoopOnce, 1);
      timeout = setTimeout(() => {
        if (actions[currentAnimation]) {
          actions[currentAnimation].paused();
        }
      }, 8000);
    }

    return () => {
      clearTimeout(timeout);
      actions[currentAnimation]?.reset().fadeOut(0.5).stop();
    };
  }, [actions, currentAnimation]);

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
          <Place ref={placeRef} />
          <Floor />
          <rectAreaLight
            ref={rectAreaLightRef}
            position={[0, 10, 0]}
            intensity={30}
          />
          <pointLight
            position={[0, 5, 0]}
            intensity={45}
            castShadow
            receiveShadow
          />
          <hemisphereLight
            ref={hemisphereLightRef}
            position={[0, 5, 0]}
            intensity={0}
            groundColor={"lime"}
            color={"blue"}
          />
          <Points
            ref={star01Ref}
            positions={positions.slice(0, positions.length / 3)}>
            <pointsMaterial {...pointMaterialProps} />
          </Points>
          <Points
            ref={star02Ref}
            positions={positions.slice(positions.length / 3, (positions.length * 2) / 3)}>
            <pointsMaterial {...pointMaterialProps} />
          </Points>
          <Points
            ref={star03Ref}
            positions={positions.slice((positions.length * 2) / 3)}>
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
