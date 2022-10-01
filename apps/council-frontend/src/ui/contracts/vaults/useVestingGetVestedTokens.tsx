import { useVestingGetGrant } from "./useVestingGetGrant";
import { useLatestBlockNumber } from "src/ui/ethereum/useLatestBlockNumber";

export function useVestingGetVestedTokens(
  address: string | null | undefined,
): [number, number] {
  let vestedTokens;
  const grant = useVestingGetGrant(address);
  const { data: currentBlockNumber } = useLatestBlockNumber();
  if (!currentBlockNumber || !grant) {
    return [0, 0];
  }

  if (currentBlockNumber < grant.cliff || currentBlockNumber < grant.created) {
    return [0, 0];
  }

  if (currentBlockNumber >= grant.expiration) {
    vestedTokens = grant.allocation - grant.withdrawn;
  } else {
    const unlocked =
      (grant.allocation * (currentBlockNumber - grant.created)) /
      (grant.expiration - grant.created);

    vestedTokens = unlocked - grant.withdrawn;
  }
  const unvestedTokens = grant.allocation - (grant.withdrawn + vestedTokens);
  return [vestedTokens, unvestedTokens];
}
