(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),l=r,f=h["".concat(c,".").concat(l)]||h[l]||d[l]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(121)),c={id:"oauth2-token-introspection-hydra",title:"Connect to ORY Hydra OAuth2 Token Introspection"},i={unversionedId:"oauth2-token-introspection-hydra",id:"oauth2-token-introspection-hydra",isDocsHomePage:!1,title:"Connect to ORY Hydra OAuth2 Token Introspection",description:"This document is a work in progress.",source:"@site/docs/scope-strategies-hydra.mdx",slug:"/oauth2-token-introspection-hydra",permalink:"/oathkeeper/docs/next/oauth2-token-introspection-hydra",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/scope-strategies-hydra.mdx",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1606314976,sidebar:"docs",previous:{title:"Configure and Deploy",permalink:"/oathkeeper/docs/next/configure-deploy"},next:{title:"Configuration",permalink:"/oathkeeper/docs/next/reference/configuration"}},s=[{value:"Synchronize Access Token / OAuth2 Scope Strategy",id:"synchronize-access-token--oauth2-scope-strategy",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This document is a work in progress."),Object(a.b)("h2",{id:"synchronize-access-token--oauth2-scope-strategy"},"Synchronize Access Token / OAuth2 Scope Strategy"),Object(a.b)("p",null,"When using ORY Oathkeeper together with ORY Hydra the scope strategy needs to be\nkept in sync."),Object(a.b)("p",null,"ORY Oathkeeper sends the scope as part of the introspection request.\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.oauth.com/oauth2-servers/token-introspection-endpoint/"}),"(More about token introspection)")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/hydra/docs/guides/oauth2-token-introspection/"}),"Hydra"),"\nprocesses this scope parameter (which is actually not defined in the OAuth2\nIntrospection RFC) according to the scope strategy defined in Hydra."),Object(a.b)("p",null,"The scope strategy defined in ORY Oathkeeper serves as a fallback for when\nOAuth2 servers do not implement this feature."),Object(a.b)("p",null,"Therefore, these two settings must be kept in sync."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/hydra/docs/reference/api#parameters-27"}),"Here")," you can find\nthe Hydra setting and\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/oathkeeper/docs/v0.37/pipeline/authn/#configuration-5"}),"here"),"\nthe respective one for Oathkeeper."),Object(a.b)("p",null,"The same problem would arise if you configure your client to be allowed to\nrequest scope foo and your OAuth2 request requests foo.bar."))}u.isMDXComponent=!0}}]);