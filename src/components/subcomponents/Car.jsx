import { useGLTF } from "@react-three/drei";
import React, { useEffect, useState } from "react";

const Car = ({ tint }) => {

  const { scene, nodes, materials } = useGLTF(
    "/free_porsche_911_carrera_4s.glb"
  );

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
