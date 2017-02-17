var jumpjs = window.jumpjs;
var Game = jumpjs.core.Game;
var scenes = require('./scenes');

Game.addScene('start', scenes.start);
Game.addScene('game', scenes.game);

jumpjs.ready(document.getElementById('game'), function() {
  Game.setCurrentScene('start');
});
