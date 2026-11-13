"use client";

import { Shield, Zap, Heart, Lock } from "lucide-react";

export default function CompanionPanel() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-lg font-bold">
          L
        </div>
        <div>
          <div className="font-semibold">Lumen #001</div>
          <div className="text-xs text-white/40">Private Companion • Testnet</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-black/30 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-white/50 mb-1">
            <Heart size={13} />
            Mood
          </div>
          <div className="font-medium text-emerald-400">Calm</div>
        </div>

        <div className="bg-black/30 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-white/50 mb-1">
            <Zap size={13} />
            Energy
          </div>
          <div className="font-medium text-amber-400">78%</div>
        </div>

        <div className="bg-black/30 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-white/50 mb-1">
            <Shield size={13} />
            Privacy
          </div>
          <div className="font-medium text-violet-400">TEE Active</div>
        </div>

        <div className="bg-black/30 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-white/50 mb-1">
            <Lock size={13} />
            Spend Limit
          </div>
          <div className="font-medium">0.5 NEAR / day</div>
        </div>
      </div>

      <div className="pt-2 border-t border-white/10">
        <div className="text-xs text-white/40 mb-2">Active Permissions</div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-full">
            Private Chat
          </span>
          <span className="text-xs bg-fuchsia-500/20 text-fuchsia-300 px-2.5 py-1 rounded-full">
            Limited Spend
          </span>
          <span className="text-xs bg-white/10 text-white/50 px-2.5 py-1 rounded-full">
            Memory On
          </span>
        </div>
      </div>
    </div>
  );
}