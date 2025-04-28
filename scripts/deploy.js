const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying Staking contract from:", deployer.address);

  // Replace with the actual deployed token contract address
  const tokenAddress = "0xEF23b0A95e003863a5795F001B8239B98Ae36033";

  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(tokenAddress);


  console.log("✅ Staking contract deployed at:", staking.target);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
