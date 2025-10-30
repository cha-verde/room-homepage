const headerImages = [
    "./images/desktop-image-hero-1.jpg",
    "./images/desktop-image-hero-2.jpg",
    "./images/desktop-image-hero-3.jpg"

]

const slides = [{
    title: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
}, 
{
    title: "We are available all across the globe",
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
}, 
{
    title: "Manufactured with the best materials",
    description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
}]

let currentPosition = 0;


const carousel = document.querySelector(".carousel");
const carouselSecond = document.querySelector(".carousel-second");


const slideLeft = document.querySelector(".slide__left");
const slideRight = document.querySelector(".slide__right");


slideRight.addEventListener("click", () => {
    carousel.scrollBy(30, 0);
    carouselSecond.scrollBy(30, 0);

})

slideLeft.addEventListener("click", () => {
    carousel.scrollBy(-30, 0);
    carouselSecond.scrollBy(-30, 0);

})


 for(let i = 0; i < headerImages.length; i++){
    const list = document.createElement("li");
    const image = document.createElement("img");
    image.className = "product__photo"

    image.src = headerImages[i];
    list.appendChild(image);
    carousel.appendChild(list);

    const title = document.createElement("div")
    title.className = "feature__title font-weight-700 font-size-two";
    const desc = document.createElement("div", {className: "feature__description", className: "color-description"});

    title.textContent = slides[i].title;
    desc.textContent = slides[i].description;
    
    const li = document.createElement("li");

    li.prepend(desc);
    li.prepend(title);

    carouselSecond.prepend(li);


};



const navHamburger = document.querySelector(".nav__hamburger")
const hamburgerLinks = document.querySelector(".hamburger__links")
const hamburgerClose = document.querySelector(".hamburger__close")

navHamburger.addEventListener("click", () => {
   hamburgerLinks.classList.toggle("active")

})

hamburgerClose.addEventListener("click", () => {
    hamburgerLinks.classList.toggle("active")

 })
 
