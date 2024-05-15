-- Quick start

git clone https://github.com/marioruben/HardhatETH.git
cd HardhatETH
npm install

-- Once installed let´s configure the network
Go to the file .env and
put your mnemonic key and RPC_NODE

compile the contract:
npx hardhat compile

to execute contract HelloWorld :
npx hardhat ignition deploy ignition/modules/HelloWorld.ts --network sepolia
