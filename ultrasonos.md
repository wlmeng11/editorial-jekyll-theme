---
layout: page
title: UltrasonOS
image: assets/images/ultrasonos/Ultrasound_Analog_Frontend.jpg
comments: true
---
February - December 2017<br>
with Yazmin Feliz et al (Columbia University [Creative Machines Lab](https://www.creativemachineslab.com/))<br>

We are developing a low cost, open source device called UltrasonOS with the aim of drastically reducing the barrier of access to life-saving ultrasound imaging technology. I created the initial PCB designs and subsequently managed a subteam to iterate upon the PCB designs while I also took on a large part of the microcontroller programming.

*Designs and code on Github:*
* [Analog Frontend](https://github.com/ColumbiaOpenSourceUltrasound/Analog_Frontend) - A transceiver circuit for 5 MHz ultrasonic imaging using a piezoelectric transducer. It utilizes the [AD8331](http://www.analog.com/media/en/technical-documentation/data-sheets/AD8331_8332_8334.pdf) Variable Gain Amplifier from Analog Devices and [LTC5507](http://cds.linear.com/docs/en/datasheet/5507f.pdf) RF Power Detector from Linear Technology.
* [Nucleo DAQ Shield](https://github.com/ColumbiaOpenSourceUltrasound/Nucleo_DAQ_Shield) - A mixed signal PCB that houses connectors and auxiliary circuitry (buffers, H-bridge, voltage regulators). It allows the STM32 microcontroller to interface with the Analog Frontend, motor, and other sensors.
* [Code for STM32](https://github.com/ColumbiaOpenSourceUltrasound/UltrasonOS_STM32) - Performs high speed data acquisition and UDP data streaming to a client computer. I somehow managed to preserve my sanity as I journeyed through the thousand-page depths of STM32 documentation.

We designed the PCBs in [Kicad](http://kicad-pcb.org/) and utilized a combination of the [mbed](https://os.mbed.com/) and HAL libraries for the STM32 code. We ordered PCBs and stencils from [OSH Park](https://oshpark.com/) and [OSH Stencils](https://www.oshstencils.com/), respectively.

<hr class="major" />


<div class="container" id="gallery"></div>

<script type="text/javascript" src="assets/js/generategallery.js"></script>
<script>
  var prefix = "ultrasonos/"
  var filenames = [
    "Ultrasound_Nucleo_DAQ_Shield.jpg",
    "Ultrasound_piezo.jpg",
    "Ultrasound_3_layer_sandwich.png",
    "Ultrasound_envelope.png",
    "Ultrasound_A_mode.jpg",
    "Ultrasound_data_streaming.jpg"
  ];
  var captions = [
    "Nucleo DAQ Shield, connected to STM32 Nucleo board",
    "Piezoelectric transducer coated in gel, which fills in air gaps between the transducer and the target medium. This is necessary because air has a drastically mismatching acoustic impedance compared to water and flesh.",
    "Visual of how propagation delay corresponds to the distance between the transducer and each density boundary of the target medium",
    "Ultrasound signal (pink) and the envelope signal extracted from it (blue)",
    "Handheld “probe” for A-mode imaging (ie. 1 dimensional boundary data)",
    "Data streaming from Nucleo board to my laptop"
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