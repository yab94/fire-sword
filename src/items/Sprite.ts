import { Board } from "./Board"

export class Sprite {

    static uid: number = 1
    uid: number 
    visible: boolean = true
    board: Board

    x: number = 0
    y: number = 0

    constructor(board: Board) {
        this.uid = Sprite.uid++
        this.board = board
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(this.x, this.y, 30, 30)
    }

    moveUp(step: number = 1): Sprite {
        if(this.y - step < 0) throw new Error('can not move up')
        this.y -= step
        return this
    }

    moveDown(step: number = 1): Sprite {
        if(this.board.height <= this.y + step) throw new Error('can not move down')
        this.y += step
        return this
    }

    moveLeft(step: number = 1): Sprite {
        if(this.x - step < 0) throw new Error('can not move left')
        this.x -= step
        return this
    }

    moveRight(step: number = 1): Sprite {
        if(this.board.width <= this.x + step) throw new Error('can not move right')
        this.x += step
        return this
    }

}