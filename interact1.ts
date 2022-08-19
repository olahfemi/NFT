require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

async function main() {

//   @ts-ignore
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const _value = 1;

  const CONTRACTADDRESS = "0x340bB5bC82c7bcEaF942f893Bef7216490781775";
  const OlahFemi = await ethers.getContractAt("IOlahFemi1", CONTRACTADDRESS);
// @ts-ignore
await OlahFemi.safeMint("0x7Ca74c1abfe9e15b47760a3c5ebe5B90346f9ABC", "https://gateway.pinata.cloud/ipfs/QmbfQikWWapMxSyAHkuupDf78VsEWqDZpYD4adFGw7yD7E");


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Transaction Hash on Rinkeby: 0xf7f21259f709beae17e30ab8579ca74ac2f34dffbf507d8eb2c8e6fc67e631b0