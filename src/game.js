import Board from './board';

export default class SushiGoRound {
  constructor(canvas) {
    this.context = canvas.getContext('2d');
    // set in index.css 1000x1000px
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.beltTime = 400;
    this.level = 0;
    document.getElementById('level').innerHTML = this.level;
    this.restart();
    // alert('SUSHI-GO-ROUND GAME INSTRUCTIONS: Use keyboard arrows to move the sushi monster.  Press the spacebar when next to the conveyor belt to eat the sushi.  Try to main a hunger satisfaction level of green in the scorebar below.  Avoid the dead fish and chili, once your scorebar is out, you have lost!  Conveyor belt repopulates every level up and gets faster with every level!  Try to move on any of the bombs and game over!');
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
    let interval = setInterval(() => {
      this.board.step();
    }, this.beltTime);

    setInterval(() => {
      this.board.clearConveyorBelt();
      this.level += 1;
      document.getElementById('level').innerHTML = this.level;
      this.board.addItemsOntoConveyorBelt();
      this.beltTime -= 5;
      clearInterval(interval);
      interval = setInterval(() => {
        this.board.step();
      }, this.beltTime);
      // this is how fast conveyor belt items move
    }, 20000);
    // this is how fast the convertor belt refreshes

    // setTimeout(() => {
    // }, 25);
  }

  animate() {
    this.board.animate(this.context);
  }
}
