const Web3 = require("aion-web3");
const web3 = new Web3(new Web3.providers.HttpProvider("Your node"));


//optional
const privateKey = "Your PK";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
console.log(account.address);


async function contractCall() {

  const ctAddress = "0xa0FA8118c6B9065789E10eC8a00d618dF053E9f4c7F37258E7b1288bBB148601";

   //calling method getCount(), which takes no argument, and returns a string
   let data = web3.avm.contract.method('getCount').encode();

    console.log(data);

    const Tx = {
      from: account.address,/*optional*/
      to: ctAddress,
      data: data,
      gasPrice: 10000000000,
      gas: 2000000
      //type will be set to default 
    };


    let res = await web3.eth.call(Tx);
    let avmRes = await web3.avm.contract.decode('int', res); 
    console.log(avmRes);
    return avmRes;
}

contractCall();




