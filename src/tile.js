// creates tile for sushi conveyor belt

export default class Tile {
  constructor(pos) {
    this.pos = pos;
    this.possiblePos = [];
  }

  createTile(context) {
    const { pos } = this;
    context.fillStyle = 'black';
    context.fillRect(pos[0], pos[1], 100, 100);
  }
}
