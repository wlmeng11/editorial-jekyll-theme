---
layout: page
title: Strawberry
image: assets/images/strawberry/strawberry.png
comments: true
---
December 2019<br>
with [Haley So](https://haleyso.github.io/)<br>

For the final design project of Prof. Ken Shepard's (in)famous [Digital VLSI course](https://www.bioee.ee.columbia.edu/courses/ee4321/),
we designed and layed out an entire 8-bit microcontroller core
in Cadence Virtuoso for IBM's 90 nm CMOS process (cms9flp).

<hr class="major" />

<div class="container" id="gallery"></div>

<script type="text/javascript" src="assets/js/generategallery.js"></script>
<script>
  var prefix = "strawberry/"
  var filenames = [
    "strawberry_block.jpg",
    "strawberry_ADDER_XOR.png",
    "strawberry_ADDER.png",
    "strawberry_BIGBUSDRIVER_tristate.png",
    "strawberry_BIGBUSDRIVER_tristate_waveforms.png",
    "strawberry_shiftbypass.png",
    "strawberry_MUX_schematic.png",
    "strawberry_MUX_stick.png",
    "strawberry_MUX_layout.png",
    "strawberry_MEM_decoderNOR.png",
    "strawberry_MEM_decoder.png",
    "strawberry_MEM_tiling.jpg",
    "strawberry_PLA_testbench.png",
    "strawberry_PLA_waveforms.png",
    "strawberry_assembly_code.jpg"
  ];
  var captions = [
      "Block diagram of microcontroller core",
      "2 input XOR gate",
      "8 bit 2's complement ripple carry adder/subtractor",
      "A large tristate buffer for driving the main bus",
      "Waveforms for tristate buffer",
      "Shift bypass circuit",
      "3:1 mux with decoded select lines (schematic)",
      "3:1 mux with decoded select lines (stick diagram)",
      "3:1 mux with decoded select lines (layout)",
      "Clock-qualified 3 input NOR",
      "Wordline decoder for SRAM (3 bit address mapped to 8 wordlines)",
      "SRAM tiling diagram",
      "Testbench for Programmable Logic Array (PLA) control logic",
      "Waveforms of control signals from PLA",
      "Assembly code for functional verification"
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