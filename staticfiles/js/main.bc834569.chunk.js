(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),i=t(9),r=t.n(i),a=(t(15),t(16),t(17),t(0));var j=function(){return Object(a.jsx)("div",{className:"Header",children:Object(a.jsx)("h1",{children:"Header"})})},u=t(5),o=(t(19),t(10)),d=t(3);var l=function(){var e=Object(c.useState)(null),n=Object(u.a)(e,2),t=n[0],s=n[1],i=Object(c.useState)("media/"),r=Object(u.a)(i,2),j=r[0];r[1],Object(c.useEffect)((function(){fetch("/universe").then((function(e){return e.json()})).then((function(e){return s(e)})).catch((function(e){console.log(e)}))}),[]);var l=(t||[]).map((function(e){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(d.a,{children:e.name}),Object(a.jsx)(d.a,{children:e.age}),Object(a.jsx)(d.a,{children:e.description}),Object(a.jsx)(d.a,{children:e.galaxy__name}),Object(a.jsx)(d.a,{children:e.system__name}),Object(a.jsx)("img",{src:j+e.image})]},e.id)}));return Object(a.jsxs)("div",{className:"Planets",children:[Object(a.jsx)("h1",{className:"text-dan",children:"Universe"}),l]})};var b=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)(l,{})]})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),h()}},[[20,1,2]]]);
//# sourceMappingURL=main.bc834569.chunk.js.map