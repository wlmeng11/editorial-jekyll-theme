---
layout: page
title: Opamp
image: assets/images/opamp/opamp.png
comments: true
---
Dec 2018<br>
with Luis Collado<br>

For my Analog Electronic Circuits class taught by Prof. Shahriar Shahramian (who is the creator of the amazing Youtube channel [The Signal Path](https://www.youtube.com/channel/UCKxRARSpahF1Mt-2vbPug-g)!), we designed and simulated the schematic of a simple 2-stage opamp in Cadence Virtuoso.

The required specs were 30 MHz of Gain Bandwidth Product (GBW), +80 dB of open loop gain, and ±1.2 V of output voltage swing. In order to achieve both high open loop gain and a large output swing, we used an NMOS differential pair with a cascode current mirror active load to achieve high gain in the first stage, and a PMOS source follower to achieve high swing in the second stage. 

Please see our [report](assets/pdf/E4314_Transmitter_Report.pdf) for more details.