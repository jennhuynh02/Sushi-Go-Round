// creates SushiMonster piece
const SUSHI_MONSTER_IMAGE = new Image();
SUSHI_MONSTER_IMAGE.src = './assets/lickitung.gif';

export default class SushiMonster {
  constructor(pos) {
    this.pos = pos;
    this.stepSize = 100;
    this.moveSushiMonster();
  }

  moveSushiMonster() {
    document.addEventListener('keydown', (event) => {
      const monster = this;
      const horizontal = monster.pos[0];
      const vertical = monster.pos[1];

      if (event.keyCode === 37) {
        // alert('Left arrow of keyboard was smashed');
        if (horizontal > 200) monster.pos[0] -= this.stepSize;
      } else if (event.keyCode === 38) {
        event.preventDefault();
        if (vertical > 200) monster.pos[1] -= this.stepSize;
        // move the SushiMonster to up
      } else if (event.keyCode === 39) {
        if (horizontal <= 600) monster.pos[0] += this.stepSize;
        // move the SushiMonster to right
      } else if (event.keyCode === 40) {
        if (vertical < 700) monster.pos[1] += this.stepSize;
        event.preventDefault();
      // move the SushiMonster to down
      }
    });
  }

  drawSushiMonster(context) {
    context.drawImage(SUSHI_MONSTER_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }
}
