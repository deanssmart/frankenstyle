import React from "react";
import SketchPad from "../SketchPad";
import StartForm from "../StartForm";

const App = ({ round }) => (
  <>
  { round === 0 ? <StartForm /> :
    <SketchPad />
  }
  </>
);

export default App;
