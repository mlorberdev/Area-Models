!(function () {
  const rn = (a, b) => { return Math.floor(Math.random() * (b - a)) + a; }
  const mm = document.getElementById("n1");
  const nn = document.getElementById("n2");
  let m, n, rr, cc, N = 0, arr = [], r = 3, c = 2;
  const sums = document.getElementById("sums");
  function init() {
    if (!sums.classList.contains("hide")) sums.classList.add("hide");
    document.querySelectorAll(".review").forEach(rev => { if (!rev.classList.contains("hide")) rev.classList.add("hide")});
    document.getElementById("step").innerHTML = "The first step is to MULTIPLY the ROW and the COLUMN";
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
    for (let i = 0; i < rr.length; i++) for (let j = 0; j < cc.length; j++)
      document.getElementById(`arr${i}${j}`).name = `${rr[i] * cc[j]}`;
  }
  init();

  // NEW
  document.getElementById("new").addEventListener("click", init);

  // INPUT EVENT
  document.querySelectorAll("input").forEach(input => input.addEventListener("keyup", function (e) {
    if (!e.key.match(/[0-9]/) && e.key !== 'Backspace' && e.key !== 'Tab') e.preventDefault();
    this.value !== this.name ? this.style.color = "white" : this.style.color = "#65e60f";
  }));

  // SOLVE
  document.getElementById("solve").addEventListener("click", function () {
    for (let i = 0; i < rr.length; i++) for (let j = 0; j < cc.length; j++) {
      let cell = document.getElementById(`arr${i}${j}`);
      cell.value = cell.name;
      cell.style.color = "#65e60f";
    }
  });

  // NEXT STEP
  document.getElementById("next").addEventListener("click", function () {
    if (N === 0) {
      document.getElementById("step").innerHTML = "<span style='color:aqua'>The second step is to ADD the PRODUCTS, then you're done 👏</span>";
      sums.classList.remove("hide");
      let ls = 0, rs = 0;
      for (let i = 0; i < 3; i++) {
        ls += parseInt(document.getElementById(`arr${i}0`).name);
        rs += parseInt(document.getElementById(`arr${i}1`).name);
      }
      document.getElementById("arr30").value = ls;
      document.getElementById("arr31").value = rs;
      N++;
    } else {
      document.getElementById("arr40").value = `${m} × ${cc[0]} = ${m * cc[0]}`;
      document.getElementById("arr41").value = `${m} × ${cc[1]} = ${m * cc[1]}`;
      document.querySelectorAll(".review").forEach(rev => rev.classList.remove("hide"));
    }
  });

})();