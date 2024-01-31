import {
  FirstPersonControls,
  FlyControls,
  OrbitControls,
  PointerLockControls,
  TrackballControls,
} from "@react-three/drei";

export default function Controls() {
  return (
    // <OrbitControls
    //   enableDamping
    //   dampingFactor={0.01} // damping 수치, 값이 커질수록 뚝뚝 끊기는 느낌
    //   enablePan={false} // 카메라 위치 우클릭 방지 (true가 기본값)
    //   autoRotate
    //   autoRotateSpeed={0.3} // 숫자가 낮을수록 느리게
    //   maxPolarAngle={Math.PI / 2} // 카메라 이동 제한 (아래 볼 때)
    //   minPolarAngle={Math.PI / 4} // 위로 볼 때
    //   maxAzimuthAngle={Math.PI / 2}
    //   minAzimuthAngle={Math.PI / 4}
    // />
    // <FlyControls /> //새가 날아다니는 것 같은
    //   movementSpeed={1}
    //   rollSpeed={Math.PI / 20}
    //   autoForward={false} // 자동적으로 앞으로 조금씩 이동함
    // />
    // <FirstPersonControls
    //   lookSpeed={0.1}
    //   movementSpeed={1}
    //   lookVertical={false} // false:: 위아래로는 회전 x
    // />
    // <PointerLockControls /> // fps게임
    <TrackballControls
      rotateSpeed={2} // 회전 속도
      zoomSpeed={1.5} // 줌 속도
      panSpeed={0.5} // 오른쪽 스피드
      noRotate={false} // 카메라 회전 제어
      noZoom={false} // 카메라 줌 제어
      noPan={false} // 카메라 오른쪽마우스 제어
      staticMoving={false} // 댐핑이 일어나지 않음
      dynamicDampingFactor={0.05} // 댐핑 감도
    /> // orbitcontrols와 비슷하지만 특정 타겟이 있음
  );
}
