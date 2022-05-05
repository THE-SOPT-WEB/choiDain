import React, { useState, useEffect } from "react";
import { FlexBox } from './Style';

const items = [
  {
    name: "황민현",
    src: require("../../Img/민현.jpeg")
  },
  {
    name: "안효섭",
    src: require("../../Img/효섭.jpeg")
  },
  {
    name: "이주연",
    src: require("../../Img/주연.jpeg")
  },
  {
    name: "정진영",
    src: require("../../Img/진영.jpeg")
  },
]

const Game = () => {
  const [handsomes, setHansomes] = useState([]);
  const [displays, setDisplays] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5); // item 값 랜덤하게 설정해주고자 함
    setHansomes(items);
    setDisplays([items[0], items[1]]);
  }, [])
  return (<FlexBox>
    <h1 className="title">이 상 형 월 드 컵</h1>
    {displays.map((d) => { // map을 사용할 때는 key 값을 반드시 설정해줘야함!
      return (
        <div className="flex-1" key={d.name}>
          <img className="handsome-img" src={d.src} />
          <div className="name">{d.name}</div>
        </div>
      );
    })}
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
