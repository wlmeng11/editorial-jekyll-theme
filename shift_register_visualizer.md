---
layout: page
title: Shift Register Visualizer
image: assets/images/Shift_register_visualizer.jpg
---
Feb 2017

My first ever PCB design! Initially prototyped on a breadboard, then drawn in Kicad and fabricated with an Othermill. The data, clock, enable, and reset pins are controlled with pushbuttons. Each pushbutton is debounced with a capacitor and Schmitt trigger.

<hr class="major" />

<iframe width="560" height="315" src="https://www.youtube.com/embed/w-Q5RRrkMQk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<div class="container">
  <div class="mySlides">
    <img src="assets/images/Shift_register_breadboard.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/Shift_register_backside.jpg" >
  </div>

  <div class="mySlides">
    <img src="assets/images/Shift_register_light.jpg" >
  </div>
    
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="assets/images/Shift_register_breadboard.jpg" style="width:100%" onclick="currentSlide(1)" alt="Prototype on a breadboard">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Shift_register_backside.jpg" style="width:100%" onclick="currentSlide(2)" alt="Back side of PCB">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Shift_register_light.jpg" style="width:100%" onclick="currentSlide(3)"
      alt="FR1 material is somewhat translucent">
    </div>
  </div>
</div>

<hr class="major" />

<link rel="stylesheet" href="assets/css/gallery.css">
<script type="text/javascript" src="assets/js/gallery.js"></script>
