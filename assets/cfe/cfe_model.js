const cfeParams = document.querySelector("model-viewer#cfe");
cfeParams.addEventListener("load", (ev) => {
  let cfemat = cfeParams.model.materials;

  const SetUp = async (n, MF,RF,rgb) => {
    cfemat[n].pbrMetallicRoughness.setMetallicFactor(MF);
    cfemat[n].pbrMetallicRoughness.setRoughnessFactor(RF);
    cfemat[n].pbrMetallicRoughness.setBaseColorFactor(rgb);
  };

  SetUp(0,1,.32,[.32,.28,.25]); // steel
  SetUp(1,0.1,.5,[.07,.07,.07]); // PM
  SetUp(2,1,.5,[.35,.45,1]); // case
  SetUp(3,0.9,.5,[1,.15,.1]); // hub
  SetUp(4,0.9,.5,[1,.4,0]); // shaft
  SetUp(5,0.9,.5,[1,1,.2]); // shroud
  SetUp(6,1,.4,[0,.5,.5]); // turbine
  SetUp(7,0.9,.5,[0,.7,.32]); // URN
  SetUp(8,0.8,.68,[.02,.02,.02]); // rubber
  SetUp(14,1,.55,[.08,.08,.07]); // flanges
  SetUp(9,0.9,.5,[.3,0,0]); // PV
  SetUp(10,0.9,.5,[0,.08,.2]); // adaptor
  SetUp(11,0.9,.5,[.48,.05,.4]); // stators
  SetUp(12,0.9,.5,[0,.15,.08]); // end cap
  SetUp(13,0.9,.5,[.12,.12,.05]); // bearing cap
  SetUp(15,1,.2,[.8,.6,.1]); // brass
  SetUp(16,0.9,.5,[.2,0,.2]); // inlet manifold
  SetUp(17,1,.33,[0.5,0.52,0.56]); // base plate
});