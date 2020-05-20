import Board from './board';

export default class SushiGoRound {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    // set in index.css 1000x1000px
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  restart() {
    this.board = new Board(this.dimensions);
    // setTimeout(() => {
    this.animate();
    setInterval(() => {
    // this is how fast monster moves
      this.animate();
    }, 50);
    setInterval(() => {
    // this is how fast convery belt items move
      this.board.step();
    }, 1000);
    // }, 25);
  }

  animate() {
    this.board.animate(this.context);
  }
}
