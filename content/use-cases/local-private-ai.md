---
title: "Tools for Local/Private AI"
description: "AI tools that run entirely on your own hardware — no cloud, no data sharing, no subscriptions. Full privacy and control."
date: 2026-02-18
draft: false
tags: ["local", "privacy", "self-hosted", "open-source", "offline"]
---

# Tools for Local/Private AI

Run AI on your own machine. No cloud accounts, no data leaving your network, no monthly bills. Everything here is open source or has a fully local option.

**See also:** [The Local Intelligence Stack](/stacks/local-intelligence/) — our recommended setup with getting-started guide.

---

### Local Language Models

- **[Ollama](/tools/ollama/)** — The easiest way to run LLMs locally. One-command install, simple CLI, and an API compatible with OpenAI's format. Run Llama 3, Mistral, CodeLlama, and dozens more.
- **LM Studio** — GUI for running local models. Download, chat, and use as a local API server. Good if you prefer a visual interface over CLI.
- **llama.cpp** — The engine under Ollama. Use directly for maximum control and performance tuning.

### Local Image Generation

- **ComfyUI** — Node-based UI for Stable Diffusion. Maximum control, custom workflows, no content filters. Requires a GPU (8GB+ VRAM minimum, 16GB+ recommended).
- **Automatic1111 (Stable Diffusion WebUI)** — Browser-based interface for Stable Diffusion. Slightly easier to start with than ComfyUI, fewer advanced features.
- **Fooocus** — Simplified Stable Diffusion interface. Minimal settings, good results. Best for people who want images without learning ComfyUI.

### Local Speech

- **Whisper (OpenAI)** — State-of-the-art speech-to-text that runs locally. `pip install openai-whisper` and transcribe anything. Multiple model sizes for different speed/accuracy tradeoffs.
- **Piper** — Local text-to-speech. Not ElevenLabs quality, but completely free and offline. Good for accessibility and basic narration.
- **Bark** — Open-source text-to-speech with emotion and multilingual support. More natural than Piper, heavier on resources.

### Local Knowledge & Notes

- **Obsidian** — Local-first markdown notes with a plugin ecosystem. The "Ollama" community plugin lets you chat with a local LLM inside your notes. Your data never leaves your disk.
- **Logseq** — Open-source, local-first outliner. Block-based references, daily journals, graph view.

### Local Coding Assistants

- **Continue.dev** — Open-source AI coding assistant that works with VS Code. Point it at your local Ollama instance for fully private code completion.
- **Tabby** — Self-hosted AI coding assistant. Code completion backed by local models.

### Hardware Requirements

| Workload | Minimum | Recommended |
|----------|---------|-------------|
| Chat (7B model) | 8GB RAM, CPU | 16GB RAM, any GPU |
| Chat (70B model) | 32GB RAM | 64GB RAM or 24GB VRAM GPU |
| Image generation | 8GB VRAM GPU | 16-24GB VRAM GPU |
| Speech-to-text | 8GB RAM, CPU | 16GB RAM, GPU accelerates |
| Everything at once | 32GB RAM, 16GB VRAM | 64GB RAM, 24GB VRAM (RTX 3090/4090) |
