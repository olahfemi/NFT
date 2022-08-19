require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

async function main() {

//   @ts-ignore
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const _value = 1;

  const CONTRACTADDRESS = "0x4D4CCcef62BA334066bf7e732Db2a530AF855A04";
  const OlahFemi = await ethers.getContractAt("IOlahFemi", CONTRACTADDRESS);

await OlahFemi.safeMint("0x7Ca74c1abfe9e15b47760a3c5ebe5B90346f9ABC");


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Transaction Hash: 
// Network: Goerli