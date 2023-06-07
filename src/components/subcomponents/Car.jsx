import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Car = ({ tint }) => {
  const { scene, nodes, materials } = useLoader(
    GLTFLoader,
    "/free_porsche_911_carrera_4s.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  // const { scene, nodes, materials } = useGLTF(
  //   "/free_porsche_911_carrera_4s.glb"
  // );

  useEffect(() => {
    console.log(nodes);
    console.log(materials);
    nodes.windshield.children[0].material.opacity = 1 - tint;
    materials.paint.color.r = 1;
    materials.paint.color.g = 1;
    materials.paint.color.b = 1;
    materials.paint.metalness = 0.5;
  }, [tint]);
  return <primitive object={scene} />;
};

export default Car;
