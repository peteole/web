(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{194:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),o=t(9),a=(t(0),t(293)),i={id:"cors",title:"Setting up Cross-origin resource sharing (CORS)"},c={id:"version-v1.6/guides/cors",isDocsHomePage:!1,title:"Setting up Cross-origin resource sharing (CORS)",description:"Both ORY Hydra's Admin and Public endpoints support CORS. For detailed",source:"@site/versioned_docs/version-v1.6/guides/cors.mdx",permalink:"/hydra/docs/guides/cors",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/guides/cors.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Scaling ORY Hydra",permalink:"/hydra/docs/guides/scaling-hydra"},next:{title:"Advanced OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/advanced"}},s=[],l={rightToc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Both ORY Hydra's Admin and Public endpoints support CORS. For detailed\ninformation, head over to the exemplary\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/docs/config.yaml"}),"config file"),"."),Object(a.b)("p",null,"For CORS to work properly, we encourage to set the following values:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"serve:\n  admin:\n    cors:\n      enabled: true\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n      allowed_methods:\n        - POST\n        - GET\n        - PUT\n        - PATCH\n        - DELETE\n      allowed_headers:\n        - Authorization\n      exposed_headers:\n        - Content-Type\n  public:\n    cors:\n      enabled: true\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n      allowed_methods:\n        - POST\n        - GET\n        - PUT\n        - PATCH\n        - DELETE\n      allowed_headers:\n        - Authorization\n      exposed_headers:\n        - Content-Type\n")),Object(a.b)("p",null,"Keep in mind that the OAuth 2.0 Authorization Endpoint (",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/auth"),") does not\nexpose CORS by design. This endpoint should never be consumed in a CORS-fashion.\nSome endpoints (",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/token"),", ",Object(a.b)("inlineCode",{parentName:"p"},"/userinfo"),", ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/revoke"),") additionally\ninclude URLs listed in field ",Object(a.b)("inlineCode",{parentName:"p"},"allowed_cors_origins")," of the OAuth 2.0 Client that\nis making the request. For example, OAuth 2.0 Client"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "client_id": "foo",\n  "allowed_cors_origins": ["https://foo-bar.com/"]\n}\n')),Object(a.b)("p",null,"is allowed to make CORS request to ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/token")," from origin\n",Object(a.b)("inlineCode",{parentName:"p"},"https://foo-bar.com/")," even if that origin is not listed in\n",Object(a.b)("inlineCode",{parentName:"p"},"public.cors.allowed_origins"),"."))}p.isMDXComponent=!0},293:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);