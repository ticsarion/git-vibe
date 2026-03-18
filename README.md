# 🚀 git-vibe

> Your AI-powered pair programmer for conventional commit messages.

Say goodbye to "update stuff" and "fix bug" commit messages. **git-vibe** reads your staged changes and automatically generates a clean, descriptive, and standard conventional commit message using Google's Gemini AI.

## ✨ Features
* **🧠 Smart Analysis:** Analyzes your `git diff` to understand exactly what you changed.
* **⚡ Blazing Fast:** Generates commit messages in seconds.
* **🎨 Interactive CLI:** Beautiful, modern, and easy-to-use terminal interface.
* **🛡️ Conventional Commits:** Forces your repo to follow industry standards automatically.

## 📦 Installation

Install globally using npm:

```bash
npm install -g @ticsarion/git-vibe
```

## 🚀 Usage

Using git-vibe is easy! Just follow these steps:

1. Stage your changes as usual:
   ```bash
   git add .
   ```
2. Run git-vibe:
   ```bash
   git vibe
   ```
3. Look for the ✨ magic!

   ```text
   ◇  git-vibe - AI Commit Generator
   │
   ◇  Analyzing git diff...
   │
   ◇  Suggested Commit Message:
   │  feat: add interactive UI with clack prompts
   │
   ◇  Do you want to commit with this message?
   │  > Accept & Commit
   │    Edit Message
   │    Cancel
   ```

## 🔑 Setup
You need a free Gemini API key from Google AI Studio.

1. **Get your key:** Visit [Google AI Studio](https://aistudio.google.com/) and create a free API key.
2. **Configure:** Create a `.env` file in your project root and add your key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

---
*Built with ❤️ and AI.*