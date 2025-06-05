import { initialPieces } from "../constants";
import type { Piece } from "../types";
import { create } from "zustand"

interface storeState {
    pieces: Piece[],
    setPieces: (newPieces: Piece[]) => void
}

export default create<storeState>(set => ({
    pieces: initialPieces,
    setPieces: (newPieces) => set(() => ({ pieces: newPieces }))
}))