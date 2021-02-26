
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(!matrix || matrix.length === 0) {
    return [];
  }

  let arr = [];
  
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 === 0) {
      arr = [...arr, ...matrix[i]];
    } else {
      matrix[i].reverse();
      arr = [...arr, ...matrix[i]];
    }
  }
  return arr;
}
