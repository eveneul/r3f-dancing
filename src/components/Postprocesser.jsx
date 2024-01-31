import { Bloom, BrightnessContrast, DotScreen, EffectComposer } from "@react-three/postprocessing";

export default function PostProcesser() {
  return (
    <EffectComposer disableNormalPass>
      {/* 밝은 영역 주변에 후광효과 */}
      {/* <Bloom
        intensity={0.5}
        mipmapBlur={true}
        luminanceThreshold={1} // 1보다 높은 픽셀만 블룸 효과 적용
        luminanceSmoothing={0.2} // bloom 효과를 부드럽게
      /> */}
      {/* 색상의 대조를 극대화 */}
      {/* <BrightnessContrast
        brightness={0.2}
        contrast={0.8}
      /> */}
      <DotScreen
        angle={Math.PI / 6}
        scale={10}
      />
    </EffectComposer>
  );
}
