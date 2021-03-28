import { Sprite } from "./Sprite"

export class Board {
    width: number = 0
    height: number = 0
    sprites: Sprite[] = []

    newSprite(): Sprite {
        let sprite = new Sprite(this)
        this.sprites.push(sprite)
        return sprite
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.sprites.map(sprite => sprite.render(ctx))
    }

}