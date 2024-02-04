window.addEventListener("hashchange", (e) => {
  if (location.hash == "#home") {
    document.querySelector("main").style.backgroundColor = "blue";
    document.querySelector("h1").innerText = "homeeee";
    document.querySelector('a').style.color='yellow'
  }
});
