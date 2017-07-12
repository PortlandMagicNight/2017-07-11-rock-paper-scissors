let lastPlay = null;

module.exports = function (lastWon=null) {
  console.log('running champion')
	const nextPlay = (lastPlay + (lastWon ? 0 : +2)) % 3;
	lastPlay = nextPlay;
	return nextPlay;
}
