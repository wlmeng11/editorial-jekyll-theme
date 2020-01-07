---
layout: page
title: Strawberry
image: assets/images/strawberry.png
comments: true
---
December 2019<br>
with [Haley So](https://haleyso.github.io/)<br>

For the final design project of Prof. Ken Shepard's (in)famous [Digital VLSI course](https://www.bioee.ee.columbia.edu/courses/ee4321/),
we designed and layed out an entire 8-bit microcontroller core
in Cadence Virtuoso for IBM's 90 nm CMOS process (cms9flp).

<hr class="major" />

<div class="container">
  <div class="mySlides">
    <img src="assets/images/strawberry_block.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_ADDER_XOR.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_ADDER.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_BIGBUSDRIVER_tristate.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_BIGBUSDRIVER_tristate_waveforms.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_shiftbypass.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_MUX_schematic.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_MUX_stick.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_MUX_layout.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_MEM_decoderNOR.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_MEM_decoder.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_MEM_tiling.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_PLA_testbench.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_PLA_waveforms.png">
  </div>

  <div class="mySlides">
    <img src="assets/images/strawberry_assembly_code.jpg">
  </div>

  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_block.jpg" style="width:100%" onclick="currentSlide(1)"
      alt="Block diagram of microcontroller core">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_ADDER_XOR.png" style="width:100%" onclick="currentSlide(2)"
      alt="2 input XOR gate">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_ADDER.png" style="width:100%" onclick="currentSlide(3)"
      alt="8 bit 2's complement ripple carry adder/subtractor">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_BIGBUSDRIVER_tristate.png" style="width:100%" onclick="currentSlide(4)"
      alt="A large tristate buffer for driving the main bus">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_BIGBUSDRIVER_tristate_waveforms.png" style="width:100%" onclick="currentSlide(5)"
      alt="Waveforms for tristate buffer">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_shiftbypass.png" style="width:100%" onclick="currentSlide(6)"
      alt="Shift bypass circuit">
    </div>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_MUX_schematic.png" style="width:100%" onclick="currentSlide(7)"
      alt="3:1 mux with decoded select lines (schematic)">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_MUX_stick.png" style="width:100%" onclick="currentSlide(8)"
      alt="3:1 mux with decoded select lines (stick diagram)">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_MUX_layout.png" style="width:100%" onclick="currentSlide(9)"
      alt="3:1 mux with decoded select lines (layout)">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_MEM_decoderNOR.png" style="width:100%" onclick="currentSlide(10)"
      alt="Clock-qualified 3 input NOR">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_MEM_decoder.png" style="width:100%" onclick="currentSlide(11)"
      alt="Wordline decoder for SRAM (3 bit address mapped to 8 wordlines)">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_MEM_tiling.jpg" style="width:100%" onclick="currentSlide(12)"
      alt="SRAM tiling diagram">
    </div>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_PLA_testbench.png" style="width:100%" onclick="currentSlide(13)"
      alt="Testbench for Programmable Logic Array (PLA) control logic">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_PLA_waveforms.png" style="width:100%" onclick="currentSlide(14)"
      alt="Waveforms of control signals from PLA">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/strawberry_assembly_code.jpg" style="width:100%" onclick="currentSlide(15)"
      alt="Assembly code for functional verification">
    </div>
  </div>
</div>

<hr class="major" />

<link rel="stylesheet" href="assets/css/gallery.css">
<script type="text/javascript" src="assets/js/gallery.js"></script>

