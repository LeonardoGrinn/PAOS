/* G A L L E R Y  O N E */
gallery1();

function gallery1() {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    document.querySelector('#button-left-1').addEventListener('click', function (n) {
        plusDivs(-1);
    });

    document.querySelector('#button-right-1').addEventListener('click', function (n) {
        plusDivs(1);
    });

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides1");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

}

/* G A L L E R Y  T W O */
gallery2();

function gallery2() {

    var slideIndex = 1;
    showDivs(slideIndex);
        
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
                    
    document.querySelector('#button-left-2').addEventListener('click', function(n) {
        plusDivs(-1);
    });
                    
    document.querySelector('#button-right-2').addEventListener('click', function(n) {
        plusDivs(1);
    });
                    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides2");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
                      
}

/* G A L L E R Y  T W O */
gallery3();

function gallery3() {

    var slideIndex = 1;
    showDivs(slideIndex);
        
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
                    
    document.querySelector('#button-left-3').addEventListener('click', function(n) {
        plusDivs(-1);
    });
                    
    document.querySelector('#button-right-3').addEventListener('click', function(n) {
        plusDivs(1);
    });
                    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides3");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
                      
}

/* G A L L E R Y  FOUR */
gallery4();

function gallery4() {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    document.querySelector('#button-left-4').addEventListener('click', function (n) {
        plusDivs(-1);
    });

    document.querySelector('#button-right-4').addEventListener('click', function (n) {
        plusDivs(1);
    });

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides4");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

}

/* G A L L E R Y  FIVE */
gallery5();

function gallery5() {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    document.querySelector('#button-left-5').addEventListener('click', function (n) {
        plusDivs(-1);
    });

    document.querySelector('#button-right-5').addEventListener('click', function (n) {
        plusDivs(1);
    });

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides5");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

}

/* G A L L E R Y  SIX */
gallery6();

function gallery6() {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    document.querySelector('#button-left-6').addEventListener('click', function (n) {
        plusDivs(-1);
    });

    document.querySelector('#button-right-6').addEventListener('click', function (n) {
        plusDivs(1);
    });

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides6");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

}

/* G A L L E R Y  SEVEN */
gallery7();

function gallery7() {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    document.querySelector('#button-left-7').addEventListener('click', function (n) {
        plusDivs(-1);
    });

    document.querySelector('#button-right-7').addEventListener('click', function (n) {
        plusDivs(1);
    });

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides7");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

}

/* G A L L E R Y  EIGHT */
gallery8();

function gallery8() {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    document.querySelector('#button-left-8').addEventListener('click', function (n) {
        plusDivs(-1);
    });

    document.querySelector('#button-right-8').addEventListener('click', function (n) {
        plusDivs(1);
    });

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides8");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

}

/* G A L L E R Y  NINE */
gallery9();

function gallery9() {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    document.querySelector('#button-left-9').addEventListener('click', function (n) {
        plusDivs(-1);
    });

    document.querySelector('#button-right-9').addEventListener('click', function (n) {
        plusDivs(1);
    });

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides9");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

}

/* G A L L E R Y  TEN */
gallery10();

function gallery10() {

    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    document.querySelector('#button-left-10').addEventListener('click', function (n) {
        plusDivs(-1);
    });

    document.querySelector('#button-right-10').addEventListener('click', function (n) {
        plusDivs(1);
    });

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides10");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

}