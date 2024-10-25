const hamburger= document.querySelector(".hamburger");
const one= document.querySelector(".one");
const two= document.querySelector(".two");
const three= document.querySelector(".three");
const sidebar= document.querySelector(".sidebar");

hamburger.addEventListener("click", 
    function(){
        // Trigger Animation on Hamburger Icon
        one.classList.toggle("animateBar1");
        two.classList.toggle("animateBar2");
        three.classList.toggle("animateBar3");
        // Make the sidebar show and hide
        sidebar.classList.toggle("toggleSidebar");
})