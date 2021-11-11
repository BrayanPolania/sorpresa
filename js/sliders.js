/*------------------SLIDER NOSOTROS------------------------*/
/*-VARIABLES-*/
/*const btnImgNosotros1 = document.querySelector("#btnImgNosotros1");
const btnImgNosotros2 = document.querySelector("#btnImgNosotros2");
const nosotrosS = document.querySelector("#nosotrosS")
const colorImage= "var(--color2)";
const imagenesN= [//array de imagenes
  `url(img/nosotros/1.jpg) ${colorImage}`,
  `url(img/nosotros/2.jpg) ${colorImage}`,
  `url(img/nosotros/3.jpg) ${colorImage}`,
  `url(img/nosotros/4.jpg) ${colorImage}`,
  `url(img/nosotros/5.jpg) ${colorImage}`,
  `url(img/nosotros/6.jpg) ${colorImage}`,
  `url(img/nosotros/7.jpg) ${colorImage}`,
  `url(img/nosotros/8.jpg) ${colorImage}`,
  `url(img/nosotros/9.jpg) ${colorImage}`,
  `url(img/nosotros/10.jpg) ${colorImage}`,
  `url(img/nosotros/11.jpg) ${colorImage}`,
  `url(img/nosotros/12.jpg) ${colorImage}`,
  `url(img/nosotros/13.jpg) ${colorImage}`,
  `url(img/nosotros/14.jpg) ${colorImage}`,
  `url(img/nosotros/15.jpg) ${colorImage}`,
  `url(img/nosotros/16.jpg) ${colorImage}`,
  `url(img/nosotros/17.jpg) ${colorImage}`,
  `url(img/nosotros/18.jpg) ${colorImage}`,
  `url(img/nosotros/19.jpg) ${colorImage}`,
  `url(img/nosotros/20.jpg) ${colorImage}`,
  `url(img/nosotros/21.jpg) ${colorImage}`,
  `url(img/nosotros/22.jpg) ${colorImage}`,
  `url(img/nosotros/23.jpg) ${colorImage}`,
  `url(img/nosotros/24.jpg) ${colorImage}`,
  `url(img/nosotros/25.jpg) ${colorImage}`,
  `url(img/nosotros/26.jpg) ${colorImage}`,
  `url(img/nosotros/27.jpg) ${colorImage}`,
  `url(img/nosotros/28.jpg) ${colorImage}`,
  `url(img/nosotros/29.jpg) ${colorImage}`,
  `url(img/nosotros/30.jpg) ${colorImage}`
];
//contador
let iN = 0;*/
/*-FUNCIONES-*/
function cambiarImagenNosotros(next) {
  //prevmage = false
  //nextImage = true
  if (next !== true && next !== false) {
    return console.error("El parametro debe ser un booleano (true or false)");
  }
  

  nosotrosS.style.opacity = 0;
  if (next === true) {
    nosotrosS.style.transform = "rotate(0.5turn) scale(2)";
  }
  else if(next === false){
    nosotrosS.style.transform = "rotate(-0.5turn) scale(2)";
  }

	setTimeout(()=>{
    if (next === true) {
      if (iN<imagenesN.length-1) {
        iN++;
        nosotrosS.style.background= imagenesN[iN];
      }
      else {
        iN = 0;
        nosotrosS.style.background= imagenesN[iN];
      }
    }
    else if(next === false){
      if (iN==0) {
        iN = imagenesN.length-1;
        nosotrosS.style.background= imagenesN[iN];
      }
      else {
        iN--;
        nosotrosS.style.background= imagenesN[iN];
      }
    }
		setTimeout(()=>{
			nosotrosS.style.opacity = 1;
			nosotrosS.style.transform= "rotate(0turn) scale(1)";
			nosotrosS.style.backgroundSize= "contain";
			nosotrosS.style.backgroundRepeat= "no-repeat";
			nosotrosS.style.backgroundPosition= "center";

		},250)
	},250)
	
}
/*-CODIGO-*/
/*listeners*/
btnImgNosotros1.addEventListener("click", ()=>{cambiarImagenNosotros(false)});
btnImgNosotros2.addEventListener("click", ()=>{cambiarImagenNosotros(true)});
  /*listeners*/

/*------------------SLIDER REGALOS------------------------*/
/*-VARIABLES-*/
/*const btnRegalos1 = document.querySelector("#btnRegalos1");
const btnRegalos2 = document.querySelector("#btnRegalos2");
const regalosS = document.querySelector("#regalosS")
const colorRegalo= "var(--color2)";
const imagenesR= [//array de imagenes
  `url(img/regalo/1.jpg) ${colorRegalo}`,
  `url(img/regalo/2.jpg) ${colorRegalo}`,
  `url(img/regalo/3.jpg) ${colorRegalo}`,
  `url(img/regalo/4.jpg) ${colorRegalo}`,
  `url(img/regalo/5.jpg) ${colorRegalo}`,
  `url(img/regalo/6.jpg) ${colorRegalo}`
];
//contador
let iR = 0;*/
/*-FUNCIONES-*/
function cambiarRegalo(next) {
  //prevmage = false
  //nextImage = true
  if (next !== true && next !== false) {
    return console.error("El parametro debe ser un booleano (true or false)");
  }
  

  regalosS.style.opacity = 0;
  if (next === true) {
    regalosS.style.transform = "rotate(0.5turn) scale(2)";
  }
  else if(next === false){
    regalosS.style.transform = "rotate(-0.5turn) scale(2)";
  }

	setTimeout(()=>{
    if (next === true) {
      if (iR<imagenesR.length-1) {
        iR++;
        regalosS.style.background= imagenesR[iR];
      }
      else {
        iR = 0;
        regalosS.style.background= imagenesR[iR];
      }
    }
    else if(next === false){
      if (iR==0) {
        iR = imagenesR.length-1;
        regalosS.style.background= imagenesR[iR];
      }
      else {
        iR--;
        regalosS.style.background= imagenesR[iR];
      }
    }
		setTimeout(()=>{
			regalosS.style.opacity = 1;
			regalosS.style.transform= "rotate(0turn) scale(1)";
			regalosS.style.backgroundSize= "contain";
			regalosS.style.backgroundRepeat= "no-repeat";
			regalosS.style.backgroundPosition= "center";

		},250)
	},250)
	
}
/*-CODIGO-*/
/*listeners*/
btnRegalos1.addEventListener("click", ()=>{cambiarRegalo(false)});
btnRegalos2.addEventListener("click", ()=>{cambiarRegalo(true)});
  /*listeners*/


//TODO: 
//FIXME: 