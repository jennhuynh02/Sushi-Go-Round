const FISH_IMAGE = new Image();
FISH_IMAGE.src = './assets/fish.png';

export default class Chili {
  constructor(pos) {
    this.pos = pos;
    this.type = 'fish';
  }

  draw(context) {
    context.drawImage(FISH_IMAGE, this.pos[0], this.pos[1], 100, 100);
  }
  // creates fish pieces
}
