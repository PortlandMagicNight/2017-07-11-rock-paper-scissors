let lastPlay = null;

module.exports = function (lastWon=null) {
  console.log('running down')
    return lastPlay === null ? 2 : (lastPlay + 2) % 3;
}
