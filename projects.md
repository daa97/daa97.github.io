---
title: Projects
permalink: /projects/
layout: single
sidebar:
  nav: side
---
Below are a few of the larger projects I have worked on over the past several years. I am not able to share samples from my work at Omega Engineering, but I hope to give an idea of my capabilities.

## Centrifugal Nuclear Thermal Rocket
**2022-2023 | *Drexel Senior Design Project in Partnership with NASA***

During this academic year, I am working on a team of four to design, analyze, and prototype a fuel element for NASA's proposed Centrifugal Nuclear Thermal Rocket (CNTR). This fuel element uses a turbine to spin a tube of liquid uranium at over 4000 Kelvin while hydrogen is bubbled inwards from the outer walls. The planned non-nuclear prototype will test the turbine and mechanical design at a reduced temperature.

#### Thermodynamics
I am in charge of analyzing and developing the thermodynamic cycle of the CNTR system. I built a python tool to retrieve, calculate, and index data on hydrogen properties to aid in thermodynamic modeling and turbine design. I used this tool to simulate the expected thermodynamic cycle and determined operating conditions for various components. 

#### Mechanical Design
I have helped lead this project's efforts in structural analysis and component design. I designed a spring-loaded piston to attach the ceramic walls of the fuel element while allowing for differential thermal expansion. This design process included analyzing structural loads and buckling mechanisms, finding off-the-shelf components. I built a simulation of the nonlinear vibration damping this mechanism provides, and used this to iterate the mechanism design. 

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<style> model-viewer#cfe {width: 100%; height: 300px;}</style>
<model-viewer id="cfe"  alt="CFE" src="/assets/cfe/cfe.glb" shadow-intensity="1" orientation="90deg 180deg 0deg" camera-controls touch-action="pan-y" min-camera-orbit="auto auto 5%" camera-orbit="0deg 90deg 50%"></model-viewer>

## Detecting Crack Growth with Acoustic Emissions
**2022 | *MEM T680 Class Project in Partnership with Drexel TAMG***

This project was submitted for a course on machine learning and data analysis. It consists of a python framework to read and organize waveform data from a vibration sensor used during mechanical testing, as well as use machine learning in the form of an convolutional neural network to highlight complex patterns which are relevant to material damage and crack propagation. 

#### Workflow
![flowchart](/assets/crack-growth/flowchart.svg){: width="100%" }

Drexel [Theoretical and Applied Mechanics Group](https://tamg.mem.drexel.edu/) provided waveform data which was recorded across two sensors and four aluminum specimens, which was pre-processed into discrete high-amplitude 'hits'.

![duration](/assets/crack-growth/duration.png){: width="48%" }
![entropy](/assets/crack-growth/entropy.png){: width="48%" }

#### Github
This code for this project and further details can be found on GitHub [here](https://github.com/daa97/AE-Crack-Growth).


## HANI Non-Invasive Temperature Sensor Development
**2020-2022 | *New Product for Omega Engineering***

At Omega Engineering, I worked extensively upon firmware and hardware developments directly before and after the release of a non-invasive clamp-on temperature sensor known an [HANI](https://landing.omega.com/hani/) ("high accuracy, non-invasive"). Some of my work focused on determining the heat transfer of different operating conditions and to improve the HANI's accuracy and robustness. This involved a combination of theoretical modeling and empirical verification. 

I conducted tests of the device's performance to allow expanding to new configurations and operating environments and wrote correspond test reports. This involved managing large datasets, and I developed an Excel framework using macros to automate much of the data aggregation and processing.  I also tested and evaluated the performance of prospective components and worked with vendors to ensure our specifications were met. 


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
Early in the development of the compressor, we made a <$30 prototype to test our concept using mostly 3D printed parts. By driving the compressor with an external hand drill, we found it was able to deliver 14.5 L/min flowrate and reach 70 kPa pressure. These results implied some air leakage but were quite promising given the prototype materials and small form factor.

![wankel-render](/assets/wankel/wankel.gif){: width="37.3%" }
![wankel-prototype-1](/assets/wankel/proto1.jpg){: width="30%" }
![wankel-prototype-2](/assets/wankel/proto2.jpg){: width="30%"}