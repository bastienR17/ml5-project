import { useState, useEffect } from 'react';
import './App.css';
const ml5 = window.ml5;

let sentiment;

function App() {
// Initialisation des states

  let [text, setText] = useState('');
  let [score, setScore] = useState(0);
  let [modelIsReady, setResults] = useState(false); 

  const handleChange = (e) => {
    setText(e.target.value);
  }

// Fonction pour calculer le score de sentiment

  const calculateSentiment = () => {
    const prediction = sentiment.predict(text);
    const input = document.getElementById('input');
    setScore(prediction.score);
    //Changement de couleur en fonction du score
    if(prediction.score < 0.5){
      input.style.background = 'red';
    }
    //
    if(input.value === "éventail"){
      input.style.background = "url('https://media.giphy.com/media/3o7TKsQ8UHdAaGK7l6/giphy.gif')";
    }

  }

// Chargement du resultat du model

  useEffect(() => {
    console.log("loading model");
    sentiment = ml5.sentiment('movieReviews', Results);
  }, [])

  function Results() {
    console.log('Model Loaded!');
    setResults(true);
  }

// Affichage du resultat

  return (
    <div className="App">
      <h1>Analyse de Sentiment</h1>
      <textarea id="input" onChange={handleChange} placeholder="Entre un message" disabled={!modelIsReady}></textarea>
      <p>{modelIsReady ? '' : 'Loading model...'}</p>
      <button id="calculate" onClick={calculateSentiment}>Calculer</button>
      <p id="score">Score de sentiment : {score.toFixed(5)}</p>
      <h2>Devinette</h2>
      <p>Tu me vois en été et non en hiver et, que je sois grand ouvert ou fermé, je me trouve entre tes mains, qui suis-je ?</p>
    </div>
  );
}

export default App;
