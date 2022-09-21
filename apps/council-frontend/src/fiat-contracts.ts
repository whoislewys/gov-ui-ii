import { addressesJson, FiatAddressesJsonFile } from "src/addresses";
import { defaultProvider } from "src/providers/providers";
import {
  VotingEscrow__factory,
  ERC20Permit__factory,
  CoreVoting__factory,
  VestingVault__factory,
  GSCVault__factory,
  ComitiumVault__factory,
  VotingEscrowVault__factory,
} from "./consilium-typechain";

const fiatAddresses = addressesJson as FiatAddressesJsonFile;

export const fdtContract = ERC20Permit__factory.connect(
  fiatAddresses.addresses.fdt,
  defaultProvider,
);

export const fdtEthLpTokenContract = ERC20Permit__factory.connect(
  fiatAddresses.addresses.fdtEthLpToken,
  defaultProvider,
);

export const comitiumVaultContract = ComitiumVault__factory.connect(
  fiatAddresses.addresses.comitiumVault,
  defaultProvider,
);

export const votingEscrowContract = VotingEscrow__factory.connect(
  fiatAddresses.addresses.votingEscrow,
  defaultProvider,
);

export const votingEscrowVaultContract = VotingEscrowVault__factory.connect(
  fiatAddresses.addresses.votingEscrowVault,
  defaultProvider,
);

export const vestingContract = VestingVault__factory.connect(
  fiatAddresses.addresses.vestingVault,
  defaultProvider,
);

export const coreVotingContract = CoreVoting__factory.connect(
  fiatAddresses.addresses.coreVoting,
  defaultProvider,
);

export const gscVaultContract = GSCVault__factory.connect(
  fiatAddresses.addresses.GSCVault,
  defaultProvider,
);

export const gscCoreVotingContract = CoreVoting__factory.connect(
  fiatAddresses.addresses.coreVotingGSC,
  defaultProvider,
);
