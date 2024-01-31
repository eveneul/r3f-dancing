import { useBox } from "@react-three/cannon";
import { Box, Circle, Plane, Sphere } from "@react-three/drei";
export default function Mesh() {
  // 바닥 물리엔진
  const [planeRef] = useBox(() => ({
    args: [50, 1, 50],
    type: "Static", // 충격을 받아도 움직이지 않게 설정
    mass: 1,
    position: [0, 0, 0],
    material: {
      // cannon상에서의 material
      // 탄성, 마찰
      restitution: 1,
      friction: 0.5,
    },
    onCollide: () => {
      // 충돌하고 났을 때 콜백함수
      console.log("충돌");
    },
  }));

  const [boxRef, api] = useBox(() => ({
    args: [1, 1, 1],
    mass: 1,
    position: [-1, 2, 0],
    material: {
      restitution: 0.4,
      friction: 0.2,
    },
  }));

  return (
    <>
      {/* 왜 Plane을 쓰지 않았냐면 :: 두께가 없는 오브젝트에 물리엔진 넣으면 부자연스러움 */}
      <Box
        args={[50, 1, 50]}
        ref={planeRef}>
        <meshStandardMaterial
          color={0xfefefe}
          roughness={0.3}
          metalness={0.8}
        />
      </Box>
      <Box
        ref={boxRef}
        args={[1, 1, 1]}
        position={[0, 1, 0]}>
        <meshStandardMaterial
          color={0xff0000}
          roughness={0.3}
          metalness={0.8}
        />
      </Box>
    </>
  );
}

/**
 * drei:: 숏컷 기능을 통해 매쉬 구현 -> 내부적으로 BufferGeomatry로 구현하기 때문에 GPU 공간을 더 효율적으로 사용
 */
