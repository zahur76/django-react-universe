(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),s=t(9),r=t.n(s),a=(t(15),t(16),t(17),t(0));var j=function(){return Object(a.jsx)("div",{className:"Header",children:Object(a.jsx)("h1",{children:"Header"})})},o=t(6),u=(t(19),t(10)),d=t(7);var l=function(){var e=Object(c.useState)(null),n=Object(o.a)(e,2),t=n[0],i=n[1];Object(c.useEffect)((function(){fetch("/universe").then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){console.log(e)}))}),[]);var s=(t||[]).map((function(e){return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(d.a,{children:e.fields.name}),Object(a.jsx)(d.a,{children:e.fields.age}),Object(a.jsx)(d.a,{children:e.fields.constellation}),Object(a.jsx)("img",{src:"/media/edge2.jpg"})]},e.fields.id)}));return Object(a.jsxs)("div",{className:"Planets",children:[Object(a.jsx)("h1",{children:"Universe"}),s]})};var f=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)(l,{})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),h()}},[[20,1,2]]]);
//# sourceMappingURL=main.12b4eb67.chunk.js.map