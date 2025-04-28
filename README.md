# ☕ **Staking** Smart Contract

A simple ERC-20 staking smart contract where users can stake tokens and earn a **flat reward**. Built using Solidity, compatible with any ERC-20 token, and deployable on Core Blockchain networks.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd Staking
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PRIVATEKEY="your_core_wallet_private_key"
CORE_TEST2_SCAN_KEY="your_testnet2_explorer_api_key"
CORE_MAIN_SCAN_KEY="your_mainnet_explorer_api_key"
CORE_TEST1_SCAN_KEY="your_testnet1_explorer_api_key"
```

> ⚠️ **Important:** Never share your private key or commit the `.env` file to version control.

---

## 🛠 Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Tests

```bash
npx hardhat test
```

### Deploy Contract

Use a deployment script:

```bash
npx hardhat run scripts/deploy.js --network core_testnet2
```

---

## 🔍 Contract Verification

You can verify contracts using Core block explorers:

```bash
npx hardhat verify --network core_testnet2 <deployed_contract_address> <token_address>
```

Make sure your `.env` file contains the correct API keys for verification.

---
