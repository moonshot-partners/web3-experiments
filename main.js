var Web3 = require('web3');

var nodeUrl = 'https://mainnet.infura.io/v3/20948e11b7184440ab7f809b9abcd41b';
var web3 = new Web3(nodeUrl);

var address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';

web3.eth.getBalance(address, (err, _balance) => {
  console.log(web3.utils.fromWei(_balance, 'ether'))
});

