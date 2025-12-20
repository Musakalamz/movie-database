# Movie DB 🎬

A modern, responsive movie discovery application built with **React**, **Tailwind CSS**, and the **OMDb API**. Explore a vast database of films, search with smart autocomplete, view detailed information, and curate your own list of favorites.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- **🎥 Extensive Movie Database**: Search and browse thousands of movies, series, and episodes via the OMDb API.
- **🔍 Smart Search**: Real-time type-ahead autocomplete with debounced queries for a smooth user experience.
- **⚡ High Performance**: Optimized with skeleton loading states, efficient data fetching (React Router Loaders), and client-side caching.
- **📱 Fully Responsive**: A seamless experience across mobile, tablet, and desktop devices.
- **❤️ Favorites System**: Persist your favorite movies to local storage and manage them easily.
- **📄 Pagination**: Navigate through large datasets with an intuitive, sliding-window pagination system.
- **🎨 Modern UI/UX**: Clean, professional design with Dark Mode support and polished transitions.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v18+)
- **Routing**: [React Router v6.4+](https://reactrouter.com/en/main) (Data APIs & Loaders)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **API**: [OMDb API](https://www.omdbapi.com/)
- **State Management**: React Context API (for Favorites)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/musakalamz/movie-database.git
    cd movie-database
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your OMDb API key:

    ```env
    VITE_OMDB_API_KEY=your_api_key_here
    ```

    > **Note:** You can get a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, MovieCard, SearchBar, etc.)
├── context/        # Global state management (FavoritesContext)
├── lib/            # Utility functions and API clients (omdb.js)
├── loaders/        # React Router data loaders
├── pages/          # Application views/routes (Home, Movies, MovieDetails, etc.)
├── App.jsx         # Root component & Layout
└── main.jsx        # Entry point & Router configuration
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Designed & Developed with ❤️ by Musa Adebayo Ogunsolu
