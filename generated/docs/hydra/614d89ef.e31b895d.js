(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(406)),c={id:"js",title:"JavaScript"},i={unversionedId:"sdk/js",id:"version-v1.6/sdk/js",isDocsHomePage:!1,title:"JavaScript",description:"To install the JavaScript SDK, run:",source:"@site/versioned_docs/version-v1.6/sdk/js.md",slug:"/sdk/js",permalink:"/hydra/docs/v1.6/sdk/js",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/sdk/js.md",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Go",permalink:"/hydra/docs/v1.6/sdk/go"},next:{title:"PHP",permalink:"/hydra/docs/v1.6/sdk/php"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"API Usage",id:"api-usage",children:[]},{value:"API Docs",id:"api-docs",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To install the JavaScript SDK, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install --save @oryd/hydra-client\n")),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("h4",{id:"basic-configuration"},"Basic configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { AdminApi } from '@oryd/hydra-client'\n\n// Set this to Hydra's URL\nconst hydraAdmin = new AdminApi('http://localhost:4445')\n")),Object(o.b)("h3",{id:"api-usage"},"API Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"hydraAdmin.listOAuth2Clients(10, 0).then(({ body }) => {\n  body.forEach((client) => {\n    console.log(client)\n  })\n})\n")),Object(o.b)("h3",{id:"api-docs"},"API Docs"),Object(o.b)("p",null,"API docs are available\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/sdk/js/swagger/README.md"}),"here"),".\nPlease note that those docs are generated and may introduce bugs if code\nexamples are used 1:1. Especially the package name is not correct."))}d.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);