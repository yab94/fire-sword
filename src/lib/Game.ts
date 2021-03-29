import { Zone } from "./Zone"
import { Keyboard, KeyboardKey } from "./Keyboard"
import { Sprite } from "./Sprite"
import { World } from "./World"

export abstract class Game {
    protected container: HTMLElement
    protected canvas: HTMLCanvasElement
    protected loopInterval: number = 100
    protected world: World = new World()
    protected zones: Zone[] = []
    protected keyboard: Keyboard = new Keyboard()
    protected width: number = 300
    protected height: number = 300
    protected onLoop: Function = () => { return false }
    protected onEnd: Function = () => { return false }
    constructor(containerId: string) {
        let container = document.getElementById(containerId)
        if(!container) throw new Error('invalid containerId "' + containerId + '"')
        this.container = container
        this.canvas = document.createElement('canvas')
        this.container.appendChild(this.canvas)
    }
    protected newZone(x: number, y: number, width: number, height: number, rendering: Function = () => {}): Zone {
        let zone = new Zone(this, rendering)
        zone.x = x
        zone.y = y
        zone.width = width
        zone.height = height
        zone.rendering = rendering
        this.zones.push(zone)
        return zone
    }
    protected initCanvas() {
        this.canvas.setAttribute('width', this.width + 'px')
        this.canvas.setAttribute('height', this.height + 'px')
    }
    protected render(): void {
        let context = this.canvas.getContext('2d')
        if(!context) throw new Error('unable to get 2D context')
        context.clearRect(0, 0, this.width, this.height)
        for(let z in this.zones) this.zones[z].render(context)
    }

    protected async wait(ms: number): Promise<Game> {
        return await new Promise((resolve) => setTimeout(() => resolve(this), ms))
    }

    async start(): Promise<void> {
        await this.init()
        this.initCanvas()
        while(await this.onLoop()) await this.wait(this.loopInterval)
        await this.onEnd()
    }
    
    protected abstract init(): void

}