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
    // health score bar label
    context.font = "26px fantasy";
    context.fillStyle = "black";
    context.fillText("Health Score Bar", 400, 40);
    if (num > 0 && num < 6) {
      // health score in red zone
      context.fillStyle = 'yellow';
      context.fillRect(300, 60, scorebarXaxis[num], 25);

      context.font = "26px fantasy";
      context.fillStyle = 'limegreen';
      context.fillText(`${num * 10}%`, 320 + scorebarXaxis[num], 80);
    } else if (num >= 6 && num <= 10) {
      // health score in red zone
      context.fillStyle = 'green';
      context.fillRect(300, 60, scorebarXaxis[num], 25);

      context.font = "26px fantasy";
      context.fillStyle = 'green';
      context.fillText(`${num * 10}%`, 320 + scorebarXaxis[num], 80);
    } else if (num === 0) {
      alert('Sushi Monster is not happy!!!');
    }
  }
}
