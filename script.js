$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    });
  });
let links = document.querySelectorAll('.grid-elem')
let targetID;
links.forEach(function (element) {
    element.addEventListener('click', function(event){
      event.preventDefault();
      targetID = element.getAttribute('href');
      document.querySelector(targetID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
})
let rightColumn = document.querySelector('.right-column');
let ball = document.querySelector('.ball');
heig = window.innerHeight/2;
let condition = 0;
let duration1 =1500;

document.querySelector('.grid-1').onclick = function() {
    window.location.href = '#about-me';
    // ball.style.top = 3 * heig + 'px';
    anime({
      targets:'.ball',
      top:3 * heig + 'px',
      loop:false,
      duration: duration1,
      easing: 'easeInOutSine'
    });
    trans();
  };

document.querySelector('.grid-2').onclick = function() {
  window.location.href = '#skills';
  // ball.style.top = 4 * heig + 'px';
  anime({
    targets:'.ball',
    top:4 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();
};

document.querySelector('.grid-3').onclick = function() {
  window.location.href = '#carus';
  // ball.style.top = 7 * heig + 'px';
  anime({
    targets:'.ball',
    top:7 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();
}

document.querySelector('.grid-4').onclick = function() {
  window.location.href = '#main-article';
  // ball.style.top = 0 * heig + 'px';
  anime({
    targets:'.ball',
    top:0 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();
}

document.querySelector('.grid-5').onclick = function() {
  window.location.href = '#main-article';
  // ball.style.top = 0 * heig + 'px';
  anime({
    targets:'.ball',
    top:0 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();
}

document.querySelector('.grid-6').onclick = function() {
  window.location.href = '#cont';
  // ball.style.top = 9.8 * heig + 'px';
  anime({
    targets:'.ball',
    top:9.8 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();
}
document.querySelector('.grid-7').onclick = function() {
  window.location.href = '#about-me';
  // ball.style.top = 3 * heig + 'px';
  anime({
    targets:'.ball',
    top:3 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();

};

document.querySelector('.grid-8').onclick = function() {
window.location.href = '#skills';
// ball.style.top = 4 * heig + 'px';
anime({
  targets:'.ball',
  top:4 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
};

document.querySelector('.grid-9').onclick = function() {
window.location.href = '#carus';
// ball.style.top = 7 * heig + 'px';
anime({
  targets:'.ball',
  top:7 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-10').onclick = function() {
window.location.href = '#main-article';
// ball.style.top = 0 * heig + 'px';
anime({
  targets:'.ball',
  top:0 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-11').onclick = function() {
window.location.href = '#main-article';
// ball.style.top = 0 * heig + 'px';
anime({
  targets:'.ball',
  top:0 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-12').onclick = function() {
window.location.href = '#cont';
// ball.style.top = 9.9 * heig + 'px';
anime({
  targets:'.ball',
  top:9.8 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-13').onclick = function() {
  window.location.href = '#about-me';
  // ball.style.top = 3 * heig + 'px';
  anime({
    targets:'.ball',
    top:3 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();
};

document.querySelector('.grid-14').onclick = function() {
window.location.href = '#skills';
// ball.style.top = 4 * heig + 'px';
anime({
  targets:'.ball',
  top:4 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
};

document.querySelector('.grid-15').onclick = function() {
window.location.href = '#carus';
// ball.style.top = 7 * heig + 'px';
anime({
  targets:'.ball',
  top:7 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-16').onclick = function() {
window.location.href = '#main-article';
// ball.style.top = 0 * heig + 'px';
anime({
  targets:'.ball',
  top:0 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-17').onclick = function() {
window.location.href = '#main-article';
// ball.style.top = 0 * heig + 'px';
anime({
  targets:'.ball',
  top:0 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-18').onclick = function() {
window.location.href = '#cont';
// ball.style.top = 9.9 * heig + 'px';
anime({
  targets:'.ball',
  top:9.8 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}


document.querySelector('.grid-19').onclick = function() {
  window.location.href = '#about-me';
  // ball.style.top = 3 * heig + 'px';
  anime({
    targets:'.ball',
    top:3 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();

};

document.querySelector('.grid-20').onclick = function() {
window.location.href = '#skills';
// ball.style.top = 4 * heig + 'px';
anime({
  targets:'.ball',
  top:4 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
};

document.querySelector('.grid-21').onclick = function() {
window.location.href = '#carus';
// ball.style.top = 7 * heig + 'px';
anime({
  targets:'.ball',
  top:7 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-22').onclick = function() {
window.location.href = '#main-article';
// ball.style.top = 0 * heig + 'px';
anime({
  targets:'.ball',
  top:0 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-23').onclick = function() {
window.location.href = '#main-article';
// ball.style.top = 0 * heig + 'px';
anime({
  targets:'.ball',
  top:0 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-24').onclick = function() {
window.location.href = '#cont';
// ball.style.top = 9.9 * heig + 'px';
anime({
  targets:'.ball',
  top:9.8 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-25').onclick = function() {
  window.location.href = '#about-me';
  // ball.style.top = 3 * heig + 'px';
  anime({
    targets:'.ball',
    top:3 * heig + 'px',
    loop:false,
    duration: duration1,
    easing: 'easeInOutSine'
  });
  trans();
};

document.querySelector('.grid-26').onclick = function() {
window.location.href = '#skills';
anime({
  targets:'.ball',
  top:4 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
// ball.style.top = 4 * heig + 'px';
trans();
};

document.querySelector('.grid-27').onclick = function() {
window.location.href = '#carus';
anime({
  targets:'.ball',
  top:7 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
// ball.style.top = 7 * heig + 'px';
trans();
};

document.querySelector('.grid-28').onclick = function() {
window.location.href = '#main-article';
// ball.style.top = 0 * heig + 'px';
anime({
  targets:'.ball',
  top:0 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-29').onclick = function() {
window.location.href = '#main-article';
// ball.style.top = 0 * heig + 'px';
anime({
  targets:'.ball',
  top:0 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
trans();
}

document.querySelector('.grid-30').onclick = function() {
window.location.href = '#cont';
anime({
  targets:'.ball',
  top:9.8 * heig + 'px',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
});
// ball.style.top = 9.9 * heig + 'px';
trans();
}


function trans(){
 anime({
  targets:'.grid-elem-red',
  backgroundColor:'red',
  loop:false,
  duration: duration1,
  easing: 'easeInOutSine'
 })
}

