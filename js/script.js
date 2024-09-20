const searchForm = document.querySelector(".search-form");

const searchBtn = document.querySelector("#search-btn");
const navbar = document.querySelector(".navbar");


const cartContainer =document.querySelector(".cart-items-container")
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click",function(){

    searchForm.classList.toggle("active");

    document.addEventListener("click",function(e){

        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ) {
            searchForm.classList.remove("active");

        } 
    })
})

cartBtn.addEventListener("click",function(){

    cartContainer.classList.toggle("active");

    document.addEventListener("click",function(e){

        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartContainer) ) {
            cartContainer.classList.remove("active");

        } 
    })
})
menuBtn.addEventListener("click",function(){

    navbar.classList.toggle("active");

    document.addEventListener("click",function(e){

        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar) ) {
            navbar.classList.remove("active");

        } 
    })
})
