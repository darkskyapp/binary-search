module.exports = function(haystack, needle, comparator) {
  if(!Array.isArray(haystack))
    throw new TypeError("first argument to binary search is not an array");

  if(typeof comparator !== "function")
    throw new TypeError("third argument to binary search is not a function");

  var low  = 0,
      mid  = 0,
      high = (haystack.length - 1) >>> 0,
      cmp  = 0;

  while(low <= high) {
    mid = (low + high) >>> 1;
    cmp = comparator(haystack[mid], needle)|0;

    /* Too low. */
    if(cmp < 0) 
      low  = (mid + 1) >>> 0;

    /* Too high. */
    else if(cmp > 0)
      high = (mid - 1) >>> 0;
    
    /* Key found. */
    else
      return mid;
  }

  /* Key not found. */
  return ~low;
}
