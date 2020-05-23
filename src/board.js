import Sushi from './sushi';
import SushiOne from './sushi1';
import SushiTwo from './sushi2';
import Chili from './chili';
import Fish from './fish';
import Bomb from './bomb';
import SushiMonster from './sushi_monster';
import Tile from './tile';
import ScoreBar from './scorebar';

const PLATTERIMAGE = new Image();
PLATTERIMAGE.src = './assets/platter.png';

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
    this.bomb = [];
    this.possiblePos = [];
    this.tiles = [];
    this.points = 0;
    this.score = [4];
    this.scorebar = [];
    this.allPossiblePos();
    this.addItemsOntoConveyorBelt();
    this.addSushiMonster();
    this.addTiles();
    this.addScoreBar();
    this.addBomb();

    document.addEventListener('keydown', (event) => {
      if (event.key === ' ') {
        event.preventDefault();
        this.eatItem();
        console.log(this.points);
      }
    });
    document.getElementById('points').innerHTML = this.points;
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

  drawBomb(context) {
    const { bomb } = this;
    bomb[0].draw(context);
    bomb[1].draw(context);
    bomb[2].draw(context);
    bomb[3].draw(context);
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

  addBomb() {
    this.bomb.push(new Bomb([300, 600]),
    new Bomb([600, 300]),
    new Bomb([300, 300]),
    new Bomb([600, 600]),
    );
  }

  addScoreBar() {
    const { score } = this;
    this.scorebar.push(new ScoreBar(score[0]));
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

  clearConveyorBelt() {
    const { allConveyorBeltItems } = this;
    allConveyorBeltItems.splice(0);
  }

  addItemsOntoConveyorBelt() {
    const orderedPositions = [];
    const scrambledPositions = [];
    const { allConveyorBeltItems } = this;
    this.possiblePos.forEach((arr) => {
      const mini = [];
      mini.push(arr[0]);
      mini.push(arr[1]);
      orderedPositions.push(mini);
    });
    while (orderedPositions.length !== 0) {
      const random = Math.floor(Math.random() * Math.floor(orderedPositions.length));
      scrambledPositions.push(orderedPositions[random]);
      orderedPositions.splice(random, 1);
    }

    for (let i = 0; i < 6; i += 1) {
      allConveyorBeltItems.push(new Sushi(scrambledPositions[i]));
    }
    for (let i = 6; i < 12; i += 1) {
      allConveyorBeltItems.push(new SushiOne(scrambledPositions[i]));
    }
    for (let i = 12; i < 18; i += 1) {
      allConveyorBeltItems.push(new SushiTwo(scrambledPositions[i]));
    }
    for (let i = 18; i < 23; i += 1) {
      allConveyorBeltItems.push(new Chili(scrambledPositions[i]));
    }
    for (let i = 23; i < 28; i += 1) {
      allConveyorBeltItems.push(new Fish(scrambledPositions[i]));
    }
    console.log(allConveyorBeltItems);
  }

  // context is the 2D canvas
  animate(context) {
    context.clearRect(0, 0, 1000, 1000);
    this.drawBoard(context);
    this.drawTiles(context);
    this.drawConveyorBeltItems(context);
    this.drawSushiMonster(context);
    this.drawScoreBar(context);
    this.drawBomb(context);
  }

  eatItem() {
    const {
      sushiMonster, allConveyorBeltItems, score, scorebar,
    } = this;
    const monster = sushiMonster[0];
    const horizontal = monster.pos[0];
    const vertical = monster.pos[1];

    for (let i = 0; i < allConveyorBeltItems.length; i += 1) {
      const item = allConveyorBeltItems[i];
      const left = item.pos[0];
      const right = item.pos[1];
      if (((left === horizontal - 100) && (right === vertical))
            || ((left === horizontal + 100) && (right === vertical))
            || ((right === vertical - 100) && (left === horizontal))
            || ((right === vertical + 100) && (left === horizontal))) {
        if ((item.type === 'sushi') && (score[0] !== 10)) {
          score[0] += 1;
          this.points += 10;
        } else if ((item.type === 'sushi') && (score[0] === 10)) {
          this.points += 10;
        } else if ((item.type === 'sushi1') && (score[0] !== 10)) {
          score[0] += 1;
          this.points += 20;
        } else if ((item.type === 'sushi1') && (score[0] === 10)) {
          this.points += 20;
        } else if ((item.type === 'sushi2') && (score[0] !== 10)) {
          score[0] += 1;
          this.points += 30;
        } else if ((item.type === 'sushi2') && (score[0] === 10)) {
          this.points += 30;
        } else if ((item.type === 'chili') && (score[0] !== 1)) {
          score[0] -= 1;
          this.points -= 10;
        } else if ((item.type === 'chili') && (score[0] === 1)) {
          alert('Sushi Monster is NOT HAPPY!!!  TRY AGAIN');
          document.location.reload();
        } else if ((item.type === 'fish') && (score[0] !== 1)) {
          score[0] -= 1;
          this.points -= 25;
        } else if ((item.type === 'fish') && (score[0] === 1)) {
          alert('Sushi Monster is NOT HAPPY!!!  TRY AGAIN');
          document.location.reload();
        }
        allConveyorBeltItems.splice(i, 1);
        document.getElementById('points').innerHTML = this.points;
        scorebar[0].num = score[0];
        break;
      }
    }
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
