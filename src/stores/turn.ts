import { create } from "zustand"

interface StoreState {
    turn: "white" | "black",
    switchTurn: () => void
}

export default create<StoreState>((set) => ({
    turn: "white",
    switchTurn: () => set(state => ({ turn: state.turn == "black" ? "white" : "black" }))
}))