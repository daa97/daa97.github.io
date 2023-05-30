---
title: Projects
permalink: /projects/
layout: single
sidebar:
  nav: side
---

## Centrifugal Nuclear Thermal Rocket
**2022-2023 | *Drexel Senior Design Project in Partnership with NASA MSFC***

Over this academic year, I worked on a team of four to design, analyze, and prototype a fuel element for NASA's proposed Centrifugal Nuclear Thermal Rocket (CNTR). This fuel element uses a turbine to rapidly spin a tube of molten uranium at approximately 3700 Kelvin while hydrogen is bubbled inwards from the ceramic walls. The non-nuclear prototype was used to test the turbine and mechanical performance at a reduced temperature. This prototype is be mostly machined from aluminum, with an additively manufactured nickel-alloy turbine and silicon carbide ceramic inner walls.

#####  Thermodynamics
Early on in this project, I built a thermodynamic fluids model interface in Python which works with various other tools to retrieve and calculate fluid properties. I designed this system to be flexible so that various data sources could be used across different operating conditions and materials. Using this interface, I modeled the power requirements to rotate the system due to turbulent annular flow, bearing losses, and transfer of rotational inertia at the system's inlet. This fluids model also served as the backbone for the design and characterization of the fuel element's turbine. Much of this work can be found on the project's [Github repository](https://github.com/daa97/CFE).

##### Mechanical Design
Component design has been the most significant part of my work on this project due to having to balance many competing design requirements. I helped to develop each component using ASME design standards, and I ran vibrational, structural, and fluid dynamic simulations within Ansys to validate this geometry. I created CAD models and mechanical drawings for a number of custom parts, and I serve as the team lead on GD&T. 

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<style> model-viewer#cfe {width: 100%; height: 400px; background-color: #fff;}</style>
<model-viewer id="cfe"  alt="CFE" src="/assets/cfe/cfe.glb" shadow-intensity="1" orientation="270deg 270deg 0deg" camera-controls touch-action="pan-y" min-camera-orbit="auto auto 5%" camera-orbit="0deg 70deg 50%" poster="/assets/cfe/cfe-model.webp"></model-viewer>
<script src="/assets/cfe/cfe_model.js"></script>

I created and managed an exhaustive BOM to track procurement status and cost of 80+ components for the final prototype fuel element. Once assembled, I designed and conducted testing of this prototype using a high-speed camera, and analyzed the resulting data to determine turbine performance and frictional losses.

<p style="text-align:center">
<img src="/assets/cfe/balance.png" alt="cfe-balance">
<i>Fixture for balancing the rotating assembly</i></p>

<head>
  <style>
  /* {
      box-sizing: border-box;
  } */
  .column {
  float: left;
  }
  .left {
  width: 38.6%;
  }
  .right {
  width: 55.5%;
  }
  .row:after {
  content: "";
  display: table;
  clear: both;
  }
  </style>
</head>
<body>
  <div class="row">
      <div class="column left" style="text-align:center">
          <img src="/assets/cfe/prototype.png" alt="cfe-prototype">
          <i>Full prototype</i>
      </div>
      <div class="column right" style="text-align:center">
          <img src="/assets/cfe/turbine.png" alt="cfe-turbine">
          <i>Turbine rotor and stators</i>
      </div>
  </div>
</body>

##### Published Work
As part of this project, I co-authored a paper which was presented at the 2023 Nuclear and Emerging Technologies for Space (NETS) conference, hosted by the American Nuclear Society. This paper covers a parametric study of the CNTR. For this paper, I was in charge of researching, modeling, and discussing different components of the turbine power requirements as well as determining the operating pressure of the turbine and developing a process to sweep and plot each system parameter.
<iframe src="/assets/cfe/nets-paper.pdf" width="100%" height="560"></iframe>
<b> </b>

Below is a poster I helped write summarizing this project's goals and status as of Winter 2023.

<img src="/assets/cfe/cntr-poster.png" alt="CNTR Poster">

## Detecting Crack Growth with Acoustic Emissions
**2022 | *MEM T680 Class Project in Partnership with Drexel TAMG***

