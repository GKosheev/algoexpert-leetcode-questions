function tournamentWinner(competitions, results) {
  const memo = {};

  let leader = competitions[0][0];

  for (let i = 0; i <= results.length - 1; i++) {
    const [cOne, cTwo] = competitions[i];

    if (typeof memo[cOne] !== "number") {
      memo[cOne] = 0;
    }

    if (typeof memo[cTwo] !== "number") {
      memo[cTwo] = 0;
    }

    results[i] === 0 ? (memo[cTwo] += 3) : (memo[cOne] += 3);

    const winner = results[i] === 0 ? cTwo : cOne;

    leader = memo[leader] > memo[winner] ? leader : winner;
  }

  return leader;
}
// O(N) Time O(k) space, where N is number of competitions & k is number of teams
