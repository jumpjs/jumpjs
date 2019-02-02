import React, { Component } from 'react';
import Game from 'jumpjs/lib/core/Game';

class App extends Component {
  componentDidMount() {
    const game = new Game();
    game.setCanvas(document.getElementById('jumpjs-canvas'));
    game.run();
  }
  render() {
    return (
      <div>
        This is the App
        <canvas id="jumpjs-canvas" />
      </div>
    );
  }
}

export default App;
