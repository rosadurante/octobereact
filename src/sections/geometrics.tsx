import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useRef, useState } from "react"
import * as THREE from "three"
import { Button } from "../components/button"


export const Geometrics = () => {

  const RotatingCube = ({ width, height, depth }: { width: number, height: number, depth: number }) => {
    const cubeRef = useRef<THREE.Mesh>(null!)
    useFrame(() => {
      cubeRef.current.rotation.x += 0.01
      cubeRef.current.rotation.y += 0.01
    })
    return (
      <mesh ref={cubeRef}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  const RotatingSphere = ({ radius, segments }: { radius: number, segments: {width: number, height: number} }) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame(() => {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.005
    });

    return (
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, segments.width, segments.height]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    )
  }

  const RotatingCylinder = ({ radius, height, segments }: { radius: number, height: number, segments: {width: number, height: number} }) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame(() => {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    })

    return (
      <mesh ref={meshRef}>
        <cylinderGeometry args={[radius, radius, height, segments.width, segments.height]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  const RotatingCone = ({ radius, height, segments }: { radius: number, height: number, segments: {width: number, height: number} }) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame(() => {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    })
  
    return (
      <mesh ref={meshRef}>
        <coneGeometry args={[radius, height, segments.width, segments.height]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  const RotatingTorus = ({ radius, tube, radialSegments, tubularSegments }: { radius: number, tube: number, radialSegments: number, tubularSegments: number }) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame(() => {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    })
  
    return (
      <mesh ref={meshRef}>
        <torusGeometry args={[radius, tube, radialSegments, tubularSegments]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  const RotatingTorusKnot = ({ radius, tube, radialSegments, tubularSegments }: { radius: number, tube: number, radialSegments: number, tubularSegments: number }) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    useFrame(() => {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    })

    return (
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[radius, tube, radialSegments, tubularSegments]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }

  const [selected, setSelected] = useState<string>("cube")

  return (
    <div className="w-full h-80 flex flex-row gap-4">
      <div className="">
        <Button label="Rotating Cube" onClick={() => setSelected("cube")} className="w-full" />
        <Button label="Sphere" onClick={() => setSelected("sphere")} className="w-full" />
        <Button label="Rotating Cylinder" onClick={() => setSelected("cylinder")} className="w-full" />
        <Button label="Rotating Cone" onClick={() => setSelected("cone")} className="w-full" />
        <Button label="Rotating Torus" onClick={() => setSelected("torus")} className="w-full" />
        <Button label="Rotating Torus Knot" onClick={() => setSelected("torusKnot")} className="w-full" />
      </div>
      <div className="flex-1 bg-white rounded-md">
        {selected === "cube" && (
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 1, 0.5]} intensity={1} />
        <RotatingCube width={2} height={2} depth={2} />
        <OrbitControls />
      </Canvas>
        )}
        {selected === "sphere" && (
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[1, 1, 1]} />
        <RotatingSphere radius={1} segments={{width: 32, height: 32}} />
        <OrbitControls />
      </Canvas>
        )}
        {selected === "cylinder" && (
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[1, 1, 1]} />
        <RotatingCylinder radius={1} height={2} segments={{width: 32, height: 32}} />
        <OrbitControls />
      </Canvas>
        )}
        {selected === "cone" && (
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[1, 1, 1]} />
        <RotatingCone radius={1} height={2} segments={{width: 32, height: 32}} />
        <OrbitControls />
      </Canvas>
        )}
        {selected === "torus" && (
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[1, 1, 1]} />
        <RotatingTorus radius={1} tube={0.3} radialSegments={100} tubularSegments={20} />
        <OrbitControls />
      </Canvas>
        )}
        {selected === "torusKnot" && (
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[1, 1, 1]} />
        <RotatingTorusKnot radius={1} tube={0.3} radialSegments={100} tubularSegments={20} />
        <OrbitControls />
      </Canvas>
        )}
      </div>
    </div>
  )
}