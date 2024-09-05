"use client";
import React, { useEffect } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  useEffect(() => {
    if (!!document.getElementById("particles")) {
      return;
    }

    document.querySelector("body")?.classList.add("overflow-hidden");

    let SEPARATION = 100;
    let AMOUNTX = 50;
    let AMOUNTY = 50;
    let container: HTMLDivElement | null;
    let camera: THREE.PerspectiveCamera,
      scene: THREE.Scene,
      renderer: THREE.WebGLRenderer;
    let particles: THREE.Sprite[] = [];
    let count = 0;
    let mouseX = 0,
      mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    init();
    // render();
    animate();

    function init() {
      // div-particles dom 생성
      container = document.createElement("div");
      container.id = "particles";
      container.className = "particles absolute top-0 left-0 w-full h-full";

      // div-particles dom을 homepage-hero에 추가
      document.getElementById("homepage-hero")?.appendChild(container);

      // 카메라 생성 fov: 시야각, aspect: 비율, near: 가까운 면, far: 먼 면
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        100,
        10000,
      );

      // 카메라 위치 설정
      camera.position.z = 1000;

      // 씬 생성
      scene = new THREE.Scene();

      // Create a canvas texture
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const context = canvas.getContext("2d");

      if (context) {
        const PI2 = Math.PI * 2;
        context.beginPath();
        context.arc(32, 32, 16, 0, PI2, true);
        context.fillStyle = "#4EBE96";
        context.fill();
      }

      const texture = new THREE.CanvasTexture(canvas); // canvas 기반의 texture 생성
      const material = new THREE.SpriteMaterial({ map: texture }); // material 생성

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const particle = (particles[i++] = new THREE.Sprite(material));
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          scene.add(particle);
        }
      }

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      document.addEventListener("mousemove", onDocumentMouseMove, false);
      document.addEventListener("touchstart", onDocumentTouchStart, false);
      document.addEventListener("touchmove", onDocumentTouchMove, false);
      window.addEventListener("resize", onWindowResize, false);
    }

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY * 1.4;
    }

    function onDocumentTouchStart(event: TouchEvent) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    function onDocumentTouchMove(event: TouchEvent) {
      if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;
      }
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // animate
    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const particle = particles[i++];
          particle.position.y =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 1) * 4 +
            (Math.sin((iy + count) * 0.5) + 1) * 4;
        }
      }

      renderer.render(scene, camera);
      count += 0.1;
    }

    return () => {
      document.querySelector("body")?.classList.remove("overflow-hidden");
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("touchstart", onDocumentTouchStart);
      document.removeEventListener("touchmove", onDocumentTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div
      id={"homepage-hero"}
      className="absolute left-0 top-[-125px] h-[calc(100vh-200px)] w-full"
    />
  );
}
