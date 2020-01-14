//this function lets you pass in an array of objects 
//and removes any object that contains a duplicate key value
//the key value you want to check against if passed as a parameter
//an array without the duplicates is returned

//usage example:
// var filteredArray = removeDuplicatesByKeyValue(obj => obk.keyValue, unfilteredArray);

function removeDuplicatesByKeyValue(keyFn, array) {
    let mySet = new Set();
    return array.filter(function(x) {
      var key = keyFn(x), newArray = !mySet.has(key);
      if (newArray) mySet.add(key);
      return newArray;
    });
}

export default removeDuplicatesByKeyValue;