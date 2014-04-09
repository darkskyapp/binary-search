binary-search
=============

This is a really tiny, stupid, simple binary search library for Node.JS. We
wrote it because existing solutions were bloated and incorrect.

This was a straight port of the Java version mentioned by Joshua Bloch
in his article, [Nearly All Binary Searches and Merge Sorts are Broken](http://googleresearch.blogspot.com/2006/06/extra-extra-read-all-about-it-nearly.html).

Thanks to [Conrad Irwin](https://github.com/ConradIrwin) for, ironically,
pointing out a bug.

The code has been updated to work with comparators returning floats.  

In addition, a user can pass a range to the function to reduce the binary
search size.

Example
-------

    var bs = require("binary-search");
    bs([1, 2, 3, 4], 3, function(a, b) { return a - b; }); // => 2
    bs([1, 2, 4, 5], 3, function(a, b) { return a - b; }); // => -3

    bs([0.1, 0.5, 0.8, 1], 0.1, function (a,b) { return (a - b); }); // => 0
    bs([0.1, 0.5, 0.8, 1], 0.15, function (a,b) { return (a - b); }); // => -2
    bs([0.1, 0.5, 0.8, 1], 0.15, function (a,b) { return (a - b); }, 1, 3); // => -2

where the last limits the search between indices 1 and 3.

Be advised that passing in a comparator function is *required*. Since you're
probably using one for your sort function anyway, this isn't a big deal.

License
-------

This software is released into the public domain.
