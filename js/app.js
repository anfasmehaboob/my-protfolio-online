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




  const submit = document.querySelector('#submit');

  submit.addEventListener('click', function(){
    alert();
  });