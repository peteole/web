(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{406:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),f=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=f(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=f(n),l=r,g=d["".concat(c,".").concat(l)]||d[l]||s[l]||a;return n?o.a.createElement(g,i(i({ref:t},p),{},{components:n})):o.a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),a=(n(0),n(406)),c={id:"config",title:"Debug Configuration"},i={unversionedId:"debug/config",id:"debug/config",isDocsHomePage:!1,title:"Debug Configuration",description:"To debug the configuration, set up tracing. Once set",source:"@site/docs/debug/config.mdx",slug:"/debug/config",permalink:"/hydra/docs/next/debug/config",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/debug/config.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1606912625,sidebar:"docs",previous:{title:"Common CSRF Pitfalls",permalink:"/hydra/docs/next/debug/csrf"},next:{title:"Wrong Token Endpoint Auth Method",permalink:"/hydra/docs/next/debug/token-endpoint-auth-method"}},u=[],p={rightToc:u};function f(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To debug the configuration, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/hydra/docs/next/guides/tracing"}),"set up tracing"),". Once set\nup, all configuration keys will appear in your tracing UI:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Jaeger Tracing UI for ORY Hydra",src:n(994).default})))}f.isMDXComponent=!0},994:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tracing-config-47970660ba8bf88bd3f9f7a82740a9c5.png"}}]);