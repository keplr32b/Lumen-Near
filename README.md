# Lumen — Private AI Companion NFT on NEAR

**Lumen** is a personal AI companion that lives as an NFT on NEAR.

It can privately think, remember, and spend — under hard limits only the owner controls.

## Why this is different

Most AI agents in this hackathon are either:
- Just a chat UI, or
- Just a spend guard

Lumen combines both + true NFT ownership:

- **Private Inference** → All chats run through NEAR AI Cloud TEEs
- **Agent that can spend** → Uses NEAR Intents with owner-set limits
- **NFT that does something** → The companion itself is a transferable NEP-171 NFT

## Tracks

- NFTs That Do Something
- Privacy & Private AI
- Agent Economy
- AI Security & Defense

## Demo Flow (for judges)

1. Open the app
2. Click **Connect Wallet**
3. Chat with Lumen (private mode)
4. See the companion identity + limits panel
5. (Coming) Mint your own Lumen NFT

## Tech Stack

- Next.js 15 + TypeScript
- NEAR Wallet Selector
- NEAR AI Cloud (Private / TEE models)
- NEAR Intents
- Tailwind CSS + Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment (optional for real private AI)

Create .env.local:
NEAR_AI_API_KEY=your_key_here

Get a key at: https://cloud.near.ai