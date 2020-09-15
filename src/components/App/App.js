import React from "react";
import StartForm from "../StartForm";
import SketchPad from "../SketchPad";
import GuessForm from "../GuessForm";
import EndScreen from "../EndScreen";

const App = ({ round }) => (
  <>
    {round === 0 ? <StartForm /> : round === 1 ? <SketchPad /> : <GuessForm />}
    <EndScreen />
  </>
);

export default App;
