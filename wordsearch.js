const wordSearch = (letters, word) => {
  const verticalArr = function(letters) {
    let newArr = [];
    for (let i = 0; i < letters[0].length; i++) { 
      let miniArr = []
      for (let j in letters) {
        miniArr.push(letters[j][i]);
      }
      newArr.push(miniArr);
    }
    return newArr;
  };
  const verticalJoin = verticalArr(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  const horizontal = horizontalJoin.join('');
  const vertical = verticalJoin.join('');
  if (vertical.includes(word) || horizontal.includes(word)) {
    return true;
  } else {
    return false;
  }
}


module.exports = wordSearch;




