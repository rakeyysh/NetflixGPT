

# 🎬 NetflixGPT

A Netflix-inspired movie browsing app powered by **Gemini AI** for smart movie recommendations. Built with React, Firebase, Redux, and Tailwind CSS.

---

## 🔗 Live Demo

[View Live App]  netflix-gpt-eta-six.vercel.app 

---

## ✨ Features

### 🔐 Authentication
- Sign Up and Sign In with Email & Password
- Firebase Authentication
- Persistent login with `onAuthStateChanged`
- Protected routes — redirects to login if not authenticated

### 🎥 Browse Page
- Auto-playing muted trailer as background video (via TMDB + YouTube)
- Movie title and description overlay
- Multiple movie lists — Now Playing, Popular, and more
- Responsive movie cards with TMDB poster images

### 🤖 GPT Search (Gemini AI)
- Search for movies in natural language (e.g. "funny Bollywood movies from the 90s")
- Gemini AI suggests 5 relevant movies
- Each suggestion is fetched from TMDB and displayed as a movie list
- Multi-language support (English, Hindi, Spanish)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend UI |
| Redux Toolkit | State management |
| Firebase | Authentication |
| Tailwind CSS | Styling |
| TMDB API | Movie data & trailers |
| Gemini AI API | AI movie recommendations |
| React Router v7 | Navigation |
| Vercel | Deployment |

## 📁 Project Structure

```
src/
├── components/
│   ├── Body.js                 # App router setup
│   ├── Header.js               # Navbar with auth & GPT toggle
│   ├── Login.js                # Sign In / Sign Up form
│   ├── Browse.js               # Main browse page
│   ├── MainConatiner.js        # Hero section with trailer
│   ├── VideoBackground.js      # YouTube trailer iframe
│   ├── VideoTitle.js           # Movie title & description overlay
│   ├── SecondaryContainer.js   # Movie lists section
│   ├── MovieList.js            # Horizontal scrollable movie list
│   ├── MovieCard.js            # Individual movie poster card
│   ├── GptSearch.js            # GPT search page wrapper
│   ├── GptSearchBar.js         # Search input + Gemini API call
│   └── GptMovieSuggestion.js   # AI recommended movie lists
├── hooks/
│   ├── useNowPlayingMovies.js  # Fetches now playing movies
│   ├── usePopularMovies.js     # Fetches popular movies
│   └── useMovieTrailer.js      # Fetches trailer for a movie
└── utils/
    ├── appStore.js             # Redux store configuration
    ├── userSlice.js            # User auth state
    ├── moviesSlice.js          # Movies & trailer state
    ├── gptSlice.js             # GPT search results state
    ├── configSlice.js          # Language configuration
    ├── firebase.js             # Firebase initialization
    ├── constants.js            # API options, URLs, constants
    ├── Validate.js             # Form validation logic
    └── languageConstants.js    # Multi-language text support
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A TMDB account → [themoviedb.org](https://www.themoviedb.org)
- A Firebase project → [console.firebase.google.com](https://console.firebase.google.com)
- A Gemini API key → [aistudio.google.com](https://aistudio.google.com)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/rakeyysh/NetflixGPT.git
cd NetflixGPT
```

**2. Install dependencies**
```bash
npm install
```

**3. Create a `.env` file in the root directory:**
```env
REACT_APP_TMDB_BEARER=your_tmdb_bearer_token
REACT_APP_GEMINI_KEY=your_gemini_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

**4. Start the development server**
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🌐 Deployment (Vercel)

1. Push your code to GitHub (make sure `.env` is in `.gitignore`)
2. Go to [vercel.com](https://vercel.com) and import your GitHub repo
3. Add all environment variables from your `.env` file in the Vercel dashboard
4. Click **Deploy** 🚀

---

## 🔑 API Keys Setup

| Key | Where to get it |
|---|---|
| `REACT_APP_TMDB_BEARER` | [themoviedb.org](https://www.themoviedb.org) → Settings → API → Bearer Token |
| `REACT_APP_GEMINI_KEY` | [aistudio.google.com](https://aistudio.google.com) → Get API Key |
| Firebase keys | [console.firebase.google.com](https://console.firebase.google.com) → Project Settings → Your Apps |

---

## 📸 Screenshots

### Login Page
![Login Page](https://raw.githubusercontent.com/rakeyysh/NetflixGPT/main/public/Screenshots/Login.png)

### Browse Page
![Browse Page](https://raw.githubusercontent.com/rakeyysh/NetflixGPT/main/public/Screenshots/Browse.png)

### GPT Search
![GPT Search](https://raw.githubusercontent.com/rakeyysh/NetflixGPT/main/public/Screenshots/Gemini-Search.png)

---

## 🙋‍♂️ Author

**Rakesh** — [GitHub](https://github.com/rakeyysh) · [LinkedIn](#)

---

## 📄 License

This project is for educational purposes.

---

## 📝 Development Notes

### Features Built
- Create React App
- Configured TailwindCSS
- Header
- Login form
- Sign-up form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented Sign out
- Update profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect/browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register for TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movie Data
- Planning for MainContainer & SecondaryContainer
- Fetch Data from Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make main container look awesome
- Built Secondary Component
- Built Movie List
- Built Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- usePopularMovies Custom Hooks
- GPT Search Feature
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App
- GPT Search Gemini AI API key (openai not working)
- GPT Search API call
- Fetched gptMovieSuggestions from TMDB
- Created gptSlice added data
- Reused MovieList Component to make movie suggestion container
- Added .env file
- Adding .env file to gitignore
- Made our Site responsive
- Moved secret keys from hardcoded to `.env` file (with `REACT_APP_` prefix)

### App Structure

**Login/Sign Up**
- Sign In / Sign up form
- Redirect to Browse Page

**Browse (after authentication)**
- Header
- Main Movie
  - Trailer in Background
  - Title & Description
  - Movie Suggestions
    - MovieList x N

**NetflixGPT**
- Search Bar
- Movie Suggestions