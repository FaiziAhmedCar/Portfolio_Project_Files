import React, { useEffect } from "react";
import {  useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const Character = ({ animationName = "idle", ...props }) => {
  const group = React.useRef();
  const { scene } = useGLTF("/models/animations/character.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimations } = useFBX("/models/animations/idle.fbx");
  // const { animations: startWalkAnimations } = useFBX(
  //   "/models/animations/Start_Walking.fbx"
  // );
  // const { animations: robotDanceAnimations } = useFBX(
  //   "/models/animations/Robot_Dance.fbx"
  // );
  // const { animations: turnToRunAnimations } = useFBX(
  //   "/models/animations/Turn_To_Running.fbx"
  // );
  // const { animations: breakDanceAnimations } = useFBX(
  //   "/models/animations/Breakdance_Spin.fbx"
  // );

  idleAnimations[0].name = "idle";
  // startWalkAnimations[0].name = "Walk";
  // robotDanceAnimations[0].name = "robot";
  // turnToRunAnimations[0].name = "Run";
  // breakDanceAnimations[0].name = "spin";
  const { actions } = useAnimations(
    [
      idleAnimations[0],
      // startWalkAnimations[0],
      // robotDanceAnimations[0],
      // turnToRunAnimations[0],
      // breakDanceAnimations[0],
    ],
    group
  );
  useEffect(() => {
    // if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    // }
    return () => {
      // if (actions[animationName]) {
        // actions[animationName].reset().fadeOut(0.5);
      // }
    };
  }, [animationName]);

  
  return (
    <group {...props} dispose={null} ref={group}
    
    >
      <primitive
        object={nodes.GLTF_created_0_rootJoint}
        
      />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.N00_000_00_Body_00_SKIN_Instance}
        skeleton={nodes.Object_7.skeleton}
        
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.N00_001_02_Bottoms_01_CLOTH_Instance}
        skeleton={nodes.Object_8.skeleton}
        
      />
      <skinnedMesh
        geometry={nodes.Object_9.geometry}
        material={materials.N00_004_01_Shoes_01_CLOTH_Instance}
        skeleton={nodes.Object_9.skeleton}
        
      />
      <skinnedMesh
        geometry={nodes.Object_10.geometry}
        material={materials.N00_005_01_Tops_01_CLOTH_Instance}
        skeleton={nodes.Object_10.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_11.geometry}
        material={materials.N00_000_00_HairBack_00_HAIR_Instance}
        skeleton={nodes.Object_11.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_13.geometry}
        material={materials.N00_000_00_FaceMouth_00_FACE_Instance}
        skeleton={nodes.Object_13.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_14.geometry}
        material={materials.N00_000_00_EyeIris_00_EYE_Instance}
        skeleton={nodes.Object_14.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_15.geometry}
        material={materials.N00_000_00_EyeHighlight_00_EYE_Instance}
        skeleton={nodes.Object_15.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_16.geometry}
        material={materials.N00_000_00_Face_00_SKIN_Instance}
        skeleton={nodes.Object_16.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_17.geometry}
        material={materials.N00_000_00_EyeWhite_00_EYE_Instance}
        skeleton={nodes.Object_17.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_18.geometry}
        material={materials.N00_000_00_FaceBrow_00_FACE_Instance}
        skeleton={nodes.Object_18.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_19.geometry}
        material={materials.N00_000_00_FaceEyeline_00_FACE_Instance}
        skeleton={nodes.Object_19.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_21.geometry}
        material={materials.N00_000_Hair_00_HAIR_Instance}
        skeleton={nodes.Object_21.skeleton}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/character.glb");
export default Character;
