const slideList = [{
 img: "images/img1.jpg",
 text: 'First Text'
},
{
 img: "images/img2.jpg",
 text: 'Second Text'
},
{
 img: "images/img3.jpg",
 text: 'Third Text'
}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 3000;
const negativeActive = -1
let active = 0;


const changeDot = () => {
 const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
 dots[activeDot].classList.remove('active');
 dots[active].classList.add('active');
}

const changeSlide = () => {
 active++;
 if (active === slideList.length) {
  active = 0;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot();

}
setInterval(changeSlide, time)

const changeSlideLeft=()=>{
    active--;
 if (active === slideList.length) {
    active = 0;
 }
 else if(active===negativeActive){
    active=slideList.length-1;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
 }
 image.src = slideList[active].img;
 h1.textContent = slideList[active].text;
 changeDot()
}

const keyChangeSlide = (e) => {
    if(e.keyCode===37){
        changeSlideLeft()
      }
      else if(e.keyCode===39){
        changeSlide()
      }
    }

window.addEventListener('keydown', keyChangeSlide)




