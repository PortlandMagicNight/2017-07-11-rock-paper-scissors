let lastPlay = null;

module.exports = function (lastWon=null) {
    return lastPlay === null ? 0 : (lastPlay + 1) % 3;
}
