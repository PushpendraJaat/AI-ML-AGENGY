function navAnimation(){
    const nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
        height: "21vh",
        duration: 0.5
    })

    tl.to(".nav-part2 h5", {
        display: "block",
        duration: 0.1
    })

    tl.to(".nav-part2 h5 span",{
        y:0,
        stagger:{
            amount: 0.4
        }
    })
})

nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()

    tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
            amount: 0.2
        }
    })
    tl.to(".nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom", {
        height: "0vh",
        duration: .2
    })
})
}
navAnimation(); 


function page2Animation(){
const elem = document.querySelectorAll(".right-elem");

elem.forEach(function(el){
    el.addEventListener("mouseenter", function(){
        gsap.to(el.childNodes[3],{
            opacity:1,
            scale:1
        })
    })

    el.addEventListener("mouseleave", function(){
        gsap.to(el.childNodes[3],{
            opacity:0,
            scale:0
        })
    })

    el.addEventListener("mousemove", function(dets){
        gsap.to(el.childNodes[3],{
            x:dets.x - el.getBoundingClientRect().x-80,
            y:dets.y - el.getBoundingClientRect().y-80
        })

    })
})

}
page2Animation();
