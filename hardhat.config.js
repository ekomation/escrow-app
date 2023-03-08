//require('@nomicfoundation/hardhat-toolbox');
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/WA5kzdkfRExcOuysOOPvOLSSTmnzBXtx',
      accounts: ['72b7671eacc63b311b8504652dadd72b36909e45b9ff17a59c59f3951b0004d6']
    },
  }
};


