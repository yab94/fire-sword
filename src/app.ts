import { Snake } from "./items/Snake"

function app(elementId: string): void {
    let snake = new Snake(elementId)
    snake.start()
}

app('app')