let lastPlay = null;

module.exports = function (lastWon=null) {
	const nextPlay = (lastPlay + (lastWon ? -1 : 1) +3) % 3;
	lastPlay = nextPlay;
	return nextPlay;
}
