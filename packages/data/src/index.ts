import ndarray from "ndarray";

export class Map {
    private cells: ndarray;

    constructor (width: number, height: number) {
        this.cells = ndarray(new Int32Array(width * height), [width, height]);
    }

    public get width() { return this.cells.shape[0]; }
    public get height() { return this.cells.shape[1]; }

    public get(x: number, y: number) { return this.cells.get(x, y); }
    public set(x: number, y: number, value: number) { return this.cells.set(x, y, value); }
}
