import React from "react";
import StartForm from "../StartForm";
import GameStart from "../GameStart";
import SketchPad from "../SketchPad";
import GuessForm from "../GuessForm";


const App = ({ round, started }) => (
  <>
  { round === 0 && !started ? <StartForm /> : 
  (round === 0 ? <GameStart /> : 
  (round === 1 ? <SketchPad /> : 
  (round === 2 ? <GuessForm /> :
  (round === 3 ? <SketchPad /> :
  (round === 4 ? <GuessForm /> :
   null )))))}
  </>
);

export default App;
