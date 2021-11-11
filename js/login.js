/*--------------------------LOGIN----------------------------*/
/*-VARIABLES-*/
/*const
//sectionFirstMessage
inputPassword = document.querySelector('#password'),
btnsendLogin = document.querySelector('#sendLogin');
acceso = document.querySelector('#acceso'),
statusF = document.querySelector('#status'),
main = document.querySelector('#main'),
body = document.querySelector('#body'),
password = /hola/i;*/

/*-FUNCIONES-*/
function confirmPassword(inputPassword) {
  let confirm;

  if (inputPassword.match(password) === null) {
    confirm = false;
  }
  else {
    const test = inputPassword.match(password).join("");
    
    // if (test === inputPassword) {
    //   confirm = true;
    // }
    // else {
    //   confirm = false;
    // }
    test === inputPassword ? confirm = true: confirm = false;
  }


  if (confirm) {
    sendLogin();
  }
  else {
    console.error("error");
    incorrectPassword();
  }
}

function incorrectPassword() {
  statusF.style.display = 'flex';
}

function sendLogin() {
  acceso.style.borderRadius = "50%";
  acceso.style.transform = "scale(0)";
  setTimeout(()=>{
    acceso.style.display = 'none';
    setTimeout(()=>{
      sectionFirstMessage.style.display = "flex";
      body.style.overflow = "hidden";
      main.style.display = 'block';
    },250)
  },1000)
  
}
/*-CODIGO-*/
/*listeners*/
btnsendLogin.addEventListener("click", ()=>{
  confirmPassword(inputPassword.value);
})
inputPassword.addEventListener("keydown", (e)=>{
  if(e.key === "Enter") {
    confirmPassword(inputPassword.value);
  }
})
inputPassword.addEventListener("focus", ()=>{
  statusF.style.display = "none";
})
  /*listeners*/


//TODO:
//FIXME: 