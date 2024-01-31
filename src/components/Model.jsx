import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function Modeling() {
  const { scene, animations } = useGLTF("/modeling/dancer.glb");
  const modelRef = useRef(null);

  const { actions } = useAnimations(animations, modelRef);

  const [currentAnimation, setCurrentAnimation] = useState("wave");

  // 모델링 그림자 생성
  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    actions[currentAnimation].fadeIn(1.5).play();

    return () => {
      actions[currentAnimation].fadeOut(1.5).stop();
    };
  }, [currentAnimation, actions]);

  useFrame((state, delta) => {
    // state: scene, renderer의 정보...
    // modelRef.current.rotation.y += 0.02;
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.01}
      position-y={0.4}
      // onPointerUp={() => console.log("업")}
      // onPointerDown={() => console.log("다운")}
      onClick={() => {
        setCurrentAnimation((prev) => {
          if (prev === "wave") return "windmill";
          return "wave";
        });
      }}
    />
  );
}

/**
 * primitive:: object => geomatry 즉 모델링된 요소를 넣어 주면 쉽게 mesh를 만들어 줌
 */

/**
 * useFrame:: requestAnimationFrame Hook
 */
