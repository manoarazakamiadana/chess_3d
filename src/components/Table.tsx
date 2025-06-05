import { useEffect, useState } from "react"
import { caseSize } from "../constants"
import type { Piece, Position } from "../types"
import { getSuggestion, range } from "../utils"

export default function (props: { selectedPiece: Piece | null, pieces: Piece[], setSelectedPiece: Function, setTurn: Function, turn: string }) {
    const [suggestions, setSuggestions] = useState<Position[]>([])

    useEffect(function () {
        if (props.selectedPiece) {
            setSuggestions(getSuggestion(props.selectedPiece, props.pieces))
        } else {
            setSuggestions([])
        }
    }, [props.selectedPiece])

    return (
        <group>
            {range(-4, 4, 1).map(function (x: number) {
                return range(-4, 4, 1).map(function(y: number) {
                    return (
                        <mesh position={[caseSize*x, -caseSize/1.5, caseSize*y]} key={x*8+y} onClick={function () {
                            if (!props.selectedPiece) {
                                return
                            }

                            if (suggestions.some(function (suggestion) {
                                return suggestion.x == x && suggestion.y == y
                            })) {

                                const killablePieces = props.pieces.find(function (p) {
                                    return p.position.x == x && p.position.y == y
                                })

                                if (killablePieces) {
                                    killablePieces.position.x = caseSize*100
                                    killablePieces.position.y = caseSize*100
                                }

                                props.selectedPiece.position.x = x
                                props.selectedPiece.position.y = y

                                props.setTurn(props.turn == "white" ? "black": "white")

                            }

                            props.setSelectedPiece(null)

                        }}>
                            <boxGeometry args={[caseSize, caseSize/3, caseSize]} />
                            {suggestions?.find(s => s.x == x && s.y == y) ? 
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