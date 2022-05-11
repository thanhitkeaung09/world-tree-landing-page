console.log("hi there")
var waypoint = new Waypoint({
    element: document.getElementById('card'),
    handler: function(direction) {
        document.getElementById("header").classList.toggle("header");
        document.getElementById("header").classList.toggle("shadow-sm");
        document.getElementById("header").classList.toggle("animate__fadeInDown");
    },
    offset: '60%'
})

// scroll reveal
var slideUp = {
    distance: '70px',
    origin: 'top',
    duration : 1000,
    interval : 700,
    // reset : true
    // opacity: null
};

ScrollReveal().reveal('.content', slideUp);
