import { Canvas } from "@react-three/fiber";
import { Color } from "three";

export default function CanvasComponents() {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        position: [0, 0, 5],
      }}
      scene={{ background: new Color(0x000000) }}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>
    </Canvas>
  );
}
