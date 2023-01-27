!(function () {
  const rn = (a, b) => { return Math.floor(Math.random() * (b - a)) + a; }
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
    document.getElementById("n3").innerHTML = (m * n).toLocaleString();
    // DECOMPOSITION & FILL OUTER
    let rr = m.toString().split("");
    let cc = n.toString().split("");
    rr = [rr[0] * 100, rr[1] * 10, rr[2] * 1];
    cc = [cc[0] * 10, cc[1] * 1];
    // FILL OUTER
    for (let i = 0; i < rr.length; i++) document.getElementById(`r${i}`).innerHTML = rr[i];
    for (let i = 0; i < cc.length; i++) document.getElementById(`c${i}`).innerHTML = cc[i];
  }
  init();

  document.getElementById("new").addEventListener("click", init);
  document.querySelectorAll("input").forEach(input => input.addEventListener("keydown", function (e) {
    if (!e.key.match(/[0-9]/) && e.key !== 'Backspace' && e.key !== 'Enter') e.preventDefault();
  }));
  
})();