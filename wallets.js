const Web3 = require('web3')

var nodeUrl = 'https://mainnet.infura.io/v3/20948e11b7184440ab7f809b9abcd41b';

const web3 = new Web3(nodeUrl);

const entropy = web3.utils.sha3(
  Math.random(0, 1000000).toString(16) + web3.utils.randomHex(32)
)

const wallet = web3.eth.accounts.create(entropy);

console.log(wallet)

// const privateKeyEncrypted = web3.eth.accounts.encrypt(wallet.privateKey, '12345678');

// console.log(privateKeyEncrypted);

// const privateKeyDecrypted = web3.eth.accounts.decrypt(privateKeyEncrypted, '12345678');

// console.log(privateKeyDecrypted);