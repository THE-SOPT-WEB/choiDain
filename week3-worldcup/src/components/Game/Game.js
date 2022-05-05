import React from "react";
import { FlexBox } from './Style';

const Game = () => {
  return (<FlexBox>
    <div className="flex-1">
      <img className="handsome-img" src={require("../../Img/민현.jpeg")} />
    </div>
    <div className="flex-1">
      <img className="handsome-img" src={require("../../Img/효섭.jpeg")} />
    </div>
  </FlexBox>
  );
};

export default Game;
