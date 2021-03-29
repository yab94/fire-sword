import { Game } from "./Game"
import { Sprite } from "./Sprite"

export class Zone {
    static uid: number = 1
    uid: number 
    x: number = 0
    y: number = 0
    width: number = 0
    height: number = 0
    visible: boolean = true
    sprites: Sprite[] = []
    game: Game
    rendering: Function = () => {}
    constructor(game: Game, rendering: Function = () => {}) {
        this.uid = Zone.uid++
        this.game = game
        this.rendering = rendering
    }

    newSprite(x: number, y: number, rendering: Function = () => {}): Sprite {
        let sprite = new Sprite(this, rendering)
        sprite.x = x
        sprite.y = y
        this.sprites.push(sprite)
        return sprite
    }

    getSprites(x: number, y: number): Sprite[] {
        return this.sprites.filter(sprite => sprite.x === x && sprite.y === y)
    }

    render(ctx: CanvasRenderingContext2D): void {
        if(!this.visible) return
        this.rendering(ctx, this)
        this.sprites.map(sprite => sprite.render(ctx))
    }

}