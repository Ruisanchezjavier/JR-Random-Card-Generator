/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let suit = ["♥", "♣", "♦", "♠"];
  let value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A"];

  function generateRandomSuit() {
    return suit[Math.floor(Math.random() * suit.length)];
  }
  function generateRandomValue() {
    return value[Math.floor(Math.random() * value.length)];
  }

  let randomSuit = generateRandomSuit(suit, suit.length);
  let randomValue = generateRandomValue(value, value.length);

  let card = `${randomSuit} ${randomValue} ${randomSuit}`;
  // console.log(card);

  const htmlDocument = document.querySelector(".card");
  htmlDocument.innerHTML = card;
  console.log(card);
};
