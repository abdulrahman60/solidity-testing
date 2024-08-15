const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Load the Solidity source code
const storagePath = path.resolve(__dirname, 'Storage.sol');
const source = fs.readFileSync(storagePath, 'utf8');

// Compile the contract
const input = {
  language: 'Solidity',
  sources: {
    'Storage.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['abi', 'evm.bytecode'],
      },
    },
  },
};


const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contract = output.contracts['Storage.sol'].Storage;

// Export ABI and Bytecode
module.exports = {
  abi: contract.abi,
  bytecode: contract.evm.bytecode.object,
};
