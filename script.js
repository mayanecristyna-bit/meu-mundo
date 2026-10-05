const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let index = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if(i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(i){
  index = i;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

setInterval(() => {
  index = (index + 1) % slides.length;
  goToSlide(index);
}, 3000);

 <div class="slide"><a href="https://jinxpowder.netlify.app/" target="_blank"><img src="imgsite/jinx.png" alt=""></a></div> 
    <div class="slide"><a href="https://rumoufv.netlify.app/" target="_blank"><img src="imgsite/ufv.png" alt""></a></div>


   .dots{
  position: absolute;
  bottom: 12px;
  right: 15px;
  display: flex;
  gap: 8px;
}
.dot{
  width: 12px;
  height: 5px;
  background: #fff;
  opacity: 0.6;
  cursor: pointer;
  transition: 0.3s;
}
.dot.active{
  background: powderblue;
  width: 22px;
  opacity: 1;
}
