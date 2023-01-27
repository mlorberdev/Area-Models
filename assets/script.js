!(function () {
  const rn = (a, b) => { return Math.floor(Math.random() * (b - a)) + a; }
  const steps = document.getElementById("steps");
  const mm = document.getElementById("n1");
  const nn = document.getElementById("n2");
  let m, n, rr, cc, N, arr = [], r = 3, c = 2;
  function init() {
    N = 0;
    if (!steps.classList.contains("hide")) steps.classList.toggle("hide");
    document.querySelectorAll("input").forEach(input => { input.maxLength = 4; input.size = 4; });
    m = rn(100, 400);
    n = rn(11, 99);
    mm.innerHTML = m;
    nn.innerHTML = n;
    document.getElementById("n3").innerHTML = (m * n).toLocaleString();
    rr = m.toString().split("");
    cc = n.toString().split("");
    rr = [rr[0] * 100, rr[1] * 10, rr[2] * 1];
    cc = [cc[0] * 10, cc[1] * 1];
    document.querySelectorAll("input").forEach(input => input.value = "");
    for (let i = 0; i < rr.length; i++) document.getElementById(`r${i}`).innerHTML = rr[i];
    for (let i = 0; i < cc.length; i++) document.getElementById(`c${i}`).innerHTML = cc[i];
  }
  init();

  document.getElementById("new").addEventListener("click", init);
  document.querySelectorAll("input").forEach(input => input.addEventListener("keydown", function (e) {
    if (!e.key.match(/[0-9]/) && e.key !== 'Backspace' && e.key !== 'Tab') e.preventDefault();
  }));
  document.getElementById("solve").addEventListener("click", function () {
    document.querySelectorAll("input").forEach(input => { input.maxLength = 30; input.size = 14});
    for (let i = 0; i < rr.length; i++) for (let j = 0; j < cc.length; j++)
      document.getElementById(`arr${i}${j}`).value = `${rr[i]} × ${cc[j]} = ${rr[i] * cc[j]}`;
    steps.classList.toggle("hide");
  });
  document.getElementById("next").addEventListener("click", function () {
    switch (N) {
      case 0: break;
      case 1: break;
      case 2: break;
    }
  });

})();