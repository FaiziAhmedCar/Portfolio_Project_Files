
import React from 'react'
import { useGLTF } from '@react-three/drei'

 const MySetup = (props) => {
  const { nodes, materials } = useGLTF('./models/gaming_setup.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Stoo1_Stoo1_0.geometry} material={materials.Stoo1} />
        <mesh geometry={nodes.sit_sit_0.geometry} material={materials.material} />
        <mesh geometry={nodes.pc_pc_0.geometry} material={materials.material_2} />
        <mesh geometry={nodes.pc_pc_0_1.geometry} material={materials.material_2} />
      </group>
    </group>
  )
}
useGLTF.preload('./models/gaming_setup.glb')

export default MySetup

