---
layout: post
published: true
slug: used
title: "Buying used books on BookFinder, without feeding Amazon"
description: Why and how I created an extension to highlight Amazon-owned
  businesses on BookFinder.com
intro: >-
  BookFinder is a great resource to buy used paper books all over the world,
  but a number of results on the site are Amazon-owned businesses. Why
  encourage Amazon's destructive business practices while trying to give books
  a second life?
---

## Used books are great...

Despite using a Kobo as my eReader, I still enjoy reading paper books from time
to time. However, printed books are made out of dead trees and I'd rather
rescue a second hand book than create demand for a new one.

[BookFinder](https://bookfinder.com) is a great resource to find used books and
compare prices (including shipping to any country, and in any currency), it has
become my first step when looking for a book.

## ... But Amazon is not

The problem is that BookFinder is owned by Amazon and many of the search
results on the site promote Amazon-owned businesses.

Amazon is a notorious union buster[^0] [^1], forces its employees to work in
unsafe conditions[^2] [^3], routinely burns millions of useable but returned
items[^4], knowingly sells counterfeit goods[^5]... Not a business I'd like to
enable. Besides, Jeff Bezos has already been to space once; no need to help
send him again.

## Spotting Amazon businesses on BookFinder

I have inventoried every Amazon-owned site I could find on BookFinder and
created a Userscript to easily spot these businesses amongst the search
results. It's now easy to buy used books without giving Amazon any business!

Here is what it looks like (click to enlarge):

[![Before/after](/assets/images/posts/used/animated.webp)](/assets/images/posts/used/animated.webp)

Amazon results are still clickable, but they're clearly marked and easy to
avoid.

## Source code and future plans

The source code is public and available on my GitHub:
[https://github.com/coaxial/tampermonkey-scripts/blob/master/bookfindercom/noamazon.js](https://github.com/coaxial/tampermonkey-scripts/blob/master/bookfindercom/noamazon.js).

To use it, you'll need [Tampermonkey](https://www.tampermonkey.net/) for
Firefox, Chrome, Safari, Edge, Opera.

You can then add the script from here:
[https://greasyfork.org/en/scripts/464153-outline-amazon-owned-bookstores](https://greasyfork.org/en/scripts/464153-outline-amazon-owned-bookstores).

In the future, I might turn this into a standalone Firefox and Chrome
extension. But the userscript works just as well.

## Conclusion

I hope this script will be useful, and that you'll consider buying used books
instead of new ones. Most of the books I purchased this way were actually new
and I couldn't tell they were second hand.

Fairly recent books are available too, the one featured in the screenshots was
first published in Februray 2023 and has been available used since April 2023.

## Footnotes

[^0]: https://www.theguardian.com/technology/2022/nov/28/amazon-staten-island-new-york-retaliation
[^1]: https://archive.is/EpRcc
[^2]: https://www.theguardian.com/technology/2023/mar/02/amazon-safety-citations-osha-department-of-justice
[^3]: https://www.reuters.com/markets/commodities/sadness-anger-amazon-workers-who-died-during-tornado-2021-12-17/
[^4]: https://www.itv.com/news/2021-06-21/amazon-destroying-millions-of-items-of-unsold-stock-in-one-of-its-uk-warehouses-every-year-itv-news-investigation-finds
[^5]: https://www.inc.com/magazine/201904/jeff-bercovici/amazon-fake-copycat-knockoff-products-small-business.html
