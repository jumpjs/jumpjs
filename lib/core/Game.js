const FPS = 60;
const FRAME_DURATION = 1000 / FPS;

export default class Game {
  constructor() {
    console.log("Hello");

    this.running = false;
    this.frames = 0;
    this.scenes = {};
    this.scene = null;
    this.previousTime = null;
    this.delta = null;
    this.canvas = null;
    this.context = null;
    this.elapsed = 0;
    this.backgroundColor = "white";
    this.paused = false;

    if (window.addEventListener) {
      // window.addEventListener('resize', this.resizeCanvas, false);
    }
  }

  setup() {}

  getCanvas() {
    return this.canvas;
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    const events = [
      "click",
      "mousemove",
      "touchstart",
      "touchend",
      "touchmove",
      "touchcancel"
    ];
    events.forEach(name => {
      canvas.addEventListener(
        name,
        event => {
          // if (!scene) {
          //   throw new Error("No scene");
          // }
          // event.preventDefault();
          // if (event.changedTouches) {
          //   var touches = event.changedTouches;
          //   for (var i = 0; i < touches.length; i++) {
          //     var x = touches[i].pageX - scene.x;
          //     var y = touches[i].pageY - scene.y;
          //     scene.emit(name, x, y, event, i);
          //   }
          // } else {
          //   var x = event.pageX - scene.x;
          //   var y = event.pageY - scene.y;
          //   scene.emit(name, x, y, event);
          // }
        },
        false
      );
    });
    // Game.resizeCanvas();
  }

  getContext() {
    return this.context;
  }

  // addScenes(_scenes) {
  //   scenes = _scenes;
  // }

  // addScene(name, scene) {
  //   scenes[name] = scene;
  // }

  // getScene() {
  //   return scene;
  // }

  // setScene(name) {
  //   scene = scenes[name];
  // }

  get fps() {
    return Math.round(1 / this.elapsed);
  }

  // isMobile() {
  //   return {
  //     Android() {
  //       return navigator.userAgent.match(/Android/i);
  //     },
  //     BlackBerry() {
  //       return navigator.userAgent.match(/BlackBerry/i);
  //     },
  //     iOS() {
  //       return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  //     },
  //     Opera() {
  //       return navigator.userAgent.match(/Opera Mini/i);
  //     },
  //     Windows() {
  //       return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  //     },
  //     any() {
  //       return (
  //         Game.isMobile.Android() ||
  //         Game.isMobile.BlackBerry() ||
  //         Game.isMobile.iOS() ||
  //         Game.isMobile.Opera() ||
  //         Game.isMobile.Windows()
  //       );
  //     }
  //   };
  // }

  run() {
    if (this.running) {
      return;
    }
    this.running = true;
    if (window) {
      var lastTime = 0;
      var vendors = ["ms", "moz", "webkit", "o"];
      for (
        var x = 0;
        x < vendors.length && !window.requestAnimationFrame;
        ++x
      ) {
        window.requestAnimationFrame =
          window[vendors[x] + "RequestAnimationFrame"];
        window.cancelAnimationFrame =
          window[vendors[x] + "CancelAnimationFrame"] ||
          window[vendors[x] + "CancelRequestAnimationFrame"];
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
      document.addEventListener('DOMContentLoaded', this.gameLoop, false);
    }
  }

  gameLoop() {
    // Call the next iteration of the game loop
    window.requestAnimationFrame(this.gameLoop);

    // Calculate the delta time between this current timestamp (frame) and the previous
    var now = window.performance.now();
    this.elapsed = (now - (this.previousTime || now)) / 1000;
    this.delta = now - this.previousTime;

    //correct any huge unexpected gaps in the delta
    if (this.delta > 1000) {
      this.delta = FRAME_DURATION;
    }

    // Store the current transformation matrix
    // context.save();

    // // Use the identity matrix while clearing the canvas
    // context.setTransform(1, 0, 0, 1, 0, 0);
    // context.clearRect(0, 0, canvas.width, canvas.height);

    // // Restore the transform
    // context.restore();

    // // Fill the background color
    // context.fillStyle = Game.backgroundColor;
    // context.fillRect(0, 0, canvas.width, canvas.height);

    // //Update all of the game components
    // if (scene && scene.update) {
    //   scene.update(context, scene, Game);
    // }

    //set the current time to be used as the previous
    //for the next frame
    this.previousTime = now;
  }

  // resizeCanvas() {
  //   const canvas = document.getElementById('jumpjs-canvas');
  //   if (canvas) {
  //     canvas.width  = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //     if (scene) {
  //       scene.emit('resize', window.innerWidth, window.innerHeight, event);
  //     }
  //   }
  // }
}
