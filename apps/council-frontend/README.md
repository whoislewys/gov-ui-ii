## Dependencies for M1 Macs

M1 Macs do not ship with Python natively. One of the dependencies requires Python to build, so you need to install Python with
`brew install python`

## Getting Started

First, some setup:

```bash
# install npm dependencies
npm ci
# copy the tokenlist and addresses jsons from the testnet
npm run copy-testnet
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You'll also need to follow the README instructions for the [elf-council-merkle](https://github.com/element-fi/elf-council-merkle) and
[elf-council-testnet](https://github.com/element-fi/elf-council-testnet) repos. In total you'll need 4 terminal windows running processes. Here is a
diagram to help:
![Deveopment Setup](./elf-council-dev-setup.png)

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Generating contract types

Consilium contracts can be seen at https://github.com/fiatdao/consilium
To generate types for these contracts,

```bash
git clone git@github.com:fiatdao/consilium.git
npm i
npx hardhat typechain
```

Rename the generated directory `consilium-typechain` and move it into the `src/` directory in this repo.

## Generating Proposals Json File

Originally, Element had a script in a separate repo that scraped chain data and Snapshot to create a `<chain_name>.proposals.json` file.

We have replaced this by moving the scraper into this repo, and storing the generated json files in `src/proposals/ProposalJson/`

#### OPEN QUESTIONS

" TODO: in this new frontend repo, make sure the `yarn run build-proposals` scripts are working

- How do we specify what contract & function to call when proposal is approved?

#### New Goerli Proposal

> TODO: move create proposal functionality into this repo as well

1. Create a new on-chain proposal via the `create-goerli-proposal` action in the `council-testnet` repo with:

   ```bash
   npm run create-goerli-proposal
   ```

   **TAKE NOTE of the output!!**

1. Create a new snapshot proposal on [https://demo.snapshot.org/#/fiatdao-goerli.eth](https://demo.snapshot.org/#/fiatdao-goerli.eth)

1. Copy the respective values from the script output into the objects in `proposals/src/goerli.ts` that start around L55. For the first object, `snapshotIdsByProposalId`, the value can be found at the tail end of the URL of the Snapshot proposal you just created. The other values are output by the script for your convenience. The keys for the new values should be the id of the proposal you just created, as shown in the screenshot below.

1. Update the proposals that the frontend displays by running the `build-proposals-goerli` script in this repo with:
   ```bash
   yarn run build-proposals-goerli
   ```

#### New Mainnet Proposal

> TODO: move create proposal functionality into this repo as well

1. Create a new on-chain proposal via the `create-proposal` action in the `council-testnet` repo with:

   ```bash
   npm run create-proposal
   ```

1. Copy the respective values from the script output into the objects in `proposals/src/mainnet.ts` that start around L55. For the first object, `snapshotIdsByProposalId`, the value can be found at the tail end of the URL of the Snapshot proposal you just created. The other values are output by the script for your convenience. The keys for the new values should be the id of the proposal you just created.

1. Create a new snapshot proposal on [https://snapshot.org/#/fiatdao.eth](https://snapshot.org/#/fiatdao.eth)

1. Update the proposals that the frontend displays by running the `build-proposals-goerli` script in this repo with:
   ```bash
   yarn run build-proposals-mainnet
   ```

> NOTE: If you need to hand edit something to fix a typo for example, modify the `proposals/src/<chain_name>.ts` file!

## Deploy

Install fleek cli globally, build, and deploy with:

```bash
npm install -g @fleekhq/fleek-cli
yarn run build
FLEEK_API_KEY=<your_fleek_api_key> fleek site:deploy
```

See here to get an api key:
https://docs.fleek.co/fleek-cli/overview/#retrieving-and-using-an-api-key
