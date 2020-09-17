window.addEventListener('DOMContentLoaded', event => {
  console.log('run script after page loads');

  document.cookie = 'monster_name=cookie';
  document.cookie = 'favorite_cookie=snickerdoodle';
  document.cookie = 'type=choc_chip';

  setCookie('dog', 'golden_retriever');
  setCookie('name', 'tag');
  setCookie('owner', 'cookie_monster');

  function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
  }

  window.alert(document.cookie);

  const getCookies = _ => {
    return document.cookie.split('; ').reduce((acc, ele) => {
      acc.push(ele);
      return acc;
    }, []);
  };

  const getCookieValue = name => {
    const cookies = getCookies();

    let res = null;

    cookies.forEach(ele => {
      if (ele.includes(name)) return (res = ele.split('=')[1]);
    });

    return res;
  };

  const deleteCookie = (name, cb) => {
    if (cb(name) === null) {
      console.log('cookie not found');
    } else {
      document.cookie = `${name}=${getCookieValue(name)}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    }
  };

  deleteCookie('owner', getCookieValue);
});
