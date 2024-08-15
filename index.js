const { ethers } = require ('ethers');
const { JsonRpcProvider } = require('ethers/providers');
// const { abi, bytecode } = require('./compile');



async function sendETH(senderPrivateKey, recipientAddress, amountInEther, providerUrl) {
    // Initialize the provider (e.g., Infura, Alchemy, or a local Ethereum node)
    const provider = new JsonRpcProvider(providerUrl);

    // Create a wallet instance from your private key and connect it to the provider
    const wallet = new ethers.Wallet(senderPrivateKey, provider);

    // Convert the amount to Wei (smallest unit of Ether)
    const amountInWei = ethers.parseEther(amountInEther)

    // Create the transaction object
    const tx = {
        to: recipientAddress,
        value: amountInWei
    };

    // Send the transaction
    try {
        const transactionResponse = await wallet.sendTransaction(tx);
        console.log(`Transaction hash: ${transactionResponse.hash}`);

        // Wait for the transaction to be mined
        const receipt = await transactionResponse.wait();
        console.log(`Transaction was mined in block ${receipt.blockNumber}`);
    } catch (error) {
        console.error(`Error sending transaction: ${error}`);
    }
}

// Example usage
const senderPrivateKey = 'f53e2c86f07e2e56a8fc9bd204c27ce59aafeff83f82f54c1e557399150d8c4b'; // Never share your private key publicly!
const recipientAddress = '0xe06C17655CB42f7B7aE39Be483b462A19D380854';
const amountInEther = '0.0067'; // Amount of ETH to send
const providerUrl = 'https://sepolia.infura.io/v3/e0fe561367fe4ac9a226d619bff97fe8';

sendETH(senderPrivateKey, recipientAddress, amountInEther, providerUrl);
