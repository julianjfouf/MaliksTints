import {
  Box,
  ContactShadows,
  Environment,
  Float,
  Html,
  Lightformer,
  OrbitControls,
  Plane,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import Car from "./subcomponents/Car";
import Interface from "./subcomponents/Interface";
import { LoadingManager } from "three";

const Experience = ({
  env = "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr",
}) => {
  const [tint, setTint] = useState(0.35);
  const [selected, setSelected] = useState();
  const [show, setShow] = useState(false);
  const [shrink, setShrink] = useState(false);

  const { progress } = useProgress();
  console.log(progress);

  if (progress == 100) {
    setTimeout(() => {
      setShrink(true);
    }, 1500);
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }

  return (
    <div
      id="simulator"
      className="h-full w-full relative cursor-grab active:cursor-grabbing flex justify-center items-center"
    >
      <div
        className={`absolute flex-col top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-neutral-950 z-[100] transition-all duration-1000 ease-in-out ${
          shrink ? `scale-y-0` : null
        }`}
      >
        <p className="text-neutral-50 text-2xl font-bold mb-4">Loading...</p>
        <div
          style={{ transform: `scaleX(${progress}%)` }}
          className="w-screen h-4 bg-white loading-bar transition-all duration-1000 ease-in-out"
        ></div>
      </div>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [4, 2, 6],
          zoom:
            typeof window !== "undefined"
              ? window.innerWidth / window.innerHeight
              : 1,
        }}
        gl={{ antialias: true }}
      >
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.2} />
        <Environment frames={Infinity} resolution={256}>
          <Lightformer
            intensity={0.75}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={4}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[20, 0.1, 1]}
          />
          <Lightformer
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[20, 0.5, 1]}
          />
          <Lightformer
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 1, 1]}
          />
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
          </mesh>
        </Environment>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.25}
          enablePan={false}
        />
        <directionalLight position={[4, 2, 6]} />
        <ambientLight />
        <group>
          <Car tint={tint} />
          {/* <Html transform scale={0.15} as="p" position={[1.5, 0.25, 1]}>
            <div className="relative flex items-center z-[-1]">
              <span
                onClick={() => {
                  if (selected == 1) {
                    setSelected(0);
                  } else {
                    setSelected(1);
                  }
                }}
                className={`${
                  show ? `scale-100` : `scale-0`
                } duration-500 z-[-1] ease-in-out transition-all peer h-10 w-10 flex justify-center items-center text-neutral-50 outline outline-neutral-500 bg-neutral-900/80 rounded-full cursor-help select-none`}
              >
                01
              </span>
              <p
                className={`bg-neutral-900/80 scale-0 peer-hover:scale-100 ${
                  selected == 1 ? `scale-100` : null
                } max-w-sm rounded-xl p-4 ml-10 text-neutral-50 outline duration-300 transition-all ease-in-out outline-neutral-500 pointer-events-none select-none`}
              >
                Heat reduction: Tinted windows help to reduce the amount of heat
                that enters the car, making the interior cooler and more
                comfortable. This can be particularly beneficial during hot
                weather or in regions with intense sunlight.
              </p>
            </div>
          </Html>
          <Html transform scale={0.15} as="p" position={[-1.5, 0.75, 0]}>
            <div className="relative flex items-center flex-row-reverse">
              <span
                onClick={() => {
                  if (selected == 2) {
                    setSelected(0);
                  } else {
                    setSelected(2);
                  }
                }}
                className={`${
                  show ? `scale-100` : `scale-0`
                } duration-500 ease-in-out transition-all peer h-10 w-10 flex justify-center items-center text-neutral-50 outline outline-neutral-500 bg-neutral-900/80 rounded-full cursor-help select-none`}
              >
                02
              </span>
              <p
                className={`bg-neutral-900/80 scale-0 duration-300 transition-all ease-in-out peer-hover:scale-100 ${
                  selected == 2 ? `scale-100 flex` : null
                } max-w-sm rounded-xl p-4 mr-10 text-neutral-50 outline outline-neutral-500 pointer-events-none select-none`}
              >
                Heat reduction: Tinted windows help to reduce the amount of heat
                that enters the car, making the interior cooler and more
                comfortable. This can be particularly beneficial during hot
                weather or in regions with intense sunlight.
              </p>
            </div>
          </Html>
          <Html transform scale={0.15} as="p" position={[1.5, 0.5, -1.5]}>
            <div className="relative flex items-center">
              <span
                onClick={() => {
                  if (selected == 3) {
                    setSelected(0);
                  } else {
                    setSelected(3);
                  }
                }}
                className={`${
                  show ? `scale-100` : `scale-0`
                } duration-500 ease-in-out transition-all peer h-10 w-10 flex justify-center items-center text-neutral-50 outline outline-neutral-500 bg-neutral-900/80 rounded-full cursor-help select-none`}
              >
                03
              </span>
              <p
                className={`bg-neutral-900/80 scale-0 peer-hover:scale-100 ${
                  selected == 3 ? `scale-100` : null
                } max-w-sm rounded-xl p-4 ml-10 text-neutral-50 duration-300 transition-all ease-in-out outline outline-neutral-500 pointer-events-none select-none`}
              >
                Heat reduction: Tinted windows help to reduce the amount of heat
                that enters the car, making the interior cooler and more
                comfortable. This can be particularly beneficial during hot
                weather or in regions with intense sunlight.
              </p>
            </div>
          </Html> */}
        </group>
      </Canvas>
      <Interface setTint={setTint} />
    </div>
  );
};

export default Experience;
