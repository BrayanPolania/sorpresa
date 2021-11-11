/*------------------------ABSOLUTE---------------------------*/
/*-VARIABLES-*/
const //more / important
colorImage= "var(--color2)",
colorRegalo= "var(--color2)",
password = /maite zaitut/i;

const //querySelectors
  inputPassword = document.querySelector('#password'),
  btnsendLogin = document.querySelector('#sendLogin');
  acceso = document.querySelector('#acceso'),
  statusF = document.querySelector('#status'),
  main = document.querySelector('#main'),
  body = document.querySelector('#body'),
  btnImgNosotros1 = document.querySelector("#btnImgNosotros1"),
  btnImgNosotros2 = document.querySelector("#btnImgNosotros2"),
  nosotrosS = document.querySelector("#nosotrosS"),
  btnCloseFirstMessage = document.querySelector('#btnCloseFirstMessage'),
  sectionFirstMessage = document.querySelector('#sectionFirstMessage');
  rtaNo = document.querySelector('#tpSection'),
  containerPropuesta = document.querySelector('#containerPropuesta'),
  btnPropuesta = document.querySelector('#btnPropuesta'),
  btnSiPropuestaFinal = document.querySelector('#btnSiPropuestaFinal'),
  btnRegalos1 = document.querySelector("#btnRegalos1"),
  btnRegalos2 = document.querySelector("#btnRegalos2"),
  regalosS = document.querySelector("#regalosS");

const //arraysImages
imagenesN= [//array de imagenes nosotros
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
],
imagenesR= [//array de imagenes regalos
  `url(img/regalo/1.jpg) ${colorRegalo}`,
  `url(img/regalo/2.jpg) ${colorRegalo}`,
  `url(img/regalo/3.jpg) ${colorRegalo}`,
  `url(img/regalo/4.jpg) ${colorRegalo}`,
  `url(img/regalo/5.jpg) ${colorRegalo}`,
  `url(img/regalo/6.jpg) ${colorRegalo}`
];


//contadores
let iN = 0;
let iR = 0;

//TODO: 
//FIXME: 

