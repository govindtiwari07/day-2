function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: "#main",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: self => console.log(self.direction)
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()
function sectionOne() {
  var clutter = "";
  var h1 = document.querySelector(".one_scond>h1").textContent.split("").forEach(function (dets) {
    clutter += `<span>${dets}</span>`;
    document.querySelector(".one_scond>h1").innerHTML = clutter;
  })
  gsap.from("#four>span", {
    transform: "translateY(200px)",
    duration: 0.2,
    stagger: 0.1,
    opacity: 0,
    ease: "power3.out"
  })
}
sectionOne()
function sectionTwo() {
  var clutter = "";
  var clutter1 = "";
  var clutter2 = "";
  var clutter3 = "";
  var clutter4 = "";
  var clutter5 = "";
  var same = document.querySelectorAll('.two_right_one>h1')
  same[0].textContent.split("").forEach(function (dets) {
    clutter += `<span>${dets}</span>`;
    same[0].innerHTML = clutter;
  })
  same[1].textContent.split("").forEach(function (dets) {
    clutter1 += `<span>${dets}</span>`;
    same[1].innerHTML = clutter1;
  })
  same[2].textContent.split("").forEach(function (dets) {
    clutter2 += `<span>${dets}</span>`;
    same[2].innerHTML = clutter2;
  })
  same[3].textContent.split("").forEach(function (dets) {
    clutter3 += `<span>${dets}</span>`;
    same[3].innerHTML = clutter3;
  })
  same[4].textContent.split("").forEach(function (dets) {
    clutter4 += `<span>${dets}</span>`;
    same[4].innerHTML = clutter4;
  })
  same[5].textContent.split("").forEach(function (dets) {
    clutter5 += `<span>${dets}</span>`;
    same[5].innerHTML = clutter5;
  })
} sectionTwo()
function sectionTwoAnimation() {
  var bottom = document.querySelector('.two_left_bottom');
  var sectionTwo = document.querySelector("#two");
  var tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: sectionTwo,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      scroller: "#main",
    }
  })
  tl1.to(".two_left_bottom", {
    top: " 1%",
  })
  tl1.to(".two_left_bottom", {
    top: " 11%",
  })
  tl1.to(".two_left_bottom", {
    top: " 22%",
  })
  tl1.to(".two_left_bottom", {
    top: " 33%",
  })
  tl1.to(".two_left_bottom", {
    top: " 44%",
  })
  tl1.to(".two_left_bottom", {
    top: " 55%",
  })
  tl1.to(".two_left_bottom", {
    top: " 66%",
  })
  gsap.to("#one_h1>span", {
    color: "#1f00fe",
    scrollTrigger: {
      trigger: sectionTwo,
      start: "6% 13%",
      end: "20% 13%",
      scroller: "#main",
      scrub: true,
    }
  })
  gsap.to("#two_h1>span", {
    color: "#1f00fe",
    scrollTrigger: {
      trigger: sectionTwo,
      start: "20% 13%",
      end: "30% 13%",
      scroller: "#main",
      scrub: true,
    }
  })
  gsap.to("#three_h1>span", {
    color: "#1f00fe",
    scrollTrigger: {
      trigger: sectionTwo,
      start: "30% 13%",
      end: "45% 13%",
      scroller: "#main",
      scrub: true,
    }
  })
  gsap.to("#four_h1>span", {
    color: "#1f00fe",
    scrollTrigger: {
      trigger: sectionTwo,
      start: "45% 13%",
      end: "55% 13%",
      scroller: "#main",
      scrub: true,
    }
  })
  gsap.to("#five_h1>span", {
    color: "#1f00fe",
    scrollTrigger: {
      trigger: sectionTwo,
      start: "55% 13%",
      end: "65% 13%",
      scroller: "#main",
      scrub: true,
    }
  })
  gsap.to("#six_h1>span", {
    color: "#1f00fe",
    scrollTrigger: {
      trigger: sectionTwo,
      start: "65% 13%",
      end: "75% 13%",
      scroller: "#main",
      scrub: true,
    }
  })
}
sectionTwoAnimation()
function sectionThree() {
  gsap.from(".three_left_top", {
    x: -500,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#three",
      start: "top 30%",
      end: "bottom bottom",
      scroller: "#main",
    }
  })
  gsap.to(".three_left_bottom_top>h1", {
    transform: "translateX(45%)",
    scrollTrigger: {
      trigger: "#three",
      start: "32% 30%",
      end: "bottom bottom",
      scroller: "#main",
      scrub: 3,
    }
  }, "same5")
  gsap.to(".three_left_bottom_bottom>h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
      trigger: "#three",
      start: "32% 30%",
      end: "bottom bottom",
      scroller: "#main",
      scrub: 3
    }
  }, "same5")
}
sectionThree()
function sectionProcess() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#process",
      start: "50% 50%",
      end: "100% 50%",
      scroller: "#main",
      scrub: 2,
      pin: true,
    }
  })
  tl2.to(".process_top", {
    top: "-50%"
  }, "process")
  tl2.to(".process_bottom", {
    bottom: "-50%"
  }, "process")
  tl2.to("#top_h1", {
    bottom: "20%"
  }, "process")
  tl2.to("#bottom_h1", {
    bottom: "-60%"
  }, "process")
  tl2.from(".process_center>h2", {
    y: -500
  }, "process")
  tl2.from(".process_center>h3", {
    y: 500
  }, "process")
}
sectionProcess()
function sectionAutoSlider() {
  gsap.to(".auto_slide_one>.auto", {
    transform: "translateX(300%)",
    duration: 15,
    repeat: -1,
    yoyo: true
  })
  gsap.to(".auto_slide_two>.auto", {
    transform: "translateX(-300%)",
    duration: 15,
    repeat: -1,
    yoyo: true
  })
}
sectionAutoSlider()
function sectionAutoText() {
  function text() {
    var number = document.getElementById("num");
    var number1 = document.getElementById("num1");
    let interval = 5000;
    let startValue = 0;
    let endValue = parseInt(number.getAttribute("data-value"))
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      number1.innerText = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration)
  }
  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      text()
    } else {
      text()
    }
  })
}
sectionAutoText()
function sectionNine() {
  var btn = document.querySelectorAll(".button_one");
  var card = document.querySelectorAll(".nine_card")
  var count = 0;
  btn[0].addEventListener("click", () => {
    if (count == 0) {
      gsap.to(card[2], {
        duration: 0.5,
        x: -1000,
        opacity: 0
      })
      btn[1].style.background = "#1f00fe";
      count += 1;
    } else if (count == 1) {
      gsap.to(card[1], {
        duration: 0.5,
        x: -1000,
        opacity: 0
      })
      count += 1;
    } else if (count == 2) {
      btn[0].style.background = "#212121";
    }
    console.log(count)
  })
  btn[1].addEventListener("click", () => {
    if (count == 1) {
      gsap.to(card[2], {
        duration: 0.5,
        x: 0,
        opacity: 1
      })
      count -= 1;
    } else if (count == 2) {
      gsap.to(card[1], {
        duration: 0.5,
        x: 0,
        opacity: 1
      })
      count -= 1;
      btn[0].style.background = "#1f00fe";
    } else if (count == 0) {
      btn[1].style.background = "#212121";
    }
    console.log(count)

  })
  console.log(count)
}
sectionNine()
function sectionTen() {
  gsap.to(".ten_top>.ten_top_box", {
    transform: "translateX(800%)",
    repeat: -1,
    duration: 10.5,
    ease: "sine.out",
    yoyo: true
  })
  gsap.to(".ten_bottom>.ten_top_box", {
    transform: "translateX(-800%)",
    repeat: -1,
    duration: 10.5,
    ease: "sine.out",
    yoyo: true
  })
}
sectionTen()
function sectionTeam() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#team",
      start: "top 50%",
      end: "40% 50%",
      scroller: "#main",
      scrub: 0.2,
    }
  })
  tl3.from(".rot", {
    transform: "scaleY(0)",
    duration: 0.5,
    stagger: -0.1,
    ease: "bounce.out",
    opacity: 0,
    y: 500,
  }, "text")
  var h3 = document.querySelector("#bra");
  var clutter10 = "";
  h3.textContent.split('').forEach(function (dets) {
    clutter10 += `<span id="tex">${dets}</span>`;
  })
  h3.innerHTML = clutter10;
  tl3.from("#tex", {
    transform: "scaleY(0)",
    duration: 0.1,
    stagger: 0.1,
    ease: "bounce.out",
    opacity: 0,
    y: 500
  }, "text")
  var team = document.querySelector(".team_bottom_bottom");
  console.log(team)
  team.addEventListener('mouseover', function () {
    var tl4 = gsap.timeline()
    tl4.to('.team_bottom_bottom>#img34', {
      width: "150px",
      y: 1,
      x: 423
    }, "sameTime")
    tl4.to(".text1", {
      top: "30%",
    }, "sameTime")
    tl4.to("#img35", {
      left: "456px",
      rotate: "180deg"
    })
    document.querySelector('.team_bottom_bottom>h1').style.display = "none";
  })
  team.addEventListener('mouseleave', function () {
    var tl4 = gsap.timeline()
    tl4.to('.team_bottom_bottom>#img34', {
      width: "400px",
      y: 0,
      x: 0
    }, "sameTime")
    tl4.to(".text1", {
      top: "100%",
    }, "sameTime")
    tl4.to("#img35", {
      left: "0px",
      rotate: "0deg"
    })
    document.querySelector('.team_bottom_bottom>h1').style.display = "block";
  })


}
sectionTeam()
var team1 = document.querySelector('.team_bottom_box');
team1.addEventListener('mouseover', function () {
  var tl5 = gsap.timeline();
  tl5.to(".team_bottom_box>#img37", {
    width: "150px",
    y: 1,
    x: 423
  }, "sameTime1")
  tl5.to(".tex", {
    top: "30%",
  }, "sameTime1")
  tl5.to("#img36", {
    left: "456px",
    rotate: "180deg"
  })
  document.querySelector('.team_bottom_box>h1').style.display = "none";
})
team1.addEventListener('mouseleave', function () {
  var tl5 = gsap.timeline();
  tl5.to(".team_bottom_box>#img37", {
    width: "400px",
    y: 0,
    x: 0
  }, "sameTime1")
  tl5.to(".tex", {
    top: "100%",
  }, "sameTime1")
  tl5.to("#img36", {
    left: "0px",
    rotate: "0deg"
  })
  document.querySelector('.team_bottom_box>h1').style.display = "block";
})
var team1 = document.querySelector('.team_bottom_box5');
team1.addEventListener('mouseover', function () {
  var tl5 = gsap.timeline();
  tl5.to(".team_bottom_box5>#img38", {
    width: "150px",
    y: 1,
    x: 423
  }, "sameTime3")
  tl5.to(".te", {
    top: "30%",
  }, "sameTime3")
  tl5.to("#img40", {
    left: "456px",
    rotate: "180deg"
  })
  document.querySelector('.team_bottom_box5>h1').style.display = "none";
})
team1.addEventListener('mouseleave', function () {
  var tl5 = gsap.timeline();
  tl5.to(".team_bottom_box5>#img38", {
    width: "400px",
    y: 0,
    x: 0
  }, "sameTime3")
  tl5.to(".te", {
    top: "100%",
  }, "sameTime3")
  tl5.to("#img40", {
    left: "0px",
    rotate: "0deg"
  })
  document.querySelector('.team_bottom_box5>h1').style.display = "block";
})