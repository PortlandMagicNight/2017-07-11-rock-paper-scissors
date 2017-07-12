let lastPlay = null;

module.exports = function (lastWon=null) {
    return lastPlay === null ? 2 : (lastPlay + 2) % 3;
}
