const body = document.querySelector("body");
const burger= document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");


burger.onclick = ()=>{
    menu.classList.toggle("active");
    body.classList.toggle("disabledScroll");
    burger.classList.toggle('active');
}
window.onscroll = ()=>{
    this.scrollY > 0 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY29lZ3k5MyIsImEiOiJja3ZkbGFndjMwd2lmMnVxbjNrZWRpNnRhIn0.o5dr8Cw0hzB9JVcv0P0Anw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom:13,
center:{lat:48.8461,lng:-2.9999}
});

nav = new mapboxgl.NavigationControl();
map.addControl(nav);
