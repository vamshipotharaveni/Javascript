let boxes=document.querySelectorAll(".boxes");
let reset=document.querySelector(".reset");

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let turno = true;  
  let count = 0;     
  
  boxes.forEach(box => {
      box.addEventListener('click', () => {
          if (turno) {
              box.innerText = "0";
              box.disabled = true;
              box.style.backgroundColor = "white";
              box.style.color = "red";
              box.style.fontSize = "6vmin";
              turno = false;
          } else {
              box.innerText = "X";
              box.disabled = true;
              box.style.backgroundColor = "white";
              box.style.color = "red";
              box.style.fontSize = "5.8vmin";
              turno = true;
          }

      });
  });
const checkwinner=() => {
  for (let pattern of winPatterns) {
    let value1=boxes[pattern[0]].innerText;
    let value2=boxes[pattern[1]].innerText;
    let value3=boxes[pattern[2]].innerText;

    if (value1 != "" && value2 != "" && value3 != ""){
        if(value1==value2 && value2==value3){
            console.log("Winner is ", value1);
        }
    }
  }
};