export interface ITileSet {
    tileWidth: number;
    tileHeight: number;
}

export interface IMapProps {
    width: number;
    height: number;
    tiles: ITileSet;
}
