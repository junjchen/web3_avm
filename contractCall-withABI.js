;
// Import Dependencies
const Web3 = require("aion-web3");

// Set up node
const web3 = new Web3(new Web3.providers.HttpProvider(""));
const pk = "";

let abi = `
0.0
org.aion.web3.Counter
Clinit: ()
public static void incrementCounter(int)
public static void decrementCounter(int)
public static int getCount()
`;

let contractAddress = "0xA07d948d7D35d3dA6fCf4f3E7B9De5B7DC655d9C4Baae77bD7B4499d9E4289AF";

let abiObj = web3.avm.contract.Interface(abi); 

web3.avm.contract.initBinding(contractAddress, abiObj,pk);



// Create the Function
async function contractCall() {
  
    // Query the Blockchain
    let res = await web3.avm.contract.readOnly.getCount();
    console.log("Counter: " + res);
    return res;
};

// Call the Function
contractCall();



