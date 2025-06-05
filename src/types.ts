export interface Piece {
    color: "black" | "white",
    type: "bishop" | "king" | "knight" | "pawn" | "queen" | "rook",
    position: Position,
}

export interface Position {
    x: number
    y: number
}