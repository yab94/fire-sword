import { Game } from "./Game";

export class Snake extends Game {

    protected init() {
        this.board.width = 5
        this.board.height = 5
        this.board.cellSize = 30
    }

    protected end() {
            
        this.board.width = 5
        this.board.height = 5
        this.board.cellSize = 30

        this.board.initCells()
        this.loop()
    }

    protected loop(): boolean {
        this.render()
        return false
    }

    protected over(): void {
        console.log('Game Over')
    }


}