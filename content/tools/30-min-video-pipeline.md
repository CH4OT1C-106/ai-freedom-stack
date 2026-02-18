---
title: "The 30-Minute Video Pipeline"
description: "A complete AI workflow for producing YouTube videos in under an hour. Script to upload, fully documented."
date: 2026-02-17
category: "Workflow Briefs"
icon: "🎬"
price: "Free workflow"
rating: "⭐⭐⭐⭐⭐"
tags: ["youtube", "automation", "content"]
price_type: "free"
featured: false
verdict: "This is the exact workflow we use to produce our own videos. It works. Total active time: ~45 minutes for a polished 8-10 minute video."
---

## What is this?

A step-by-step workflow for producing a complete YouTube video using AI tools. From blank page to uploaded video in under an hour of active work.

## The Stack

| Step | Tool | Time |
|------|------|------|
| Script | Claude / GPT | 15 min |
| Voiceover | ElevenLabs | 2 min |
| Audio cleanup | ffmpeg (automated) | 30 sec |
| Visuals | Gemini 3 Pro | 5 min |
| Assembly | Kdenlive | 20 min |
| **Total** | | **~45 min** |

## The Workflow

### Step 1: Script (15 min)

Use Claude or GPT to draft the script. Provide your topic, target length, and tone. Review and tweak — don't accept the first draft.

**Pro tip:** Write for the ear, not the eye. Read it aloud. If you stumble, rewrite that line.

### Step 2: Voiceover (2 min)

Paste the script into ElevenLabs. Pick a voice that matches your brand. Generate.

**Pro tip:** Set stability to 0.8 for consistent pacing on longer scripts.

### Step 3: Audio Cleanup (automated)

Run the voiceover through an ffmpeg silence detection script to tighten pauses. AI voices tend to over-pause at sentence breaks.

### Step 4: Visuals (5 min)

Generate images for each section using Gemini 3 Pro's image generation. One image per major section of the script. Upscale to 1080p with ffmpeg.

### Step 5: Assembly (20 min)

Drop everything into Kdenlive. Lay the voiceover on the audio track, place images on the video track timed to the narration. Add Ken Burns zoom and crossfade transitions.

This is the one step that can't be fully automated — human timing judgment is needed.

## What You'll Need

- ElevenLabs account ($5/mo minimum for regular use)
- Gemini API key (free)
- Kdenlive (free, Linux/Mac/Windows)
- ffmpeg (free, command line)
- Claude or ChatGPT (for scripting)
