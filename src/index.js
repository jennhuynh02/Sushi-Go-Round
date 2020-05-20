import SushiGoRound from './game';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas');
  const game = new SushiGoRound(canvas);
  console.log('Webpack is working!');
});