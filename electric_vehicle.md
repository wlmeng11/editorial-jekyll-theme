---
layout: page
title: Electric Vehicle
image: assets/images/electric_vehicle/electric_vehicle_banner.jpg
comments: true
---

April 2016<br>
with [Nathan Kau](https://nathankau.com/)<br>

For the 2016 Science Olympiad Competition, we built a small, battery-powered electric vehicle to get to and stop at a target point as quickly and accurately as possible. 

The car utilizes a high-power Brushless DC (BLDC) motor to accelerate rapidly, with feedback from 2 encoders and a PID control algorithm to smoothly decelerate and stop at the target point. We compared the distances measured by the front axle encoder and motor-integrated encoder to determine how much slippage occurred on the rear wheels.

The chassis was attained from an RC car kit, but we replaced the control electronics with a Teensy 3.2 microcontroller running custom code to sense position and velocity based on the encoder measurements, and generate suitable PWM signals to drive the motor’s Electronic Speed Controller (ESC).

Awards:

- 1st place at 2016 Santa Clara Regional Competition
- 1st place at 2016 NorCal State Competition


<hr class="major" />

<div class="container" id="gallery"></div>

<script type="text/javascript" src="assets/js/generategallery.js"></script>
<script>
  var prefix = "electric_vehicle/"
  var filenames = [
    "3_phases.jpg",
    "splicing_sensor_cable.jpg",
    "electric_vehicle.jpg",
    "near_finish_line.jpg"
  ];
  var captions = [
    "Observing the 3-phase signal from the Hall Effect sensors of the motor's built-in magnetic encoder",
    "Splicing the sensor cable to allow both the Teensy and ESC to access the magnetic encoder signals",
    "Front view of the car",
    "The car stopped a few inches away from the target point"
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