// function t() {
// s = document.getElementById("header-waves"),
//   g = s.clientHeight, v = s.clientWidth, r = new THREE.PerspectiveCamera(75, v / g, 1, 2e3), r.position.z = 1e3, r.position.y = 750, a = new THREE.Scene, u = new Array;
// for (var e = new THREE.SpriteCanvasMaterial({
// 	color: ('255,255,255', '0.5'),
// 	program: function(e) {
// 	  e.beginPath(), e.arc(0, 0, .3, 0, t, !0), e.fill()
// 	}
//   }), t = 2 * Math.PI, n = 0, o = 0; o < h; o++)
//   for (var p = 0; p < f; p++) d = u[n++] = new THREE.Sprite(e), d.position.x = o * c - h * c / 2, d.position.z = p * c - f * c / 2, a.add(d);
// l = new THREE.CanvasRenderer({
//   alpha: !0
// }), l.setPixelRatio(window.devicePixelRatio), l.setSize(v, g), l.setClearColor('000000', '0'), s.appendChild(l.domElement), window.addEventListener("resize", i, !1)
// }
//
// function i() {
// windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2, r.aspect = window.innerWidth / window.innerHeight, r.updateProjectionMatrix(), l.setSize(window.innerWidth, s.clientHeight)
// }
//
// function n() {
// requestAnimationFrame(n), o()
// }
//
// function o() {
// r.position.y >= 750 && (r.position.y += .02 * (-m - r.position.y)), r.lookAt(a.position);
// for (var e = 0, t = 0; t < h; t++)
//   for (var i = 0; i < f; i++) d = u[e++], d.position.y = 200 * Math.sin(.2 * (t + p)) + 20 * Math.sin(.5 * (i + p)), d.scale.x = d.scale.y = 4 * (Math.sin(.3 * (t + p)) + 1) + 4 * (Math.sin(.5 * (i + p)) + 1);
// l.render(a, r), p += .09
// }
// var s, r, a, l, u, d, c = 100,
// h = 50,
// f = 20,
// p = 0,
// m = 0,
// g = 500,
// v = 500;
// t(), n()
