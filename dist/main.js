!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.getElementById("home"),t=document.createElement("h3");t.innerHTML="Chef Rob Hanzer perfectly cooks chickens in a giant rotisserie oven, but the birds are equally delicious roasted on a rack in a home oven.";const n=document.createElement("p");n.innerHTML="Located in the Gramercy Park Hotel, Maialino captures the warmth and comfort of a Roman trattoria, with a menu that reflects the rich cultures of both Rome and New York. <br /> Executive Chef Matt Spivey draws inspiration from the Roman cooking tradition to create soulful food that celebrates the restaurant’s ongoing relationship with its local family of farmers and suppliers.";const o=document.createElement("img");o.setAttribute("src","./roast-chicken.jpg"),e.appendChild(o),e.appendChild(t),e.appendChild(n)})();(()=>{const e=document.getElementById("menu"),t=document.createElement("ul");["Zuppa di Zucca","Salumi Misti","Proscuitto e Mozzarella","Radicchio","Polpetti"].forEach(e=>{const n=document.createElement("li");n.innerHTML=e,t.appendChild(n)});const n=document.createElement("h2");n.innerHTML="Pasta";const o=document.createElement("ul");["Trota","Brodetto","Chicken Milanese","Tonnarelli Cacio e Pepe","Bucatini all'Amatriciana","Fettuccine alla Bolognese","Tagliolini"].forEach(e=>{const t=document.createElement("li");t.innerHTML=e,o.appendChild(t)});const r=document.createElement("h2");r.innerHTML="Main Meals",e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(o)})();console.log("Hello")}]);