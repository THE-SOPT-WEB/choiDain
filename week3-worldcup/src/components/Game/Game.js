import React from "react";
import { FlexBox } from './Style';

const Game = () => {
  return (<FlexBox>
    <h1 className="title">이 상 형 월 드 컵</h1>
    <div className="flex-1">
      <img className="handsome-img" src={require("../../Img/민현.jpeg")} />
      <div className="name">황민현</div>
    </div>
    <div className="flex-1">
      <img className="handsome-img" src={require("../../Img/효섭.jpeg")} />
      <div className="name">안효섭</div>
    </div>
  </FlexBox>
  );
};

export default Game;
