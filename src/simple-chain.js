const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  data: [],
  getLength() {
    return this.data.length;
  },
  addLink(value) {
    this.data.push(`( ${typeof value !== 'undefined' ? value : ''} )`);
    return this;
  },
  removeLink(position) {
    // console.log(position);

    if (this.data[position - 1]) {
      // this.data = [];
      this.data = this.data.filter(el => el !== this.data[position - 1]);
      return this;
    }
    
    // Error("You can't remove incorrect link!");
    this.data = [];

    throw Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.data.reverse();
    return this;
  },
  finishChain() {
    let result = "";
    this.data.forEach((el, id) => {
      if (id === this.data.length - 1) {
        result += `${el}`;
      } else {
        result += `${el}~~`;
      }
    });
    console.log(result);
    this.data = [];
    return result;
  }
};

// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();
// chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain();
// chainMaker.addLink('8.963').reverseChain().removeLink().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain();
// chainMaker.reverseChain().addLink('ABC').reverseChain().reverseChain().reverseChain().addLink(Infinity).addLink(false).addLink(0).addLink('8.963').removeLink(2).removeLink(1).reverseChain().finishChain()

module.exports = {
  chainMaker
};
