import { ethers } from 'ethers';
//import Escrow from './artifacts/contracts/Escrow.sol/Escrow/';

export default async function deploy(signer, arbiter, beneficiary, value) {
  const factory = new ethers.ContractFactory(
    [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_arbiter",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Approved",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "arbiter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "beneficiary",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "depositor",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isApproved",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
    "0x608060405260405161064138038061064183398181016040528101906100259190610151565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610191565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061011e826100f3565b9050919050565b61012e81610113565b811461013957600080fd5b50565b60008151905061014b81610125565b92915050565b60008060408385031215610168576101676100ee565b5b60006101768582860161013c565b92505060206101878582860161013c565b9150509250929050565b6104a1806101a06000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806312424e3f1461005c57806328f371aa1461006657806338af3eed14610084578063c7c4ff46146100a2578063fe25e00a146100c0575b600080fd5b6100646100de565b005b61006e61025f565b60405161007b91906102fd565b60405180910390f35b61008c610272565b6040516100999190610359565b60405180910390f35b6100aa610298565b6040516100b79190610359565b60405180910390f35b6100c86102be565b6040516100d59190610359565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461013657600080fd5b60004790506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1682604051610183906103a5565b60006040518083038185875af1925050503d80600081146101c0576040519150601f19603f3d011682016040523d82523d6000602084013e6101c5565b606091505b5050905080610209576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020090610417565b60405180910390fd5b7f3ad93af63cb7967b23e4fb500b7d7d28b07516325dcf341f88bebf959d82c1cb826040516102389190610450565b60405180910390a16001600260146101000a81548160ff0219169083151502179055505050565b600260149054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008115159050919050565b6102f7816102e2565b82525050565b600060208201905061031260008301846102ee565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061034382610318565b9050919050565b61035381610338565b82525050565b600060208201905061036e600083018461034a565b92915050565b600081905092915050565b50565b600061038f600083610374565b915061039a8261037f565b600082019050919050565b60006103b082610382565b9150819050919050565b600082825260208201905092915050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b60006104016014836103ba565b915061040c826103cb565b602082019050919050565b60006020820190508181036000830152610430816103f4565b9050919050565b6000819050919050565b61044a81610437565b82525050565b60006020820190506104656000830184610441565b9291505056fea26469706673582212207bc3385e4878c0f490dbd312dc09582567d2c44045c950ce9de17313267202b764736f6c63430008110033",
    signer
  );

  return factory.deploy(arbiter, beneficiary, { value });
}
