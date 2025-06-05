import { useState } from "react";
import Pieces from "./Pieces";
import Table from "./Table";
import type { Piece } from "../types";

const initialPieces : Piece[] = [
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
    const [pieces, setPieces] = useState<Piece[]>(initialPieces);
    const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null)

    return <>
        <Table selectedPiece={selectedPiece} pieces={pieces} setSelectedPiece={setSelectedPiece} />
        <Pieces pieces={pieces} selectedPieceSetter={setSelectedPiece} />
    </>
}