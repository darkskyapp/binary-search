binary-search
=============

This is a really tiny, stupid, simple binary search library for Node.JS. We
wrote it because existing solutions were bloated and incorrect.

This version is a straight port of the Java version mentioned by Joshua Bloch
in his article, [Nearly All Binary Searches and Merge Sorts are Broken](http://googleresearch.blogspot.com/2006/06/extra-extra-read-all-about-it-nearly.html).

Thanks to [Conrad Irwin](https://github.com/ConradIrwin) and [Michael
Marino](https://github.com/mgmarino) for, ironically, pointing out bugs.

Example
-------

```js
var bs = require("binary-search");

bs([1, 2, 4, 5], 4, function(element, needle) { return element - needle; });
// => 2

bs([1, 2, 4, 5], 3, function(element, needle) { return element - needle; });
// => -3

bs([1, 2, 4, 5], 8, function(element, needle) { return element - needle; });
// => -5

bs([1, 2, 4, 5], 0, function(element, needle) { return element - needle; });
// => -1
```

Parameters
----------

- `haystack` - an array. `haystack` must already be sorted.
- `needle` - the value you want to search for.
- `comparator(element, needle, [index, array])` - compare an element from
  `haystack` with the `needle`.
  - Must return a positive number if the `element` is larger than `needle`,
  - Must return `0` if they are equal, and
  - Must return  a negative number if `element` is smaller than `needle`.
  - The comparator function will often be the same function that was used to
    sort `haystack`. If not, it must rank elements in the same order as the
    comparator that was used to sort `haystack`.
  - You shouldn't normally need the index or array to compare values, but they
    are there if you do.
- `minimumIndex` - (optional) - the index of the smallest element in `haystack`
   which should be included in the search. By default this is 0.
- `maximumIndex` - (optional) - the index of the largest element in `haystack`
  which should be included in the search. By default this is `haystack.length - 1`
  - `minimumIndex` and `maximumIndex` let you specify an input range, in case
     you want to limit the search to a particular range of inputs.
  - Be advised that this is generally a bad idea.
  - (But sometimes bad ideas are necessary.)
  - By default `bs()` will search the entire `haystack`.

Return values
-------------

- If the needle is equal to an element in the haystack, `bs()` will return that element's index.
- If the needle is smaller than any element of the haystack, `bs()` returns `minimumIndex - 1`.
  - If you didn't specify `minimumIndex` and `maximumIndex`, the return value will be `-1` in this case.
- If the needle is larger than any element of the haystack, `bs()` returns `-1 * (largestIndex + 2)`, where `largestIndex` is the index of the last element in the haystack.
  - If you didn't specify `minimumIndex` and `maximumIndex`, the return value will be `-1 * (haystack.length + 1)`.
- If the needle is in between two elements of the haystack, `bs()` returns `-1 * (largerIndex + 1)`, where `largerIndex` is the index of the larger or the two elements which the `needle` sits between.

License
-------

To the extent possible by law, The Dark Sky Company, LLC has [waived all
copyright and related or neighboring rights][cc0] to this library.

[cc0]: http://creativecommons.org/publicdomain/zero/1.0/
