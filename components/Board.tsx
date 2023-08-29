import { Button, Input } from "@nextui-org/react";
import { useState, useRef } from "react";
 
export const Board = () => {
  const [isPressed, setIsPressed] = useState(false);
  const clickButtonHandler = () => {
    setIsPressed(true);
  };

  return (
    <div className="w-[350px] mx-auto h-[80vh] rounded-2xl border-2">
      <h2 className="text-2xl text-center font-bold py-4">Word</h2>
      {/* <Button
        variant="light"
        disableRipple
        className="w-full"
        onClick={clickButtonHandler}
      >
        Add new word
      </Button> */}
      <div className="text-center">
        {isPressed && (
          <Input
            variant="underlined"
            className="inline-block w-[calc(100%-1em)]"
            autoFocus
          />
        )}
      </div>
    </div>
  );
};
