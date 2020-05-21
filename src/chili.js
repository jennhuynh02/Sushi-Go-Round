const CHILI_IMAGE = new Image();
CHILI_IMAGE.src = '../assets/chili.png';

export default class Chili {
  constructor(pos) {
    this.pos = pos;
    this.type = 'chili';
  }

  draw(context) {
    context.drawImage(CHILI_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }
  // creates chili pieces
}
