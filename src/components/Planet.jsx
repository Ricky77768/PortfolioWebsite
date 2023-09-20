import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
  const earth = useGLTF("./3d_planet/scene.gltf");
  const { viewport } = useThree()

  return (
    <primitive 
      object={earth.scene} 
      scale={(Math.min(viewport.width, viewport.height) / 2.2)} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.2,
        far: 200,
        position: [0, 0, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
