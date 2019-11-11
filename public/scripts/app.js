var className = ["html","bootstrap4", "css","js","mongodb","python","nodejs"]
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
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3")

// Get the button that opens the modal
var btn = document.getElementById("blogBtn");
var btn1 = document.getElementById("CampBtn");
var btn2 = document.getElementById("GameBtn");
var btn3 = document.getElementById("HandBtn")

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close")[0];
var span1 = document.querySelectorAll(".closebtn")[0]

var span2 = document.querySelectorAll(".close")[1];
var span3 = document.querySelectorAll(".closebtn")[1]

var span4 = document.querySelectorAll(".close")[2];
var span5 = document.querySelectorAll(".closebtn")[2]

var span6 = document.querySelectorAll(".close")[3];
var span7 = document.querySelectorAll(".closebtn")[3]
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal

span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal1.style.display = "none";
}
span3.onclick = function() {
  modal1.style.display = "none";
}
span4.onclick = function() {
  modal2.style.display = "none";
}
span5.onclick = function() {
  modal2.style.display = "none";
}
span6.onclick = function() {
  modal3.style.display = "none";
}
span7.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
  animateHTML().init();
  animateHTML1().init();
  animateHTML2().init();
  animateHTML3().init();

 