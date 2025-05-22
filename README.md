# Online Casino 🎰

Ultimate Online Slot Machine Experience — built with [Next.js](https://nextjs.org/), TypeScript, Tailwind CSS, and DaisyUI.

## Table of Contents

- [Overview](#overview)
- [Game Rules](#game-rules)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

---

## Overview

Online casino brings an interactive slot machine web app. Users can spin the reels, win credits, and cash out their winnings.

## Game Rules

- Each user starts with **10 credits**.
- Each spin costs **1 credit**.
- Match 3 symbols to win:
  - 🍒 Cherry: 10 credits
  - 🍋 Lemon: 20 credits
  - 🍊 Orange: 30 credits
  - 🍉 Watermelon: 40 credits
- You can cash out after at least **2 spins**.
- Credits are transferred to your wallet on cash out.

## Tech Stack

- [Next.js 14+](https://nextjs.org/)
- [React 18+](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [ESLint + Prettier](https://eslint.org/)

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run the development server:**

   ```sh
   npm run dev
   ```

## Project Structure

```text
src/
  app/         # Next.js app directory (routing, pages, layout)
  components/  # UI components
  constants/   # App-wide constants
  contexts/    # React context providers
  hooks/       # Custom React hooks
  lib/         # Domain logic, infrastructure, and services
  utils/       # Utility functions and API clients
public/        # Static assets (icons, images)
```

## API Endpoints

- `POST /api/v1/slot-session/start` — Start a new slot session
- `POST /api/v1/slot-session/roll` — Roll the slot machine
- `POST /api/v1/slot-session/cashout` — Cash out current session
- `GET /api/v1/user/user-info` — Get user info and wallet credits
