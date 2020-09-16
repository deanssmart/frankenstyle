import React, { useRef, useEffect, useState } from "react";
import Button from "../Button/Button";
import { CirclePicker } from 'react-color';
import "../../App.css";

const SketchPad = ({ word, round, roundInputs, handleSave }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#f44336");
  const [reRender, setReRender] = useState("");  

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.style.width = `${500}px`;
    canvas.style.height = `${500}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = 5;
    contextRef.current = context;
  }, [round, color]);

  const startDrawing = ({ nativeEvent }) => {
    if (nativeEvent.type === "mousedown") {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
    if (nativeEvent.type === "touchstart") {
      const { clientX, clientY } = nativeEvent.touches[0];
      const { offsetLeft, offsetTop } = canvasRef.current;
      contextRef.current.beginPath();
      contextRef.current.moveTo(clientX - offsetLeft, clientY - offsetTop);
      setIsDrawing(true);
    }
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL();
    setReRender(imageData);
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    if (nativeEvent.type === "mousemove") {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
    if (nativeEvent.type === "touchmove") {
      const { clientX, clientY } = nativeEvent.touches[0];
      const { offsetLeft, offsetTop } = canvasRef.current;
      contextRef.current.lineTo(clientX - offsetLeft, clientY - offsetTop);
      contextRef.current.stroke();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL();
    handleSave(round, imageData);
  };

  const handleColor = (color) => {
    setColor(color.hex);
  };

  return (
    <>
      {round === 1 ? 
        <h2>{ word }</h2> : 
        <h2>{ roundInputs[1] }</h2>
      }
      <CirclePicker 
        color={ color }
        onChangeComplete={handleColor}
      />
      <canvas
        className="border border-primary"
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onTouchStart={startDrawing}
        onTouchEnd={finishDrawing}
        onTouchMove={draw}
        ref={canvasRef}
      />
      <Button
        buttonClass="btn btn-success"
        handleClick={(e) => handleSubmit(e)}
        label="Save"
      />
    </>
  );
};

export default SketchPad;
