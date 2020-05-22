import Board from './board';

export default class SushiGoRound {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    // set in index.css 1000x1000px
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.beltTime = 1000;
    this.level = 0;
    document.getElementById('level').innerHTML = this.level;
    this.restart();
  }

  restart() {
    this.board = new Board(this.dimensions);
    this.animate();
    setInterval(() => {
      // this is how fast monster moves
      this.animate();
    }, 50);

    this.board.clearConveyorBelt();
    this.board.addItemsOntoConveyorBelt();
    console.log(this.beltTime);
    let interval = setInterval(() => {
      console.log("tick1");
      this.board.step();
    }, this.beltTime);

    setInterval(() => {
      this.board.clearConveyorBelt();
      this.level += 1;
      document.getElementById('level').innerHTML = this.level;
      this.board.addItemsOntoConveyorBelt();
      this.beltTime -= 25;
      console.log(this.beltTime);
      clearInterval(interval);
      interval = setInterval(() => {
        console.log("tick2");
        this.board.step();
      }, this.beltTime);
      // this is how fast conveyor belt items move
    }, 10000);
    // this is how fast the convertor belt refreshes

    // setTimeout(() => {
    // }, 25);
  }

  animate() {
    this.board.animate(this.context);
  }
}
