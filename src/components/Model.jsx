import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Modeling() {
  const { scene } = useGLTF("/modeling/dancer.glb");
  // 모델링 그림자 생성
  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={0.01}
      position-y={0.4}
    />
  );
}

/**
 * primitive:: object => geomatry 즉 모델링된 요소를 넣어 주면 쉽게 mesh를 만들어 줌
 */
