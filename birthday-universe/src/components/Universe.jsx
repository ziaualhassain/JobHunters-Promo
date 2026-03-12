import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Galaxy from "./Galaxy"
import StarField from "./StarField"
import ShootingStar from "./ShootingStar"
import Nebula from "./Nebula"
import data from "../data/messages.json"

export default function Universe({ setMessage }) {

  return (

    <Canvas camera={{ position: [0,0,15] }}>

      <ambientLight intensity={0.6}/>

      <StarField/>

      <Nebula position={[-20,10,-40]} color="purple"/>
      <Nebula position={[20,-5,-50]} color="blue"/>
      <Nebula position={[0,15,-60]} color="pink"/>

      <ShootingStar/>
      <ShootingStar/>

      {data.map((galaxy, i) => (
        <Galaxy
          key={i}
          position={[i*8-8,0,0]}
          stars={galaxy.stars}
          setMessage={setMessage}
        />
      ))}

      <OrbitControls/>

    </Canvas>

  )
}