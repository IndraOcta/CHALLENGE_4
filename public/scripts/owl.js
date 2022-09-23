$('.owl-carousel').owlCarousel({
    // items:3,
loop:true,
center:true,
margin:10,
dots:false,
nav:true,
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


// date

$(document).ready(function () {
    $('#datepicker').datepicker();
});

