// https://web.dev/performance-scoring/
export default ({ isHex, score }: { isHex: boolean; score: number }) => {
  if (typeof score !== 'number') {
    return !isHex ? 'lightgrey' : '#e0e0e0';
  }

  let scoreColor = !isHex ? 'green' : '#58e3be';

  // medium range
  if (score < 90) {
    scoreColor = !isHex ? 'orange' : '#ffa400';
  }

  // bad
  if (score < 50) {
    scoreColor = !isHex ? 'red' : '#fd4b83';
  }

  return scoreColor;
};
