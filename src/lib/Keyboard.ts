import { Sprite } from "./Sprite"

export enum KeyboardKey {
    ArrowRight = "ArrowRight",
    ArrowLeft = "ArrowLeft",
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
}

export class KeyBoardAction {
    constructor(public key: KeyboardKey, public action: Function) {
    }
}

export class Keyboard {

    enabled: boolean = false

    actions: KeyBoardAction[] = []

    constructor() {
        window.addEventListener('keydown', (event) => {
            if(!this.enabled) return
            let key = event.key
            let action = this.actions.find(action => action.key === key)
            if(action) return action.action()
        });
    }

    enable(): void {
        this.enabled = true
    } 

    disable(): void {
        this.enabled = false
    } 

    addCrossActions(sprite: Sprite, step: number = 1) {
        this.addAction(KeyboardKey.ArrowUp, () => sprite.moveUp(step))
        this.addAction(KeyboardKey.ArrowDown, () => sprite.moveDown(step))
        this.addAction(KeyboardKey.ArrowRight, () => sprite.moveRight(step))
        this.addAction(KeyboardKey.ArrowLeft, () => sprite.moveLeft(step))
    }

    addAction(key: KeyboardKey, action: Function): void {
        this.actions.push(new KeyBoardAction(key, action))
    } 
}