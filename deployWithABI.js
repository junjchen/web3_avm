const Web3 = require("aion-web3");
let path = require('path');

// Set up web3
const web3 = new Web3(new Web3.providers.HttpProvider(""));
const pk = ""


//Create contract interface
let abi = `0.0
org.aion.web3.Counter
Clinit: ()
public static void incrementCounter(int)
public static void decrementCounter(int)
public static int getCount()
`;


let abiObj = web3.avm.contract.Interface(abi); 
web3.avm.contract.initBinding(null, abiObj, pk,web3);


async function deploy() {

  //contract
  let jarPath = path.join(__dirname,'contracts','Counter.jar');

  //deploy
  let res =await  web3.avm.contract.deploy(jarPath).args([703]).initSend();
  console.log(res);
  console.log("Contract Address: " + res.contractAddress);
  return res;  
}

deploy();


