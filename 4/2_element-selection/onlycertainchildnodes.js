window.addEventListener('DOMContentLoaded', e => {
  const parent = document.getElementById('your-best-friend');

  const listItemsByElement = document.querySelectorAll('li');

  const listItemsByParentId = parent.childNodes;
  listItemsByParentId.forEach(item => console.log(item));

  const listItemsOnly = parent.querySelectorAll('li');
  listItemsOnly.forEach(item => console.log(item));
});

/*
  NodeList(13) [text, li, text, li, text, li, text, li, text, li, text, li, text]0: text1: li2: text3: li4: text5: li6: text7: li8: text9: li10: text11: li12: textlength: 13__proto__: NodeList
  yourbestfriend.js:6 #text
  yourbestfriend.js:6 li
  yourbestfriend.js:6 #text
  yourbestfriend.js:6 li
  yourbestfriend.js:6 #text
  yourbestfriend.js:6 li
  yourbestfriend.js:6 #text
  yourbestfriend.js:6 li
  yourbestfriend.js:6 #text
  yourbestfriend.js:6 li
  yourbestfriend.js:6 #text
  yourbestfriend.js:6 li
  yourbestfriend.js:6 #text
   */

/*
  NodeList(6) [li, li, li, li, li, li]
  yourbestfriend.js:28 <li>​1​</li>​
  yourbestfriend.js:28 <li>​2​</li>​
  yourbestfriend.js:28 <li>​3​</li>​
  yourbestfriend.js:28 <li>​4​</li>​
  yourbestfriend.js:28 <li>​5​</li>​
  yourbestfriend.js:28 <li>​6​</li>​
  */
