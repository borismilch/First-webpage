

let user = document.querySelector('.user__menu');
let img = document.querySelector('.user__img');
const elementClass = document.documentElement.className
function translate(){
    user.classList.toggle('active')
};

img.addEventListener('click', translate);

$('.menu__burger').on('click', function(){
 $('.menu__burger span, .phone, .sidebar' ).toggleClass('active');
});

$('.phone').on('click', function(){
    $('.menu__burger span, .phone, .sidebar').removeClass('active')
})

new Swiper('.slidermain',{
    navigation:{
        nextEl:'.slider__arrow-next',
        prevEl:'.slider__arrow-prev'
    },
    loop: true,
    speed: 1200,
});
 new Swiper('.lots-body',{
    navigation:{
        nextEl:'.lost-arrow__next',
        prevEl:'.lost-arrow__prew'
    },
     loop:true,
     speed:800,
     slidesPerScroll:1,
     slidesPerView:3,
    breakpoints:{
        320:{
            slidesPerView:1,
        },
      
        500:{
            slidesPerView:2,
        },
        780:{
            slidesPerView:3,
        },
     
      
    
    }
 });
new Swiper('.row__wrapper',{
    loop:true,
    speed:800,
    slidesPerScroll:1,
    slidesPerView:3,
    spaceBetween:38,
    navigation:{
        nextEl:'.prev1',
        prevEl:'.prev2'
    },
    breakpoints:{
       320:{
           slidesPerView:1,
       },
     
       560:{
           slidesPerView:2,
       },
       820:{
           slidesPerView:3,
       },
}});

new Swiper('.row__wrapper2',{
    loop:true,
    speed:800,
    slidesPerScroll:1,
    slidesPerView:3,
    spaceBetween:38,
    navigation:{
        nextEl:'.next1',
        prevEl:'.next2'
    },
    breakpoints:{
       320:{
           slidesPerView:1,
       },
     
       560:{
           slidesPerView:2,
       },
       820:{
           slidesPerView:3,
       },
}});
new Swiper('.row__wrapper3',{
    loop:true,
    speed:800,
    slidesPerScroll:1,
    slidesPerView:3,
    spaceBetween:38,
    navigation:{
        nextEl:'.end1',
        prevEl:'.end2'
    },
    breakpoints:{
       320:{
           slidesPerView:1,
       },
     
       560:{
           slidesPerView:2,
       },
       820:{
           slidesPerView:3,
       },
}});

const windowW = window.innerWidth;
console.log(windowW);


const navs = document.querySelectorAll('.content__nav');
navs.forEach((item) =>{
  let parent = item.parentNode;
  parent.addEventListener('mouseover', () =>{
    item.classList.add('content__nav--visible');
  });
  parent.addEventListener('mouseout', () =>{
    item.classList.remove('content__nav--visible');
  });
});


document.querySelectorAll('.ll').forEach((item)=>{
 item.addEventListener('click', ()=>{
 item.classList.toggle('active');
 let parent = item.parentNode;
 let next = parent.nextElementSibling;
 next.classList.toggle('active');
 console.log(next, parent);
 });
});

new Swiper('.tools-body',{
    loop:true,
    speed:800,
    slidesPerScroll:1,
    slidesPerView:3,
    spaceBetween:38,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    navigation:{
        nextEl:'.before1',
        prevEl:'.before2'
    },
    breakpoints:{
        320:{
            slidesPerView:1,
         
        },
      
        600:{
            slidesPerView:2,
            spaceBetween:48,
        },
        960:{
            slidesPerView:3,
        },
}})

 new Swiper('.quotes-body'),{
    effect:'fade',
    loop:true,
    speed:800,
    slidesPerScroll:1,
    slidesPerView:1,
      navigation:{
          nextEl:'.slider-arrow-next__circle'
      },
}


let btnTop = document.querySelector('.gotop__btn')
window.addEventListener('scroll', ()=>{
    let coords = window.innerHeight;
    let scroll = window.pageYOffset
  
    if(scroll > coords){
        btnTop.classList.add('gotop__btn--active') 
    };
    if(scroll < coords){
        btnTop.classList.remove('gotop__btn--active') 
    };
});
btnTop.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});
let container = document.querySelectorAll('.container');
window.addEventListener('scroll', ()=>{
container.forEach((item)=>{
    let parent = item.parentElement;
    let where = item.pageYOffset;
 

    console.log(where);
});
});
