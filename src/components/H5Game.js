import * as React from "react";
import GameInfoList from "./GameDialogs/GameInfoList.json";
import { GridContainer } from "./CommonComp";

const gameInfoList = [
  {
    name: "老虎機-悟空",
    info: "隨機百變符號轉換，定海神針擴展百搭，百變大發生。",
    tags: ["#CocosCreator3"],
    image: "/static/images/logo/74.jpg",
    page: GameInfoList.MonkeyKing,
  },
  {
    name: "街機-金蟾",
    info: "瞄準、發射、開獎。 吐舌抓幣、紅利遊戲隨機開獎。",
    tags: ["#CocosCreator3"],
    image: "/static/images/logo/70.jpg",
    page: GameInfoList.GoldenMoneyFrog,
  },
  {
    name: "老虎機-足球",
    info: "以足球為主題的吃角子老虎機，點球大戰小遊戲，防守、射門方向四選一。",
    tags: ["#CocosCreator2"],
    image: "/static/images/logo/62.jpg",
    page: GameInfoList.FootBallChampion,
  },
  {
    name: "老虎機-錦鯉",
    info: "錦鯉風吃角子老虎機，百搭推移、獎金翻倍，太極鏡射，卡牌複製。",
    tags: ["#CocosCreator2"],
    image: "/static/images/logo/61.jpg",
    page: GameInfoList.WealthKois,
  },
  {
    name: "老虎機-舞獅",
    info: "舞獅風格吃角子老虎機，消去式老虎機，符號消去多次兌獎，百搭多段消去無限連贏！",
    tags: ["#CocosCreator2"],
    image: "/static/images/logo/60.jpg",
    page: GameInfoList.FortunateLion,
  },
  {
    name: "捕魚機",
    info: "紅包一把抓、金蟾多段倍率、共鬥獎勵、全場轟炸。",
    tags: ["#LayaAir"],
    image: "/static/images/logo/48.jpg",
    page: GameInfoList.LuckyFishing,
  },
  {
    name: "牌桌-骰寶",
    info: "容易上手的骰子遊戲，預測三顆骰子的大小、點數決定輸贏。",
    tags: ["#Createjs"],
    image: "/static/images/logo/14.jpg",
    page: GameInfoList.Sicbo,
  },
  {
    name: "牌桌-百家樂",
    info: "經典廳多台下注、好路提示掌握最新好路。競咪廳體驗猶如真實般的咪牌過程。",
    tags: ["#Createjs"],
    image: "/static/images/logo/46.jpg",
    page: GameInfoList.Baccarat,
  },
  {
    name: "牌桌-德州撲克",
    info: "玩家與莊家比拚牌型大小，考驗智力與運氣的撲克遊戲。",
    tags: ["#Createjs"],
    image: "/static/images/logo/8.jpg",
    page: GameInfoList.TexasHoldem,
  },
  {
    name: "牌桌-溫州牌九",
    info: "古代中國傳統遊戲，依據點數的不同組合來比較大小，決定勝負。",
    tags: ["#Createjs"],
    image: "/static/images/logo/10.jpg",
    page: GameInfoList.WenzhouPaiGow,
  },
  {
    name: "牌桌-三公",
    info: "百家樂玩法的一種變形。與莊家賭點數、賭公牌數，還可以賭特殊牌型。",
    tags: ["#Createjs"],
    image: "/static/images/logo/6.jpg",
    page: GameInfoList.ThreeFace,
  },
  {
    name: "牌桌-多台",
    info: "仿真遊戲多台任選，縱觀各遊戲局勢，掌握先機。",
    tags: ["#Createjs"],
    image: "/static/images/logo/45.jpg",
    page: GameInfoList.Multibet,
  },
  {
    name: "老虎機-財神",
    info: "財神風格吃角子老虎機，五路財神帶來多種玩法。",
    tags: ["#Createjs"],
    image: "/static/images/logo/36.jpg",
    page: GameInfoList.FiveWayFortuneGods,
  },
];

export function H5Game() {
  return <GridContainer infoList={gameInfoList}></GridContainer>;
}