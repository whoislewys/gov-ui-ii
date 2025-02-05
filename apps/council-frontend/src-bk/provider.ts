import { configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { defaultChain } from "src/chain/chain";

const LOCAL_RPC_HOST = "http://127.0.0.1:8545";

/**
 * Use configureChains from wagmi to specify providers for each chain at
 * config-time.
 *
 * See: https://wagmi.sh/docs/providers/configuring-chains
 */
export const { chains, provider } = configureChains(
  [defaultChain],
  [
    // If a provider does not support a chain, it will fall back onto the next one
    // in the array.
    alchemyProvider({ alchemyId: process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_ID }),
    alchemyProvider({ alchemyId: process.env.NEXT_PUBLIC_GOERLI_ALCHEMY_ID }),
    jsonRpcProvider({
      rpc: () => ({
        http: LOCAL_RPC_HOST,
      }),
    }),
  ],
);
