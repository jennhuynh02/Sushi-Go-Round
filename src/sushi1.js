const SUSHIONE_IMAGE = new Image();
SUSHIONE_IMAGE.src = './assets/sushi1.png';

export default class Sushi {
  constructor(pos) {
    this.pos = pos;
    this.type = 'sushi1';
  }

  draw(context) {
    context.drawImage(SUSHIONE_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }

  // creates roe sushi pieces
}
