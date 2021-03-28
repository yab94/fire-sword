import { Board } from "./Board"

export class Cell {

    protected board: Board

    protected x: number
    protected y: number

    constructor(board: Board, x: number, y: number) {
        this.board = board
        this.x = x
        this.y = y
    }

    getX(): number {
        return this.x
    }

    getY(): number {
        return this.y
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.strokeRect(this.x * this.board.getCellSize(), this.y * this.board.getCellSize(), this.board.getCellSize(), this.board.getCellSize())
    }

}