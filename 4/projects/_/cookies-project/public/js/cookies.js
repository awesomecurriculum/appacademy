window.addEventListener("DOMContentLoaded", (event) => {
  console.log("hello world");

  document.cookie = "monster_name=cookie";
  document.cookie = "favorite_cookie=snickerdoodle";

  const setCookie = function (name, val) {
    document.cookie = name + "=" + val;
    window.alert(document.cookie);
  };

  // setCookie("matt", "tag");
  // setCookie("nikki", "sky");
  // setCookie("ty", "trot");

  const getCookies = () => document.cookie.split("; ");

  const getCookieValue = (name) => {
    let cookieArr = getCookies();
    let cookieObj = cookieArr.reduce((obj, ele) => {
      const keyVal = [];
      keyVal.push(...ele.split("="));
      let key = keyVal[0];
      let val = keyVal[1];
      obj[`${key}`] = val;
      return obj;
    }, {});
    return cookieObj[`${name}`] !== undefined ? cookieObj[`${name}`] : null;
  };

  // getCookieValue("matt");

  const removeCookie = (name, cb) => {
    if (cb(`${name}`) !== null) {
      document.cookie = `${name}=${cb(name)}; max-age=0`;
    } else {
      console.log("cookie not found!");
    }
  };
  // removeCookie("tag", getCookieValue);

  const randomWindow = (cb1, cb2, cb3) => {
    let win;
    let val = Math.round(Math.random() * 1000).toString();
    cb1("num", val); // sets key value pair in cookies
    let int = parseInt(`${cb2("num")}`);
    return cb3(int, int);
  };

  const newWindow = (w, h) => {
    window
      .open("http://google.com", "NewWindow", "resizable,scrollbars")
      .resizeTo(w, h);
  };

  // randomWindow(setCookie, getCookieValue, newWindow);

  const body = document.querySelector("body"),
    form = document.getElementById("create-new-cookie-form"),
    submitButton = document.querySelector(".button");

  form.addEventListener("submit", (e) => {
    let cookieName = document.getElementById("cookie-name-input").value;
    let cookieValue = document.getElementById("cookie-val-input").value;
    return setCookie(cookieName, cookieValue);
  });
});
