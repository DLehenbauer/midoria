import React from 'react';
import { MapView } from './components/map';
import { Map } from 'midoria-data';
import './App.css';

const map = new Map(1000, 1000);

function App() {
    return (
        <div>
          <MapView map={map} tiles={({ tileWidth: 64, tileHeight: 64 })}></MapView>
        </div>
    );
}

export default App;
