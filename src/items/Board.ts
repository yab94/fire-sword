import { Cell } from "./cell"

export class Board {
    width: number
    height: number
    cellSize: number
    cells: Cell[] = []
    constructor(width: number, height: number, cellSize: number) {
        if(width < 0) throw new Error('invalid width "' + width + '", must be upper than 0')
        if(height < 0) throw new Error('invalid height "' + height + '", must be upper than 0')
        this.width = width
        this.height = height
        this.cellSize = cellSize
        this.initCells()
    }

    initCells(): Board {
        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {
                this.cells.push(new Cell(this, x, y))
            }   
        }
        return this
    }

    getCell(x: number, y: number): Cell {
        if(x < 0 || this.width <= x) throw new Error('invalid x "' + x + '", must be between 0 and ' + (this.width - 1))
        if(y < 0 || this.height <= y) throw new Error('invalid y "' + y + '", must be between 0 and ' + (this.height - 1))
        let cell = this.cells.find(cell => cell.getX() === x && cell.getY() === y)
        if(cell === undefined) throw new Error('invalid cell')
        return cell
    }

    getWidth(): number {
        return this.width
    }

    getHeight(): number {
        return this.height
    }

    getCellSize(): number {
        return this.cellSize
    }

    render(ctx: CanvasRenderingContext2D): void {
        this.initCells()
        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {
                this.getCell(x, y).render(ctx)
            }   
        }
    }

}