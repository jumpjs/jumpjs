import Scene from 'core/Scene';
// import Button from 'core/components/Button';
// import Ledge from '../entities/Ledge';
// import Player from '../entities/Player';
// import Text from 'core/components/Text';
// import BoxCollider2D from 'core/components/BoxCollider2D';

var scene = new Scene({ x: 0, y: 0, width: 700, height: 500 });

// scene.on('setup', ({ Game }) => {

//   var player = new Player({ x: 135, y: 250, width: 24, height: 36 });
//   var ledge = new Ledge({ x: 110, y: 300, width: 100, height: 5 });
//   var ledge2 = new Ledge({ x: 240, y: 370, width: 100, height: 5 });
//   var ledge3 = new Ledge({ x: 75, y: 440, width: 100, height: 5 });

//   const title = new Text({ x: 305, y: 140, width: 200, height: 100, text: 'Jump Joe' });
//   title.font = '64px Georgia';

//   const msgToStart = new Text({ x: 340, y: 210, width: 200, height: 100, text: 'Press enter or click' });
//   msgToStart.font = '24px Georgia';

//   const startBtn = new Button({ x: 440, y: 305, width: 100, height: 35, text: 'Start' });
//   startBtn.addComponent('boxcollider', new BoxCollider2D());
//   startBtn.font = '20px Georgia';
//   startBtn.color = '#6996F9';

//   startBtn.on('collision2D', () => {
//     Game.setScene('game');
//   });
//   startBtn.on('click', () => {
//     Game.setScene('game');
//   });

//   scene.addComponent(player);
//   scene.addComponent(ledge);
//   scene.addComponent(ledge2);
//   scene.addComponent(ledge3);
//   scene.addComponent(title);
//   scene.addComponent(msgToStart);
//   scene.addComponent(startBtn);
// });

export default scene;
