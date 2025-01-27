# ChatApp Frontend
[![Netlify Status](https://api.netlify.com/api/v1/badges/52468287-5435-4dad-972d-92bbc4fd60dc/deploy-status)](https://app.netlify.com/sites/chatappfrontenddesign/deploys)

Welcome to the **ChatApp Frontend**, a blazing-fast, modern chat application frontend built with the latest web technologies! This project is designed to showcase clean architecture, responsive UI, and efficient performance. Dive in to explore a highly modular and scalable codebase.

---

## 🚀 Features

- **TypeScript-Powered**: Enjoy strong typing and better development experience.
- **Vite-Driven Build**: Experience lightning-fast builds and optimized performance.
- **Responsive UI**: Built with Tailwind CSS for beautiful and adaptive designs.
- **Component-Based Architecture**: Modular components for ease of maintenance and scalability.
- **State Management**: Context API and custom hooks for seamless state handling.
- **Dynamic Avatar Generation**: Unique avatar creation using utilities.
- **Mock Data**: Easily generate dummy data for rapid prototyping.

---

## 🛠️ Tech Stack

- **Framework**: React (with TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Linting**: ESLint

---

## 📂 Directory Structure

```
├── gurupranav-tech-chatapp_frontend/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── public/
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── components/
        │   ├── Chat.tsx
        │   ├── ChatTitle.tsx
        │   ├── Chats.tsx
        │   ├── ContactsList.tsx
        │   ├── ConversationsList.tsx
        │   ├── DisplayTile.tsx
        │   ├── EmptyChat.tsx
        │   ├── MessageTile.tsx
        │   ├── SendMessages.tsx
        │   └── Sidebar.tsx
        ├── contexts/
        │   ├── ConversationsContext.tsx
        │   └── SectionsContext.tsx
        ├── hooks/
        │   └── useScreenType.ts
        └── utils/
            ├── generate_avatar.ts
            ├── generate_dummy_data.ts
            └── generate_shapes.ts
```

### Key Directories

- **`src/components`**: Contains modular and reusable React components.
- **`src/contexts`**: Handles state management with Context API.
- **`src/hooks`**: Custom hooks for shared functionality.
- **`src/utils`**: Utility scripts for avatars, mock data, and more.

---

## 🔧 Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Gurupranav-tech/chatapp_frontend.git 
   cd chatapp_frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌟 Highlights

- **Custom Avatars**: Generate dynamic avatars with `utils/generate_avatar.ts`.
- **Mock Conversations**: Use `utils/generate_dummy_data.ts` to simulate chats and contacts.
- **Mobile-First Design**: Fully responsive design optimized for any device.
- **Clear Separation of Concerns**: Each component and utility serves a dedicated purpose.
- **Live Link**: [Click to Go.](https://chatappfrontenddesign.netlify.app/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue. Make sure to follow the coding standards enforced by ESLint.

### Development Guidelines
- Write clean, readable, and maintainable code.
- Use meaningful commit messages.
- Ensure changes are tested and do not break existing functionality.

---

## 💬 Feedback

We'd love to hear your thoughts! Drop us a message or create an issue if you have suggestions, improvements, or just want to say hi.

---

Built by Gurupranav Tech.


