var isOpen = false;
var days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb', 'Dom'];

$( ".floating-contact-tab" ).click(function() {
  if(isOpen){
  	$(".floating").removeClass("show_contact").addClass("hide_contact");
  	$(".floating-contact-tab").removeClass("move_contact_tab").addClass("move_contact_tab_back");
  	isOpen = false;
  }else{
  	$(".floating").removeClass("hide_contact").addClass("show_contact");
  	$(".floating-contact-tab").removeClass("move_contact_tab_back").addClass("move_contact_tab");
  	isOpen = true;

  }
});


/*function getTime() {
  var d = new Date();
  d.setTime( d.getTime() - d.getTimezoneOffset()*60*1000 );

  var t = Date.parse(d);
  //var offset = new Date().getTimezoneOffset() / 60;
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  
  var month = d.getMonth() + 1;
  var year = d.getYear();
  var day = d.getDay();
  return {
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'day': day - 1,
    'month': month,
    'year': year,
  };
}

function initializeClock(id) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var daySpan = clock.querySelector('.day');
  var monthSpan = clock.querySelector('.month');

  function updateClock() {
    var t = getTime();
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    monthSpan.innerHTML = ('0' + t.month).slice(-2) + '/' + ('' + t.year).slice(-2);
    daySpan.innerHTML = days[t.day];
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('u-clock');
*/

var lastScrollHeight = 0;
$(window).scroll(function(event){
  var hf = $(window).scrollTop();
  var height = $(window).height();
  /*var iX = 0, iY = 0;
  var h = hf / $(window).height();
  h = h * 20;
  var fY = iY + h;
  $("body").css("background-position", iX + "% " + fY + "%")*/
  if(hf > 0){
    var op = 1 - hf / height * 3 / 2
    $(".main-title").css("opacity", op);
  }


  if($("#contact").offset().top - 50 < hf){
    $('.section-counter a').parent().removeClass('section-counter-active');
    $('.section-counter div:nth-child(4)').addClass('section-counter-active');
  }else if($("#services").offset().top - 50 < hf){
    $('.section-counter a').parent().removeClass('section-counter-active');
    $('.section-counter div:nth-child(3)').addClass('section-counter-active');
  }else if($("#about-us").offset().top - 50 < hf){
    $('.section-counter a').parent().removeClass('section-counter-active');
    $('.section-counter div:nth-child(2)').addClass('section-counter-active');
  }else{
    $('.section-counter a').parent().removeClass('section-counter-active');
    $('.section-counter div:nth-child(1)').addClass('section-counter-active');
  }

});


$('.section-counter a').click(function(sender){
    var href = sender.target.href;
    var id = href.substring(href.indexOf('#'), href.length);
    if(id == "#1"){
      s1 = 0;
    }else{
      var s1 = $(id).offset().top;
    }

    $("html, body").animate({ scrollTop: s1 }, 600);
    return false;
});

var lastX = -10;
function container_move(event){
    var w = $(window).width();
    var x = event.pageX;

    if(lastX == -10){
      lastX = x;
    }else{
      if(lastX + 100 < x || lastX - 100 > x){
        var excedentLen = t - w;
        var percentMouse = x / w;
        var parcialEx = excedentLen * percentMouse;
        var fx = parcialEx - 150;

        //servElement.css('left', -fx + 'px');
        servElement.animate(
          { left: -fx + 'px' },
          { queue:false, duration:500, easing:'swing' }
        );
        lastX = x;
      }
    }



    /*cline.animate(
      { left: -fx + 'px' },
      { queue:false, duration:20, easing:'linear' }
    );
    /*console.log(parcialEx);*/
}
var servElement;
var t;


$(document).ready(function(){
    servElement = $('.container-line.start');
    var kb = $('.services-block').length;
    var b = 380;
    t = kb * b + 5;

    $('.container-line.start').on('mousemove', container_move);
})

/*$(document).ready(function(){
    var w = $(window).width();
    var cline = $('.container-line.start');
    var fstBlock = $('.container-line>div').first();
    var blockWidth = fstBlock.width();
    var xPos = (w - blockWidth)/2 - 15;
    cline.animate({left: xPos + 'px'}, 'fast');
});*/






















