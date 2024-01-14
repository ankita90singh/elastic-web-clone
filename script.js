var text = document.querySelector("#page1 h1").textContent


  var splittedText =text.split("")
  var clutter =""
  splittedText.forEach(function(e){
   clutter += `<span>${e}</span>`
  

  })
  document.querySelector("#page1 h1").innerHTML= clutter;


gsap.from(" #page1 h1 span" ,{
    y:30,
    stagger:.2,
    opacity:0,
    duration:1,


})

// var text = document.querySelectorAll("#page3 h1")




 
//   var clutter =""
//  text.forEach(function(e){
//     var textContent= text.textContent
// var splittedText = textContent.split("")
//    clutter += `<span>${e}</span>`
  

//   })
//   document.querySelector("#page3 h1").innerHTML= clutter;



gsap.from(" #page3 h1 span" ,{
    y:30,
    stagger:.2,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 0",
        end:"top 100%",
        scrub:2,
        pin:true
    }


})





gsap.from("#page2 video",{
    opacity:0,
    // scale:0,
    stagger:.2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        // opacity:0,
        // scale:0,
        start: "top 30%",
        end: "top 100%",
        scrub:4
    }
})



gsap.to("#texty",{
    transform:"translateX(-120%)",
    duration:2,
 
    scrollTrigger:{
        trigger:"#page8",
         scroller:"body",
        start:"top 0%",
        end:"top -100%",
        // markers:true,
       scrub:3,
        pin:true
    }

})