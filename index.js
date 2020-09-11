function descendingOrder(n){
    //...
    var arrayFromInt = Array.from(String(n), Number); // Integer to array
    arrayFromInt.sort(function(a, b){return b - a}); // descendant order of array
    var joinedArray = arrayFromInt.join(""); // implode array to string
    var number = parseInt(joinedArray); // string to integer
    return number;
  }