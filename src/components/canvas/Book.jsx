import React, { Suspense, useEffect, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


const Book = () => {
  const book = useGLTF("./book/book.glb", new DRACOLoader());
  // const book = useGLTF("./book/book.glb");
  const mixer = useRef();
  mixer.current = new THREE.AnimationMixer(book.scene);

  useFrame((state, delta) => {
    mixer.current.update(delta);
  });

  useEffect(() => {
    const action = mixer.current.clipAction(book.animations[0]);
    action.play();
    return () =>
      book.animations.forEach((clip) => mixer.current.uncacheClip(clip));
  }, []);

  return (
    <primitive
      object={book.scene}
      scale={0.5}
      position-y={-1}
      // rotation-y={0}
    />
  );
};

const HoloBook = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false }}
      camera={{
        fov: 45,
        // near: 0.1,
        // far: 200,
        // position: [0, 3, 6],
      }}
    >
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Book />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};




export default memo(HoloBook);