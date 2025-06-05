import type { Piece } from "../types"
import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import type { Mesh, MeshStandardMaterial } from "three";
import { caseSize } from "../constants";
import useTurnStore from "../stores/turn";
import usePieceStore from "../stores/pieces";
import useSelectedPieceStore from "../stores/selectedPiece"

export default function () {

    const pieces = usePieceStore(set => set.pieces)

    return <>
        {pieces.map(function (piece: Piece, index: number) {
            return (
                <PieceComponents piece={piece} key={index} />
            )
        })}
    </>
}

function PieceComponents(props: { piece: Piece }) {
    const { scene } = useGLTF(`/${props.piece.type}.glb`)
    const clonedScene = useMemo(() => clone(scene), [scene])
    const { turn } = useTurnStore()    
    const setSelectedPiece = useSelectedPieceStore(set => set.setPieces)

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

    return (
        <group onClick={function () {
            if (turn == props.piece.color) {
                setSelectedPiece(props.piece)
            }
        }}>
            <primitive
                object={clonedScene}
                position={[props.piece.color == "black" ? (props.piece.position.x*caseSize)-caseSize/4 : (props.piece.position.x*caseSize)+caseSize/4, 0, props.piece.position.y*caseSize]}
                scale={[caseSize*40, caseSize*40, caseSize*40]}
                rotation={props.piece.color == "black" ? [0, 0, 0] : [0, Math.PI, 0]}
            />
        </group>
    )
}