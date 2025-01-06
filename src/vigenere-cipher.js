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
  constructor(isDirect = true) {
    this.isDirect = isDirect; // Determines the machine type: direct or reverse
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const formattedMessage = message.toUpperCase();
    const formattedKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < formattedMessage.length; i++) {
      const char = formattedMessage[i];
      if (char >= 'A' && char <= 'Z') {
        const messageCharCode = char.charCodeAt(0) - 65;
        const keyCharCode = formattedKey[keyIndex % formattedKey.length].charCodeAt(0) - 65;
        const encryptedChar = String.fromCharCode(((messageCharCode + keyCharCode) % 26) + 65);
        result += encryptedChar;
        keyIndex++;
      } else {
        result += char; // Preserve non-alphabet characters
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const formattedMessage = encryptedMessage.toUpperCase();
    const formattedKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < formattedMessage.length; i++) {
      const char = formattedMessage[i];
      if (char >= 'A' && char <= 'Z') {
        const messageCharCode = char.charCodeAt(0) - 65;
        const keyCharCode = formattedKey[keyIndex % formattedKey.length].charCodeAt(0) - 65;
        const decryptedChar = String.fromCharCode(((messageCharCode - keyCharCode + 26) % 26) + 65);
        result += decryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
