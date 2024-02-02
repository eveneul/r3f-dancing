import gsap from "gsap";

export default class DancingAnimation {
  constructor(model, camera, isEntered) {
    this.model = model;
    this.camera = camera;
    this.isEntered = isEntered;
  }

  entered() {
    if (!this.isEntered) return;

    gsap.fromTo(this.camera.position, { x: -5, y: 5, z: 5 }, { x: 0, y: 6, z: 12, duration: 2.5 });

    gsap.fromTo(
      this.camera.rotation,
      {
        z: Math.PI / 2,
      },
      { z: 0, duration: 2.5 }
    );
  }

  timeline(tl) {
    tl.from(this.model.rotation, { y: -4 * Math.PI, duration: 2.5 }, 0.5);
  }
}
