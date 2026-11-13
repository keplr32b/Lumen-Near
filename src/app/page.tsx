"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Wallet } from "lucide-react";
import WalletButton from "@/components/WalletButton";
import Chat from "@/components/Chat";
import CompanionPanel from "@/components/CompanionPanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex justify-between items-center sticky top-0 bg-[#0a0a0f]/80 backdrop-blur z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <Sparkles size={16} />
          </div>
          <span className="font-semibold text-lg">Lumen</span>
        </div>
        <WalletButton />
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm px-3 py-1 rounded-full mb-5">
            <Shield size={14} />
            Private AI • NEAR Intents • NFT Companion
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Your Private{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI Companion
            </span>
          </h1>

          <p className="text-white/55 max-w-xl mx-auto text-base">
            Lumen lives as an NFT on NEAR. It can privately think, remember, and
            spend — under hard limits only you control.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          {/* Chat */}
          <div>
            <Chat />
            <p className="text-center text-white/25 text-xs mt-3">
              Demo mode — responses simulated. Real TEE private inference can be connected with NEAR AI key.
            </p>
          </div>

          {/* Side Panel */}
          <div className="space-y-4">
            <CompanionPanel />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-medium mb-3 text-sm">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-2.5">
                  Mint your own Lumen
                </button>
                <button className="w-full text-left text-sm bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-2.5">
                  Set spending limit
                </button>
                <button className="w-full text-left text-sm bg-white/5 hover:bg-white/10 transition rounded-xl px-4 py-2.5">
                  Feed with NEAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-5 border-t border-white/10">
        {[
          {
            icon: <Shield className="text-violet-400" size={22} />,
            title: "Private by Design",
            desc: "Conversations run inside NEAR AI Trusted Execution Environments. Your data never leaves the secure enclave.",
          },
          {
            icon: <Wallet className="text-fuchsia-400" size={22} />,
            title: "Can Actually Spend",
            desc: "Lumen can hold value and execute cross-chain actions via NEAR Intents with limits you set.",
          },
          {
            icon: <Sparkles className="text-pink-400" size={22} />,
            title: "Lives as an NFT",
            desc: "True ownership. Transferable. Evolves with use. Not just a picture — an agent with agency.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-5"
          >
            <div className="mb-3">{f.icon}</div>
            <h3 className="font-semibold mb-1.5">{f.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/35 text-sm">
        Built for NEAR Hackathon 2026 • Tracks: NFTs + Privacy + Agents + Security
      </footer>
    </main>
  );
}