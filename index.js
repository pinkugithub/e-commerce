
let ui = [
  {
      image: 'image/1 (1).png',
      icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> (24)',
      name: 'Carrots Group Scal',
      price: '$32.00',
      btn1:"ADD TO CART"
  },
  {
    image: 'image/2.png',
    icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> (24)',
    name: 'Red Hot Tomato',
    price: '$25.00',
    btn1:"ADD TO CART"
  },
  {
    image: 'image/3.png ',
    icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
    name: 'Orange Fresh Juice',
    price: '$75.00',
    btn1:"ADD TO CART"
  },
  {
    image: 'image/4.png ',
    icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
    name: 'Poltry Farm Meat',
    price: '$78.00',
    btn1:"ADD TO CART"
  },
  {
    image: 'image/5.png ',
    icn: ' <i class="fa-regular fa-eye"></i>',
    icn1: '<i class="fa-solid fa-cart-shopping"></i>',
    icn2:'<i class="fa-regular fa-heart"></i>',
    icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
    name: 'Fresh Butter Cake',
    price: '$150.00',
    btn1:"ADD TO CART"
  },
  {
    image: 'image/6.png ',
    icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
    name: 'Orange Sliced Mix',
    price: '$150.00',
    btn1:"ADD TO CART"
  },
  {
    image: 'image/7.png ',
    icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> (24)',
    name: 'Orange Fresh Juice',
    price: '$75.00',
    btn1:"ADD TO CART"
  },
  {
    image: 'image/8.png ',
    icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
    name: 'Poltry Farm Meat',
    price: '$78.00',
    btn1:"ADD TO CART"
  }
];

ui.map((ele) => {
  let div1 = document.createElement("div");
  div1.setAttribute("class", "div1");
  let div2 = document.createElement("div");
  div2.setAttribute("class", "div2");
  let img = document.createElement("img");
  img.src = ele.image;
  let icons = document.createElement("h2")
  icons.innerHTML = ele.icons;
  let name = document.createElement("p")
  name.innerHTML = ele.name;
  let price = document.createElement("h1")
  price.innerHTML = ele.price;
  let btn1 = document.createElement("button");
  btn1.innerHTML = ele.btn1;
  div2.append(img ,icons , name, price,btn1)
  // document.getElementById("men3").append(div1)
  document.getElementById("men4").append(div2)
})

// counter js 
var countDownDate = new Date("oct 16 , 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance < 0){
  clearInterval(x);
  document.getElementById("days").innerHTML = "00";
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";
document.getElementById("seconds").innerHTML = "00";

}
},1000);

// header 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (bar) {
  bar.addEventListener('click',() => {
    nav.classList.add('active');
  })
}
if (close) {
  close.addEventListener('click',() => {
    nav.classList.remove ('active');
  })
}

