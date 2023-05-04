const { ethers } = require("ethers");
// Set up the PolygonScan API endpoint and API key
/*const polygonScanApiEndpoint = 'https://api.polygonscan.com/api';
const polygonScanApiKey = 'a3898f77df8b2f776422b3d5d89ac0f63ad4f68a';

// Set up the Web3 provider to connect to the Polygon network
const web3Provider = new Web3.providers.HttpProvider('https://rpc-mumbai.maticvigil.com/v1/a3898f77df8b2f776422b3d5d89ac0f63ad4f68a');
const web3js = new Web3(web3Provider);*/

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
    document.getElementById("connectButton").innerHTML = "Connected";
    document.getElementById("notificationbox").style.display = "flex";
    document.getElementById("welcomemsg").style.display = "block";
    document.getElementById("notificationicon").style.display = "block";
    document.getElementById("notificationtext").style.display = "block";
    document.getElementById("amount").style.display = "block";
    document.getElementById("executeButton").style.display = "block";
    //document.getElementById("executeButton1").style.display = "block";
    document.getElementById("summarybox").style.display = "block";
    document.getElementById("leftTab").style.display = "inline-block";
    showHere();
    document.getElementById("rightTab").style.display = "inline-block";
    //document.getElementById("resetButton").style.display = "block";
    console.log(accounts);
  } else {
    document.getElementById("connectButton").innerHTML =
      "Please install MetaMask";
  }
}

async function execute() {
  if (typeof window.ethereum !== "undefined") {
    //var textBox = document.getElementById("textBox");
    //var amount = parseFloat(textBox.value);
    var amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount)) {
      alert("Please enter a valid number!");
    } else {
      //contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      //contractAddress = "0x5E3ADAB8e7F15a4DCBA23773C2eb14C73F667086";
      contractAddress = "0x9b625C219df9a06B72766bd8982B8578F39b99Aa";
      const abi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "allowanceAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "allowancePeriodInDays",
              "type": "uint256"
            }
          ],
          "name": "addAllowance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "getPaidAllowance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "removeAllowance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "withdrawAllFromWalletBalance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdrawFromWalletBalance",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ];
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        //const x = await contract.depositToken("0xC51A76C349aFAb94Ac0B237A5A4E542635662e53",1000000000000000);
        const x = await contract.getPaidAllowance(amount*1000000000000000000);
        console.log(x);
      } catch (error) {
        console.log("hello there");
        console.log(error);
      }
    }
  } else {
    document.getElementById("executeButton").innerHTML =
      "Please install MetaMask";
  }
}

function showHere() {
  document.getElementById("leftTab").style.backgroundColor = "#4169E1";
  document.getElementById("rightTab").style.backgroundColor = "lightgrey";
  document.getElementById("here").style.display = "block";
  document.getElementById("there").style.display = "none";
  document.querySelector(".content-container").style.display = "block";
}

function showThere() {
  document.getElementById("rightTab").style.backgroundColor = "#4169E1";
  document.getElementById("leftTab").style.backgroundColor = "lightgrey";
  document.getElementById("here").style.display = "none";
  document.getElementById("there").style.display = "block";
  document.querySelector(".content-container").style.display = "block";
}

// Get the Matic balance of an address
/*async function getBalance(address) {
  try {
    // Get the balance from PolygonScan
    const response = await fetch(`${polygonScanApiEndpoint}?module=account&action=balance&address=${address}&tag=latest&apikey=${polygonScanApiKey}`);
    const data = await response.json();
    const balanceInWei = data.result;
    // Convert the balance to Matic and return it
    const balanceInMatic = web3js.utils.fromWei(balanceInWei, 'ether');
    return balanceInMatic;
  } catch (error) {
    console.log(error);
  }
}

// Call the getBalance function with a Polygon address
getBalance('0xa7dBE3D36872DE3F16F91D02D89CAD61e3a85129')
  .then((balance) => {
    console.log('The balance is', balance);
  });*/

module.exports = {
  connect,
  execute,
  showHere,
  showThere,
};
