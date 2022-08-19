require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

async function main() {

//   @ts-ignore
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const _value = 1;

  const CONTRACTADDRESS = "0xA4D50E56c78E020b265794c1a2823899F0C94669";
  const OlahFemi = await ethers.getContractAt("IOlahFemi", CONTRACTADDRESS);

await OlahFemi.safeMint("0x7Ca74c1abfe9e15b47760a3c5ebe5B90346f9ABC");


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Transaction Hash on Goerli: 0x07cbea5e3bc4b65a9045c53b0aad84fb4b28f9d90f82622bf026a21a369f8cf4
// Transaction Hash on Rinkeby: 0xce338adc5457f6e80914ee80804d58848c8420ddaa202c647ec91b6294547fff