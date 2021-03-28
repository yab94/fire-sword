
enum KeyboardKey {
    ArrowRight = "ArrowRight",
    ArrowLeft = "ArrowLeft",
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
}

export class Keyboard {

    enabled: boolean = false

    right: Function = () => {}
    left: Function = () => {}
    up: Function = () => {}
    down: Function = () => {}

    constructor() {
        window.addEventListener('keydown', (event) => {
            if(!this.enabled) return
            let key = event.key
            if(key === 'ArrowRight') return this.right()
            if(key === 'ArrowLeft') return this.left()
            if(key === 'ArrowUp') return this.up()
            if(key === 'ArrowDown') return this.down()
        });
    }

    enable(): void {
        this.enabled = true
    } 

    disable(): void {
        this.enabled = false
    } 

    onRight(move: Function): void {
        this.right = move
    } 

    onUp(move: Function): void {
        this.up = move
    }
    
    onDown(move: Function): void {
        this.down = move
    }

    onLeft(move: Function): void {
        this.left = move
    }
}