

$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  });



  window.addEventListener('load', function(){
    document.querySelector('#loader').style.display = 'none';
  });


  const dateYear = new Date(); 
  // console.log(document.querySelector('.dateYear').innerHTML)

  document.querySelector('.dateYear').innerText = dateYear.getFullYear()


  const submit = document.querySelector('#submit');

// dark mode
  const darkbutton  = document.querySelector('.darkttoggle');
  const daycontent = document.querySelector('.daymode') 
  const nightcontent = document.querySelector('.nightmode')

  console.log(darkbutton.checked )

 
  var toggledata = false

  darkbutton.addEventListener('change', function(){

    toggledata = darkbutton.checked

      console.log(toggledata)
      if(toggledata){
        daycontent.style.display = 'none';
        nightcontent.style.display = 'block';
        document.body.classList.add("main_dark_bg");
        document.querySelector('.footer').classList.add("footer_dark_bg")
        document.querySelector('.header').classList.add("header_dark_bg")
        document.querySelector('.logo_day').style.display = 'none';
  document.querySelector('.logo_night').style.display = 'block';
        localStorage.setItem("dark","1")
        
      }else{
        
        daycontent.style.display = 'block';
        nightcontent.style.display = 'none';
        document.body.classList.remove("main_dark_bg");
        document.querySelector('.footer').classList.remove("footer_dark_bg")
        document.querySelector('.header').classList.remove("header_dark_bg")
        document.querySelector('.logo_day').style.display = 'block'
        document.querySelector('.logo_night').style.display = 'none'
        localStorage.setItem("dark","0")
      }
  })

 const drakValue = localStorage.getItem("dark")

 if (drakValue === '1') {
  daycontent.style.display = 'none';
  nightcontent.style.display = 'block';
  document.body.classList.add("main_dark_bg");
  document.querySelector('.footer').classList.add("footer_dark_bg")
  document.querySelector('.header').classList.add("header_dark_bg")
  document.querySelector('.logo_day').style.display = 'none';
  document.querySelector('.logo_night').style.display = 'block';
  document.querySelector('#loader').classList.add('loader_dark')
  document.querySelector('#loader').classList.remove('loader')
  document.querySelector('.darkttoggle').checked = true;
 
 }else{
  daycontent.style.display = 'block';
  nightcontent.style.display = 'none';
  document.body.classList.remove("main_dark_bg");
  document.querySelector('.footer').classList.remove("footer_dark_bg")
  document.querySelector('.header').classList.remove("header_dark_bg")
  document.querySelector('#loader').classList.remove('loader_dark')
  document.querySelector('.logo_day').style.display = 'block';
  document.querySelector('.logo_night').style.display = 'none';
  document.querySelector('#loader').classList.add('loader')
  document.querySelector('.darkttoggle').checked = false;
  
 }
 

