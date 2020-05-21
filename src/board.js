import Sushi from './sushi';
import Chili from './chili';
import SushiMonster from './sushi_monster';
import Tile from './tile';
import ScoreBar from './scorebar';

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
    this.allConveyorBeltItems = [];
    this.sushiMonster = [];
    this.possiblePos = [];
    this.tiles = [];
    this.score = 4;
    this.scorebar = [];
    this.allPossiblePos();
    this.addItemsOntoConveyorBelt();
    this.addSushiMonster();
    this.addTiles();
    this.addScoreBar();

    document.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        alert('Monster is attempting to eat!');
        this.eatItem();
      }
    });
  }

  drawConveyorBeltItems(context) {
    const { allConveyorBeltItems } = this;
    allConveyorBeltItems.forEach((item) => (
      item.draw(context)
    ));
  }

  drawSushiMonster(context) {
    const { sushiMonster } = this;
    sushiMonster[0].drawSushiMonster(context);
  }

  drawScoreBar(context) {
    const { scorebar } = this;
    scorebar[0].drawScore(context);
  }

  drawTiles(context) {
    const { tiles } = this;
    tiles.forEach((tile) => (
      tile.createTile(context)
    ));
  }

  addSushiMonster() {
    this.sushiMonster.push(new SushiMonster([500, 500]));
  }

  addScoreBar() {
    const { score } = this;
    this.scorebar.push(new ScoreBar(score));
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
    possiblePos.forEach((el) => (
      this.tiles.push(new Tile(el))
    ));
  }

  addItemsOntoConveyorBelt() {
    const orderedPositions = this.possiblePos.slice(0);
    const scrambledPositions = [];
    const { allConveyorBeltItems } = this;

    while (orderedPositions.length !== 0) {
      const random = Math.floor(Math.random() * Math.floor(orderedPositions.length));
      scrambledPositions.push(orderedPositions[random]);
      orderedPositions.splice(random, 1);
    }

    for (let i = 0; i < 18; i += 1) {
      allConveyorBeltItems.push(new Sushi(scrambledPositions[i]));
    }

    for (let i = 18; i < 28; i += 1) {
      allConveyorBeltItems.push(new Chili(scrambledPositions[i]));
    }
  }

  // context is the 2D canvas
  animate(context) {
    context.clearRect(0, 0, 1000, 1000);
    this.drawBoard(context);
    this.drawTiles(context);

    this.drawConveyorBeltItems(context);
    this.drawSushiMonster(context);
    this.drawScoreBar(context);
  }

  eatItem() {
    const { sushiMonster, allConveyorBeltItems } = this;
    const monster = sushiMonster[0];
    const horizontal = monster.pos[0];
    const vertical = monster.pos[1];
    console.log(allConveyorBeltItems);

    allConveyorBeltItems.forEach((item, index) => {
      const left = item.pos[0];
      const right = item.pos[1];
      if (((left === horizontal - 100) && (right === vertical))
      || ((left === horizontal + 100) && (right === vertical))
      || ((right === vertical - 100) && (left === horizontal))
      || ((right === vertical + 100) && (left === horizontal))) {
        allConveyorBeltItems.splice(index, 1);
      }
    });
  }

  step() {
    this.allConveyorBeltItems.forEach((item) => {
    // subtracting to go upwards until pos[1] reaches 100, then we move to the right
      if ((item.pos[0] === 100) && (item.pos[1] !== 100)) {
        item.pos[1] -= 100;
      } else if ((item.pos[1] === 100) && (item.pos[0] !== 800)) {
        item.pos[0] += 100;
      } else if ((item.pos[0] === 800) && (item.pos[1] !== 800)) {
        item.pos[1] += 100;
      } else if (item.pos[1] === 800) {
        item.pos[0] -= 100;
      }
    });
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
