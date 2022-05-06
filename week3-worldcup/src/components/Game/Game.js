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
];

const Game = () => {
  const [handsomes, setHansomes] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    items.sort(() => Math.random() - 0.5); // item 값 랜덤하게 설정해주고자 함
    setHansomes(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = handsome => (event) => { // handsome 객체가 들어갔을 때 반환되는 이벤트를 다시 parameter로 받아서 반환해야하기 때문에 감쌈
    if (handsomes.length <= 2) {
      if (winners.length === 0) { // 결승전
        setDisplays([handsome]);
      } else {
        let updatedHandsome = [...winners, handsome];
        setHansomes(updatedHandsome);
        setDisplays([updatedHandsome[0], updatedHandsome[1]]);
        setWinners([]);
      }
    } else if (handsomes.length > 2) { // 남은 핸썸가이가 두명 이상이면 계속해서 이상형 월드컵 진행
      setWinners([...winners, handsome])
      setDisplays([handsomes[2], handsomes[3]])
      setHansomes(handsomes.slice(2)) // 현재 노출된 2개 제외
    }
  };

  return (
    <FlexBox>
      <h1 className="title">이 상 형 월 드 컵</h1>
      {displays.map(item => { // map을 사용할 때는 key 값을 반드시 설정해줘야함!
        return (
          <div className="flex-1" key={item.name} onClick={clickHandler(item)}>
            <img className="handsome-img" src={item.src} alt="handsome" />
            <div className="name">{item.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
