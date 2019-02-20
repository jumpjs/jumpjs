import Game from 'core/Game';
import StartScene from './scenes/Start';
import GameScene from './scenes/Game';

export default {
  start(canvas) {
    Game.width = 700;
    Game.height = 500;
    Game.setCanvas(canvas);
    Game.addScene('start', StartScene);
    Game.addScene('game', GameScene);
    Game.setScene('start');
    Game.run();
  }
};
