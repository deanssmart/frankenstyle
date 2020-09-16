import React, { useRef, useEffect, useState } from "react";
import Button from "../Button/Button";

const SketchPad = ({ round, handleSave }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.width = `${500}px`;
    canvas.style.height = `${500}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = `${round === 1 ? "blue" : "green"}`;
    context.lineWidth = 5;
    contextRef.current = context;
  }, [round]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
<<<<<<< HEAD
    const imageData = canvas.toDataURL();
    handleSave(round, imageData);
  }

  return (
    <>
      <canvas
        className="border border-primary"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
      <Button 
        buttonClass="container btn btn-success"
        handleClick={ (e) => handleSubmit(e) }
        label="Save"
      />
=======
    const dataURL = canvas.toDataURL();
    handleSave(round, dataURL);
  };

  return (
    <>
      <div className="container-global">
        <div className="container-sketchpad">
          <canvas
            className="border border-primary"
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
          />
          <Button
            buttonClass="submit"
            handleClick={(e) => handleSubmit(e)}
            label="Submit"
          />
        </div>
      </div>
>>>>>>> layout
    </>
  );
};

export default SketchPad;
