import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import Controls from "./Controls";
import Light from "./Light";
import Mesh from "./Mesh";
import Modeling from "./Model";

export default function CanvasComponents() {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        position: [3, 3, 3],
      }}
      scene={{ background: new Color(0x000000) }}
      shadows="soft" // 그림자 생성
    >
      <Controls />
      <Light />

      <Mesh />
      <Modeling />
    </Canvas>
  );
}
