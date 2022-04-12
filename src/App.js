import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { TicTacToe } from "./Games/Tic-Tac-Toe/TicTacToe";
import { CardGame } from "./Games/Cards/cardGame";
import { HangManIntro } from "./Games/HangMan/hangManIntro";
import { TicTacToeIntro } from "./Games/Tic-Tac-Toe/Tic-Tac-Toe-Intro";
import { HangManGame } from "./Games/HangMan/hangManGame";
import { CardGameIntro } from "./Games/Cards/cardGameIntro";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tictactoegame" element={<TicTacToe />} />
        <Route path="tictactoeintro" element={<TicTacToeIntro />} />
        <Route path="cardgame" element={<CardGame />} />
        <Route path="hangmanintro" element={<HangManIntro />} />
        <Route path="hangmangame" element={<HangManGame />} />
        <Route path="cardgameintro" element={<CardGameIntro />} />
      </Routes>
    </Router>
  );
}
