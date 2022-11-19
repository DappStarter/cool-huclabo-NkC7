require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food mansion random ranch clump hundred light army gasp'; 
let testAccounts = [
"0xd3b3fa773825d780834a31211c77988279ecca6905de6a3346482e2fe17bb4fb",
"0x9e2f93c06af128720ed3e622cc376b07b6d5a1789205720cc54b139ff931f8a6",
"0xc37b90bdf8ce2f4909685a61c07a08ffb8363195db7275821600b94a1e007da5",
"0x76ca4b316606ef80b1a59ad126e93363b913ccb8b814a18bca81e09b3aa5b0bb",
"0x647e5b8032639071992b37468aea0b5385c7fecd828f42ca3e15a78b6655b4e9",
"0xd79e40f954068b1ee0a386c3b989456c719f1de97630765b03e3145bef47677e",
"0x59ebb7b9c488c4648e1cf2d21020f317357046152f4ed2177653e952aada3bbe",
"0x8f7e48b40770b4458ce685a758ea182710137fbe8c6dec7a033c78a0e62c08ab",
"0x156d463b3780f85da4cd7b6c6c296b5e5106760b6cb47fa6ba1d50a942db3ec6",
"0x618340b81337b8acf6f60ce91401070d71714275ef2d8cf4d3d4d3d45ef83648"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

