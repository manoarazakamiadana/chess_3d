import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import type { Mesh, MeshStandardMaterial } from 'three'

interface Piece {
    color: "black" | "white",
    type: "bishop" | "king" | "knight" | "pawn" | "queen" | "rook",
    position: [number, number, number]
}

export default function (props: Piece) {
  const { scene } = useGLTF(`/${props.type}.glb`)

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh
        const material = mesh.material as MeshStandardMaterial
        if (material && material.color) {
          material.color.set(props.color)
        }
      }
    })
  }, [scene])

  return <primitive
    object={scene}
    position={props.position}
    scale={[700, 700, 700]}
  />
}
