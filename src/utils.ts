import type { Piece, Position } from "./types"

export function range(start: number, end: number, step: number) {
    var table = []
    for (let i=start; i<end; i=i+step) {
        table.push(i)
    }
    return table
}

export function getSuggestion(piece: Piece, pieces: Piece[]) {
    const suggestions: Position[] = []
    if (piece.type == "rook") {
        const moves = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 },
        ];

        for (const { dx, dy } of moves) {
            let x = piece.position.x;
            let y = piece.position.y;

            while (true) {
                x += dx;
                y += dy;

                if (x < -4 || x > 3 || y < -4 || y > 3) break;

                const blockingPiece = pieces.find(p => p.position.x == x && p.position.y == y);

                if (blockingPiece) {
                    if (blockingPiece.color != piece.color) {
                        suggestions.push({ x, y });
                    }
                    break;
                }

                suggestions.push({ x, y });
            }
        }
    } else if (piece.type == "bishop") {
        const moves = [
            { dx: 1, dy: 1 },
            { dx: -1, dy: -1 },
            { dx: -1, dy: 1 },
            { dx: 1, dy: -1 },
        ];

        for (const { dx, dy } of moves) {
            let x = piece.position.x;
            let y = piece.position.y;

            while (true) {
                x += dx;
                y += dy;

                if (x < -4 || x > 3 || y < -4 || y > 3) break;

                const blockingPiece = pieces.find(p => p.position.x == x && p.position.y == y);

                if (blockingPiece) {
                    if (blockingPiece.color != piece.color) {
                        suggestions.push({ x, y });
                    }
                    break;
                }

                suggestions.push({ x, y });
            }
        }
    } else if (piece.type == "queen") {
        const moves = [
            { dx: 1, dy: 1 },
            { dx: -1, dy: -1 },
            { dx: -1, dy: 1 },
            { dx: 1, dy: -1 },
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 },
        ];

        for (const { dx, dy } of moves) {
            let x = piece.position.x;
            let y = piece.position.y;

            while (true) {
                x += dx;
                y += dy;

                if (x < -4 || x > 3 || y < -4 || y > 3) break;

                const blockingPiece = pieces.find(p => p.position.x == x && p.position.y == y);

                if (blockingPiece) {
                    if (blockingPiece.color != piece.color) {
                        suggestions.push({ x, y });
                    }
                    break;
                }

                suggestions.push({ x, y });
            }
        }
    } else if (piece.type == "king") {
        const moves = [
            { dx: -1, dy: -1 },
            { dx: 0, dy: -1 },
            { dx: 1, dy: -1 },
            { dx: -1, dy: 0 },
            { dx: 1, dy: 0 },
            { dx: -1, dy: 1 },
            { dx: 0, dy: 1 },
            { dx: 1, dy: 1 },
        ];

        for (const { dx, dy } of moves) {
            const x = piece.position.x + dx;
            const y = piece.position.y + dy;

            if (x < -4 || x > 3 || y < -4 || y > 3) continue;

            const blockingPiece = pieces.find(p => p.position.x == x && p.position.y == y);
            if (blockingPiece) {
                if (blockingPiece.color != piece.color) {
                    suggestions.push({ x, y });
                }
            } else {
                suggestions.push({ x, y });
            }
        }
    } else if (piece.type == "knight") {
        const moves = [
            { dx: -2, dy: -1 },
            { dx: -2, dy: 1 },
            { dx: -1, dy: -2 },
            { dx: -1, dy: 2 },
            { dx: 1, dy: -2 },
            { dx: 1, dy: 2 },
            { dx: 2, dy: -1 },
            { dx: 2, dy: 1 },
        ];

        for (const { dx, dy } of moves) {
            const x = piece.position.x + dx;
            const y = piece.position.y + dy;

            if (x < -4 || x > 3 || y < -4 || y > 3) continue;

            const blockingPiece = pieces.find(p => p.position.x == x && p.position.y == y);
            if (blockingPiece) {
                if (blockingPiece.color != piece.color) {
                    suggestions.push({ x, y });
                }
            } else {
                suggestions.push({ x, y });
            }
        }
    } else if (piece.type == "pawn") {
        const move = piece.color == "white" ? 1 : -1;
        const start = piece.color == "white" ? -3 : 2;

        const x = piece.position.x;
        const y = piece.position.y;

        var blockingPiece = pieces.find(p => p.position.x == x && p.position.y == y+move);
        if (!blockingPiece) {
            suggestions.push({ x, y: y+move })
            if (y == start) {
                blockingPiece = pieces.find(p => p.position.x == x && p.position.y == y+move*2);
                if (!blockingPiece) {
                    suggestions.push({ x, y: y+move*2 })
                }
            }
        }
        for (const dx of [-1, 1]) {
            const cx = x + dx;
            const cy = y + move;
            if (pieces.find(p => p.position.x == cx && p.position.y == cy && p.color != piece.color)) {
                suggestions.push({ x: cx, y: cy });
            }
        }
    }
    return suggestions
}