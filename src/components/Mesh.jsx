import { useBox, useSphere } from "@react-three/cannon";
import { Box, Circle, Plane, Sphere } from "@react-three/drei";
import { useEffect } from "react";
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
    // onCollide: () => {
    //   // 충돌하고 났을 때 콜백함수
    //   console.log("충돌");
    // },
  }));

  //box

  // api :: mesh의 자연적인 중력의 힘이 아니라 인위적인 힘을 설정
  const [boxRef, api] = useBox(() => ({
    args: [1, 1, 1],
    mass: 2, // 무게
    position: [-1, 2, 0],
    material: {
      restitution: 0.4,
      friction: 0.2,
    },
  }));

  // sphere
  const [sphereRef, sphereApi] = useSphere(() => ({
    args: [1],
    mass: 3, // 무게
    position: [0.5, 8, 0],
    material: {
      restitution: 0.2, //
      friction: 20, // 탄성
    },
  }));

  /**
   * API ??
   * mesh에 무언가 자연적인 중력 힘이 아니라 인위적인 힘을 줄 수 있는 기능
   * applyForce :: 힘을 지속적으로 계속 주는 것
   * applyImpulse :: 한 번에 힘을 쾅 !! 하고 줌
   *
   */

  useEffect(() => {
    const timeout = setTimeout(() => {
      api.applyForce([555, 50, 0], [1, 1, 0]); // 빨간색 박스 // 지속적인 힘
      sphereApi.applyLocalForce([-2000, 0, 0], [1, 0, 0]);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [api, sphereApi]);

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
      <Sphere
        ref={sphereRef}
        args={[0.5]}>
        <meshStandardMaterial
          color={0x9000ff}
          roughness={0.6}
          metalness={0.9}
        />
      </Sphere>
      {/* <Sphere
        args={[0.5]}
        position={[1, 0, 1]}>
        <meshStandardMaterial color={0x88fff88} />
      </Sphere> */}
    </>
  );
}

/**
 * drei:: 숏컷 기능을 통해 매쉬 구현 -> 내부적으로 BufferGeomatry로 구현하기 때문에 GPU 공간을 더 효율적으로 사용
 */
