import { useEffect, useState } from "react"
import { caseSize } from "../constants"
import type { Position } from "../types"
import { getSuggestion, range } from "../utils"
import useTurnStore from "../stores/turn"
import usePieceStore from "../stores/pieces"
import useSelectedPieceStore from "../stores/selectedPiece"

export default function () {
    const [suggestions, setSuggestions] = useState<Position[]>([])
    const pieces = usePieceStore(set => set.pieces)
    const setPieces = usePieceStore(set => set.setPieces)
    const switchTurn = useTurnStore((state) => state.switchTurn)
    const setSelectedPiece = useSelectedPieceStore(set => set.setPieces)
    const selectedPiece = useSelectedPieceStore(set => set.piece)

    useEffect(function () {
        if (selectedPiece) {
            setSuggestions(getSuggestion(selectedPiece, pieces))
        } else {
            setSuggestions([])
        }
    }, [selectedPiece])

    return (
        <group>
            {range(-4, 4, 1).map(function (x: number) {
                return range(-4, 4, 1).map(function(y: number) {
                    return (
                        <mesh position={[caseSize*x, -caseSize/1.5, caseSize*y]} key={x*8+y} onClick={function () {
                            if (!selectedPiece) {
                                return
                            }

                            if (suggestions.some(function (suggestion) {
                                return suggestion.x == x && suggestion.y == y
                            })) {

                                const killablePieces = pieces.find(function (p) {
                                    return p.position.x == x && p.position.y == y
                                })

                                if (killablePieces) {
                                    setPieces(pieces.filter(p => p != killablePieces))
                                }

                                selectedPiece.position.x = x
                                selectedPiece.position.y = y

                                if (
                                    selectedPiece.type == "pawn" &&
                                    ((selectedPiece.color == "white" && y == 3) ||
                                    (selectedPiece.color == "black" && y == -4))
                                ) {
                                    const newType = prompt("Promotion du pion ! Choisissez : queen, rook, bishop ou knight", "queen");
                                    if (newType == "queen" || newType == "rook" || newType == "bishop" || newType == "knight") {
                                        selectedPiece.type = newType
                                    } else {
                                        alert("Type invalide. Le pion est promu en dame par défaut.")
                                        selectedPiece.type = "queen"
                                    }
                                }

                                switchTurn()

                            }

                            setSelectedPiece(null)

                        }}>
                            <boxGeometry args={[caseSize, caseSize/3, caseSize]} />
                            {suggestions?.find(s => s.x == x && s.y == y) || (selectedPiece?.position.x == x && selectedPiece?.position.y == y) ? 
                                <meshLambertMaterial color={0x00ff00} /> :
                                <meshLambertMaterial color={((x%2)+(y%2))%2 == 0 ? 0x00000 : 0xffffff} />
                            }
                        </mesh>
                    )
                })
            })}
        </group>
    )
}