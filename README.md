binary-search
=============

This is a really tiny, stupid, simple binary search library for Node.JS. We
wrote it because existing solution were bloated and incorrect.

This version is a straight port of the Java version mentioned by Joshua Bloch
in his article, [Nearly All Binary Searches and Merge Sorts are Broken](http://googleresearch.blogspot.com/2006/06/extra-extra-read-all-about-it-nearly.html).

Example
-------

    var bs = require("binary-search");
    bs([1, 2, 3, 4], 3, function(a, b) { return a - b; }); // => 2
    bs([1, 2, 4, 5], 3, function(a, b) { return a - b; }); // => -3

Be advised that passing in a comparator function is *required*. Since you're
probably using one for your sort function anyway, this isn't a big deal.

License
-------

This software is released into the public domain.
