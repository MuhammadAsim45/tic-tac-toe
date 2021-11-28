function onStart() {
  let startgame = (document.getElementsByClassName(
    "startgame"
  )[0].style.transform = "translatey(0)");
}
function startgame() {
  let startgame = (document.getElementsByClassName(
    "startgame"
  )[0].style.transform = "translatey(100%)");
  let player = (document.getElementsByClassName("player")[0].style.transform =
    "translatex(0)");
  startgame = document.getElementsByClassName(
    "startgame"
  )[0].style.transitionDelay = "0s";
}
function playnow() {
  let player1 = document.getElementById("player1").value;
  let player2 = document.getElementById("player2").value;
  if (player1 === "" || player2 === "") {
    alert("please specify player name first");
  } else {
    let player = (document.getElementsByClassName("player")[0].style.transform =
      "translatex(-150%)");
    player = document.getElementsByClassName(
      "player"
    )[0].style.transitionDelay = "0s";
  }
}
function playagain() {
  location.reload();
}

var isX = true;
var inp = "X";
var count = 0;

const game = () => {
  let box1 = document.getElementsByClassName("box")[0];
  let box2 = document.getElementsByClassName("box")[1];
  let box3 = document.getElementsByClassName("box")[2];
  let box4 = document.getElementsByClassName("box")[3];
  let box5 = document.getElementsByClassName("box")[4];
  let box6 = document.getElementsByClassName("box")[5];
  let box7 = document.getElementsByClassName("box")[6];
  let box8 = document.getElementsByClassName("box")[7];
  let box9 = document.getElementsByClassName("box")[8];

  box1.addEventListener("click", (e) => {
    count++;
    box1.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
  box2.addEventListener("click", (e) => {
    count++;
    box2.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
  box3.addEventListener("click", (e) => {
    count++;
    box3.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
  box4.addEventListener("click", (e) => {
    count++;
    box4.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
  box5.addEventListener("click", (e) => {
    count++;
    box5.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
  box6.addEventListener("click", (e) => {
    count++;
    box6.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
  box7.addEventListener("click", (e) => {
    count++;
    box7.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
  box8.addEventListener("click", (e) => {
    count++;
    box8.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
  box9.addEventListener("click", (e) => {
    count++;
    box9.innerHTML = inp;
    if (isX) {
      isX = false;
    } else {
      isX = true;
    }
    if (inp == "X") {
      inp = "O";
    } else {
      inp = "X";
    }
    if (
      (box1.innerHTML == "X" &&
        box2.innerHTML == "X" &&
        box3.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box4.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box7.innerHTML == "X" &&
        box8.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box6.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box1.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box9.innerHTML == "X") ||
      (box3.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box7.innerHTML == "X") ||
      (box2.innerHTML == "X" &&
        box5.innerHTML == "X" &&
        box8.innerHTML == "X") ||
      (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X")
    ) {
      setTimeout(() => {
        let player1 = document.getElementById("player1").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player1} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (
      (box1.innerHTML == "O" &&
        box2.innerHTML == "O" &&
        box3.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box4.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box7.innerHTML == "O" &&
        box8.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box6.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box1.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box9.innerHTML == "O") ||
      (box3.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box7.innerHTML == "O") ||
      (box2.innerHTML == "O" &&
        box5.innerHTML == "O" &&
        box8.innerHTML == "O") ||
      (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O")
    ) {
      setTimeout(() => {
        let player2 = document.getElementById("player2").value;
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `${player2} Won!!`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
    if (count == 9) {
      setTimeout(() => {
        let result_container =
          document.getElementsByClassName("result_container")[0];
        result_container.innerHTML = `draw`;
        let result = (document.getElementsByClassName(
          "result"
        )[0].style.opacity = "1");
        result = document.getElementsByClassName("result")[0].style.zIndex =
          "0";
      }, 80);
      return;
    }
  });
};
game();
