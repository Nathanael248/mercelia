

const nav = document.querySelector('.header-container');
const handleClick = function (e) {
    if(e.target.classList.contains('nav__link')) {
      const elem = e.target;
    
      const siblings = elem.closest('ul').querySelectorAll('a');
      const logo = elem.closest('.header-container').querySelector('img');

      siblings.forEach((el, i) => {
        // console.log(el);
        if (el !== elem) {
 
         el.style.opacity=this;
         logo.style.opacity= this;
        }
      })
    }
  // })
}
nav.addEventListener('mouseover', handleClick.bind(0.5));
nav.addEventListener('mouseout', handleClick.bind(1));






// *****SMOOTH SCROLLING*****
const section1= document.querySelector('.Product-grid-section')
const s1coord = section1.getBoundingClientRect();
// console.log(s1coord);

const viewportCoord = document.documentElement.clientHeight;
// console.log(viewportCoord);

const currScroll = window.pageYOffset;
// console.log(currScroll);

document.querySelector('.nav__2')
 .addEventListener('click', (e) => {
     window.scrollTo(
      //NOTE: Beware of the flexible vh (mercelia project) as it changes the value of the s1coords.top
      {
      left: s1coord.left + window.pageXOffset, 
      top: s1coord.top + window.pageYOffset,
      behavior: "smooth"
      }
     )
  
    }
)



// *****INTERSECTION OBSERVER API*****
const head = document.querySelector('header');
const obsOption = {
  root: null,
  threshold: 0,
  //Entries is the threshold .Threshold can also be an array. We then loop if it was an array
  // rootMargin: '-56px'
}
const obsCallback = function (entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
  
   nav.classList.add('nav-sticky')
    } else{
   nav.classList.remove('nav-sticky')
    }

  
}
const observer = new IntersectionObserver (obsCallback, obsOption);

observer.observe(head);



// *****REVEALING ELEMENT ON SCROLL*****
const allSections = document.querySelectorAll('section');

const revealSections = function (entries, observer) {
  const [entry] = entries;
  if(entry.target.classList.contains('header-content')) {
    entry.target.classList.remove('section-hidden');
  }
 
  entry.target.classList.remove('section-hidden');
  entry.target.classList.add('ease');
  sectionObserver.unobserve(entry.target);
}

const sectionOptions = {
  root: null,
  threshold: 0.1,
}
const sectionObserver = new IntersectionObserver (revealSections, sectionOptions)

allSections.forEach((section) => {
  section.classList.add('section-hidden');
  sectionObserver.observe(section);
})

// *****LAZY LOADING IMAGES*****
const allImg = document.querySelectorAll('img[data-src]');
const loadObs = {
  root:null,
  threshold: 0.5
}
const loadImg = function (entries, observer) {
  const [entry] = entries;
  
  if(entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
  }
  console.log(entry);
  console.log(entry.target.dataset.src);

  observeImage.unobserve(entry.target);
}
const observeImage = new IntersectionObserver(loadImg, loadObs);


allImg.forEach((Img) => {
  observeImage.observe(Img);
})






