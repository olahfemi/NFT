import { ethers } from "hardhat";

async function main() {


  const OlahFemi = await ethers.getContractFactory("OlahFemi");
  const olahfemi = await OlahFemi.deploy();

  await olahfemi.deployed();

  console.log(`OlahFemi deployed to ${olahfemi.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// CONTRACTADDRESS = 0x4D4CCcef62BA334066bf7e732Db2a530AF855A04
