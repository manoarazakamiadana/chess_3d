import PieceComponents from "./Piece";
import type { Piece } from "../types"

const pieces : Piece[] = [
    {
        color: "white",
        position: {
            x: 2,
            y: -4
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
            x: 2,
            y: -2
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 2,
            y: -1
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 2,
            y: 0
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 2,
            y: 1
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 2,
            y: 2
        },
        type: "pawn"
    },
    {
        color: "white",
        position: {
            x: 2,
            y: 3
        },
        type: "pawn"
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
        color: "white",
        position: {
            x: 3,
            y: -3
        },
        type: "knight"
    },
    {
        color: "white",
        position: {
            x: 3,
            y: -2
        },
        type: "bishop"
    },
    {
        color: "white",
        position: {
            x: 3,
            y: -1
        },
        type: "queen"
    },
    {
        color: "white",
        position: {
            x: 3,
            y: 0
        },
        type: "king"
    },
    {
        color: "white",
        position: {
            x: 3,
            y: 1
        },
        type: "bishop"
    },
    {
        color: "white",
        position: {
            x: 3,
            y: 2
        },
        type: "knight"
    },
    {
        color: "white",
        position: {
            x: 3,
            y: 3
        },
        type: "rook"
    },
    {
        color: "black",
        position: {
            x: -3,
            y: -4
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -3,
            y: -3
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -3,
            y: -2
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -3,
            y: -1
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -3,
            y: 0
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -3,
            y: 1
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
            x: -3,
            y: 3
        },
        type: "pawn"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: -4
        },
        type: "rook"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: -3
        },
        type: "knight"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: -2
        },
        type: "bishop"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: -1
        },
        type: "queen"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: 0
        },
        type: "king"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: 1
        },
        type: "bishop"
    },
    {
        color: "black",
        position: {
            x: -4,
            y: 2
        },
        type: "knight"
    },
    {
        color: "black",
        position: {
            x: -4,
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