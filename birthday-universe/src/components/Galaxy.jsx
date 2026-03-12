import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import Star from "./Star"

export default function Galaxy({ position, stars, setMessage }) {

  const galaxyRef = useRef()

  // Generate spiral galaxy positions
  const spiralPoints = useMemo(() => {

    const points = []
    const branches = 4
    const radius = 3

    stars.forEach((star, i) => {

      const branchAngle =
        (i % branches) / branches * Math.PI * 2

      const distance = Math.random() * radius

      const spin = distance * 1.5

      const x =
        Math.cos(branchAngle + spin) * distance

      const y =
        (Math.random() - 0.5) * 0.5

      const z =
        Math.sin(branchAngle + spin) * distance

      points.push({
        position: [x, y, z],
        message: star.message
      })

    })

    return points

  }, [stars])

  // Rotate the galaxy slowly
  useFrame(() => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={galaxyRef} position={position}>

      {spiralPoints.map((star, i) => (
        <Star
          key={i}
          position={star.position}
          message={star.message}
          setMessage={setMessage}
        />
      ))}

    </group>
  )
}