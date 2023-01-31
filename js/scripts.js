const sec1_Title = document.querySelector('#sec1 h1.title');
const sec1_Slider = document.querySelector('#sec1 .slider_wrap');

new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  autoplay: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ['Num0', 'Num1', 'Num2', 'Num3', 'Num4', 'Num5'],
  afterLoad: function (old_elem, new_elem, direction) {
    if (new_elem.index == 1) {
      sec1();
    }
    if (old_elem.index == 1) {
      sec1_reset();
    }
  },
});

//section function
function sec1() {
  sec1_Title.style.cssText = `
	opacity: 1;
    transform: translateX(50px);
							`;
  sec1_Slider.style.cssText = `
	opacity: 1;
    transform: translateX(-50px);
	`;
}
function sec1_reset() {
  sec1_Title.style.cssText = `
	opacity: 0;
    transform: translateX(-50px);
							`;
  sec1_Slider.style.cssText = `
	opacity: 0;
    transform: translateX(50px);
	`;
}

const Body = document.querySelector('body');
const Nav_Btn = document.querySelector('#nav-icon');

Nav_Btn.addEventListener('click', function () {
  Body.classList.toggle('nav_active');
});

// about 페이지 움찔움찔
const topBgLeft = document.querySelector('#sec2 .inner .top-bg-left');
const topBgRight = document.querySelector('#sec2 .top-bg-right');

addEventListener('mousemove', e => {
  let x = e.clientX;
  let y = e.clientY;
  topBgLeft.style.transform = `translate(${x / 40}px, ${-50 / y}px)`;
  // topBgRight.style.transform = `translate(${x / -1}px, ${y / -5}px)`;
});
