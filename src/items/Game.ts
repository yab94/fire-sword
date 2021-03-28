import { Board } from "./Board"
import { Keyboard } from "./Keyboard"

export abstract class Game {
    protected container: HTMLElement
    protected canvas: HTMLCanvasElement
    board: Board
    keyboard: Keyboard
    constructor(containerId: string) {
        let container = document.getElementById(containerId)
        if(!container) throw new Error('invalid containerId "' + containerId + '"')
        this.container = container
        this.canvas = document.createElement('canvas')
        this.container.appendChild(this.canvas)
        this.keyboard = new Keyboard()
        this.board = new Board(0, 0, 0)
    }
    protected initCanvas() {
        this.board.initCells()
        this.canvas.style.border = '1px solid red'
        this.canvas.setAttribute('width', (this.board.getWidth() * this.board.getCellSize()) + 'px')
        this.canvas.setAttribute('height', (this.board.getHeight() * this.board.getCellSize()) + 'px')
    }
    protected render(): void {
        let context = this.canvas.getContext('2d')
        if(!context) throw new Error('unable to get 2D context')
        this.board.render(context)
    }
    
    protected abstract init(): void
    protected abstract loop(): boolean
    protected abstract over(): void

    start(): void {
        this.init()
        this.initCanvas()
        do {  this.render() } while(this.loop())
        this.over()
    }

}