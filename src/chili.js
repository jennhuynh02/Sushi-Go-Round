export default class Chili {
  constructor(pos) {
    this.pos = pos;
  }

  createChili(context) {
    const img = new Image();
    img.src = '../assets/chili.png';
    img.onload = () => {
      context.drawImage(img, this.pos[0], this.pos[1], 100, 100);
    };
  }
  // creates chili pieces
}
