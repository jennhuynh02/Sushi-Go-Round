const SUSHI_IMAGE = new Image();
SUSHI_IMAGE.src = '../assets/sushi6.png';

export default class Sushi {
  constructor(pos) {
    this.pos = pos;
    this.type = 'sushi';
  }

  draw(context) {
    context.drawImage(SUSHI_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }

  // creates sushi pieces
}
