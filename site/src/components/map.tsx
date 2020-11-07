import React from "react";
import { Map } from "midoria-data";

interface IMapState {

}

interface IMapTiles {
    tileWidth: number;
    tileHeight: number;
}

interface IMapProps {
    tiles: IMapTiles;
    map: Map;
}

export class MapView extends React.Component<IMapProps, IMapState> {
    render() {
        const { tileWidth: pxWidth, tileHeight: pxHeight } = this.props.tiles;
        const { width, height } = this.props.map;

        const children: JSX.Element[] = [];
        for (let y = 0; y < height; y += pxHeight) {
            for (let x = 0; x < width; x += pxWidth) {
                children.push(<span>.</span>);
            }
            children.push(<br></br>);
        }

        return <pre>
            {children}
        </pre>
    }
}
