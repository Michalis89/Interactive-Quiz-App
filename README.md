# Interactive Gaming Quiz App

This is a **Neon-Themed Interactive Gaming Quiz App** built using **HTML, CSS, and JavaScript**. The quiz dynamically fetches gaming-related questions from an API and features **real-time score tracking, sound effects, and animations**.

## Features

- **Dynamic Questions:** Fetches gaming-related trivia from the Open Trivia Database (OpenTDB API).
- **Dark Mode Only:** A visually stunning neon-themed dark mode UI.
- **Animated UI:** Uses GSAP for smooth transitions.
- **Timed Questions:** Each question has a countdown timer.
- **Sound Effects:** Plays different sounds for correct and incorrect answers.
- **Score Tracking:** Keeps track of scores and saves the high score in `localStorage`.
- **Auto Next Question:** Moves to the next question automatically after answering.

## Tech Stack

- **HTML** - Structuring the quiz layout.
- **CSS** - Neon styling and animations.
- **JavaScript** - Dynamic quiz logic, event handling, and API fetching.
- **GSAP** - Smooth animations and transitions.

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/interactive-quiz-app.git
   ```
2. Open the project folder and launch `index.html` in a browser.

## Deployment

To deploy this app, you can use **GitHub Pages, Vercel, or Netlify**:

- **GitHub Pages:** Upload the repository and enable Pages from settings.
- **Vercel:** Run `vercel` from the CLI.
- **Netlify:** Drag and drop the project folder in Netlify UI.

## Folder Structure

```
interactive-quiz-app/
│── index.html       # Main HTML file
│── styles.css       # Styling and animations
│── script.js        # Quiz logic and event handling
│── sounds/          # Folder for sound effects
│   ├── correct.mp3  # Sound effect for correct answers
│   ├── incorrect.wav # Sound effect for incorrect answers
│── README.md        # Documentation
│── LICENSE          # Open-source license
```

## Future Improvements

- Add a **category selection** for different quiz topics.
- Implement a **database backend** to store scores.
- Create a **leaderboard system** for users.

## License

This project is licensed under the **MIT License**. Feel free to modify and share!
