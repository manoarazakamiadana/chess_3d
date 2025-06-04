import type { Piece } from "../types"
import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import type { Mesh, MeshStandardMaterial } from "three";
import { caseSize } from "../constants";
import { getSuggestion } from "../utils";

const pieces : Piece[] = [
    {
        color: "white",
        position: {
            x: -4,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: -3,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: -2,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: -1,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 0,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 1,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 2,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 3,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: -4,
            y: -4
        },
        type: "rook"
    },
    {
        color: "white",
        position: {
            x: -3,
            y: -4
        },
        type: "knight"
    },
    {
        color: "white",
        position: {
            x: -2,
            y: -4
        },
        type: "bishop"
    },
    {
        color: "white",
        position: {
            x: -1,
            y: -4
        },
        type: "queen"
    },
    {
        color: "white",
        position: {
            x: 0,
            y: -4
        },
        type: "king"
    },
    {
        color: "white",
        position: {
            x: 1,
            y: -4
        },
        type: "bishop"
    },
    {
        color: "white",
        position: {
            x: 2,
            y: -4
        },
        type: "knight"
    },
    {
        color: "white",
        position: {
            x: 3,
            y: -4
        },
        type: "rook"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -3,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -2,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -1,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: 0,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: 1,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: 2,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: 3,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: 3
        },
        type: "rook"
    },
    {
        color: "black",
        position: {
            x: -3,
            y: 3
        },
        type: "knight"
    },
    {
        color: "black",
        position: {
            x: -2,
            y: 3
        },
        type: "bishop"
    },
    {
        color: "black",
        position: {
            x: -1,
            y: 3
        },
        type: "queen"
    },
    {
        color: "black",
        position: {
            x: 0,
            y: 3
        },
        type: "king"
    },
    {
        color: "black",
        position: {
            x: 1,
            y: 3
        },
        type: "bishop"
    },
    {
        color: "black",
        position: {
            x: 2,
            y: 3
        },
        type: "knight"
    },
    {
        color: "black",
        position: {
            x: 3,
            y: 3
        },
        type: "rook"
    },
]

export default function () {
    return <>
        {pieces.map(function (piece: Piece, index: number) {
            return (
                <PieceComponents color={piece.color} type={piece.type} position={piece.position} key={index} />
            )
        })}
    </>
}

function PieceComponents(props: Piece) {
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
        position={[props.color == "black" ? (props.position.x*caseSize)-caseSize/4 : (props.position.x*caseSize)+caseSize/4, 0, props.position.y*caseSize]}
        scale={[caseSize*40, caseSize*40, caseSize*40]}
        rotation={props.color == "black" ? [0, 0, 0] : [0, Math.PI, 0]}
        onClick={function () {
            console.log(getSuggestion(props, pieces))
        }}
    />
}