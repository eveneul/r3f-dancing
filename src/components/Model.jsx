import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Modeling() {
  const { scene, animations } = useGLTF("/modeling/dancer.glb");
  const modelRef = useRef(null);

  const { actions } = useAnimations(animations, modelRef);

  // 모델링 그림자 생성
  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    actions["twerk"].play();
  }, [scene, actions]);

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
    />
  );
}

/**
 * primitive:: object => geomatry 즉 모델링된 요소를 넣어 주면 쉽게 mesh를 만들어 줌
 */

/**
 * useFrame:: requestAnimationFrame Hook
 */
