import { Box } from "@react-three/drei";
import React, { useRef } from "react";
import { forwardRef } from "react";
import * as THREE from "three";
const Place = forwardRef((props, ref) => {
  const boxProps = {
    args: [100, 100, 100],
    position: [0, -20, 0],
  };

  const boxMaterialProps = {
    color: new THREE.Color("#DC4F00"),
    side: THREE.DoubleSide,
  };

  return (
    <Box
      {...boxProps}
      ref={ref}>
      <meshStandardMaterial {...boxMaterialProps} />
    </Box>
  );
});

export default Place;
