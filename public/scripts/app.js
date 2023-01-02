window.addEventListener("load", function(){
  setTimeout(function(){
    var load_screen = document.getElementById("loading-screen")
    document.body.removeChild(load_screen)
    var animation_ids = ["arrow-1","arrow-2","arrow-3","arrow-4"]
    var arrows = document.getElementsByClassName("arrow-container")
    for(let i = 0; i < arrows.length; i++){
      arrows[i].setAttribute("id",animation_ids[i])
    }
    var navbar = document.getElementById("navbar")
    navbar.classList.add("highz")
    var fullwindow = document.querySelector("html")
    fullwindow.classList.remove("overflow")
  },1500)
})
window.onscroll = function() {
  stickynavbar()
};
var className = ["html","bootstrap4", "css","js","mongodb","python","nodejs","cc"]
var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.skills');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'zero',
            className[i]
          );
        }
      }
    }
    return {
      init: init
    };
  };
  var animateHTML1 = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.card-header-selector');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'card-header-none',
            "card-header"
          );
        }
      }
    }
    return {
      init: init
    };
  };

  var animateHTML2 = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.card-block-selector');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'card-block-none',
            "card-block"
          );
        }
      }
    }
    return {
      init: init
    };
  };
  var animateHTML3 = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hr-selector');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            '-none',
            "hr-animate"
          );
        }
      }
    }
    return {
      init: init
    };
  };
  
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  })

  document.addEventListener('click', () => {
      cursor.classList.add("expand");

      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500)
  })

//project-navbar-filter


//Get the modals
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5")
var modal6 = document.getElementById("myModal6")

// Get the button that opens the modal
var btn = document.getElementById("LandLordBtn");
var btn2 = document.getElementById("macBtn");
var btn3 = document.getElementById("blogBtn")
var btn4 = document.getElementById("CampBtn");
var btn5 = document.getElementById("GameBtn");
var btn6 = document.getElementById("HandBtn")

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[0];
var span1 = document.querySelectorAll(".closeBtn")[0]

var span2 = document.querySelectorAll(".close")[1];
var span3 = document.querySelectorAll(".closeBtn")[1]

var span4 = document.querySelectorAll(".close")[2];
var span5 = document.querySelectorAll(".closeBtn")[2]

var span6 = document.querySelectorAll(".close")[3];
var span7 = document.querySelectorAll(".closeBtn")[3]

var span8 = document.querySelectorAll(".close")[4];
var span9 = document.querySelectorAll(".closeBtn")[4]

var span10 = document.querySelectorAll(".close")[5];
var span11 = document.querySelectorAll(".closeBtn")[5]
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}
// When the user clicks on <span> (x), close the modal

span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal2.style.display = "none";
}
span4.onclick = function() {
  modal3.style.display = "none";
}
span5.onclick = function() {
  modal3.style.display = "none";
}
span6.onclick = function() {
  modal4.style.display = "none";
}
span7.onclick = function() {
  modal4.style.display = "none";
}
span8.onclick = function() {
  modal5.style.display = "none";
}
span9.onclick = function() {
  modal5.style.display = "none";
}
span10.onclick = function() {
  modal6.style.display = "none";
}
span11.onclick = function() {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickynavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
document.getElementById("introBtn").onmouseover = (function(){
  document.getElementsByClassName("arrow-right")[0].classList.add("arrow-downs")
})
document.getElementById("introBtn").onmouseleave = (function(){
  document.getElementsByClassName("arrow-right")[0].classList.remove("arrow-downs")
})

  animateHTML().init();
  animateHTML1().init();
  animateHTML2().init();
  animateHTML3().init();

 