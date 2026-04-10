# Portfolio Website

A simple portfolio website for a UI/UX Designer built with Vite and React.

## git Troubleshooting for Dev:

This guide outlines the standard operating procedure for maintaining the **Kurt Setriani Bognot Portfolio** and **Student Information System** across multiple development environments.

---

# 🚀 Multi-Device Git Workflow Guide

This documentation serves as the standard operating procedure for the **Kurt Setriani Bognot Portfolio** and the **Student Information System** projects. Following this workflow prevents merge conflicts, detached HEAD states, and unrelated history errors.

---

# 🚀 Multi-Device Git Workflow Guide

This documentation serves as the standard operating procedure for the **Kurt Setriani Bognot Portfolio** and the **Student Information System** projects. Following this workflow prevents merge conflicts, detached HEAD states, and unrelated history errors.

---

## 🛠️ 1. Setup on a New Device
**CRITICAL:** Never use `git init` on a new computer for an existing project. It creates a conflicting history. Instead, use `clone`.

1. Open your terminal in the folder where you want the project.
2. Run the following:
   ```bash
   git clone [https://github.com/senshoukoku/WEBSITE.git](https://github.com/senshoukoku/WEBSITE.git)
   ```
3. Open the newly created `WEBSITE` folder in VS Code.

---

## 🔄 2. The Daily "Sync Sandwich"
To keep your devices in perfect harmony, follow this routine every time you work.

### 🥪 Step A: The Start (Pull)
Before you write a single line of code on Device B, grab the work you finished on Device A.

```bash
git pull origin main
```

### 🥪 Step B: The Work (Develop)
Carry out your coding, UI adjustments (like adding glowing spans), or content updates.

### 🥪 Step C: The End (Push)
Before you close your laptop or switch devices, save your work to GitHub.
```bash
git add .
git commit -m "feat: added glowing effect and updated project links"
git push origin main
```

---

## ⚠️ 3. Troubleshooting Quick-Fixes

### ❌ Error: "Non-fast-forward" (Rejected Push)
**Why:** You forgot to pull on this device before starting work.
**Fix:**
```bash
git pull origin main --rebase
git push origin main
```

### ❌ Error: "Refusing to merge unrelated histories"
**Why:** You used `git init` instead of `git clone`.
**Fix:**
```bash
git pull origin main --allow-unrelated-histories
```

### ❌ Error: "Detached HEAD"
**Why:** You checked out a specific commit ID instead of the branch.
**Fix:**
```bash
git checkout main
```

---


## 📑 4. Project References
* **Main Developer:** Kurt Setriani Bognot
* **Tech Stack:** ReactJS, Vite, CSS (Glow Effects), Boxicons
* **Collaborators:** Bryxz Jaspher L. Legaspi (Database Specialist)
* **Live Site:** [Vercel Deployment]

---
*Last Updated: April 2026*
```
