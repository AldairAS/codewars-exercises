var uniqueInOrder = function (iterable) {
  if (typeof iterable == String) {
    iterable = iterable.split("");
  }
  if(iterable.length<1){
    return [];
  }
  let result = [iterable[0]];
  for (let index = 1; index < iterable.length; index++) {
    if(iterable[index-1]!== iterable[index]){
      result.push(iterable[index])
    }
  }
  return console.log(result)
};

uniqueInOrder('AAAABBBCCDAABBB')
uniqueInOrder('ABBCcAD')        
uniqueInOrder([1,2,2,3,3])