---
layout: page
title: Build-A-Notebook
image: assets/images/buildanotebook/banner.jpg
comments: true
---
November 2018<br>
[Github repository](https://github.com/wlmeng11/Build-A-Notebook)

I developed and led a seminar in the [Columbia Makerspace](https://make.columbia.edu/) in order to teach students how to build their own customizable notebook, based on my [previous sketchbook design](sketchbook.html).

The design consists of:

* a laser-cut acrylic front cover
* a laser-cut acrylic back cover
* a synthetic leather spine
* laser-cut acrylic inserts
* paper sections bound by staples or string
* and a combination of metal rivets and string to hold it all together

This was by far the largest event I’ve ever hosted to date – the [Facebook event](https://www.facebook.com/events/153038082317740/) quickly garnered interest from over 900 people! This was far too many for the Makerspace to accommodate, so I had to cap attendance at 100 people spread out across 4 different time slots.

The laser-cut parts were designed in Adobe Illustrator. All of the design files and the Bill of Materials are [available on Github](https://github.com/wlmeng11/Build-A-Notebook) under a [CC BY-SA 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/). If you decide to host your own version of this seminar, I’d love to hear about it!

<iframe width="560" height="315" src="https://www.youtube.com/embed/XCw8D9fIZSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<hr class="major" />

<div class="container" id="gallery"></div>

<script type="text/javascript" src="assets/js/generategallery.js"></script>
<script>
  var prefix = "buildanotebook/"
  var filenames = [
    "01 - cover.jpg",
    "02 - lasercut bundle.jpg",
    "03 - scraps.jpg",
    "04 - assembled.jpg",
    "05 - materials.jpg",
    "06 - students working.jpg",
    "07 - bookbinding screws.jpg",
    "08 - leather hole punch.jpg",
    "09 - sunshine notebook.jpg",
    "10 - rainbow paper.jpg",
    "11 - rainbow notebook.jpg"
  ];
  var captions = [
    "A lasercut cover.",
    "Some bundles of lasercut inserts.",
    "Scrap material from cutting the inserts.",
    "Assembly of the covers and spine with bookbinding screws and inserts.",
    "All the tools and materials ready to go for the seminar!",
    "Some students working on their notebooks.",
    "A student putting in the bookbinding screws.",
    "A student punching holes in the spine.",
    "One student made a sunshine-themed notebook!",
    "Another student decided to use paper of several different colors!",
    "The resulting rainbow notebook!"
  ];
  var images = filenames.map(function (i){
    return prefix + i;
  })
  <!-- Note that we need to call this BEFORE gallery.js is loaded -->
  generateGalleryHTML(images, captions);
</script>

<hr class="major" />
<link rel="stylesheet" href="assets/css/gallery.css">
<script type="text/javascript" src="assets/js/gallery.js"></script>