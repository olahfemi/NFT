import { ethers } from "hardhat";

async function main() {


  const OlahFemi1 = await ethers.getContractFactory("OlahFemi1");
  const olahfemi1 = await OlahFemi1.deploy();

  await olahfemi1.deployed();

  console.log(`OlahFemi1 is deployed to ${olahfemi1.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// CONTRACTADDRESS on Rinkeby = 0x340bB5bC82c7bcEaF942f893Bef7216490781775
