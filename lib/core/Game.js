const FPS = 60;
const FRAME_DURATION = 1000 / FPS;

class Game {

  constructor() {
    this.width = 0;
    this.height = 0;
    this.running = false;
    this.frames = 0;
    this.scenes = {};
    this.scene = null;
    this.previousTime = null;
    this.delta = null;
    this.canvas = null;
    this.context = null;
    this.elapsed = 0;
    this.backgroundColor = 'black';
    this.paused = false;
  }

  getCanvas() {
    return this.canvas;
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.setEvents();
  }

  setEvents() {
    const events = [
      'click',
      'mousemove',
      'touchstart',
      'touchend',
      'touchmove',
      'touchcancel',
    ];
    events.forEach(name => {
      this.canvas.addEventListener(
        name,
        event => {
          event.preventDefault();
          if (event.changedTouches) {
            var touches = event.changedTouches;
            for (var i = 0; i < touches.length; i++) {
              var x = touches[i].pageX - this.scene.x;
              var y = touches[i].pageY - this.scene.y;
              if (this.scene.emit) {
                this.scene.emit(name, x, y, event, i);
              }
            }
          } else {
            var x = event.pageX - this.scene.x;
            var y = event.pageY - this.scene.y;
            if (this.scene.emit) {
              this.scene.emit(name, x, y, event);
            }
          }
        },
        false
      );
    });
  }

  getContext() {
    return this.context;
  }

  addScenes(scenes) {
    this.scenes = scenes;
  }

  addScene(name, scene) {
    this.scenes[name] = scene;
  }

  getScene() {
    return this.scene;
  }

  setScene(name) {
    this.scene = this.scenes[name];
    this.scene.emit('setup', { Game: this });
  }

  get fps() {
    return Math.round(1 / this.elapsed);
  }

  run() {
    if (this.running) {
      return;
    }
    this.running = true;
    if (window) {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for (
        var x = 0;
        x < vendors.length && !window.requestAnimationFrame;
        ++x
      ) {
        window.requestAnimationFrame =
          window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] ||
          window[vendors[x] + 'CancelRequestAnimationFrame'];
      }
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (callback, element) => {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(() => {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = id => {
          clearTimeout(id);
        };
      }
    }
    if (document.addEventListener) {
      document.addEventListener(
        'DOMContentLoaded',
        () => this.gameLoop(),
        false
      );
    }
  }

  gameLoop() {
    // Call the next iteration of the game loop
    window.requestAnimationFrame(() => this.gameLoop());

    // Calculate the delta time between this current timestamp (frame) and the previous
    var now = window.performance.now();
    this.elapsed = (now - (this.previousTime || now)) / 1000;
    this.delta = now - this.previousTime;

    //correct any huge unexpected gaps in the delta
    if (this.delta > 1000) {
      this.delta = FRAME_DURATION;
    }

    // Store the current transformation matrix
    this.context.save();

    // // Use the identity matrix while clearing the canvas
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0, 0, this.width, this.height);

    // // Restore the transform
    this.context.restore();

    // // Fill the background color
    this.context.fillStyle = this.backgroundColor;
    this.context.fillRect(0, 0, this.width, this.height);

    // //Update all of the game components
    if (this.scene && this.scene.update) {
      this.scene.update({
        context: this.context, 
        scene: this.scene, 
        Game: this,
      });
    }

    //set the current time to be used as the previous
    //for the next frame
    this.previousTime = now;
  }

}

export default new Game();