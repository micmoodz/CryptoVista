// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleWallet {
    address public owner;

    event Deposit(address indexed sender, uint amount);
    event Withdraw(address indexed receiver, uint amount);

    constructor() {
        owner = msg.sender;
    }

    // Accept ETH deposits
    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }

    // Withdraw ETH (only owner)
    function withdraw(uint amount) external {
        require(msg.sender == owner, "Only owner can withdraw");
        require(address(this).balance >= amount, "Insufficient balance");
        payable(owner).transfer(amount);
        emit Withdraw(owner, amount);
    }

    // Get contract balance
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}
