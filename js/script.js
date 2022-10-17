window.addEventListener("scroll",function(){
    var ul =this.document.querySelector("ul");
    ul.classList.toggle("bajando",this.window.scrollY>0);
    
})