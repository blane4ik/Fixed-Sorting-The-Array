var data = [1, 'firstString', 30, 500, true, true, null, 'abc', false, {test: 'Object'}, undefined],
  result;

result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);
//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

console.log('result', result);

function prioritySort(array, dataPriority){

  var undefinedValue = {};
  
  var result = array.map(function(item){
    if (item === undefined) {
      return undefinedValue;
    } else {
      return item;
    }
  });

  var dataPriorityObject = {}
  dataPriority.forEach(function(value, index){
    dataPriorityObject[value] = index;
  });

  function typeCheck(value) {
    if (value === null){
      return 'null';
    }else if (value === undefinedValue){
      return undefined;
    } else {
      return typeof value;
  }
};

  result.sort(function (a,b) {

    var typeofElementA = typeCheck(a);
    var typeofElementB = typeCheck(b);


    var indexOfElementA = dataPriorityObject[typeofElementA];
    var indexOfElementB = dataPriorityObject[typeofElementB];

    switch (true) {
      case typeofElementA !== typeofElementB:
          return indexOfElementA - indexOfElementB;
        break;
      case typeofElementA == typeofElementB:
      if (typeofElementA && typeofElementB === 'boolean'){
        return b - a;
      } else {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
      }
        break;
     }
  });

  result = result.map(function(item){
    if (item === undefinedValue) {
      return undefined;
    } else {
      return item;
    }
  });

    return result;
};