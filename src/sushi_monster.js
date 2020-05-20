const SUSHI_MONSTER_IMAGE = new Image();
SUSHI_MONSTER_IMAGE.src = '../assets/lickitung.gif';

export default class SushiMonster {
  constructor(pos) {
    this.pos = pos;
  }

  // POSSIBLE MOVES WITHIN SUSHI CONVEYOR BELT
  // [x,x,x,x,x,x,]
  // [x,x,x,x,x,x,]
  // [x,x,x,x,x,x,]
  // [x,x,x,x,x,x,]
  // [x,x,x,x,x,x,]
  // [x,x,x,x,x,x,]

  // MOVE DIRS = {
//   up: [0,-100],
//   left: [-100,0],
//   right: [100,0],
//   down: [0,100],
// };

  createSushiMonster(context) {
    context.drawImage(SUSHI_MONSTER_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }
  // creates SushiMonster piece
}

