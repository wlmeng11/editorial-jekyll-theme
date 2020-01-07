---
layout: page
title: Deep Brain Fluorescence Imager
image: assets/images/Unishank_layout.png
comments: true
---
(top image by Jaebin Choi)

June 2019<br>
with Jaebin Choi et al (Columbia University [Bioelectronic Systems Lab](https://bioeeweb.ee.columbia.edu/wordpress/))<br>

I joined Prof. Ken Shepard's Bioelectronic Systems Lab during my junior year
to work on next-generation neural interfaces based on Single Photon Avalanche Diode (SPAD) photodetectors,
which offer unrivaled speed and resolution compared to electric and magnetic field sensors.

The imager chip was fabricated in TSMC's 130 nm BCD process.
It integrates microLED illuminators and SPAD photodetectors into a needle-like form factor
in order to perform fluorescence lifetime imaging of deep tissue in a mouse brain.
Because the microscale form factor of the system prohibits a physical lens to focus the light,
a compressed sensing scheme which utilizes an ensemble of angular-sensitive pixels
(based on a variety of Talbot diffraction gratings)
allows for computational focusing and reconstruction of a 3D image.

I assembled and tested the PCBs, collected data, and created simulations and plots that were included in my co-authored paper,
which won the award for second best paper at the 2019 IEEE Biomedical Circuits and Systems (BioCAS) conference,
a premier international conference in the field of bioelectronics.

*Publications*:
* J. Choi, A. Taal, E. Pollmann, **W. Meng**, S. Moazeni, L. Moreaux, M. Roukes, K. Shepard, "[Fully Integrated Time-Gated 3D Fluorescence Imager for Deep Neural Imaging](https://bioeeweb.ee.columbia.edu/wordpress/wp-content/uploads/2019/11/8279.pdf)," IEEE Biomedical Circuits and Systems (BioCAS), October 18, 2019.

*Awards*:
* *2nd place* paper at BioCAS conference
* Invited paper (in preparation) for Special Issue of IEEE Transactions on Biomedical Circuits and Systems (TBioCAS) 2020.

<hr class="major" />

<div class="container">
  <div class="mySlides">
    <img src="assets/images/Unishank_chip.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_fineplacer.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_dummy_wafer.JPG">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_probing.JPG">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_probe_station.JPG">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_microLED.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_blue.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_board_setup.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_radiation_profile.jpg">
  </div>

  <div class="mySlides">
    <img src="assets/images/Unishank_ASP.jpg">
  </div>

  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>

  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_chip.jpg" style="width:100%" onclick="currentSlide(1)"
      alt="<strike> The world's smallest stringed instrument</strike> Test chip (not diced) wirebonded to daughterboard">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_fineplacer.jpg" style="width:100%" onclick="currentSlide(2)"
      alt="Aligning microLED with dummy wafer for flip-chip bonding on the Fineplacer lambda">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_dummy_wafer.JPG" style="width:100%" onclick="currentSlide(3)"
      alt="microLED with dummy wafer attached to chip">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_probing.JPG" style="width:100%" onclick="currentSlide(4)"
      alt="Probing microLED on the probe station">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_probe_station.JPG" style="width:100%" onclick="currentSlide(5)"
      alt="microLED illuminated by probe station">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_microLED.jpg" style="width:100%" onclick="currentSlide(6)"
      alt="Flip-chip bonded microLED under microscope">
    </div>
  </div>

  <div class="row">
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_blue.jpg" style="width:100%" onclick="currentSlide(7)"
      alt="microLED illuminated under microscope">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_board_setup.jpg" style="width:100%" onclick="currentSlide(8)"
      alt="Motherboard with FPGA connected">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_radiation_profile.jpg" style="width:100%" onclick="currentSlide(9)"
      alt="Profile of light intensity above the chip (assuming isotropic light emission and no scattering)">
    </div>
    <div class="column">
      <img class="demo cursor" src="assets/images/Unishank_ASP.jpg" style="width:100%" onclick="currentSlide(10)"
      alt="Polar plots of angular-sensitivity for each type of Angular Sensitive Pixel (ASP)">
    </div>
  </div>
</div>

<hr class="major" />

<link rel="stylesheet" href="assets/css/gallery.css">
<script type="text/javascript" src="assets/js/gallery.js"></script>


