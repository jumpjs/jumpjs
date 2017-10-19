var FPS = 60;
var FRAME_DURATION = 1000 / FPS;
var fps = 0;
var frames = 0;
var scenes = {};
var scene = null;
var previousTime = null;
var delta = null;
var canvas = null;
var context = null;
var elapsed = 0;

var Game = {
  backgroundColor: 'white',
  paused: false,
  getCanvas() {
    return canvas;
  },
  setCanvas(_canvas) {
    canvas = _canvas;
    context = canvas.getContext('2d');
    var events = [
      'click', 'mousemove', 'touchstart',
      'touchend', 'touchmove', 'touchcancel'
    ];
    events.forEach(function(name) {
      canvas.addEventListener(name, function(event) {
        if (!scene) {
          throw new Error('No scene');
        }
        event.preventDefault();
        if (event.changedTouches) {
          var touches = event.changedTouches;
          for (var i = 0; i < touches.length; i++) {
            var x = touches[i].pageX - scene.x;
            var y = touches[i].pageY - scene.y;
            scene.emit(name, x, y, event, i);
          }
        } else {
          var x = event.pageX - scene.x;
          var y = event.pageY - scene.y;
          scene.emit(name, x, y, event);
        }
      }, false);
    });
    Game.resizeCanvas();
  },
  getContext() {
    return context;
  },
  addScenes(_scenes) {
    scenes = _scenes;
  },
  addScene(name, scene) {
    scenes[name] = scene;
  },
  getScene() {
    return scene;
  },
  setScene(name) {
    scene = scenes[name];
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
  },
  resizeCanvas() {
    var canvas = document.getElementById('game');
    if (canvas) {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      if (scene) {
        scene.emit('resize', window.innerWidth, window.innerHeight, event);
      }
    }
  }
};

module.exports = Game;

if (window.addEventListener) {
  window.addEventListener('resize', Game.resizeCanvas, false);
}

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

  // Fill the background color
  context.fillStyle = Game.backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  //Update all of the game components
  if (scene && scene.update) {
    scene.update(context, scene, Game);
  }

  //set the current time to be used as the previous
  //for the next frame
  previousTime = now;

}
