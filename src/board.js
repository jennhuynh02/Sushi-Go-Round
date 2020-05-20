import Sushi from './sushi';
import Chili from './chili';
// 10x10 (1000px by 1000px) board display = [
//   [_,_,_,_,_,_,_,_,_,_],
//   [_,S,C,S,S,C,S,S,C,_], Y100
//   [_,C,_,_,_,_,_,_,S,_],
//   [_,S,_,_,_,_,_,_,C,_],
//   [_,S,_,_,_,_,_,_,S,_],
//   [_,C,_,_,_,_,_,_,S,_],
//   [_,S,_,_,_,_,_,_,C,_],
//   [_,S,_,_,_,_,_,_,S,_],
//   [_,C,S,S,C,S,S,C,S,_], Y800
//   [_,_,_,_,_,_,_,_,_,_]
// ] X100 ---------> X800

export default class Board {
  constructor(dimensions) {
    // 1000px x 1000px
    this.dimensions = dimensions;
    this.cols = 10;
    this.rows = 10;
    // tile is for grid on board
    this.tileSize = 100;
    this.numSushis = 16;
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

  // initial seed x,y positions for sushi
  addSushi() {
    this.sushis.push(...[
      new Sushi([100, 100]),
      new Sushi([300, 100]),
      new Sushi([400, 100]),
      new Sushi([600, 100]),
      new Sushi([700, 100]),

      new Sushi([800, 200]),
      new Sushi([800, 400]),
      new Sushi([800, 500]),
      new Sushi([800, 700]),
      new Sushi([800, 800]),

      new Sushi([600, 800]),
      new Sushi([500, 800]),
      new Sushi([300, 800]),
      new Sushi([200, 800]),

      new Sushi([100, 300]),
      new Sushi([100, 400]),
      new Sushi([100, 600]),
      new Sushi([100, 700]),
    ]);
  }

  // initial seed x,y positions for chili
  addChilis() {
    this.chilis.push(...[
      new Chili([200, 100]),
      new Chili([500, 100]),
      new Chili([800, 100]),
      new Chili([800, 300]),
      new Chili([800, 600]),
      new Chili([700, 800]),
      new Chili([400, 800]),
      new Chili([100, 800]),
      new Chili([100, 200]),
      new Chili([100, 500]),
    ]);
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
      // pos[100,200]
      // goes to pos[100,100]
        sushi.pos[1] -= 100;
      } else if ((sushi.pos[1] === 100) && (sushi.pos[0] !== 800)) {
        sushi.pos[0] += 100;
      } else if ((sushi.pos[0] === 800) && (sushi.pos[1] !== 800)) {
        sushi.pos[1] += 100;
      } else if (sushi.pos[1] === 800) {
        sushi.pos[0] -= 100;
      }

    });

    this.chilis.forEach((chili) => {
      if ((chili.pos[0] === 100) && (chili.pos[1] !== 100)) {
        chili.pos[1] -= 100;
      } else if ((chili.pos[1] === 100) && (chili.pos[0] !== 800)) {
        chili.pos[0] += 100;
      } else if ((chili.pos[0] === 800) && (chili.pos[1] !== 800)) {
        chili.pos[1] += 100;
      } else if (chili.pos[1] === 800) {
        chili.pos[0] -= 100;
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
