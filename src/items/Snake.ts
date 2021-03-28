import { Game } from "./Game";
import { Sprite } from "./Sprite";

export class Snake extends Game {

    protected moves = 0

    protected init() {

        let step = 30

        let snake = this.board.newSprite()

        this.loopInterval = 100

        this.board.width = 5 * step
        this.board.height = 5 * step

        this.keyboard.enable()

        this.keyboard.onUp(() => {
            snake.moveUp(step)
            this.moves++
            this.render()
        })

        this.keyboard.onDown(() => {
            snake.moveDown(step)
            this.moves++
            this.render()
        })

        this.keyboard.onLeft(() => {
            snake.moveLeft(step)
            this.moves++
            this.render()
        })

        this.keyboard.onRight(() => {
            snake.moveRight(step)
            this.moves++
            this.render()
        })

    }

    protected async loop(): Promise<boolean> {
        this.render()
        return this.moves < 50

    }

    protected over(): void {

        this.keyboard.disable()
        
        console.log('Game Over')
    }


}