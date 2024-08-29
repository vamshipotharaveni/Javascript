let boxes=document.querySelectorAll(".boxes");
let reset=document.querySelector(".reset");
let msg=document.querySelector(".msg");
let divcont=document.querySelector(".box-container");
let newbtn=document.querySelector(".newbtn");
let mode=document.querySelector(".mode");
let body=document.querySelector("body");


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
         
              box.style.backgroundColor = "white";
              box.style.color = "red";
              box.style.fontSize = "6vmin";
              turno = false;
          } else {
              box.innerText = "X";
             
              box.style.backgroundColor = "white";
              box.style.color = "red";
              box.style.fontSize = "5.8vmin";
              turno = true;
          }
          box.disabled = true;
          checkWinner();
          count++;
          let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
      });
  });

  const gameDraw = () => {
    msg.style.marginTop="200px"
    msg.style.marginBottom="200px"
    msg.innerText = `Game is a Draw.`;
    msg.style.display="block";
    newbtn.style.display="block";
    newbtn.style.margin="0 auto";
    reset.style.display="none"
    newgame() && disableBoxes();
    
   
  };
  
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
      newbtn.classList.add("hide");
    }
  };

  const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
          if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            console.log("Winner is ",pos1Val);
            return true;
          }
        }
        
      }
      
    };
    console.log(count);
    const showWinner= (a) =>{
      msg.style.marginTop="200px";
      msg.style.marginBottom="200px";
      msg.style.display="block";
        msg.innerText="Congratulations Winner is "+a;
        // msg.style.color="blue";
        divcont.classList.add("hide");
        reset.classList.add("hide");
        newbtn.style.display="block";
        newbtn.style.textAlign="center";
        newbtn.style.margin="0 auto";
        reset.style.display="None"
        newgame();
    };

    reset.addEventListener('click',()=>{
      turno=true;
      count=0;
      for (const box of boxes) {
        box.innerText=""
      }
      enableBoxes();
    })

    const newgame = () =>{
    newbtn.addEventListener('click',() =>{
      divcont.classList.remove("hide");
      reset.classList.remove("hide");
      reset.style.display="block"
      reset.style.margin="0 auto"
      reset.style.marginTop="30px"
      msg.style.display="none";
      newbtn.style.display="none";
      count=0;
      enableBoxes();
    });
    }



  
    let modes = "light";

  mode.addEventListener('click', () => {
  if (modes !== "light") {
    modes = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    modes = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
    msg.style.color="gold"
  }
});





