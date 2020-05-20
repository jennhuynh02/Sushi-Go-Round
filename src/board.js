import Sushi from './sushi';
import Chili from './chili';
import SushiMonster from './sushi_monster';
import Tile from './tile';

const PLATTERIMAGE = new Image();
PLATTERIMAGE.src = '../assets/platter.png';

export default class Board {
  constructor(dimensions) {
    // 1000px x 1000px
    this.dimensions = dimensions;
    this.cols = 10;
    this.rows = 10;
    // tile is for grid on board
    this.tileSize = 100;
    this.numSushis = 18;
    this.numChilis = 10;
    this.sushis = [];
    this.chilis = [];
    this.sushiMonster = [];
    this.possiblePos = [];
    this.tiles = [];
    this.stepSize = 100;
    this.allPossiblePos();
    this.addSushi();
    this.addChilis();
    this.addSushiMonster();
    this.addTiles();

    document.addEventListener('keydown', (event) => {
      const monster = this.sushiMonster[0];
      const horizontal = monster.pos[0];
      const vertical = monster.pos[1];

      if (event.keyCode === 37) {
        // alert('Left arrow of keyboard was smashed');
        if (horizontal > 200) monster.pos[0] -= this.stepSize;
      } else if (event.keyCode === 38) {
        event.preventDefault();
        if (vertical > 200) monster.pos[1] -= this.stepSize;
        // move the SushiMonster to up
      } else if (event.keyCode === 39) {
        if (horizontal <= 600) monster.pos[0] += this.stepSize;
        // move the SushiMonster to right
      } else if (event.keyCode === 40) {
        if (vertical < 700) monster.pos[1] += this.stepSize;
        event.preventDefault();
      // move the SushiMonster to down
      }
    });
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

  drawSushiMonster(context) {
    const { sushiMonster } = this;
    sushiMonster[0].createSushiMonster(context);
  }

  drawTiles(context) {
    const { tiles } = this;
    // tiles[0].createTile(context);
    tiles.forEach((tile) => (
      tile.createTile(context)
    ));
  }

  addSushiMonster() {
    this.sushiMonster.push(new SushiMonster([500, 500]));
  }

  allPossiblePos() {
    const { possiblePos } = this;
    for (let x = 100; x <= 800; x += 100) {
      possiblePos.push([x, 100]);
    }

    for (let y = 200; y <= 800; y += 100) {
      possiblePos.push([800, y]);
    }

    for (let x = 100; x <= 700; x += 100) {
      possiblePos.push([x, 800]);
    }

    for (let y = 200; y <= 700; y += 100) {
      possiblePos.push([100, y]);
    }

    return possiblePos;
  }

  addTiles() {
    const { possiblePos } = this;
    console.log(possiblePos);
    possiblePos.forEach((el) => (
      this.tiles.push(new Tile(el))
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
    this.drawTiles(context);
    this.drawSushis(context);
    this.drawChilis(context);
    this.drawSushiMonster(context);
  }


  step() {

    this.sushis.forEach((sushi) => {
      // subtracting to go upwards until pos[1] reaches 100, then we move to the right
      if ((sushi.pos[0] === 100) && (sushi.pos[1] !== 100)) {
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

    // event listener for key strokes
  }

  drawBoard(context) {
    const { tileSize } = this;

    function createPlatter(x, y) {
      context.drawImage(PLATTERIMAGE, x, y, 100, 100);
    }

    function createTile(x, y) {
      context.beginPath();
      context.rect(x, y, tileSize, tileSize);
      context.stroke();
    }

    for (let col = 0, x = 0; col < this.cols; col += 1, x += this.tileSize) {
      for (let row = 0, y = 0; row < this.rows; row += 1, y += this.tileSize) {
        createTile(x, y);
      }
    }

    // draws sushi on the top left and right corner of the grid
    createPlatter(900, 0);
    createPlatter(0, 900);
    createPlatter(0, 0);
    createPlatter(900, 900);
  }
}
