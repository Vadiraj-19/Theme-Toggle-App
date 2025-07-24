
# 🌗 Theme Toggle App

A simple React app that allows users to toggle between **Dark Mode** and **Light Mode**, with the selected theme preference **persisted in localStorage**.

## 🔥 Features

- 🌓 Toggle between Dark and Light themes
- 💾 Theme preference saved in browser's `localStorage`
- ⚡ Instant and smooth UI transitions using Tailwind CSS
- 🧠 Built with React and `useState`, `useEffect` hooks

---

## 📸 Preview

https://private-user-images.githubusercontent.com/143392997/470337568-18d4e94a-6f9d-493f-bc22-fb8028b97d3e.mp4  




## 🛠️ Tech Stack

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- HTML5, JavaScript (ES6+)

---

## 📦 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Vadiraj-19/theme-toggle.git
   cd theme-toggle


2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the App**

   ```bash
   npm run dev
   ```



## 🧠 How It Works

* On first load, it checks `localStorage` for the last selected theme.
* The toggle UI uses `flex-row-reverse` for switch-like animation.
* Clicking the toggle updates state and persists to localStorage.

---

## 📁 Folder Structure

```
src/
├── App.jsx        # Main logic for theme toggle
├── index.css      # Tailwind base styles
└── main.jsx       # React entry point
```

---

## 🙌 Author

Made with ❤️ by [Vadiraj Betageri](https://github.com/Vadiraj-19)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

```

