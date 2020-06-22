---
layout: page
title: Futurama
image: assets/images/futurama/Futurama.jpg
comments: true
---
December 2016<br>
with [Perrin Anto](https://www.perrin.design/), Meghna Gorrela, Gabby Jones, & Hidy Yi

[Code on Github](https://github.com/wlmeng11/futurama)<br>
[Featured on the @columbiaengineering Instagram](https://www.instagram.com/p/BcaSdyZla2W/)

Our project for the Art of Engineering class. We designed and fabricated an Arduino-based game, inspired by the classic arcade game Stacker. The game features a graphic LCD, score counter, speed dial, and fun-sized buttons, all enclosed within an illuminated acrylic casing.

<hr class="major" />

<div class="container" id="gallery"></div>

<script type="text/javascript" src="assets/js/generategallery.js"></script>
<script>
  var prefix = "futurama/"
  var filenames = [
    "Futurama_diagram.jpg",
    "Futurama_parts.jpg",
    "Futurama_test.jpg",
    "Futurama_side.jpg",
    "Futurama_top.jpg",
    "Futurama_LEDs.jpg"
  ];
  var captions = [
    "Wiring diagram",
    "Trying to get a sense of where everything should go",
    "Prototype on a breadboard",
    "Side view of partial assembly",
    "Top view of partial assembly",
    "Soldering LEDs for aesthetically pleasing case lighting"
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