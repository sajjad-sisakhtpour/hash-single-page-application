window.addEventListener("hashchange", (e) => {
  let data;
  switch (location.hash) {
    case "#home":
      data = { title: "home", color: "red", href: "#home" };
      render(data);
      break;
    case "#search":
      data = { title: "search", color: "pink", href: "#search" };
      render(data);
      break;
    case "#likes":
      data = { title: "likes", color: "green", href: "#likes" };
      render(data);
      break;
    case "#profile":
      data = { title: "profile", color: "yellow", href: "#profile" };
      render(data);
      break;
  }
});

function render(data) {
  document.querySelector("main").style.backgroundColor = data.color;
  document.querySelector("h1").innerText = data.title;
  document.querySelectorAll("a").forEach((Element) => {
    if (Element.href.includes(data.href)) {
      Element.style.color = data.color;
    } else {
      Element.style.color = "black";
    }
  });
}
