import { Box } from "@react-three/drei";

export default function Mesh() {
  return (
    // <mesh>
    //   <boxGeometry args={[1, 1, 1]} />
    //   <meshStandardMaterial color={0xff0000} />
    // </mesh>

    <Box
      args={[1, 1, 1]}
      material-color={0xff0000}></Box>
  );
}
