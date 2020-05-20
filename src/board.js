import Sushi from './sushi';
import Chili from './chili';
// 10x10 (1000px by 1000px) board display = [
//   [_,_,_,_,_,_,_,_,_,_],
//   [_,S,S,S,S,S,S,S,S,_],
//   [_,S,_,_,_,_,_,_,S,_],
//   [_,S,_,_,_,_,_,_,S,_],
//   [_,S,_,_,_,_,_,_,S,_],
//   [_,S,_,_,_,_,_,_,S,_],
//   [_,S,_,_,_,_,_,_,S,_],
//   [_,S,_,_,_,_,_,_,S,_],
//   [_,S,S,S,S,S,S,S,S,_],
//   [_,_,_,_,_,_,_,_,_,_]
// ]
// 28 slots on conveyor belt = 18 sushis + 10 chilis

export default class Board {
  constructor(dimensions) {
    // 1000px x 1000px
    this.dimensions = dimensions;
    this.cols = 10;
    this.rows = 10;
    // tile is for grid on board
    this.tileSize = 100;
    this.sushis = [];
    this.chilis = [];
    this.addSushi();
    this.addChilis();
  }

  drawSushis(context) {
    const { sushis } = this;
    sushis.forEach((sushi) => (
      sushi.createSushi(context)
    ));
  }

  drawChilis(context) {
    const { chilis } = this;
    chilis.forEach((chili) => (
      chili.createChili(context)
    ));
  }

  addSushi() {
    this.sushis.push(new Sushi([100, 500]));
  }

  addChilis() {
    this.chilis.push(new Chili([100, 300]));
  }

  // context is the 2D canvas
  animate(context) {
    context.clearRect(0, 0, 1000, 1000);
    this.drawBoard(context);
    this.drawSushis(context);
    this.drawChilis(context);
  }

  step() {
    // pos[0-left/right, 1-up/down]
    // pos[0] stays between 100LEFT - 800RIGHT X-axis
    // pos[1] stays between 100TOP - 800BOTTOM Y-axis
    // we are moving the position of the sushi upwards (Test)
    // render if statement, if pos[0] reaches
    this.sushis.forEach((sushi) => {
      // subtracting to go upwards until pos[1] reaches 100, then we move to the right
      if ((sushi.pos[0] === 100) && (sushi.pos[1] !== 100)) {
        sushi.pos[1] -= 100;
      }
    });

    this.chilis.forEach((chili) => {
      if ((chili.pos[0] === 100) && (chili.pos[1] !== 100)) {
        chili.pos[1] -= 100;
      }
    });
  }

  drawBoard(context) {
    const { tileSize } = this;

    function createPlatter(x, y) {
      const img = new Image();
      img.src = '../assets/platter.webp';
      img.onload = () => {
        context.drawImage(img, x, y, 100, 100);
      };
    }

    // creates tile for construction of grid
    function createTile(x, y) {
      context.beginPath();
      context.rect(x, y, tileSize, tileSize);
      context.stroke();
      // context.fillRect(x, y, tileSize, tileSize);
    }

    for (let col = 0, x = 0; col < this.cols; col += 1, x += this.tileSize) {
      for (let row = 0, y = 0; row < this.rows; row += 1, y += this.tileSize) {
        createTile(x, y);
      }
    }

    // draws sushi on the top left and right corner of the grid
    createPlatter(900, 0);
    createPlatter(0, 0);
  }
}
