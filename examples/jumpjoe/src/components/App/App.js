import React, { Component } from 'react';
import game from 'game/app';
class App extends Component {
  componentDidMount() {
    const canvas = document.getElementById('jumpjs-canvas');
    game.start(canvas);
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
      }}>
        <canvas id="jumpjs-canvas" width="700" height="500" />
      </div>
    );
  }
}

export default App;
