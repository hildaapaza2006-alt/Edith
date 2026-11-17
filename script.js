// Año automático en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Modo claro / oscuro (recuerda tu elección)
var raiz = document.documentElement;
var boton = document.getElementById("tema");

function aplicarTema(t) {
  if (t === "oscuro") {
    raiz.setAttribute("data-tema", "oscuro");
    boton.textContent = "Modo claro";
  } else {
    raiz.removeAttribute("data-tema");
    boton.textContent = "Modo oscuro";
  }
}

try {
  aplicarTema(localStorage.getItem("tema"));
} catch (e) {
  aplicarTema("claro");
}

boton.addEventListener("click", function () {
  var nuevo = raiz.getAttribute("data-tema") === "oscuro" ? "claro" : "oscuro";
  aplicarTema(nuevo);
  try {
    localStorage.setItem("tema", nuevo);
  } catch (e) {}
});

// Las secciones aparecen suavemente al hacer scroll
var bloques = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.15 });
  bloques.forEach(function (b) { obs.observe(b); });
} else {
  bloques.forEach(function (b) { b.classList.add("visible"); });
}
