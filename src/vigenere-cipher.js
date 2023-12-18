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
  }
  createAlphabet() {
    const alphabet = [];
    const startCharCode = "A".codePointAt(0);
    const endCharCode = "Z".codePointAt(0);

    for (let i = startCharCode; i <= endCharCode; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    return alphabet;
  }
  encrypt(sourceString, key) {

    console.log(this.calculation(1, sourceString, key));
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
    console.log(this.calculation(0, sourceString, key));
  }
  calculation(mode, sourceString, key) {
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
      const sourceStringLetter = this.alphabet.indexOf(sourceStringMod[i].toUpperCase()) + 1;
      const keyStringLetter = this.alphabet.indexOf(keyStringMod[i].toUpperCase()) + 1;
      // console.log(sourceStringLetter, keyStringLetter);
      let resultLetter = (sourceStringLetter + keyStringLetter) % this.alphabet.length - 1;
      resultString += this.alphabet[resultLetter - 1];
    }

    resultString = resultString.split('');

    const regEx = /[a-z]/;

    const result = sourceString.split('').map(value => regEx.test(value) ? resultString.shift() : value);

    if (!this.directModeOn) {
      return result.reverse().join('');
    }

    return result.join('');
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
// directMachine.encrypt('attack at dawn!', 'alphonse');
directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// reverseMachine.encrypt('attack at dawn!', 'alphonse');
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// directMachine.encrypt('attack at dawn!', 'alphonse');

module.exports = {
  VigenereCipheringMachine
};
