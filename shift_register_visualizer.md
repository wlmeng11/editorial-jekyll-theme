---
layout: page
title: Shift Register Visualizer
image: assets/images/shift_register_visualizer/Shift_register_visualizer.jpg
comments: true
---
February 2017

My first ever PCB design! Initially prototyped on a breadboard, then drawn in Kicad and fabricated with an Othermill. The data, clock, enable, and reset pins are controlled with pushbuttons. Each pushbutton is debounced with a capacitor and Schmitt trigger.

<iframe width="560" height="315" src="https://www.youtube.com/embed/w-Q5RRrkMQk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<hr class="major" />

<div class="container" id="gallery"></div>

<script type="text/javascript" src="assets/js/generategallery.js"></script>
<script>
  var prefix = "shift_register_visualizer/"
  var filenames = [
    "Shift_register_breadboard.jpg",
    "Shift_register_backside.jpg",
    "Shift_register_light.jpg"
  ];
  var captions = [
    "Prototype on a breadboard",
    "Back side of PCB",
    "FR1 material is somewhat translucent"
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