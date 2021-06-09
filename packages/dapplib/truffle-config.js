require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name recipe mad mistake inner kangaroo army giggle'; 
let testAccounts = [
"0xdab80eb59e3ea6eaaaa4ef1effc875a4ed27b64f7ff8a02bed1411d9bf3d4c30",
"0x68eb62fcc06b38844b839cf6b57494668c2322e8c5766c7d2ced8cc81c4e5643",
"0xa599bf968ed296239ba541503eada222dbee6bb46981f6fc12a1150e80130a06",
"0xb2316dece662e72d8f653262d274022cea5adbf844535bc23b2a5e3a68586a60",
"0x6e143c90920e182dfbf43f954c713d07f3a8052dc6bf19430ed6db7004e9c497",
"0x2e62d1f9d9dc09c564e640910374530cd3c11c92a6cd2e7b5ed527272988a64f",
"0xcbfcec8f4870c0010bb1ba9bf2ccb946221a3b15d1b89f8161c53de04dfbb44f",
"0xaa8ea6c302bfb55109b59923c9d502dda16cfae08713d1ecb6202261ddb450a6",
"0x98e03958d967d1e4fbc32c9e1966814b958632dff35ef80d00c1f5e4b47ace2e",
"0xd245fbd3cb9c634bc0397af644814a199c70561a60f92acab7877b1ec19def6f"
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

