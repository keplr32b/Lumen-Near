import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";

export const NETWORK_ID = "testnet";
export const CONTRACT_ID = "lumen.testnet"; // placeholder

let selector: any = null;
let modal: any = null;

export async function initWallet() {
  if (selector) return { selector, modal };

  selector = await setupWalletSelector({
    network: NETWORK_ID,
    modules: [setupMyNearWallet()],
  });

  modal = setupModal(selector, {
    contractId: CONTRACT_ID,
    theme: "dark",
    description: "Connect to interact with your Lumen companion",
  });

  return { selector, modal };
}

export async function getAccountId(): Promise<string | null> {
  if (!selector) await initWallet();
  const state = selector.store.getState();
  const accounts = state.accounts || [];
  return accounts.length > 0 ? accounts[0].accountId : null;
}