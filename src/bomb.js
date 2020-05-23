const BOMB_IMAGE = new Image();
BOMB_IMAGE.src = './assets/bomb.png';

export default class Bomb {
  constructor(pos) {
    this.pos = pos;
    this.type = 'bomb';
  }

  draw(context) {
    context.drawImage(BOMB_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }
  // creates bomb pieces
}
