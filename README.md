````md
# Anime Finder App

A sleek React app to find trending anime or search for your favorite anime titles — no hassle, just pure anime vibes.

---

## Features

- Search anime by name with instant results (debounced to reduce unnecessary API calls)
- View trending top anime when no search term is provided
- Loading spinner while fetching data
- Handles errors gracefully with user-friendly messages
- Responsive UI with a clean design
- Uses [Jikan API (v4)](https://docs.api.jikan.moe/) — an unofficial MyAnimeList API

---

## Tech Stack

- React (Functional Components + Hooks)
- `useDebounce` from `@uidotdev/usehooks` for efficient search
- Fetch API for backend requests
- Tailwind CSS (assumed from class names)
- Jikan API for anime data

---

## Setup & Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/yassineghediri/anime-finder-app.git
   cd anime-finder-app
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev   
   ```

4. **Open your browser** 

   Go to `http://localhost:5173`. Congratulations! 


## How it Works

* **Search input** updates the `searchTerm` state.
* The input is debounced by 300ms using `useDebounce` to avoid flooding the API with requests on every keystroke.
* When `debouncedSearchTerm` changes, the app fetches data from the Jikan API:

  * If there is a search term, it fetches anime matching the query.
  * If empty, it fetches the top trending anime.
* Results are displayed with `AnimeCard` components.
* Displays a spinner while loading, and shows error messages if the fetch fails.

---

## Folder Structure (Relevant)

```
src/
 ├─ components/
 │   ├─ Search.jsx
 │   ├─ Spinner.jsx
 │   └─ AnimeCard.jsx
 ├─ App.jsx
 └─ main.jsx
```

---

## To-Do / Improvements

* Add pagination to load more results
* Add detailed anime pages with more info
* Improve error handling (e.g., retry logic)
* Add user favorites or watchlist
* Dark mode toggle
* Unit & integration tests

---

## Credits

* API: [Jikan API v4](https://docs.api.jikan.moe/)
* React hooks: [@uidotdev/usehooks](https://www.npmjs.com/package/@uidotdev/usehooks)

---

## License

MIT License © \[Yassine Ghediri]

---

Built with 💜 and anime passion.

```
```
