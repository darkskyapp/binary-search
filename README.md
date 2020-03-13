binary-search
=============

This is a really tiny, stupid, simple binary search library for Node.JS. We wrote it because existing solutions were bloated and incorrect. This version is a straight port of the Java version mentioned by Joshua Bloch in his article, [Nearly All Binary Searches and Merge Sorts are Broken](http://googleresearch.blogspot.com/2006/06/extra-extra-read-all-about-it-nearly.html).

You pass the function a sorted array, a value, and the sort comparator function. If the value is found in the array, it returns a nonnegative integer representing the index of the value in the array. (Note that if your array contains duplicates, the index within the run of duplicates is arbitrary.) If the value is _not_ in the array, then `-(index + 1)` is returned, where `index` is where the value should be inserted into the array to maintain sorted order.

You may also pass the search function optional fourth and fifth arguments, representing the minimum and maximum indices of the array to search, in case you wish to limit the section of the array searched. (These default, of course, to `0` and `length-1`, respectively.)

The sort comparator function should be the same one you use to sort your array. It accepts optional third and fourth arguments, the current index and the overall array: these should not be necessary except in highly unusual circumstances.

Thanks to [Conrad Irwin](https://github.com/ConradIrwin) and [Michael Marino](https://github.com/mgmarino) for, ironically, pointing out bugs.

Example
-------

```js
var bs = require("binary-search");

bs([1, 2, 3, 4], 3, function(element, needle) { return element - needle; });
// => 2

bs([1, 2, 4, 5], 3, function(element, needle) { return element - needle; });
// => -3
```

License
-------

To the extent possible by law, The Dark Sky Company, LLC has [waived all
copyright and related or neighboring rights][cc0] to this library.

[cc0]: http://creativecommons.org/publicdomain/zero/1.0/
