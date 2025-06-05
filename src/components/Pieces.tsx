import type { Piece } from "../types"
import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import type { Mesh, MeshStandardMaterial } from "three";
import { caseSize } from "../constants";


export default function (props: { pieces: Piece[], selectedPieceSetter: Function, turn: string }) {
    return <>
        {props.pieces.map(function (piece: Piece, index: number) {
            return (
                <PieceComponents piece={piece} selectedPieceSetter={props.selectedPieceSetter} key={index} turn={props.turn} />
            )
        })}
    </>
}

function PieceComponents(props: { piece: Piece, selectedPieceSetter: Function, turn: string }) {
    const { scene } = useGLTF(`/${props.piece.type}.glb`)
    const clonedScene = useMemo(() => clone(scene), [scene])

    useEffect(() => {
        clonedScene.traverse((child) => {
        if ((child as Mesh).isMesh) {
            const mesh = child as Mesh
            const material = mesh.material as MeshStandardMaterial
            if (material && material.color) {
                material.color.set(props.piece.color == 'white' ? 0xbbbbbb : 0x444444)
            }
            mesh.material = material.clone()
        }
        })
    }, [clonedScene])

    return <primitive
        object={clonedScene}
        position={[props.piece.color == "black" ? (props.piece.position.x*caseSize)-caseSize/4 : (props.piece.position.x*caseSize)+caseSize/4, 0, props.piece.position.y*caseSize]}
        scale={[caseSize*40, caseSize*40, caseSize*40]}
        rotation={props.piece.color == "black" ? [0, 0, 0] : [0, Math.PI, 0]}
        onClick={function () {
            if (props.turn == props.piece.color) {
                props.selectedPieceSetter(props.piece)
            }   
        }}
    />
}