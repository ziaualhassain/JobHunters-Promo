import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function Nebula({ position, color }) {

  const ref = useRef()

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.02
  })

  return (

    <mesh ref={ref} position={position}>

      <sphereGeometry args={[10, 32, 32]} />

      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.08}
      />

    </mesh>

  )
}