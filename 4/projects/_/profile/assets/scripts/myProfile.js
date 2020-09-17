window.addEventListener("DOMContentLoaded", (e) => {
  let name = document.createElement("h1"),
    nameVal = "matt";
  name.setAttribute("id", "name");
  name.innerHTML = nameVal;

  let body = document.querySelector("body"),
    content = document.createElement("div"),
    column = document.createElement("div"),
    list = document.createElement("ul");

  document.body.appendChild(name);
  document.body.appendChild(content);
  content.appendChild(column);

  makeList = (...item) => {
    content.appendChild(list);
    let items = [];
    (function () {
      item.forEach((ele) => items.push(`<li><code>${ele}</code></li>`));
    })();
    list.innerHTML = items.join("\n");
    column.appendChild(list);
  };

  makeList(
    "current location: portland, or",
    "place of birth: nyc, ny",
    "pets: tag {golden retriever}",
    "birthday: aug 2",
    "I live in Portland, OR, and it's currently: <span id='span'></span>"
  );

  (function () {
    name.setAttribute(
      "class",
      "name title is-1 has-text-centered has-text-grey-dark"
    );
    content.setAttribute("class", "columns");
    column.setAttribute("class", "column is-three-fifths is-offset-one-fifth");
    list.setAttribute("class", "my-details");
    document
      .querySelectorAll("li")
      .forEach((ele) => ele.setAttribute("class", "detail"));
  })();

  const clock = () => {
    let date = new Date();
    let h = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds(),
      cur = `${h}:${m}:${s}`;
    document.querySelector("title").innerHTML = cur;
    document.getElementById("span").innerHTML = cur;
  };

  setInterval(clock, 1000);
});
