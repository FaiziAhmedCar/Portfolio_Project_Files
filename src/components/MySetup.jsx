import React from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

const MySetup = (props) => {
  const { nodes, materials } = useGLTF("./models/gaming_setup1.glb");
  const screenTexture = useTexture("textures/desk/screen.png");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.pc_pc_0001.geometry}
          material={materials.material_2}
        />
        <mesh
          geometry={nodes.pc_pc_0_1.geometry}
          material={materials.material_2}
        />
        <mesh
          geometry={nodes.pc_pc_0_2.geometry}
          // material={materials.Material_img}
        >
          <meshBasicMaterial transparent opacity={0} />
          <Decal
            // debug
            position={[1.299, 7.24, -9]}
            rotation={[0.003, 0, -1.56]}
            scale={[2.399, 3.4, 10]}
          >
            <meshBasicMaterial
              map={screenTexture}
              polygonOffset
              polygonOffsetFactor={-1}
            />
          </Decal>
        </mesh>
        <mesh
          geometry={nodes.sit_sit_0.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Stoo1_Stoo1_0.geometry}
          material={materials.Stoo1}
        />
      </group>
    </group>
  );
};
useGLTF.preload("./models/gaming_setup1.glb");

export default MySetup;
