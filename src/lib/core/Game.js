var FPS = 60;
var FRAME_DURATION = 1000 / FPS;
var fps = 0;
var frames = 0;
var scenes = {};
var currentScene = null;
var previousTime = null;
var delta = null;
var canvas = null;
var context = null;
var elapsed = 0;

var Game = {
  paused: false,
  getCanvas() {
    return canvas;
  },
  setCanvas(_canvas) {
    canvas = _canvas;
    context = canvas.getContext('2d');
    canvas.addEventListener('click', function(event) {
      var x = event.pageX - canvas.offsetLeft;
      var y = event.pageY - canvas.offsetTop;
      currentScene.onClick(x, y, event);
    }, false);
  },
  getContext() {
    return context;
  },
  addScene(name, scene) {
    scenes[name] = scene;
  },
  getCurrentScene() {
    return currentScene;
  },
  setCurrentScene(name) {
    currentScene = scenes[name];
    Game.resetCurrentScene();
  },
  resetCurrentScene() {
    if (currentScene) {
      currentScene.reset();
    }
  },
  getDelta() {
    return delta;
  },
  getFPS() {
    return Math.round(1 / elapsed);
  },
  isMobile: {
    Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any() {
      return (
        Game.isMobile.Android() ||
        Game.isMobile.BlackBerry() ||
        Game.isMobile.iOS() ||
        Game.isMobile.Opera() ||
        Game.isMobile.Windows()
      );
    }
  },
  run() {
    _gameLoop();
  }
};

module.exports = Game;

function _gameLoop() {

  //Call the next iteration of the game loop
  window.requestAnimationFrame(() => _gameLoop());

  //calculate the delta time between this current timestamp (frame)
  //and the previous
  var now = window.performance.now();
  elapsed = (now - (previousTime || now)) / 1000;
  delta = now - previousTime;

  //correct any huge unexpected gaps in the delta
  if (delta > 1000) {
    delta = FRAME_DURATION;
  }

  // Store the current transformation matrix
  context.save();

  // Use the identity matrix while clearing the canvas
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Restore the transform
  context.restore();

  //Update all of the game components
  if (currentScene) {
    currentScene.update();
  }

  //set the current time to be used as the previous
  //for the next frame
  previousTime = now;

}
