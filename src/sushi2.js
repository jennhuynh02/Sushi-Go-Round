const SUSHITWO_IMAGE = new Image();
SUSHITWO_IMAGE.src = './assets/sushi2.png';

export default class Sushi {
  constructor(pos) {
    this.pos = pos;
    this.type = 'sushi2';
  }

  draw(context) {
    context.drawImage(SUSHITWO_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }

  // creates roe sushi pieces
}
