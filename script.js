window.addEventListener("hashchange", (e) => {
  switch (location.hash) {
    case "#home":
      console.log("yes");
      document.querySelector("main").style.backgroundColor = "red";
      document.querySelector("h1").innerText = "homeeee";
      document.querySelector("a").style.color = "yellow";
      break;
  }
});
