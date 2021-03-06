setTimeout(() => {
  document.getElementById("loader").style.opacity = 0
}, 2000)

setTimeout(() => {
  document.getElementById("loader").style.display = "none"
  document.getElementById("body").style.overflowY = "auto"
}, 2150)

window.onscroll = onScroll;
function onScroll() {
  if (window.scrollY <= 200) {
    document.getElementById("please-scroll").style.opacity =
      (200 - window.scrollY) / 200;
  } else {
    document.getElementById("please-scroll").style.opacity = 0;
  }


  if (isInViewport(document.getElementById("contact-method"))) {
    document.getElementById("contact-bar").style.opacity = 0
  } else {
    document.getElementById("contact-bar").style.opacity = 1
  }
}

document.getElementById("robot-parent").onfocus = showVideo
document.getElementById("robot-parent").onblur = hideVideo

function showVideo() {
  document.getElementById("robot-video").style.display = "block"
  document.getElementById("robot-image").style.display = "none"
}
function hideVideo() {
  document.getElementById("robot-video").style.display = "none"
  document.getElementById("robot-image").style.display = "block"
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

document.getElementById("toTopBtn").addEventListener("click", function () {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

document.addEventListener("scroll", function() {
  var scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
  if ((document.documentElement.scrollTop / scrollTotal ) > 0.6) {
    document.querySelector("#toTopBtn").style.opacity = 1
  } else {
    document.querySelector("#toTopBtn").style.opacity = 0
  }
})
