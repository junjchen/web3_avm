const BN = require('bn.js');
const Web3 = require("aion-web3");
const web3 = new Web3(new Web3.providers.HttpProvider(""));

const privateKey = "";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
console.log(account.address);


async function sendTransactionToContract() {

  const ctAddress = "0xa0FA8118c6B9065789E10eC8a00d618dF053E9f4c7F37258E7b1288bBB148601";

   //calling method incrementCounter() which takes one integer argument
 let data = web3.avm.contract.method('incrementCounter').inputs(['int'],[7]).encode();


  console.log(data);
  //construct a transaction
  const Tx = {
    from: account.address,
    to: ctAddress,
    data: data,
    gasPrice: 10000000000,
    gas: 2000000,
    value:new BN("1000000000"),
    type: '0x1'
  };


//client signing
const signed = await web3.eth.accounts.signTransaction(
    Tx, account.privateKey
  ).then((res) => signedCall = res); 

console.log(signed);
const re = await web3.eth.sendSignedTransaction( signed.rawTransaction
  ).on('receipt', receipt => {
     console.log("Receipt received!\ntxHash =", receipt.transactionHash)

});



console.log(re); //reciept
console.log(re.logs[0].topics); //log topic
}

sendTransactionToContract();




