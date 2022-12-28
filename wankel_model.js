const modelViewerParameters = document.querySelector("model-viewer#wankel");
modelViewerParameters.addEventListener("load", (ev) => {
  let mat = modelViewerParameters.model.materials;
  let mo = document.querySelector('#mot')
  let ca = document.querySelector('#cas')
  const SetUp = async (n, MF,RF,rgb) => {
    mat[n].pbrMetallicRoughness.setMetallicFactor(MF);
    mat[n].pbrMetallicRoughness.setRoughnessFactor(RF);
    mat[n].pbrMetallicRoughness.setBaseColorFactor(rgb);
  };
  SetUp(0,0.9,.43,[.45,.43,.43]);     // case/sides
  SetUp(1,0.9,.4,[.45,.38,.38]);      // insides+bearings
  SetUp(2,0,.8,[ 0, 0, 0]);           // gaskets
  SetUp(3,1,.38,[.8,.6,.25]);         // brass fittings
  SetUp(4,1,.45,[.21,.21,.19]);       // mounting plate
  SetUp(5,.15,.4,[.3,.19,.12]);       // motor body
  SetUp(6,1,.4,[.5,.5,.5]);           // motor shaft
  SetUp(7,.8,.68,[.09,.08,.07]);      // blackened, coupler
  SetUp(8,1,.5,[.5,.5,.5]);           // motor screws
  SetUp(9,1,.4,[.58,.58,.53,1]);      // bolts
  SetUp(10,0,.7,[.83,.8,.59,1]);      // nylon
  SetUp(11,1,.4,[.6,.61,.645]);       // mounting plate

  const am = ["BLEND", "OPAQUE"]
  const Opacity = async (n, alpha) => {
    let old = mat[n].pbrMetallicRoughness.baseColorFactor;
    mat[n].pbrMetallicRoughness.setBaseColorFactor([old[0], old[1], old[2], alpha]);
    let mode = am[Math.floor(alpha)];
    mat[n].setAlphaMode(mode);
  };
  // ************* ON BUTTON PRESS *********************************
  ca.addEventListener('input', (event) => {
    let v = event.target.value/10;
    Opacity(0,v);   // case/sides
    Opacity(2,v);   // gaskets
    Opacity(3,v);   // brass fittings
    Opacity(9,v);   // bolts
    Opacity(10,v);   // nylon
  });
  mo.addEventListener('input', (event) => {
    let v = event.target.value/10;
    Opacity(11,v);   // mounting plate
    Opacity(5,v);   // motor
    Opacity(6,v);   // motor shaft
    Opacity(7,v);   // coupler
    Opacity(8,v);   // motor screws
  });
  document.querySelector('#mot').value=3;
  document.querySelector('#cas').value=3;
  let v = 3/10;
  Opacity(0,v);   // case/sides
  Opacity(2,v);   // gaskets
  Opacity(3,v);   // brass fittings
  Opacity(9,v);   // bolts
  Opacity(10,v);   // nylon
  Opacity(11,v);   // mounting plate
  Opacity(5,v);   // motor
  Opacity(6,v);   // motor shaft
  Opacity(7,v);   // coupler
  Opacity(8,v);   // motor screws
});