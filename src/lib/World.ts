import { Zone } from "./Zone";

export class World {

    gravityUp(zone: Zone) {
        zone.sprites.map(sprite => { sprite.moveUp(1, { allowBlocked: true }) })
    }

    gravityDown(zone: Zone) {
        zone.sprites.map(sprite => { sprite.moveDown(1, { allowBlocked: true }) })
    }

    gravityLeft(zone: Zone) {
        zone.sprites.map(sprite => { sprite.moveLeft(1, { allowBlocked: true }) })
    }

    gravityRight(zone: Zone) {
        zone.sprites.map(sprite => { sprite.moveRight(1, { allowBlocked: true }) })
    }

}