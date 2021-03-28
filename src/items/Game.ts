import { Board } from "./Board"
import { Keyboard } from "./Keyboard"
import { Sprite } from "./Sprite"

export abstract class Game {
    protected container: HTMLElement
    protected canvas: HTMLCanvasElement
    loopInterval: number = 100
    board: Board = new Board()
    keyboard: Keyboard = new Keyboard()
    constructor(containerId: string) {
        let container = document.getElementById(containerId)
        if(!container) throw new Error('invalid containerId "' + containerId + '"')
        this.container = container
        this.canvas = document.createElement('canvas')
        this.container.appendChild(this.canvas)
    }
    protected initCanvas() {
        this.canvas.style.border = '1px solid red'
        this.canvas.setAttribute('width', this.board.width + 'px')
        this.canvas.setAttribute('height', this.board.height + 'px')
    }
    protected render(): void {
        let context = this.canvas.getContext('2d')
        if(!context) throw new Error('unable to get 2D context')
        context.clearRect(0, 0, this.board.width, this.board.height)
        this.board.render(context)
    }
    
    protected abstract init(): void
    protected async loop(): Promise<boolean> {
        return false
    }
    protected abstract over(): void

    protected async wait(ms: number): Promise<Game> {
        return await new Promise((resolve) => setTimeout(() => resolve(this), ms))
    }

    async start(): Promise<void> {
        this.init()
        this.initCanvas()
        do {  
            this.render() 
            await this.wait(this.loopInterval)
        } while( 
            await this.loop()
        )
        this.over()
    }

}