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



function page3VideoAnimation(){
    
var page3Play = document.querySelector(".page3-play")
var video = document.querySelector("#page3 video")

page3Play.addEventListener("click", function(){
    video.play()

    gsap.to(video,{
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0 
    })

video.addEventListener("click", function(){
    video.pause()
    gsap.to(video,{
        opacity: 0,
        borderRadius: "30px",
        transform: "scaleX(.7) scaleY(0)"

    })
})    
    
})
}


navAnimation(); 
page2Animation();
page3VideoAnimation()