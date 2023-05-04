# EmployeeAllowancePay

The structure of this code:

There is a Smart Contract that is already deployed on Polygon Testnet Mumbai. Below are the details of the Smart Contract:
Address: 0x9b625C219df9a06B72766bd8982B8578F39b99Aa
Solidity File: AllowancePay.sol
abi: AllowancePay.abi

Reach out to the Smart Contract owner (Srinivas KNS - srinivas.kns@gmail.com) for the Employer to provide a daily allowance to you (the employee). You need to provide your Metamask Account address on Polygon Mumbai Testnet. For adding the Polygon Mumbai testnet manually, here are the fields you will need to add to your MetaMask:

Network Name: Mumbai Testnet
New RPC URL: https://rpc-mumbai.maticvigil.com/
Chain ID: 80001
Currency Symbol: MATIC
Block Explorer URL: https://mumbai.polygonscan.com

Once allowance has been set by the employer, you can simply do the following:

1. Clone this repository on your machine.
2. Check whether you have yarn installed on your device. If not, install it as per the instructions at the link https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
3. Open Command Prompt by typing cmd in Windows Search.
4. On the Command Prompt, Go to the folder EmployeeAllowancePay and run 'yarn install'
5. Run 'yarn build'
6. Run 'yarn http-server'
7. On Chrome browser, open http://192.168.56.1:8080

Below are the Reademe contents of the original project from git which was used as a base:
 

# html-js-ethers-connect

A small html file to show how to connect with metamask from the front-end. This is a minimalistic example what you can find in the [metamask docs](https://docs.metamask.io/guide/create-dapp.html#basic-action-part-1).

You can also check out the following editions for working with es6 syntax:

```
git checkout raw-js
git checkout vitejs
```

# Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you've installed it right if you can run:
    - `git --version`
- [Nodejs & npm](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` And get an ouput like: `vx.x.x`
  - You'll know you've installed npm right if you can run:
    - `npm --version` And get an ouput like `x.x.x`
    - You might need to install it with npm
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` And get an output like: `x.x.x`
    - You might need to install it with npm
- [Metamask](https://metamask.io/)
  - This is a browser extension that lets you interact with the blockchain.

# Quickstart

1. Clone the repo, install dependencies, and create the build.

```
git clone https://github.com/PatrickAlphaC/front-end-metamask-button
cd front-end-metamask-button
yarn
yarn build
```

2. Serve the file

```
yarn http-server
```

And you'll see an output like:

```
Available on:
  http://127.0.0.1:8080
  http://x.x.x.x:8080
Hit CTRL-C to stop the server
```

Copy paste the first link into your browser, and you should see a small button that says "connect".

![Connect](connect.png)

Hit it, and you should see metamask pop up.

# Execute a transaction

If you want to execute a transaction follow this:

Make sure you have the following installed:

1. You'll need to open up a second terminal and run:

```
git clone https://github.com/PatrickAlphaC/hardhat-simple-storage
cd hardhat-simple-storage
yarn
yarn hardhat node
```

This will deploy a sample contract and start a local hardhat blockchain.

2. Update your `index.js` with the new contract address.

In your `index.js` file, update the variable `contractAddress` with the address of the deployed contract. You'll see it near the top of the hardhat output.

3. Rebuild

```
yarn build
```

4. Connect your [metamask](https://metamask.io/) to your local hardhat blockchain.

> **PLEASE USE A METAMASK ACCOUNT THAT ISNT ASSOCIATED WITH ANY REAL MONEY.**
> I usually use a few different browser profiles to separate my metamasks easily.

In the output of the above command, take one of the private key accounts and [import it into your metamask.](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account)

Additionally, add your localhost with chainid 31337 to your metamask.

5. Reserve the front end with `yarn http-server`, and then hit the `Execute` button after connecting

# Thank you!

If you appreciated this, feel free to follow me or donate!

ETH/Polygon/Avalanche/etc Address: 0x9680201d9c93d65a3603d2088d125e955c73BD65

[![Patrick Collins Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/PatrickAlphaC)
[![Patrick Collins YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCn-3f8tw_E1jZvhuHatROwA)
[![Patrick Collins Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/patrickalphac/)
[![Patrick Collins Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@patrick.collins_58673/)
