import { Box, Circle, Plane, Sphere } from "@react-three/drei";
import * as THREE from "three";
export default function Mesh() {
  return (
    <>
      <Plane
        args={[10, 10]}
        rotation-x={-Math.PI / 2}
        position-y={-0.5}
        receiveShadow>
        <meshStandardMaterial />
      </Plane>
      <Box
        args={[1, 1, 1]}
        castShadow>
        <meshStandardMaterial color={0xff0000} />
      </Box>
      <Sphere
        args={[0.5]}
        position={[2, 0, -0.5]}
        castShadow>
        <meshStandardMaterial color={0xfff00} />
      </Sphere>
      <Circle
        args={[1]}
        position={[-2, 0, 0]}
        castShadow>
        <meshStandardMaterial
          color={0x00ff00}
          side={THREE.DoubleSide}
        />
      </Circle>
    </>
  );
}

/**
 * drei:: 숏컷 기능을 통해 매쉬 구현 -> 내부적으로 BufferGeomatry로 구현하기 때문에 GPU 공간을 더 효율적으로 사용
 */
