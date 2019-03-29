const { pointInCircle, pointInBox } = require('./utils/math');

const FPS = 60;
const FRAME_DURATION = 1000 / FPS;

let width = 0;
let height = 0;
let running = false;
let scenes = {};
let scene = null;
let previousTime = null;
let delta = null;
let canvas = null;
let context = null;
let elapsed = 0;
let backgroundColor = 'black';

function onTouchEvent(e, n) {
  if (!scene) {
    return;
  }
  let touches = e.changedTouches;
  for (let i = 0; i < touches.length; i++) {
    let x = touches[i].pageX - scene.x;
    let y = touches[i].pageY - scene.y;
    onSceneEvent(n, x, y, e, i);
  }
}

function onMouseEvent(e, n) {
  if (!scene) {
    return;
  }
  let x = e.pageX - scene.x;
  let y = e.pageY - scene.y;
  onSceneEvent(n, x, y, e);
}

function setEvent(e, n) {
  e.preventDefault();
  e.changedTouches ? onTouchEvent(e, n) : onMouseEvent(e, n);
}

function setCanvasEvents() {
  [
    'click',
    'mousemove',
    'touchstart',
    'touchend',
    'touchmove',
    'touchcancel',
  ].forEach(n => canvas.addEventListener(n, e => setEvent(e, n), false));
}

function onSceneEvent(name, x, y, e, index) {
  const gameBounds = canvas.getBoundingClientRect();
  x = x - gameBounds.x;
  y = y - gameBounds.y;
  for (let i = 0; i < scene.components.length; i++) {
    const component = scene.components[i];
    if (component.radius) {
      if (pointInCircle(x, y, component.x, component.y, component.radius)) {
        component.emit(name, x, y);
      }
    } else {
      if (
        pointInBox(
          x,
          y,
          component.x,
          component.y,
          component.width,
          component.height
        )
      ) {
        component.emit(name, x, y);
      }
    }
  }
}

function addScene(name, _scene) {
  scenes[name] = _scene;
}

function setScene(name) {
  scene = scenes[name];
}

function getFps() {
  return Math.round(1 / elapsed);
}

function run(options) {
  if (running) {
    return;
  }
  width = options.width || 800;
  height = options.height || 600;
  backgroundColor = options.backgroundColor || 'black';
  canvas = options.canvas || document.getElementById('jumpjs-canvas');
  context = canvas.getContext('2d');
  setCanvasEvents();
  running = true;
  if (window) {
    let lastTime = 0;
    let vendors = ['ms', 'moz', 'webkit', 'o'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame =
        window[vendors[x] + 'CancelAnimationFrame'] ||
        window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (callback, element) => {
        let currTime = new Date().getTime();
        let timeToCall = Math.max(0, 16 - (currTime - lastTime));
        let id = window.setTimeout(() => {
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
    document.addEventListener('DOMContentLoaded', () => gameLoop(), false);
  }
}

function draw() {
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, width, height);
  context.restore();
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, width, height);
}

function gameLoop() {
  window.requestAnimationFrame(() => gameLoop());
  let now = window.performance.now();
  elapsed = (now - (previousTime || now)) / 1000;
  delta = now - previousTime;
  if (delta > 1000) {
    delta = FRAME_DURATION;
  }
  draw();
  if (scene) {
    scene.update({
      canvas,
      context,
      width,
      height,
      delta,
    });
  }
  previousTime = now;
}

export { setCanvas, addScene, setScene, getFps, run };
