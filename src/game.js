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
    // setInterval(() => {
    this.animate();
    setTimeout(() => {
      this.board.step();
      this.animate();
    }, 1000);
    // }, 25);
  }

  animate() {
    this.board.animate(this.context);
  }
}