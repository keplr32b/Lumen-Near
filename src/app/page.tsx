"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Wallet, MessageCircle, Shield } from "lucide-react";

export default function Home() {
  const [connected, setConnected] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <Sparkles size={16} />
          </div>
          <span className="font-semibold text-lg">Lumen</span>
        </div>
        <button
          onClick={() => setConnected(!connected)}
          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full text-sm"
        >
          <Wallet size={16} />
          {connected ? "Connected" : "Connect Wallet"}
        </button>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm px-3 py-1 rounded-full mb-6">
            <Shield size={14} />
            Private AI • NEAR Intents • NFT Companion
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Your Private
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              AI Companion
            </span>
          </h1>

          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
            Lumen is an NFT that can privately think, remember, and spend —
            under hard limits you control. Powered by NEAR AI TEEs + Intents.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2">
              <Sparkles size={18} />
              Mint Your Lumen
            </button>
            <button className="border border-white/20 hover:bg-white/5 transition px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2">
              <MessageCircle size={18} />
              Try Demo Chat
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <Shield className="text-violet-400" size={24} />,
            title: "Private by Design",
            desc: "All conversations run inside NEAR AI Trusted Execution Environments. Your thoughts stay private.",
          },
          {
            icon: <Wallet className="text-fuchsia-400" size={24} />,
            title: "Can Actually Spend",
            desc: "Lumen holds value and can execute cross-chain actions via NEAR Intents — with hard limits you set.",
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
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        Built for NEAR Hackathon 2026 • Tracks: NFTs + Privacy + Agents + Security
      </footer>
    </main>
  );
}