---
title: Projects
permalink: /projects/
layout: single
sidebar:
  nav: side
---
# Forced Helium Dehydrator
<div class="skill-tags">
  <span class="tag">Piping Systems</span>
  <span class="tag">Heat Exchanger Design</span>
  <span class="tag">Control Systems</span>
  <span class="tag">Drawing Development</span>
  <span class="tag">Solidworks</span>
</div>
**2023-Present | *Ongoing Product at Holtec International*** 

At Holtec International, I am the lead engineer for the [Forced Helium Dehydrator (FHD)](https://holtecinternational.com/products-and-services/innovative-technologies/forced-helium-dehydrator/) product line. This equipment uses a closed-loop helium circuit to dry large canisters containing spent nuclear fuel. The system contains modules to heat the helium and blow it through the canister, promoting evaporation through forced convection. The system also contains modules to cool the gas stream and filter out condensed moisture and ice.

In order to qualify the equipment for new use cases, I have conducted transient heat-transfer modeling and an extensive physical testing program. I have also developed a new custom valve design used with the FHD and worked on upgrading the FHD's existing control systems.

# Leak Testing
<div class="skill-tags">
  <span class="tag">Vacuum Systems</span>
  <span class="tag">ASME B&PV Code</span>
  <span class="tag">Drawing Development</span>
  <span class="tag">Procedure Development</span>
</div>
**2023-Present | *Ongoing Project at Holtec International***

At Holtec International, I lead the development of leak testing equipment and processes on the various product lines of [HI-STAR](https://holtecinternational.com/products-and-services/nuclear-fuel-and-waste-management/dry-cask-and-storage-transport/hi-star/) casks used for transport and containment of nuclear waste. My work focuses on the design of seals and tools for low- to medium-vacuum systems to allow testing packages for leaks by using mass spectrometry to detect helium.

# HANI Non-Invasive Temperature Meter
<div class="skill-tags">
  <span class="tag">Heat Transfer Modeling</span>
  <span class="tag">Firmware Design</span>
  <span class="tag">Test Program Design</span>
  <span class="tag">Data Analysis</span>
</div>
**2020-2022 | *New Product for Omega Engineering***

At Omega Engineering, my colleagues and I invented a novel clamp-on temperature meter known as [HANI](https://landing.omega.com/hani/) ("high accuracy, non-invasive"). This device attaches to the outside of a pipe and uses multiple sensor inputs to predict the bulk fluid temperature within the pipe.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ilyYz7Ka0kk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Using both heat transfer modeling and a rigorous testing program, I developed the algorithm which the device uses to compute the pipe's internal temperature. We were granted a U.S. patent for this device ([link](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12306048)).

I conducted tests of the HANI's performance across a variety of metrics and wrote test reports for individual subcomponents. This involved managing large datasets, and I developed an Excel framework using macros to automate data aggregation and processing.

# Centrifugal Nuclear Thermal Rocket
<div class="skill-tags">
  <span class="tag">Thermodynamic Modeling</span>
  <span class="tag">Prototyping</span>
  <span class="tag">CFD</span>
  <span class="tag">Python</span>
  <span class="tag">Fluent</span>
  <span class="tag">Ansys Mechanical</span>
</div>
**2022-2023 | *Senior Capstone Project in Partnership with NASA MSFC***

I worked on a team to design, analyze, and prototype a fuel element for a proposed Centrifugal Nuclear Thermal Rocket (CNTR). Each of the engine's 19 fuel elements consists of a porous silicon carbide tube which is rapidly spun by a small radial turbine. Hydrogen propellant drives the turbine before passing radially inwards through the porous tube and bubbling through a layer of molten uranium which provides heat. The prototype was used to test the turbine's performance and mechanical design at a reduced temperature without the use of any uranium. 

This project was awarded a second place by a panel of judges out of over one hundred teams across the College of Engineering.

<img src="/assets/cfe/cntr-poster.png" alt="CNTR Poster">

#####  Thermodynamics
I created a model of the engine's thermodynamic cycle in Python. Due to the engine's extreme temperature range, this required creating a framework to compile several different data sources for fluid properties. I modeled the frictional losses due to turbulent flow and bearing losses.
 This model also served as the foundation for the design and characterization of the fuel element's turbine. This work was presented at the 2023 NETS conference held by the American Nuclear Society.

<iframe src="/assets/cfe/nets-paper.pdf" width="100%" height="560"></iframe>
<b> </b>

##### Mechanical Design
I created CAD models and mechanical drawings for the prototype assembly, using vibrational, structural, and fluid dynamics simulations within Ansys for validation. 

<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
<style> model-viewer#cfe {width: 100%; height: 400px; background-color: #fff;}</style>
<model-viewer id="cfe"  alt="CFE" src="/assets/cfe/cfe.glb" shadow-intensity="1" orientation="270deg 270deg 0deg" camera-controls touch-action="pan-y" min-camera-orbit="auto auto 5%" camera-orbit="0deg 70deg 50%" poster="/assets/cfe/cfe-model.webp"></model-viewer>
<script src="/assets/cfe/cfe_model.js"></script>

<div class="figure-row">
  <figure>
    <img src="/assets/cfe/prototype.png" alt="Complete assembly of CFE prototype">
    <figcaption><i>Complete assembly of CFE prototype</i></figcaption>
  </figure>
  <figure>
    <img src="/assets/cfe/turbine_spin.gif" alt="Turbine rotating">
    <figcaption><i>Turbine rotating</i></figcaption>
  </figure>
</div>

I then helped assemble and test the full-scale metal prototype of a single fuel element.

# Detecting Cracks with Machine Learning
<div class="skill-tags">
  <span class="tag">Data Analysis</span>
  <span class="tag">Python</span>
  <span class="tag">Neural Networks</span>
</div>
**2022 | *Project for Drexel TAMG***

I created a Python framework to read and organize waveform data from am acoustic sensor used during tensile testing of metal samples and use a convolutional neural network to highlight complex patterns that are relevant to material damage and crack propagation. 

![flowchart](/assets/crack-growth/flowchart.svg){: width="100%" }

Drexel [Theoretical and Applied Mechanics Group](https://tamg.mem.drexel.edu/) provided waveform data which was recorded across two sensors and four aluminum specimens, which was pre-processed into discrete high-amplitude hits, and these were processed as pictured above. Using an autoencoding convolutional neural network, I compared various existing metrics for crack growth with clustering seen in the images below.

![duration](/assets/crack-growth/duration.png){: width="48%" }
![entropy](/assets/crack-growth/entropy.png){: width="48%" }

Code for this project and further details can be found on GitHub [here](https://github.com/daa97/AE-Crack-Growth).

# Preventing Defects in Metal 3D Printing
<div class="skill-tags">
  <span class="tag">FEA</span>
  <span class="tag">ABAQUS</span>
  <span class="tag">Topology Optimization</span>
  <span class="tag">SLM/SLS Printing</span>
</div>
**2019 | *Research Project with Drexel TAMG***

While part of Drexel University's [Theoretical and Applied Mechanics Group](https://tamg.mem.drexel.edu/), I helped develop a workflow for metal additive manufacturing to prevent the formation of hotspots which reduce part quality. This involved using manufacturing process simulations along with FEA stress analyses to evaluate and iteratively improve performance.

![STAR Poster](/assets/star-poster.png)

# Wankel-Engine Air Compressor
<div class="skill-tags">
  <span class="tag">Fusion 360</span>
  <span class="tag">Python</span>
  <span class="tag">Prototyping</span>
  <span class="tag">Manual Machining</span>
</div>
**2019 | *Freshman Design Project***

As a freshman design project at Drexel University, I worked with two other students to design a small air compressor based off of a rotary Wankel engine geometry. I was in charge of the primary mechanical design and CAD model.

##### Mechanical Design
An electric motor drives the central camshaft, causing the triangular rotor to compress air on one side of the chamber while drawing air into the other side. I created a numerical solver to find the optimal rotor shape to achieve extremely high compression ratios. The final CAD model is shown below.

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
A small prototype was created out of mostly 3D-printed parts. This was driven using an external motor and successfully delivered a high airflow rate despite its small size. 


<div class="figure-row">
  <figure>
    <img src="/assets/wankel/wankel.gif" alt="Animation of compressor operation">
    <figcaption><i>Animation of compressor operation</i></figcaption>
  </figure>
  <figure>
    <img src="/assets/wankel/proto2.jpg" alt="3D-printed prototype">
    <figcaption><i>3D-printed prototype</i></figcaption>
  </figure>
</div>