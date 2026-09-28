import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Icosahedron, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const g = useRef<THREE.Group>(null!)
  useFrame((s, dt) => {
    g.current.rotation.y += dt * 0.15
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, s.pointer.y * 0.4, 0.05)
    g.current.position.x = THREE.MathUtils.lerp(g.current.position.x, s.pointer.x * 0.4, 0.05)
  })
  return (
    <group ref={g}>
      <Float speed={1.5} floatIntensity={1}>
        <Icosahedron args={[1.6, 1]}><MeshDistortMaterial color="#3b82f6" wireframe distort={0.3} speed={1.5} /></Icosahedron>
        <Icosahedron args={[0.9, 2]}><meshStandardMaterial color="#8b5cf6" emissive="#22d3ee" emissiveIntensity={0.6} /></Icosahedron>
      </Float>
    </group>
  )
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!)
  const pos = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < a.length; i++) a[i] = (Math.random() - 0.5) * 10
    return a
  }, [count])
  useFrame((_, dt) => { ref.current.rotation.y += dt * 0.03 })
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[pos, 3]} /></bufferGeometry>
      <pointsMaterial size={0.03} color="#22d3ee" transparent opacity={0.7} />
    </points>
  )
}

function hasWebGL() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')) } catch { return false }
}

export default function ThreeScene() {
  const mobile = window.innerWidth < 768
  if (!hasWebGL()) return <div className="w-full h-full grid place-items-center text-slate-500 text-sm">3D preview unavailable</div>
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, mobile ? 1.25 : 1.75]} gl={{ antialias: !mobile, powerPreference: 'high-performance' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={40} color="#22d3ee" />
      <pointLight position={[-5, -3, 3]} intensity={30} color="#8b5cf6" />
      <Core /><Particles count={mobile ? 150 : 600} />
    </Canvas>
  )
}
