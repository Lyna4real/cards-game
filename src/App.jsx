import { useEffect, useRef, useState } from "react";
import "./App.css";

// Cat GIF URLs
const cat1 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBpZ3prYW9xbXViczd4cW1yMXM0YXIzNW80aW8yYmVyeXV2ZHYwNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2x0VePimPaFJDpGZ7H/giphy.gif";
const cat2 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBpZ3prYW9xbXViczd4cW1yMXM0YXIzNW80aW8yYmVyeXV2ZHYwNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/oz0iZ8vYdgeTVMtFAe/giphy.gif";
const cat3 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBpZ3prYW9xbXViczd4cW1yMXM0YXIzNW80aW8yYmVyeXV2ZHYwNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rKCUYdpnhwS8qCpCIY/giphy.gif";
const cat4 =
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NjZhNTJnYXRwNWxyMDN1NG5pdjlsdGd5aXNrZm9xMGJ0OXl2YW14eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/naAaDvbAoOYdW/giphy.gif";
const cat5 =
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M3Y3amUxbnF1dzN4Y3loOTc1bzJmY2djcjByNWwzcm43ZzJjMG52bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/J8pIanYqwfgZulHkiA/giphy.gif";
const cat6 =
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M3Y3amUxbnF1dzN4Y3loOTc1bzJmY2djcjByNWwzcm43ZzJjMG52bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gl8ymnpv4Sqha/giphy.gif";
const cat7 =
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NjZhNTJnYXRwNWxyMDN1NG5pdjlsdGd5aXNrZm9xMGJ0OXl2YW14eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZJieMJ372LLjXsInfV/giphy.gif";
const cat8 =
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OWxramt2Y3JkYzRhZnV5dng5dnZ3bDFnZWp5YXl1aWloemtmY3gzNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ecI9ClIYkFw3vgsmUx/giphy.gif";
const cat9 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHJkODkxbGF0Z3hmMXVyMWtzb3E1aThoZnhjcHVpM3VwN2dpeGZ4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VeXOXiuac5QO2lQc9s/giphy.gif";
const cat10 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHJkODkxbGF0Z3hmMXVyMWtzb3E1aThoZnhjcHVpM3VwN2dpeGZ4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5T3uYeKr1PE6xhfNcX/giphy.gif";
const cat11 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHJkODkxbGF0Z3hmMXVyMWtzb3E1aThoZnhjcHVpM3VwN2dpeGZ4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0fhWZy2571BZouoJ1t/giphy.gif";
const cat12 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHJkODkxbGF0Z3hmMXVyMWtzb3E1aThoZnhjcHVpM3VwN2dpeGZ4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cbm0J4DEIqKHsKxYHA/giphy.gif";
const cat13 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmFjcWd0bTAxN2VibWd1cWgwcTd1NzVuc3c5cjY4c2hvbnk5a2p6dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GB0XWhoCDNNAW8M9vv/giphy.gif";
const cat14 =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmFjcWd0bTAxN2VibWd1cWgwcTd1NzVuc3c5cjY4c2hvbnk5a2p6dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NlHuBEZ1X4LhqYYt39/giphy.gif";
const cat15 =
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eDV4Y2JsNWI0eThteWJ0N243cThlcTQ2NWhoOHEwMTE0Ym15ZTA0dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/13CoXDiaCcCoyk/giphy.gif";
const cat16 =
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3M3JzNHJ1dHoxOTY0dDk5bWl5bndodGc1bDVoNzJjNTJhZnp2dG8yMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ND6xkVPaj8tHO/giphy.gif";
const catsArr = [
  { src: cat1, id: "1" },
  { src: cat2, id: "2" },
  { src: cat3, id: "3" },
  { src: cat4, id: "4" },
  { src: cat5, id: "5" },
  { src: cat6, id: "6" },
  { src: cat7, id: "7" },
  { src: cat8, id: "8" },
  { src: cat9, id: "9" },
  { src: cat10, id: "10" },
  { src: cat11, id: "11" },
  { src: cat12, id: "12" },
  { src: cat13, id: "13" },
  { src: cat14, id: "14" },
  { src: cat15, id: "15" },
  { src: cat16, id: "16" },
];

