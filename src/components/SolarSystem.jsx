import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshBasicMaterial color='#ffd700' />
      <pointLight intensity={1.5} distance={100} />
    </mesh>
  )
}

function Earth({ rotation }) {
  return (
    <group position={[8, 0, 0]} rotation={[0, rotation, 0]}>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          color='#2b82c9'
          emissive='#57d9ff'
          emissiveIntensity={0.2}
          roughness={1}
        />
      </mesh>
    </group>
  )
}

function EarthOrbit() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[7.9, 8.1, 128]} />
      <meshBasicMaterial
        color='#ffffff'
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 20], fov: 35 }}>
      <color attach='background' args={['#000']} />
      <ambientLight intensity={0.1} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <group>
        <Sun />
        <EarthOrbit />
        <Earth rotation={Math.PI * 0.75} />
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={10}
        maxDistance={50}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  )
}

export default SolarSystem
