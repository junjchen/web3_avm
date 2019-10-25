;
// Import Dependencies
const Web3 = require("aion-web3");

// Set up node
const web3 = new Web3(new Web3.providers.HttpProvider(""));
const pk = ""

let abi = `0.0
org.aion.web3.Counter
Clinit: ()
public static void incrementCounter(int)
public static void decrementCounter(int)
public static int getCount()

`;

let contractAddress = "0xA07d948d7D35d3dA6fCf4f3E7B9De5B7DC655d9C4Baae77bD7B4499d9E4289AF";

let abiObj = web3.avm.contract.Interface(abi); 

web3.avm.contract.initBinding(contractAddress, abiObj, pk,web3);



// Create the Function
async function contractTx() {

/*
Set gas, price, value, nonce if needed.
web3.avm.contract.setGas(value) - accepts an integer and set the value of nonce to be used for transactions. The default is 5000000.
web3.avm.contract.setGasPrice(value) - accepts an integer and set the value of nonce to be used for transactions. The default is 2000000.
web3.avm.contract.setValue(value) -  accepts an integer and set the value of nonce to be used for transactions. The default is 0.
web3.avm.contract.setNonce(value) - accepts an integer and set the value of nonce to be used for transactions. The default is null and a value is calculated for each transaction.
web3.avm.contract.setTransactionObject(obj) - accepts an integer and accept an object in the format of a transaction object. 
*/

  
let res = await web3.avm.contract.transaction.incrementCounter(1);
console.log( res); //receipt

};

// Call the Function
contractTx();



