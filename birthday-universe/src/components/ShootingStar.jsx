import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function ShootingStar() {

  const ref = useRef()

  useFrame(() => {

    ref.current.position.x -= 0.4
    ref.current.position.y -= 0.1

    if (ref.current.position.x < -50) {
      ref.current.position.x = 50
      ref.current.position.y = Math.random() * 20
    }

  })

  return (

    <mesh ref={ref} position={[50, 20, -20]}>

      <sphereGeometry args={[0.15, 16, 16]} />

      <meshStandardMaterial
        color="white"
        emissive="white"
        emissiveIntensity={5}
      />

    </mesh>

  )
}