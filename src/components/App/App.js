import React from "react";
import StartForm from "../StartForm";
import SketchPad from "../SketchPad";
import GuessForm from "../GuessForm";

const App = ({ round }) => (
  <>
  { round === 0 ? <StartForm /> :
  (round === 1 ? <SketchPad /> :
    <GuessForm /> )
    
  }
  </>
);

export default App;
