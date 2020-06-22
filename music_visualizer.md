---
layout: page
title: Music Visualizer
image: assets/images/music_visualizer/Music_visualizer.jpg
comments: true
---
December 2017<br>
with Luis Collado

A 3-band audio music visualizer built on a breadboard for our ELEN 1201 final project. Each band consists of an RC filter, diode peak detector, amplifier stage, and a flash ADC using comparators.

<hr class="major" />

<iframe width="560" height="315" src="https://www.youtube.com/embed/OAprvrdoSRs?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<hr class="major" />

<div class="container" id="gallery"></div>

<script type="text/javascript" src="assets/js/generategallery.js"></script>
<script>
  var prefix = "music_visualizer/"
  var filenames = [
    "Music_visualizer_breadboard.jpg"
  ];
  var captions = [
    "Complete circuit on a breadboard"
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