(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{191:function(e,t,a){"use strict";var n=a(2),r=a(9),l=a(0),o=a.n(l),c=a(185),s=a.n(c),i=a(178),m=a(177),f=a(180),u=a(131),d=a.n(u);function v(e){var t=e.to,a=e.href,l=e.label,c=Object(r.a)(e,["to","href","label"]),s=Object(f.a)(t);return o.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:s},c),l)}var E=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,l=n.links,c=void 0===l?[]:l,i=n.logo,u=void 0===i?{}:i,_=Object(f.a)(u.src);return a?o.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===a.style})},o.a.createElement("div",{className:"container"},c&&c.length>0&&o.a.createElement("div",{className:"row footer__links"},c.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(v,e))}))):null)}))),(u||r)&&o.a.createElement("div",{className:"text--center"},u&&u.src&&o.a.createElement("div",{className:"margin-bottom--sm"},u.href?o.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},o.a.createElement(E,{alt:u.alt,url:_})):o.a.createElement(E,{alt:u.alt,url:_})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))),o.a.createElement("div",{id:"codefund"}),o.a.createElement("script",{src:"https://codefund.io/properties/140/funder.js",async:"async"}),o.a.createElement("script",{dangerouslySetInnerHTML:{__html:"(function () {\n  document.querySelectorAll('.tabs .tabs-nav .nav-item a').forEach(function (t) {\n    t.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      t.closest('.tabs-nav').querySelectorAll('.nav-item a').forEach(function (i) {\n        i.classList.remove('active');\n      });\n\n      t.closest('.tabs').querySelectorAll('.tab-content .tab-pane').forEach(function (i) {\n        i.classList.remove('active');\n      });\n\n      t.classList.add('active');\n      document.getElementById(t.href.split('#')[1]).classList.add('active');\n      return false\n    });\n  });\n})();"}})):null}}}]);