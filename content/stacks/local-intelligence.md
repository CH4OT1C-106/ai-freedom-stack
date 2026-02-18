---
title: "The Local Intelligence Stack"
description: "Run AI entirely on your own hardware — no cloud, no subscriptions, no data leaving your machine. Ollama + ComfyUI + Whisper + Obsidian."
date: 2026-02-18
draft: false
tags: ["local", "privacy", "self-hosted", "open-source", "offline"]
freedom_score: 5
monthly_cost: "$0/mo"
---

# The Local Intelligence Stack

**AI that runs on your machine, works offline, and sends zero data to the cloud.** This is the maximum-freedom stack: open-source models for text, images, and audio, organized in a local knowledge base you fully own. Monthly cost: $0 after hardware.

## Who It's For

- **Best for:** Privacy-conscious builders, researchers, preppers, anyone in a country with restricted AI access, developers who want to understand how models actually work, and anyone tired of subscription fatigue.
- **Not for:** People without a decent GPU (16GB+ VRAM recommended), anyone who needs GPT-4-level reasoning (local models are good but not frontier-tier), or creators who need ElevenLabs-quality voice cloning.

## The Tools

| Tool | Role | Cost |
|------|------|------|
| [Ollama](/tools/ollama/) | Local LLM runner — chat, writing, coding, analysis | $0 |
| ComfyUI + Stable Diffusion | Local image generation — any style, no content filters | $0 |
| Whisper (OpenAI, local) | Speech-to-text — transcribe anything offline | $0 |
| Obsidian | Knowledge base — notes, linked thinking, local-first | $0 |

## How They Connect

```
Your Brain / Voice / Documents
          │
    ┌─────┴──────┐
    ▼            ▼
┌─────────┐  ┌─────────┐
│ Whisper │  │ Ollama  │ → Chat, write, summarize, code
│ → Text  │  └────┬────┘
└────┬────┘       │
     │            │
     └─────┬──────┘
           ▼
     ┌──────────┐
     │ Obsidian │ → Store, link, organize everything
     └────┬─────┘
          │
          │ (need an image?)
          ▼
    ┌──────────┐
    │ ComfyUI  │ → Generate illustrations, diagrams, concepts
    └──────────┘

Everything stays on your machine. Nothing phones home.
```

## Total Monthly Cost

| Item | Cost |
|------|------|
| Software | $0 — all open source |
| Cloud services | $0 — none needed |
| Electricity | ~$5-15/mo if running GPU-heavy workloads daily |
| **Total** | **$0/mo** (after hardware) |

**Hardware reality check:** You need a GPU. A used RTX 3090 (24GB VRAM) runs ~$600-800 and handles all of this beautifully. An M1/M2/M3 Mac with 16GB+ unified memory also works well for Ollama and Whisper, though image generation is slower.

## Freedom Score: ⭐⭐⭐⭐⭐ (5/5)

- **Why 5:** Maximum possible freedom. Every tool is open source. Every byte stays local. No accounts, no subscriptions, no terms of service, no content policies, no API rate limits. If the internet goes down, this stack still works.
- **Lock-in risk:** Zero. You can swap any component for another open-source alternative. Your data is in standard formats (markdown, PNG, WAV).
- **Tradeoff:** You're trading convenience and frontier model quality for complete independence.

## Getting Started (This Evening)

1. **Install Ollama.** One command: `curl -fsSL https://ollama.ai/install.sh | sh`. Pull a model: `ollama pull llama3` (or `mistral`, `codellama`, `mixtral` for different strengths).
2. **Install Obsidian.** Free download. Create a vault for your AI-assisted work. Install the "Ollama" community plugin to chat with your local LLM inside Obsidian.
3. **Set up Whisper.** `pip install openai-whisper`. Transcribe any audio: `whisper audio.mp3 --model medium`. Done.
4. **Install ComfyUI.** Clone the repo, download a Stable Diffusion model (SD XL or SD 3), and you have unlimited image generation.
5. **Connect the workflow.** Use Ollama to draft content → Whisper to transcribe voice notes and interviews → ComfyUI for visuals → Obsidian as your hub.

**What you'll notice:** It's slower than cloud APIs. It's less polished. But it's *yours*. And once you've used AI without any guardrails or rate limits, it's hard to go back.
