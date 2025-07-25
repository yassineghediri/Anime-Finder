```md
# MovieFinder 🎬

**MovieFinder** is a sleek and simple movie discovery app powered by the TMDB API.  
Search for your favorite movies without the hassle — smooth UI, real-time search, and clean design.

---

## Features

- 🔎 Real-time movie search with debounce
- 🎨 Modern responsive UI with TailwindCSS
- 📡 TMDB API integration
- ⚡ Loading indicators
- 🌙 Dark theme by default

---

## Tech Stack

- React
- TailwindCSS
- Vite
- TMDB API
- usehooks.dev (`useDebounce`)

---

## Getting Started

1. Clone the repository:

```

git clone [https://github.com/yourusername/moviefinder.git](https://github.com/yourusername/moviefinder.git)
cd moviefinder

```

2. Install dependencies:

```

npm install

```

3. Create a `.env` file in the root directory:

```

VITE\_TMDB\_API\_KEY=your\_tmdb\_api\_key\_here

```

4. Start the development server:

```

npm run dev

```

5. Open your browser at [http://localhost:5173](http://localhost:5173)

---

## Project Structure

```

moviefinder/
├── public/
├── src/
│   ├── components/
│   │   ├── Search.jsx
│   │   ├── MovieCard.jsx
│   │   └── Spinner.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
└── vite.config.js

```

---

## Future Plans

- Actor search
- Similar movie recommendations
- Genre filters
- Favorites/watchlist system
- Animations with Framer Motion

---

## License

MIT License  
Free to use, modify, and share. Just don’t pretend you’re Tony Stark.

---

## Author

Made by [@yassineghediri](https://github.com/yassineghediri)  
Software Engineer • CS student • Movie enjoyer 🍿
```


