
export default class Tile {
  constructor(pos) {
    this.pos = pos;
  }

  createTile(context) {
    const pos = this;
    const myGradient = context.createLinearGradient(0, 0, 0, 170);
    myGradient.addColorStop(0, 'black');
    myGradient.addColorStop(1, 'white');
    context.fillStyle = myGradient;
    context.fillRect(pos[0], pos[1], 100, 100);
  }
  // creates tile for sushi conveyor belt
}
