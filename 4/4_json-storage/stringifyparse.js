window.addEventListener('DOMContentLoaded', e => {
  const tag = {
    name: 'tag',
    age: 1,
  };

  const jsonStr = JSON.stringify(tag);
  const convertedData = JSON.parse(jsonStr);
  console.log('tag:', tag, typeof tag);
  console.log('jsonStr:', jsonStr, typeof jsonStr);
  console.log('convertedData:', convertedData, typeof convertedData);
});

/*
json.js:9 tag: {name: "tag", age: 1} object
json.js:10 jsonStr: {"name":"tag","age":1} string
json.js:11 convertedData: {name: "tag", age: 1} object
*/
