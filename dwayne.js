module.exports = class MyLib {

  constructor() {
    this.rock = 0;
    this.paper = 1;
    this.scissors = 2;

    this.roundCounter = 0;
    this.ourLastMove = null;
  }

  name() {
    return "Dwayne the Bot Johnson";
  }

  next(prevResult) {
    if (this.roundCounter === 0) {
      this.ourLastMove = this.scissors;
      this.roundCounter++;
      return this.scissors;
    } else {
      if (this.ourLastMove === this.rock) {
        if (this.roundCounter % 3 === 0) {
          this.ourLastMove = this.scissors;
          this.roundCounter++;
          return this.scissors;
        } else {
          this.ourLastMove = this.scissors;
          this.roundCounter++;
          return this.scissors;
        }
      } else if (this.ourLastMove === this.paper) {
        if (this.roundCounter % 3 === 0) {
          this.ourLastMove = this.scissors;
          this.roundCounter++;
          return this.scissors;
        } else {
          this.ourLastMove = this.rock;
          this.roundCounter++;
          return this.rock;
        }
      } else {
        if (this.roundCounter % 3 === 0) {
          this.ourLastMove = this.scissors;
          this.roundCounter++;
          return this.scissors;
        } else {
          this.ourLastMove = this.paper;
          this.roundCounter++;
          return this.paper;
        }
      }
    }
  }

  determinePreviousMove(prevResult) {
    if ((this.ourLastMove === this.rock) && (this.prevResult === true) ||
        (this.ourLastMove === this.paper) && (this.prevResult === false) ||
        (this.ourLastMOve === this.scissors) && (this.prevResult === null)) {
      return this.scissors;
    }

    if ((this.ourLastMove === this.paper) && (this.prevResult === true) ||
        (this.ourLastMove === this.scissors) && (this.prevResult === false) ||
        (this.ourLastMOve === this.rock) && (this.prevResult === null)) {
      return this.rock;
    }

    if ((this.ourLastMove === this.scissors) && (this.prevResult === true) ||
        (this.ourLastMove === this.rock) && (this.prevResult === false) ||
        (this.ourLastMOve === this.paper) && (this.prevResult === null)) {
      return this.paper;
    }
  }
}
