export default class ScoreBar {
  constructor(num) {
    this.num = num;
    this.scorebarXaxis = [];

    for (let i = 0; i <= 400; i += 40) {
      this.scorebarXaxis.push(i);
    }
  }

  drawScore(context) {
    const { num, scorebarXaxis } = this;
    if (num > 0 && num < 6) {
      context.fillStyle = 'red';
      context.fillRect(300, 40, scorebarXaxis[num], 20);
    } else if (num >= 6 && num <= 10) {
      context.fillStyle = 'green';
      context.fillRect(300, 40, scorebarXaxis[num], 20);
    } else if (num === 0) {
      alert('Sushi Monster is not happy!!!');
    }
  }
}
