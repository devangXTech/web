const header = document.getElementById('header');

window.addEventListener('scroll',()=>{
	if(window.pageYOffset > 150){
		header.classList.add('active');
	}else{
		header.classList.remove('active');
	};
});

const filterContent = document.querySelectorAll('.about-1 .filter-content'),
	filterBtnAbout = document.querySelectorAll('.about-1 button');

		filterBtnAbout.forEach(btn =>{
			const filter = btn.getAttribute('data-filter');

			btn.addEventListener('click',()=>{
				const active = document.querySelector('.about-1 button.active');
				active.classList.remove('active');
				btn.classList.add('active');

				filterContent.forEach(content =>{
					if(content.classList.contains(filter)){
						content.classList.add('active');
					}else{
						content.classList.remove('active');
					};
				});
			});
		});

  

 
$('.brand .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    margin:20,
    responsive:{
        0:{
            items:2
        },
        200:{
        	items:3
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.testimonial-1 .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$('.blog-1 .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.team-2 .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        760:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


$('.project-2 .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        576:{
        	items:2
        },
        760:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


$('.testimonial-2 .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    autoplay:true,
    margin:100,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



const counterOne = document.querySelectorAll('.counter-1 .counter');
const counterContainer = document.querySelector('.counter-1');

counterOne.forEach(counter =>{
	const target = +counter.getAttribute('data-count');
	let startingNum = +counter.innerHTML;
	const divide = target / 30;

	const counters = () => {
		if(startingNum < target){
			startingNum = Math.floor(startingNum + divide);
			counter.innerHTML = startingNum;
			setTimeout(counters,50)
		}else{
			counter.innerHTML = target;
		}
	}
	

	window.addEventListener('scroll',()=>{
		const elemHeight = counterContainer.getBoundingClientRect().top + 200;
		const windowHeight  = window.innerHeight;

		if(windowHeight > elemHeight){
			counters()
		}

	});

});

const scrollTop = document.getElementById("scroll-top");


window.addEventListener('scroll',()=>{
	if(window.pageYOffset > 200){
		scrollTop.classList.add('active');
	}else{
		scrollTop.classList.remove('active');
	};
});

scrollTop.addEventListener('click',()=>{
	window.scrollTo(0,0);
});


const searchBtnContainer = document.querySelector(".search-btn-container"); 
const closeBtn = document.querySelector(".search-btn-container #close-btn");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click",()=>{
	searchBtnContainer.classList.add('active');
})

closeBtn.addEventListener('click',()=>{
	searchBtnContainer.classList.remove('active');
})




const projectFilterBtn = document.querySelectorAll('.project-1 .project-filter-btn button');
const projectFilterBox = document.querySelectorAll('.project-1 .filter-box');


projectFilterBtn.forEach(btn=>{
	const dataFilter = btn.getAttribute('data-filter');


	btn.addEventListener('click',()=>{
		const active = document.querySelector('.project-1 .project-filter-btn button.active').classList.remove('active');
		btn.classList.add('active');


		projectFilterBox.forEach(box =>{
			if(box.classList.contains(dataFilter) || dataFilter == "all"){
				box.style.display = 'block';
				box.style.animation = ".5s filterBox linear";
			}else{
				box.style.display = 'none';
			}
		})
	})
})



const aboutVideoContainer = document.querySelector(".about-1 .about-video-container");
const aboutVideoContainerCloseBtn = document.querySelector('.about-1 .about-video-container .video i');
const videoPlayBtn = document.querySelector('.about-1 .video-col #play-btn');



videoPlayBtn.addEventListener('click',()=>{
    aboutVideoContainer.classList.add("active");
})

aboutVideoContainerCloseBtn.addEventListener('click',()=>{
    aboutVideoContainer.classList.remove("active");
})




const loader = document.querySelector('.preloader');

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        loader.style.display = "none";
    },2000);
})







