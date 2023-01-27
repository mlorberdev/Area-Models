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
    // BEGIN DECOMPOSITION
    let rr = m.toString().split("");
    let cc = n.toString().split("");
    // SETUP ANIMATION
    rr = [rr[0] * 100, rr[1] * 10, rr[2] * 1];
    cc = [cc[0] * 10, cc[1] * 10];
    // FILL ARRAY
    
  }
  init();
})();