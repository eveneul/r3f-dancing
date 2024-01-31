import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import Controls from "./Controls";
import Light from "./Light";
import Mesh from "./Mesh";

export default function CanvasComponents() {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        position: [3, 30, 50],
      }}
      scene={{ background: new Color(0x000000) }}
      shadows="soft" // 그림자 생성
    >
      <Controls />
      <Light />
      <Physics
        gravity={[0, -9, 0]}
        defaultContactMaterial={{
          //기본적으로 모든 오브젝트에 적용될 마찰, 탄성
          restitution: 1,
          friction: 0.5,
        }}>
        <Mesh />
      </Physics>
    </Canvas>
  );
}
