let man = [
    {
        image: 'image/11.png',
        icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> (24)',
        name: 'Carrots Group Scal',
        price: '$32.00',
        btn1:"ADD TO CART"
    },
    {
      image: 'image/12-1.png',
      icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> (24)',
      name: 'Carrots Group Scal',
      price: '$32.00',
      btn1:"ADD TO CART"
    },
    {
      image: 'image/13 (1).png ',
      icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
      name: 'Orange Fresh Juice',
      price: '$75.00',
      btn1:"ADD TO CART"
    },
    {
      image: 'image/14 (1).png ',
      icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
      name: 'Poltry Farm Meat',
      price: '$78.00',
      btn1:"ADD TO CART"
    },
    {
      image: 'image/7.png ',
      icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
      name: 'Poltry Farm Meat',
      price: '$78.00',
      btn1:"ADD TO CART"
    },
    {
      image: 'image/8 (1).png ',
      icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
      name: 'Orange Sliced Mix',
      price: '$150.00',
      btn1:"ADD TO CART"
    },
    {
      image: 'image/9.png ',
      icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> (24)',
      name: 'Carrots Group Scal',
      price: '$32.00',
      btn1:"ADD TO CART"
    },
    {
      image: 'image/10.png ',
      icons: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i>',
      name: 'Orange Fresh Juice',
      price: '$75.00',
      btn1:"ADD TO CART"
    }
  ];
  
  man.map((ele,i) => {
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
    btn1.addEventListener("click",()=>{
      // alert("Please")
      localStorage.setItem("id", i);
      window.location.href="file:///C:/AKSHAR/javascript/e%20commerce%20website/product-1.html"
    })
    div2.append(img ,icons , name, price,btn1)
    // document.getElementById("men1").append(div1)
    document.getElementById("men2").append(div2)
  })
