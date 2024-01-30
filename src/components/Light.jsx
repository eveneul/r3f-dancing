import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function Light() {
  const lightRef = useRef(null);
  const lightProps = {
    ref: lightRef,
    castShadow: true,
    args: [0xffffff, 5],
    position: [4, 4, 4],
  };

  // helper

  useHelper(lightRef, THREE.DirectionalLightHelper, 5, 0xfff00);

  return <directionalLight {...lightProps} />;
}
