document.querySelectorAll(".card a").forEach((link) => {
  const content = document.getElementById("contentdescription");

  link.onclick = function (e) {
    e.preventDefault();
    fetch(link.href)
      .then((resp) => resp.text())
      .then((html) => (content.innerHTML = html));
  };
});
