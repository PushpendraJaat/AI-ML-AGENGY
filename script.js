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