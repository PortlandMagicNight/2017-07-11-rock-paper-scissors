let lastPlay = null;

module.exports = function (lastWon=null) {
  console.log('running up')
    return lastPlay === null ? 0 : (lastPlay + 1) % 3;
}
