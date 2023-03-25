---
title: Projects
permalink: /projects/
layout: single
sidebar:
  nav: side
---

## Centrifugal Nuclear Thermal Rocket
**2022-2023 | *Drexel Senior Design Project in Partnership with NASA MSFC***

Over this academic year, I am working on a team of four to design, analyze, and prototype a fuel element for NASA's proposed Centrifugal Nuclear Thermal Rocket (CNTR). This fuel element uses a turbine to rapidly spin a tube of molten uranium at over 4000 Kelvin while hydrogen is bubbled inwards from the ceramic walls. The planned non-nuclear prototype will be used to test the turbine and mechanical performance at a reduced temperature. This prototype will be mostly machined from aluminum, with an additively manufactured nickel-alloy turbine and SiC ceramic inner walls.

####  Thermodynamics
For this project, I built a thermodynamic fluids model interface in Python which works with various other tools to retrieve and calculate fluid properties. I designed this system to be flexible so that various data sources could be used across different operating conditions and materials. Using this interface, I modeled the power requirements to rotate the system due to turbulent annular flow, bearing losses, and transfer of rotational inertia at the system's inlet. This fluids model also served as the backbone for the design and characterization of the fuel element's turbine. Much of this work can be found on the project's [Github repository.](https://github.com/daa97/CFE)

#### Mechanical Design
Component design has been the most significant part of my work on this project due to having to balance many competing design requirements. I helped to develop each component using ASME design standards, and I ran vibrational, structural, and fluid dynamic simulations within Ansys to validate this geometry. I worked extensively on the CAD models and drawings for a number of custom parts, and I serve as the team lead on tolerancing and GD&T. I also created and manage an exhaustive BOM to track all of the system components and costs.

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<style> model-viewer#cfe {width: 100%; height: 400px;}</style>
<model-viewer id="cfe"  alt="CFE" src="/assets/cfe/cfe.glb" shadow-intensity="1" orientation="90deg 0deg 0deg" camera-controls touch-action="pan-y" min-camera-orbit="auto auto 5%" camera-orbit="0deg 90deg 50%"></model-viewer>
<script src="/cfe_model.js"></script>

#### Published Work
As part of this project, I co-authored a paper which will be presented at the 2023 Nuclear and Emerging Technologies for Space (NETS) conference, hosted by the American Nuclear Society. This paper covers a parametric study of the CNTR . For this paper, I was in charge of researching, modeling, and discussing different components of the turbine power requirements as well as determining the operating pressure of the turbine and developing a process to sweep and plot each system parameter.
<iframe src="/assets/cfe/nets-paper.pdf" width="100%" height="560"></iframe>
<b> </b>

Below is a poster I helped write summarizing this project's goals and status as of Winter 2023.

![CNTR Poster](/assets/cfe/cntr-poster.png)

## Detecting Crack Growth with Acoustic Emissions
**2022 | *MEM T680 Class Project in Partnership with Drexel TAMG***

This project was submitted for a course on machine learning and data analysis. It consists of a pPython framework to read and organize waveform data from a vibration sensor used during mechanical testing, as well as use machine learning in the form of an convolutional neural network to highlight complex patterns which are relevant to material damage and crack propagation. Code for this project and further details can be found on GitHub [here](https://github.com/daa97/AE-Crack-Growth).

#### Workflow
![flowchart](/assets/crack-growth/flowchart.svg){: width="100%" }

Drexel [Theoretical and Applied Mechanics Group](https://tamg.mem.drexel.edu/) provided waveform data which was recorded across two sensors and four aluminum specimens, which was pre-processed into discrete high-amplitude hits, and these were processed as pictured above. Using an autoencoding convolutional neural network, I compared various existing metrics for crack growth with clustering seen in the images below.

![duration](/assets/crack-growth/duration.png){: width="48%" }
![entropy](/assets/crack-growth/entropy.png){: width="48%" }


## HANI Non-Invasive Temperature Sensor
**2020-2022 | *New Product for Omega Engineering***

At Omega Engineering, I worked extensively upon firmware and hardware developments directly before and after the release of a non-invasive clamp-on temperature sensor known an [HANI](https://landing.omega.com/hani/) ("high accuracy, non-invasive"). Some of my work focused on determining the heat transfer of different operating conditions and to improve the HANI's accuracy and robustness. This involved a combination of theoretical modeling and empirical verification.

I conducted tests of the HANI's performance to allow expanding to new configurations and operating environments and wrote correspond test reports. This involved managing large datasets, and I developed an Excel framework using macros to automate data aggregation and processing.  I also tested and evaluated the performance of prospective components and worked with vendors to ensure our specifications were met. 

Our patent application providing further details on the conceptual and practical application of this device is available [here.](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20220260432)

## Preventing Defects in Metal 3D Printing
**2019 | *Research Project with Drexel TAMG***

Over summer 2019, I was employed by Drexel [Theoretical and Applied Mechanics Group](https://tamg.mem.drexel.edu/) to help develop a workflow for metal additive manufacturing to prevent the formation of hotspots which reduce part quality. This involved determining the impact of various techniques through manufacturing process simulations for a handful of parts, and combining these with mechanical loading simulations. 

#### Poster
Below is a poster summarizing  my work, which I presented at Drexel's STAR Summer Showcase.

![STAR Poster](/assets/star-poster.png)

## Wankel-Engine Air Compressor
**2019 | *Drexel Freshman Design Project***

As a freshman design project, I and two other students designed a small air compressor based off of a rotary Wankel engine geometry. I was in charge of the primary mechanical design and CAD model.

#### Design
The compressor was designed to allow most custom components to be made with a CNC router or mill, and to use off-the-shelf components where convenient. The overall assembly measures about 4.3" x 3.5" x 3.5". An electric motor drives the central camshaft, causing the triagular rotor to compress air on one side of the chamber while drawing air into the other side. I created a numerical solver to find the optimal rotor shape for near-zero clearance volume and allow for high pressures to be reach within a single stage. The final CAD model is shown below.

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
<script src="/wankel_model.js"></script>

#### Prototype & Testing
Early in the development of the compressor, we made a few inexpensive prototypes to test our concept using mostly 3D printed parts. By driving the compressor with an external hand drill, we found it was able to deliver 14.5 L/min flowrate and reach 70 kPa pressure. These results implied some air leakage but were quite promising given the prototype materials and small form factor.

![wankel-render](/assets/wankel/wankel.gif){: width="37.3%" }
![wankel-prototype-1](/assets/wankel/proto1.jpg){: width="30%" }
![wankel-prototype-2](/assets/wankel/proto2.jpg){: width="30%"}