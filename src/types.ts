export interface Piece {
    color: "black" | "white",
    type: "bishop" | "king" | "knight" | "pawn" | "queen" | "rook",
    position: {
        x: number
        y: number
    }
}