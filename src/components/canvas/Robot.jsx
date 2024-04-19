import React, { Suspense, useEffect, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Robot = () => {
  
  const robot = useGLTF("./robot/robot.glb", new DRACOLoader());
  const mixer = useRef();
  mixer.current = new THREE.AnimationMixer(robot.scene);

  useFrame((state, delta) => {
    mixer.current.update(delta);
  });

  useEffect(() => {
    const action = mixer.current.clipAction(robot.animations[0]);
    action.play();
    return () =>
      robot.animations.forEach((clip) => mixer.current.uncacheClip(clip));
  }, []);

  return (
    <primitive
      object={robot.scene}
      scale={1.5}
      position-y={-1.7}
    />
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false }}
      camera={{
      }}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default memo(RobotCanvas);