This project was submitted for a course on machine learning and data analysis. It consists of a Python framework to read and organize waveform data from a vibration sensor used during mechanical testing, as well as use machine learning in the form of an convolutional neural network to highlight complex patterns which are relevant to material damage and crack propagation. Code for this project and further details can be found on GitHub [here](https://github.com/daa97/AE-Crack-Growth).

##### Workflow
![flowchart](/assets/crack-growth/flowchart.svg){: width="100%" }

Drexel [Theoretical and Applied Mechanics Group](https://tamg.mem.drexel.edu/) provided waveform data which was recorded across two sensors and four aluminum specimens, which was pre-processed into discrete high-amplitude hits, and these were processed as pictured above. Using an autoencoding convolutional neural network, I compared various existing metrics for crack growth with clustering seen in the images below.

![duration](/assets/crack-growth/duration.png){: width="48%" }
![entropy](/assets/crack-growth/entropy.png){: width="48%" }


## HANI Non-Invasive Temperature Sensor
**2020-2022 | *New Product for Omega Engineering***

At Omega Engineering, I helped to develop firmware and hardware for a new patent pending non-invasive clamp-on temperature sensor known as [HANI](https://landing.omega.com/hani/) ("high accuracy, non-invasive"). Much of my work focused on determining the heat transfer of different operating conditions to improve the HANI's accuracy and robustness. This involved a combination of theoretical modeling and empirical verification.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ilyYz7Ka0kk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

I conducted tests of the HANI's performance to allow expanding to new configurations and operating environments and wrote correspond test reports. This involved managing large datasets, and I developed an Excel framework using macros to automate data aggregation and processing.  I also tested and evaluated the performance of prospective components and worked with vendors to ensure our specifications were met. 

Our patent application providing further details on the conceptual and practical application of this device is publicly available [here](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20220260432).


## Preventing Defects in Metal 3D Printing
**2019 | *Research Project with Drexel TAMG***

Over summer 2019, I was employed by Drexel [Theoretical and Applied Mechanics Group](https://tamg.mem.drexel.edu/) to help develop a workflow for metal additive manufacturing to prevent the formation of hotspots which reduce part quality. This involved determining the impact of various techniques through manufacturing process simulations for a handful of parts, and combining these with mechanical loading simulations. 

##### Poster
Below is a poster summarizing  my work, which I presented at Drexel's STAR Summer Showcase.

![STAR Poster](/assets/star-poster.png)

## Wankel-Engine Air Compressor
**2019 | *Drexel Freshman Design Project***

As a freshman design project, I worked with two other students to design a small air compressor based off of a rotary Wankel engine geometry. I was in charge of the primary mechanical design and CAD model.

##### Design
The compressor was designed to allow most custom components to be made with a CNC router or mill, and to use off-the-shelf components where convenient. The overall assembly measures about 4.3" x 3.5" x 3.5". An electric motor drives the central camshaft, causing the triangular rotor to compress air on one side of the chamber while drawing air into the other side. I created a numerical solver to find the optimal rotor shape for near-zero clearance volume and allow for high pressures to be reach within a single stage. The final CAD model is shown below.

<div class="controls">
  <b>Motor:</b>
  <select id="mot">
    <option value=10>Solid</option>
    <option value=3>Transparent</option>
    <option value=0>Hide</option>
  </select>
  <b>Housing:</b>
  <select id="cas">
    <option value=10>Solid</option>
    <option value=3>Transparent</option>
    <option value=0>Hide</option>
  </select>
</div>
<style> model-viewer#wankel {width: 100%; height: 450px;}</style>
<model-viewer id="wankel" camera-controls touch-action="pan-y" interaction-prompt="none" src="/assets/wankel/wankel.glb" ar alt="A 3D model of a wankel-engine-style compressor" min-camera-orbit="auto auto 5%">
</model-viewer>
<script src="/assets/wankel/wankel_model.js"></script>

##### Prototype & Testing
Early in the development of the compressor, we made a few inexpensive prototypes to test our concept using mostly 3D printed parts. By driving the compressor with an external hand drill, we found it was able to deliver 14.5 L/min flowrate and reach 70 kPa pressure. These results implied some air leakage but were quite promising given the prototype materials and small form factor.

![wankel-render](/assets/wankel/wankel.gif){: width="37.3%" }
![wankel-prototype-1](/assets/wankel/proto1.jpg){: width="30%" }
![wankel-prototype-2](/assets/wankel/proto2.jpg){: width="30%"}