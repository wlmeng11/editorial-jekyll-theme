---
layout: page
title: Deep Brain Fluorescence Imager
image: assets/images/unishank/Unishank_layout.png
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

*Publications:*

* J. Choi, A. Taal, E. Pollmann, **W. Meng**, S. Moazeni, L. Moreaux, M. Roukes, K. Shepard, "[Fully Integrated Time-Gated 3D Fluorescence Imager for Deep Neural Imaging](assets/pdf/Choi et al, Fully Integrated Time-Gated 3D Fluorescence Imager for Deep Neural Imaging, BioCAS, 2019.pdf)," IEEE Biomedical Circuits and Systems (BioCAS), October 18, 2019.

*Awards:*

* *2nd best paper* at BioCAS conference
* Invited paper (in preparation) for Special Issue of IEEE Transactions on Biomedical Circuits and Systems (TBioCAS) 2020.

<hr class="major" />

<div class="container" id="gallery"></div>

<script type="text/javascript" src="assets/js/generategallery.js"></script>
<script>
  var prefix = "unishank/"
  var filenames = [
    "Unishank_chip.jpg",
    "Unishank_fineplacer.jpg",
    "Unishank_dummy_wafer.JPG",
    "Unishank_probing.JPG",
    "Unishank_probe_station.JPG",
    "Unishank_microLED.jpg",
    "Unishank_blue.jpg",
    "Unishank_board_setup.jpg",
    "Unishank_radiation_profile.jpg",
    "Unishank_ASP.jpg",
    "Unishank_award.jpg"
  ];
  var captions = [
    "<strike> The world's smallest stringed instrument</strike> Test chip (not diced) wirebonded to daughterboard",
    "Aligning microLED with dummy wafer for flip-chip bonding on the Fineplacer lambda",
    "microLED with dummy wafer attached to chip",
    "Probing microLED on the probe station",
    "microLED illuminated by probe station",
    "Flip-chip bonded microLED under microscope",
    "microLED illuminated under microscope",
    "Motherboard with FPGA connected",
    "Profile of light intensity above the chip (assuming isotropic light emission and no scattering)",
    "Polar plots of angular-sensitivity for each type of Angular Sensitive Pixel (ASP)",
    "Award at BioCAS conference"
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