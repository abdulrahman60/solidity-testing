// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract Storage {

    uint256 public favoriteNumber;

    function keep(uint256 _favoriteNumber) public {

        favoriteNumber =_favoriteNumber;
    }
    
}