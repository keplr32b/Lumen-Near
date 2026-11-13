"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Shield, Wallet } from "lucide-react";
import WalletButton from "@/components/WalletButton";
import Chat from "@/components/Chat";

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
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm px-3 py-1 rounded-full mb-6">
            <Shield size={14} />
            Private AI • NEAR Intents • NFT Companion
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Your Private
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI Companion
            </span>
          </h1>

          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
            Lumen lives as an NFT on NEAR. It can privately think, remember, and
            spend — under hard limits only you control.
          </p>
        </motion.div>
      </section>

      {/* Chat Section */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <Chat />
        <p className="text-center text-white/30 text-xs mt-4">
          Demo mode — responses are simulated. Real TEE private inference coming next.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6 border-t border-white/10">
        {[
          {
            icon: <Shield className="text-violet-400" size={24} />,
            title: "Private by Design",
            desc: "Conversations run inside NEAR AI Trusted Execution Environments. Your data never leaves the secure enclave.",
          },
          {
            icon: <Wallet className="text-fuchsia-400" size={24} />,
            title: "Can Actually Spend",
            desc: "Lumen can hold value and execute cross-chain actions via NEAR Intents with limits you set.",
          },
          {
            icon: <Sparkles className="text-pink-400" size={24} />,
            title: "Lives as an NFT",
            desc: "True ownership. Transferable. Evolves with use. Not just a picture — an agent with agency.",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        Built for NEAR Hackathon 2026 • Tracks: NFTs + Privacy + Agents + Security
      </footer>
    </main>
  );
}