import type { Piece } from "../types";
import { create } from "zustand"

interface storeState {
    piece: Piece | null,
    setPieces: (newPiece: Piece | null) => void
}

export default create<storeState>(set => ({
    piece: null,
    setPieces: (newPiece) => set(() => ({ piece: newPiece }))
}))