module.exports = function(haystack, needle, comparator) {
  var low, high, mid, cmp;

  if(!Array.isArray(haystack))
    throw new TypeError("first argument to binary search is not an array");

  if(typeof comparator !== "function")
    throw new TypeError("third argument to binary search is not a function");

  low  = 0;
  high = haystack.length - 1;
  while(low <= high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle);

    /* Too low. */
    if(cmp < 0.0) 
      low  = mid + 1;

    /* Too high. */
    else if(cmp > 0.0)
      high = mid - 1;
    
    /* Key found. */
    else
      return mid;
  }

  /* Key not found. */
  return ~low;
}
