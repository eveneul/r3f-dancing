import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Color } from "three";
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
        position: [3, 3, 20],
      }}
      scene={{ background: new Color(0x000000) }}
      shadows="soft" // 그림자 생성
    >
      <OrbitControls />
      <Light />
      {/* <directionalLight
        castShadow
        args={[0xffffff, 5]}
        position={[4, 4, 4]}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={1000}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      /> */}
      <Mesh />
    </Canvas>
  );
}
