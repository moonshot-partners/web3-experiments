const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;

const web3 = new Web3('https://ropsten.infura.io/v3/20948e11b7184440ab7f809b9abcd41b');

const address1 = 'ADDRESS_1';
const address2 = 'ADDRESS_2';

const address1Key = new Buffer.from('PRIVATE_KEY', 'hex');

// web3.eth.getBalance(address1, (err, balance) => {
//   console.log(web3.utils.fromWei(balance, 'ether'));
// })

// web3.eth.getBalance(address2, (err, balance) => {
//   console.log(web3.utils.fromWei(balance, 'ether'));
// })

web3.eth.getTransactionCount(address1, (err, txCount) => {
  let rawTx = {
    nonce: web3.utils.toHex(txCount),
    gasPrice: web3.utils.toHex(web3.utils.toWei('194', 'gwei')), // usar precio medio en ethgasstation.info
    gasLimit: web3.utils.toHex(210000),
    to: address2,
    value: web3.utils.toHex(1000000000000000),
    // data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
  }

  let tx = new Tx(rawTx, {chain: 'ropsten'});
  tx.sign(adress1Key);

  let serializedTx = tx.serialize().toString('hex');

  web3.eth.sendSignedTransaction('0x' + serializedTx).on('receipt', console.log);
})

