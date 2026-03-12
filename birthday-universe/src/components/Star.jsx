import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Star({ position, message, setMessage }) {

  const ref = useRef()

  useFrame((state) => {

    const scale =
      1 + Math.sin(state.clock.elapsedTime * 3) * 0.1

    ref.current.scale.set(scale, scale, scale)

  })

  return (

    <mesh
      ref={ref}
      position={position}
      onClick={() => setMessage(message)}
    >

      <sphereGeometry args={[0.15, 16, 16]} />

      <meshStandardMaterial
        color="#ffd966"
        emissive="#ffaa00"
        emissiveIntensity={2}
      />

    </mesh>

  )
}