const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.directModeOn = direct;
    this.alphabet = this.createAlphabet();
    this.square = this.createSquare();
  }
  createSquare() {
    const square = [];
    for (let i = 0; i < this.alphabet.length; i++) {
        let row = this.alphabet.slice(i);
        row += this.alphabet.slice(0, i);
        square.push(row);
    }
    return square;
  }
  createAlphabet() {
    const alphabet = [];
    const startCharCode = "A".codePointAt(0);
    const endCharCode = "Z".codePointAt(0);

    for (let i = startCharCode; i <= endCharCode; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    return alphabet.join('');
  }
  encrypt(sourceString, key) {

    // return this.calculation(1, sourceString, key);
    console.log(this.square);
    // const sourceStringMod = sourceString.match(/[a-z]/g).join('');
    // let keyStringMod = key;
    // let resultString = '';
    // while (true) {
    //   if (keyStringMod.length >= sourceStringMod.length) {
    //     keyStringMod = keyStringMod.slice(0, sourceStringMod.length);
    //     break
    //   }
    //   keyStringMod += keyStringMod;
    // }

    // for (let i = 0; i < keyStringMod.length; i++) {
    //   const sourceStringLetter = this.alphabet.indexOf(sourceStringMod[i].toUpperCase()) + 1;
    //   const keyStringLetter = this.alphabet.indexOf(keyStringMod[i].toUpperCase()) + 1;
    //   // console.log(sourceStringLetter, keyStringLetter);
    //   const resultLetter = (sourceStringLetter + keyStringLetter) % this.alphabet.length - 1;
    //   // console.log(resultLetter);
    //   resultString += this.alphabet[resultLetter - 1];
    // }

    // resultString = resultString.split('');

    // const regEx = /[a-z]/;

    // const result = sourceString.split('').map(value => regEx.test(value) ? resultString.shift() : value);

    // if (!this.directModeOn) {
    //   return result.reverse().join('');
    // }

    // return result.join('');
  }
  decrypt(sourceString, key) {
    return this.calculation(0, sourceString, key);
    // console.log(this.alphabet);
  }
  calculation(mode, sourceString, key) {
    if (!sourceString || !key) {
      throw Error("Incorrect arguments!");
    }
    const sourceStringMod = sourceString.match(/[a-zA-Z]/g).join('');
    let keyStringMod = key;
    let resultString = '';
    while (true) {
      if (keyStringMod.length >= sourceStringMod.length) {
        keyStringMod = keyStringMod.slice(0, sourceStringMod.length);
        break
      }
      keyStringMod += keyStringMod;
    }

    for (let i = 0; i < keyStringMod.length; i++) {
      let sourceStringLetter = this.alphabet.indexOf(sourceStringMod[i].toUpperCase()) + 1;
      const keyStringLetter = this.alphabet.indexOf(keyStringMod[i].toUpperCase()) + 1;
      // console.log(sourceStringLetter, keyStringLetter);
      // sourceStringLetter = (sourceStringLetter + keyStringLetter) % this.alphabet.length - 1;
      if (!mode) {
        sourceStringLetter = (sourceStringLetter - keyStringLetter + this.alphabet.length) % this.alphabet.length;
      }
      let resultLetter = (sourceStringLetter + keyStringLetter) % this.alphabet.length - 1;
      if (resultLetter < 0) {
        resultLetter = this.alphabet.length - 1;
      }
      resultString += this.alphabet[mode ? resultLetter - 1 : sourceStringLetter];
    }

    resultString = resultString.split('');

    const regEx = /[a-zA-Z]/;

    const result = sourceString.split('').map(value => regEx.test(value) ? resultString.shift() : value);

    if (!this.directModeOn) {
      return result.reverse().join('');
    }

    return result.join('');
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
// console.log(directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));+
directMachine.encrypt('attack at dawn!', 'alphonse');
// console.log(directMachine.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey'));
// console.log(directMachine.encrypt('cryptography', 'verylongkeyword'));
// console.log(directMachine.encrypt('Same length key', 'Samelengthkey'));
// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// reverseMachine.encrypt('attack at dawn!', 'alphonse');
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// directMachine.encrypt('attack at dawn!', 'alphonse');

module.exports = {
  VigenereCipheringMachine
};
