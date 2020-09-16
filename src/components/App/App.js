import React from "react";
import StartForm from "../StartForm";
import GameStart from "../GameStart";
import SketchPad from "../SketchPad";
import GuessForm from "../GuessForm";
import EndScreen from "../EndScreen";


const App = ({ round, started }) => (
  <>
  { !started ? <StartForm /> : 
    round === 0 ? <GameStart /> : 
    round === 1 || round === 3 ? <SketchPad /> : 
    round === 2 || round === 4 ? <GuessForm /> :
    <EndScreen />
  }
  </>
);

export default App;
