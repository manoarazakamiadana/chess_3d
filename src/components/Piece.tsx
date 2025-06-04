import { useGLTF } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import type { Mesh, MeshStandardMaterial } from 'three'
import { caseSize } from '../constants'
import type { Piece } from '../types'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js'

export default function (props: Piece) {
  const { scene } = useGLTF(`/${props.type}.glb`)
  const clonedScene = useMemo(() => clone(scene), [scene])

  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh
        const material = mesh.material as MeshStandardMaterial
        if (material && material.color) {
          material.color.set(props.color == 'white' ? 0xbbbbbb : 0x444444)
        }
        mesh.material = material.clone()
      }
    })
  }, [clonedScene])

  return <primitive
    object={clonedScene}
    position={[props.position.x*caseSize, 0, props.color == "black" ? (props.position.y*caseSize)-caseSize/4 : (props.position.y*caseSize)+caseSize/4]}
    scale={[caseSize*40, caseSize*40, caseSize*40]}
    rotation={props.color == "black" ? [0, -Math.PI/2, 0] : [0, Math.PI/2, 0]}
  />
}
