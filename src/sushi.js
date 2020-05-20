export default class Sushi {
  constructor(pos) {
    this.pos = pos;
  }

  createSushi(context) {
    const img = new Image();
    img.src = '../assets/sushi1.jpg';
    img.onload = () => {
      context.drawImage(img, this.pos[0], this.pos[1], 100, 100);
    };
  }

  // creates sushi pieces
}
