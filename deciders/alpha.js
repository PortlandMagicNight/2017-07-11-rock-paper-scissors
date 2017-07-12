// const choices = [0, 1, 0, 2, 2, 0];

const deciders = [
	'down',
	'up',
	'champion',
	'copyCat',
].map((deciderName) => require(`./${deciderName}`));
// console.log('deciders', deciders);
let deciderIndex = 0;

const history = [];

const getWinsForLast = (n) => history
	.slice(-1 * n)
	.reduce(function (result, val) {
		return result + (val ? 1 : 0);
	}, 0);

const incDecider = () => {
	deciderIndex = (deciderIndex + 1) % deciders.length;
}

const getDecider = () => {
	if (history.length < 10) {
		return deciders[deciderIndex];
	}

	const winCount = getWinsForLast(10);

	if (winCount < 4) {
                incDecider();
		return deciders[deciderIndex];
	}

	if (getWinsForLast(5) === 0) {
                incDecider();
		return deciders[deciderIndex];
	}

	return deciders[deciderIndex];
}

module.exports = class TheDeciders{
  name(){
    return "The Deciders"
  }

  next(lastWon){
    console.log('this is in lastwon', lastWon)
  	// Update history
  	// history.push({ lastWon, lastPlay });
  	history.push(lastWon);

  	// Decide
  	const decider = getDecider();

  	// Record & return decision
  	return decider(lastWon);
  }
}

// Rock = 1
// Paper = 2
// Scissors = 3