export default function App() {
  const [shuffled, setShuffled] = useState(catsArr);
  const [clickedOnes, setClickedOnes] = useState([]);
  const [score, setScore] = useState(0);
  const [finalScores, setFinalScores] = useState([]);
  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem("bestScore")) || 0,
  );
  const [level, setLevel] = useState(4);
  const [animating, setAnimating] = useState(false);

  const dialogRef = useRef(null);
  const loseDialogRef = useRef(null);
  const winDialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  function handleClick(catId) {
    if (animating) return;

    let finalScoresCopy = [...finalScores];
    if (clickedOnes.includes(catId)) {
      loseDialogRef.current?.showModal();
      setClickedOnes([]);
      finalScoresCopy.push(score);
      setFinalScores(finalScoresCopy);
      setBestScore(Math.max(...finalScoresCopy, bestScore));
      setScore(0);
      return;
    }

    const newClickedOnes = [...clickedOnes, catId];
    const newScore = score + 1;
    setClickedOnes(newClickedOnes);
    setScore(newScore);

    if (newClickedOnes.length === level) {
      winDialogRef.current?.showModal();
      finalScoresCopy.push(newScore);
      setFinalScores(finalScoresCopy);
      setBestScore(Math.max(...finalScoresCopy, bestScore));
      return;
    }

    // Trigger subtle shuffle animation
    setAnimating(true);
    setTimeout(() => {
      let copy = [...shuffled];
      for (let i = copy.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      setShuffled(copy);
      setAnimating(false);
    }, 250);
  }

  function onReset() {
    setScore(0);
    setClickedOnes([]);
    dialogRef.current?.showModal();
  }

  function handleLevelSelect(lvl) {
    setLevel(lvl);
  }

  function onStart() {
    dialogRef.current?.close();
    setScore(0);
    setClickedOnes([]);
  }

  return (
    <div className="game-wrapper">
      <dialog ref={dialogRef}>
        <div className="dialog-content">
          <div className="dialog-emoji">🐱</div>
          <div>
            <h2>Cat Memory Game</h2>
            <p style={{ marginTop: "6px" }}>
              Pick each cat card only once without repeating! Choose your
              difficulty level:
            </p>
          </div>

          <div className="difficulty-buttons">
            <button
              className={`diff-btn ${level === 4 ? "active" : ""}`}
              onClick={() => handleLevelSelect(4)}
            >
              Easy (4)
            </button>
            <button
              className={`diff-btn ${level === 8 ? "active" : ""}`}
              onClick={() => handleLevelSelect(8)}
            >
              Med (8)
            </button>
            <button
              className={`diff-btn ${level === 12 ? "active" : ""}`}
              onClick={() => handleLevelSelect(12)}
            >
              Hard (12)
            </button>
          </div>

          <button
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={onStart}
          >
            Start Game 🐾
          </button>
        </div>
      </dialog>

      <header>
        <h1 className="game-title">Purrfect Memory</h1>
        <p className="subtitle">Test your memory with cute dancing cats!</p>
      </header>

      <div className="score-board">
        <div className="score-item">
          Score: <span>{score}</span>
        </div>
        <div className="score-item">
          Best: <span>{bestScore}</span>
        </div>
      </div>

      <div className={`grid grid-${level} ${animating ? "fade-out" : ""}`}>
        {shuffled.slice(0, level).map((item) => (
          <button
            className="cat-card"
            onClick={() => handleClick(item.id)}
            key={item.id}
            title="Click this cat!"
          >
            <img src={item.src} alt="Cute Cat GIF" />
          </button>
        ))}
      </div>

      <button className="reset-btn" onClick={onReset}>
        🔄 Restart / Change Difficulty
      </button>

      <dialog ref={loseDialogRef}>
        <div className="dialog-content">
          <div className="dialog-emoji">😿</div>
          <div>
            <h2>Oopsie!</h2>
            <p style={{ marginTop: "6px" }}>You already clicked that kitty!</p>
          </div>
          <button
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={() => loseDialogRef.current?.close()}
          >
            Try Again
          </button>
        </div>
      </dialog>

      <dialog ref={winDialogRef}>
        <div className="dialog-content">
          <div className="dialog-emoji">🎉</div>
          <div>
            <h2>Purrfect Win!</h2>
            <p style={{ marginTop: "6px" }}>
              Amazing memory! You successfully clicked all {level} cats without
              repeating.
            </p>
          </div>
          <button
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={() => winDialogRef.current?.close()}
          >
            Play Again
          </button>
        </div>
      </dialog>
    </div>
  );
}
