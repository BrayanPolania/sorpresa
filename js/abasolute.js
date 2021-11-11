/*-----------------------ABSOLUTE--------------------------*/
/*-VARIABLES-*/
/*const
btnCloseFirstMessage = document.querySelector('#btnCloseFirstMessage'),
sectionFirstMessage = document.querySelector('#sectionFirstMessage');*/
/*-FUNCIONES-*/



function closeFirstMessage () {
  sectionFirstMessage.style.transform= "translateY(-150vh)";
  setTimeout(()=>{
    body.style.overflow = "auto";
  },250)
  setTimeout(()=>{
    sectionFirstMessage.style.display= "none";
  },1000)
}


/*-CODIGO-*/
/*listeners*/
btnCloseFirstMessage.addEventListener('click', closeFirstMessage);

  /*listeners*/

/*-----------------------PROPUESTA-------------------------*/
/*-VARIABLES-*/
/*const
rtaNo = document.querySelector('#tpSection'),
containerPropuesta = document.querySelector('#containerPropuesta'),
btnPropuesta = document.querySelector('#btnPropuesta'),
btnSiPropuestaFinal = document.querySelector('#btnSiPropuestaFinal');*/
/*-FUNCIONES-*/
function numAleatorio (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function tpSection() {
  const 
  x = numAleatorio(-29, 14),
  y = numAleatorio(-21, 9);

  rtaNo.style.transform = `translateX(${x}rem) translateY(${y}rem)`;
}

function openPropuesta() {
  containerPropuesta.style.position = "absolute";
  containerPropuesta.style.bottom = "0";
  containerPropuesta.style.display = "flex";
  body.style.overflow = "hidden";
}
function closePropuesta() {
  containerPropuesta.style.transform= "translateY(150vh)";
  setTimeout(()=>{
    body.style.overflow = "auto";
  },300)
  setTimeout(()=>{
    containerPropuesta.style.display = "none";
    containerPropuesta.style.transform= "translateY(0)";
  },1000)
}
/*-CODIGO-*/
/*listeners*/
rtaNo.addEventListener('mouseover', tpSection);
btnPropuesta.addEventListener('click', openPropuesta);
btnSiPropuestaFinal.addEventListener('click', closePropuesta);
  /*listeners*/

//TODO: 
//FIXME: 