import {
  FirstPersonControls,
  FlyControls,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
} from "@react-three/drei";

export default function Controls() {
  return <OrbitControls enableDamping />;
}
