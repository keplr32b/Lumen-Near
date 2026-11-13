import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";

export const NETWORK_ID = "testnet"; // change to "mainnet" later if needed
export const CONTRACT_ID = "lumen.testnet"; // we will update this

let selector: any = null;
let modal: any = null;

export async function initWallet() {
  if (selector) return { selector, modal };

  selector = await setupWalletSelector({
    network: NETWORK_ID,
    modules: [setupMyNearWallet(), setupHereWallet()],
  });

  modal = setupModal(selector, {
    contractId: CONTRACT_ID,
  });

  return { selector, modal };
}

export async function getAccountId(): Promise<string | null> {
  if (!selector) await initWallet();
  const state = selector.store.getState();
  const accounts = state.accounts;
  return accounts.length > 0 ? accounts[0].accountId : null;
}