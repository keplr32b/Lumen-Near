"use client";

import { useEffect, useState } from "react";
import { Wallet } from "lucide-react";
import { initWallet, getAccountId } from "@/lib/near";

export default function WalletButton() {
  const [accountId, setAccountId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function check() {
      try {
        await initWallet();
        const id = await getAccountId();
        setAccountId(id);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    check();
  }, []);

  async function handleConnect() {
    const { modal } = await initWallet();
    modal.show();

    // simple poll for account
    const interval = setInterval(async () => {
      const id = await getAccountId();
      if (id) {
        setAccountId(id);
        clearInterval(interval);
      }
    }, 1000);
  }

  if (loading) {
    return (
      <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm opacity-50">
        <Wallet size={16} />
        Loading...
      </button>
    );
  }

  if (accountId) {
    return (
      <button className="flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 text-violet-300 px-4 py-2 rounded-full text-sm">
        <Wallet size={16} />
        {accountId.length > 20
          ? `\( {accountId.slice(0, 8)}... \){accountId.slice(-6)}`
          : accountId}
      </button>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full text-sm"
    >
      <Wallet size={16} />
      Connect Wallet
    </button>
  );
}