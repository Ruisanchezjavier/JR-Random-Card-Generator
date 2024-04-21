/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // these arrays create the full deck of cards
  let suit = ["♥", "♣", "♦", "♠"];
  let value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K", "A"];

  function generateRandomSuit() {
    return suit[Math.floor(Math.random() * suit.length)];
  }
  function generateRandomValue() {
    return value[Math.floor(Math.random() * value.length)];
  }

  let randomSuit = generateRandomSuit();
  let randomValue = generateRandomValue();

  document.querySelector(".number").innerHTML = randomValue;
  document.querySelector(".topSuit").innerHTML = randomSuit;
  document.querySelector(".bottonSuit").innerHTML = randomSuit;
  if (randomSuit === "♦" || randomSuit === "♥") {
    document.querySelector(".topSuit").style.color = "red";
    document.querySelector(".bottonSuit").style.color = "red";

    // const htmlDocument = document.querySelector(".card");
    // htmlDocument.innerHTML = card;
  }
  let card = `${randomSuit} ${randomValue} ${randomSuit}`;
  console.log(card);
};
