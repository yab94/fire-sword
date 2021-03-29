import { Game } from "../lib/Game"
import { Sprite } from "../lib/Sprite"
import { Zone } from "../lib/Zone"

export class Snake extends Game {

    protected moves = 0
    protected time = 0

    protected init() {

        let topHeight = 100

        let step = 10
        let cells = 20

        this.width = cells * step
        this.height = (cells * step) + topHeight

        let scoreZone = this.newZone(0, 0, cells * step, topHeight, (ctx: CanvasRenderingContext2D, zone: Zone) => {
            ctx.strokeRect(5, 5, (cells * step) - 5, 50)
            ctx.fillText('Moves: ' + this.moves, 10, 35);
            ctx.fillText('Time: ' + this.time, 100, 35);
        })

        let playZone = this.newZone(0, topHeight, cells * step, cells * step, (ctx: CanvasRenderingContext2D, zone: Zone) => {
            ctx.strokeRect(0, topHeight, zone.width, zone.height)
        })

        // Hero
        let hero = playZone.newSprite(playZone.x, playZone.y, (ctx: CanvasRenderingContext2D, sprite: Sprite) => {
            ctx.fillRect(sprite.x, sprite.y, step, step)
            sprite.width = step
            sprite.height = step
        })

        // Ground
        for(let w = 0; w < cells; w++) {
            playZone.newSprite(0 + (w * step), topHeight + ((cells - 1) * step), (ctx: CanvasRenderingContext2D, sprite: Sprite) => {
                ctx.fillRect(sprite.x, sprite.y, step, step)
                sprite.width = step
                sprite.height = step
            })
        }

        this.keyboard.enable()
        this.keyboard.addCrossActions(hero, step)

        this.onLoop = () => {
            this.render()
            this.world.gravityDown(playZone)
            this.time++;
            return this.moves < 500
        }

        this.onEnd = () => {
            this.keyboard.disable()
            console.log('Game Over')
        }

    }


}