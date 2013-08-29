module.exports = function(haystack, needle, comparator) {
  var low = 0,
      high = haystack.length - 1,
      mid, cmp;

  while(low <= high) {
    mid = low + ((high - low) / 2);
    cmp = comparator(haystack[mid], needle);

    /* Too low. */
    if(cmp < 0) 
      low = mid + 1;

    /* Too high. */
    else if(cmp > 0)
      high = mid - 1;
    
    /* Key found. */
    else
      return mid;
  }

  /* Key not found. */
  return -(low + 1);
}
