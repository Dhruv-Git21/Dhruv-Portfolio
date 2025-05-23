import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
    <spotLight
        position={[2,5,6]}
        angle={0.15}
        penumbra={0.2}
        intensity={100}
        color="white"
    />

    <spotLight
        position={[5, 7, 8]}
        angle={0.30}
        penumbra={0.5}
        intensity={40}
        color="#4cc9f0"
    />

    <spotLight
        position={[-3,5,5]}
        angle={0.40}
        penumbra={1}
        intensity={60}
        color="#9d4edd"
    />

    <primitive 
        object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
        positon={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI/2,Math.PI/4,0]}
    />

    <pointLight 
        positon={[0, 1, 0]}
        intensity = {10}
        color="#7209b7"
    />

    <pointLight 
        positon={[1,2,-2]}
        intensity = {10}
        color="#0d00a4"
    />

    </>
  )
}

export default HeroLights
