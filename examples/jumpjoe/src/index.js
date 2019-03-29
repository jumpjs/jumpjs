import * as Game from 'core/Game';
import StartScene from 'scenes/Start';
// import GameScene from 'game/scenes/Game';

Game.addScene('start', StartScene);
// Game.addScene('game', GameScene);
// Game.setScene('start');
Game.run({
  width: 700,
  height: 500,
  backgroundColor: 'white',
});
