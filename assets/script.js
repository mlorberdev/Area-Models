!(function () {
  const rn = (a, b) => { return Math.floor(Math.random() * (b - a)) + a; }
  const array = document.getElementById("array");
  const mm = document.getElementById("n1");
  const nn = document.getElementById("n2");
  let m, n, A = [], r = 3, c = 2;
  function init() {
    // CHOOSE ONE 3-DIGIT AND ONE 2-DIGIT NUMBER
    m = rn(100, 400);
    n = rn(11, 99);
    // WRITE TO DOM
    mm.innerHTML = m;
    nn.innerHTML = n;
    // DECOMPOSITION
    let rr = m.toString().split("");
    let cc = n.toString().split("");
    rr = [rr[0] * 100, rr[1] * 10, rr[2] * 1];
    cc = [cc[0] * 10, cc[1] * 10];
    // CREATE & FILL ARRAY
    let frag = new DocumentFragment();
    for (let i = 0; i < rr.length; i++) {
      let R = document.createElement("div");
      R.classList.add("flex","row","center");
      for (let j = 0; j < cc.length; j++) {
        let C = document.createElement("div");
        C.classList.add("flex","center","arr");
        let I = document.createElement("input");
        I.type = "tel";
        I.maxLength = 5;
        I.size = 5;
        I.addEventListener("keydown", kick);
        C.appendChild(I);
        R.appendChild(C);
      }
      frag.appendChild(R);
    }
    array.appendChild(frag);
  }
  init();
  function kick(e) {
    if (!e.key.match(/[0-9]/) && e.which !== 8 && e.which !== 9) e.preventDefault();
  }
})();