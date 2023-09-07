function palindrome(str) {
  return str
  .toLowerCase()
  .match(/[0-9a-z]/g)
  .every(function (ele,index,arr) {
    return ele === arr[arr.length -1 - index]
  });
}

palindrome("eye");