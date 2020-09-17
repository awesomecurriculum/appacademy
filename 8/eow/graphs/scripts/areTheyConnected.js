function areTheyConnected(adjacencyList, startName, endName) {
  if (startName === endName) return true;

  let result = false;

  let que = adjacencyList[startName];
  let visited = new Set();

  while (que.length && !result) {
    let cur = que.shift();
    if (cur === endName) result = true;
    if (!visited.has(cur) && cur !== startName) {
      que = [...que, ...adjacencyList[cur]];
      visited.add(cur);
    }
  }

  return result;
}

/*******************************************************************************
 * Do not change the code after this line.
 */
try {
  exports.areTheyConnected = areTheyConnected;
} catch (e) {
  module.exports = null;
}
