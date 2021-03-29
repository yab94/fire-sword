import { Zone } from "./Zone"

export class MoveOptions {
    allowBlocked: boolean = true
}

export class Sprite {

    static uid: number = 1
    uid: number 
    visible: boolean = true
    traversable: boolean = false
    zone: Zone
    rendering: Function

    progressive: boolean = true

    x: number = 0
    y: number = 0
    width: number = 0
    height: number = 0

    constructor(zone: Zone, rendering: Function) {
        this.uid = Sprite.uid++
        this.zone = zone
        this.rendering = rendering
    }

    render(ctx: CanvasRenderingContext2D): void {
        if(!this.visible) return
        this.rendering(ctx, this)
    }

    moveUp(step: number = 1, options: Partial<MoveOptions> = {}): Sprite {
        console.log('moveUp1', this.x, this.y)
        for(let i = 0; i < step; i++) {
            if(this.y - 1 < this.zone.y) {
                if(options.allowBlocked) break
                throw new Error('zone limit up reached')
            }
            if(this.zone.getSprites(this.x, this.y - 1).some(sprite => !sprite.traversable)) {
                if(options.allowBlocked) break
                throw new Error('collision up')
            }
            this.y--
        }
        console.log('moveUp2', this.x, this.y)
        return this
    }

    moveDown(step: number = 1, options: Partial<MoveOptions> = {}): Sprite {
        console.log('moveDown1', this.x, this.y)
        for(let i = 0; i < step; i++) {
            if(this.zone.y + this.zone.height < this.y + this.height + 1) {
                console.log('zone limit down reached', (this.zone.y + this.zone.height), '<=', (this.y + this.height + 1))
                if(options.allowBlocked) break
                throw new Error('zone limit down reached')
            }
            if(this.zone.getSprites(this.x, this.y + this.height).some(sprite => !sprite.traversable)) {
                console.log('collision down', this.x, this.y + this.height + 1)
                if(options.allowBlocked) break
                throw new Error('collision down')
            }
            this.y++
        }
        console.log('moveDown2', this.x, this.y)
        return this
    }

    moveLeft(step: number = 1, options: Partial<MoveOptions> = {}): Sprite {
        for(let i = 0; i < step; i++) {
            if(this.x - 1 < this.zone.x) {
                if(options.allowBlocked) break
                throw new Error('zone limit left reached')
            }
            if(this.zone.getSprites(this.x - 1, this.y).some(sprite => !sprite.traversable)) {
                if(options.allowBlocked) break
                throw new Error('collision left')
            }
            this.x--
        }
        return this
    }

    moveRight(step: number = 1, options: Partial<MoveOptions> = {}): Sprite {
        for(let i = 0; i < step; i++) {
            if(this.zone.x + this.zone.width <= this.x + this.width + 1) {
                if(options.allowBlocked) break
                throw new Error('zone limit right reached')
            }
            if(this.zone.getSprites(this.x + this.width, this.y).some(sprite => !sprite.traversable)) {
                if(options.allowBlocked) break
                throw new Error('collision right')
            }
            this.x++
        }
        return this
    }

    isCollision(sprite: Sprite): boolean {
        return this.x === sprite.x && this.y === sprite.y
    }

    moveToHV(sprite: Sprite, step: number = 1): Sprite {
        try {
            return this.moveToH(sprite, step)
        } catch(e) {
            return this.moveToV(sprite, step)
        }
    }

    moveToVH(sprite: Sprite, step: number = 1): Sprite {
        try {
            return this.moveToV(sprite, step)
        } catch(e) {
            return this.moveToH(sprite, step)
        }
    }

    moveToV(sprite: Sprite, step: number = 1): Sprite {
        if(this.isUp(sprite)) return this.moveDown(step)
        if(this.isDown(sprite)) return this.moveUp(step)
        throw new Error('can not move to sprite verticaly')
    }

    moveToH(sprite: Sprite, step: number = 1): Sprite {
        if(this.isLeft(sprite)) return this.moveRight(step)
        if(this.isRight(sprite)) return this.moveLeft(step)
        throw new Error('can not move to sprite horizontaly')
    }

    moveToRandomly(sprite: Sprite, step: number = 1): Sprite {
        if(Math.random() < 0.5) return this.moveToHV(sprite, step)
        return this.moveToVH(sprite, step)
    }

    isUp(sprite: Sprite): boolean {
        return this.y < sprite.y
    }

    isDown(sprite: Sprite): boolean {
        return sprite.y < this.y
    }

    isLeft(sprite: Sprite): boolean {
        return this.x < sprite.x
    }

    isRight(sprite: Sprite): boolean {
        return sprite.x < this.x
    }

}