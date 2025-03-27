
import React from 'react'
import { useGLTF } from '@react-three/drei'

const Character=(props) => {
  const { nodes, materials } = useGLTF('/models/animations/character.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.64, 454.553, 49.77]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sphere001_Material012_0.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Sphere001_Material013_0.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Sphere001_Material014_0.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Sphere001_Material015_0.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Sphere001_Material017_0.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Sphere001_Material016_0.geometry} material={materials['Material.016']} />
      </group>
      <group position={[2.577, 404.361, 19.816]} rotation={[-Math.PI / 2, 0, 0]} scale={[64.044, 45.138, 100]}>
        <mesh geometry={nodes.Cylinder001_Material003_0.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cylinder001_Material002_0.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cylinder001_Material009_0.geometry} material={materials['Material.009']} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cylinder_Material005_0.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Cylinder_Material004_0.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cylinder_Material001_0.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cylinder_Material_0.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cylinder_Material006_0.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Cylinder_Material018_0.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Cylinder_Material010_0.geometry} material={materials['Material.010']} />
        <mesh geometry={nodes.Cylinder_Material007_0.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cylinder_Material008_0.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cylinder_Material011_0.geometry} material={materials['Material.011']} />
      </group>
      <mesh geometry={nodes.Sphere_Material020_0.geometry} material={materials['Material.020']} position={[1.692, 665.54, 46.998]} rotation={[-Math.PI / 2, 0, 0]} scale={41.965} />
    </group>
  )
}

useGLTF.preload('/models/animations/character.glb')
export default Character