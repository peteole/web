(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(9),a=(n(0),n(293)),i=(n(295),{id:"secrets-key-rotation",title:"Secrets and Key Rotation"}),c={id:"guides/secrets-key-rotation",isDocsHomePage:!1,title:"Secrets and Key Rotation",description:"There are two types of key rotation:",source:"@site/docs/guides/secrets-key-rotation.mdx",permalink:"/hydra/docs/next/guides/secrets-key-rotation",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/secrets-key-rotation.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594375370,sidebar:"docs",previous:{title:"Distributed Tracing with Jaeger",permalink:"/hydra/docs/next/guides/tracing"},next:{title:"Kubernetes Helm Chart",permalink:"/hydra/docs/next/guides/kubernetes-helm-chart"},latestVersionMainDocPermalink:"/hydra/docs"},s=[{value:"Rotation of JSON Web Token Signing Keys",id:"rotation-of-json-web-token-signing-keys",children:[]},{value:"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys",id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are two types of key rotation:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Rotation of JSON Web Token Signing Keys"),Object(a.b)("li",{parentName:"ul"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys")),Object(a.b)("h3",{id:"rotation-of-json-web-token-signing-keys"},"Rotation of JSON Web Token Signing Keys"),Object(a.b)("p",null,"JSON Web Token Signing Key rotation is simple with ORY Hydra. You can rotate\nOpenID Connect ID Token and OAuth 2.0 Access Tokens, when using the JSON Web\nToken strategy, keys with one simple command."),Object(a.b)("p",null,"ORY Hydra takes the latest key from the key store to sign JSON Web Tokens. All\npublic keys will be shown at\n",Object(a.b)("inlineCode",{parentName:"p"},"http://ory-hydra-public-api/.well-known/jwks.json"),"."),Object(a.b)("h4",{id:"openid-connect-id-token"},"OpenID Connect ID Token"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.openid.id-token -a RS256\n")),Object(a.b)("h4",{id:"oauth-20-access-tokens-json-web-token"},"OAuth 2.0 Access Tokens (JSON Web Token)"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This will only work when using the JWT access token strategy. Otherwise, this\nwill have no effect.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"hydra keys create --endpoint=http://ory-hydra-admin-api/ hydra.jwt.access-token -a RS256\n")),Object(a.b)("h3",{id:"rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys"},"Rotation of HMAC Token Signing and Database and Cookie Encryption Keys"),Object(a.b)("p",null,"Rotating database encryption keys is done by prepending the new encryption key\nto the respective configuration value. Assuming configuration"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"secrets:\n  cookie:\n    - the-old-cookie-encryption-key\n  system:\n    - the-old-system-encryption-key\n")),Object(a.b)("p",null,"one would add the new keys as follows"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"secrets:\n  cookie:\n    - the-new-cookie-encryption-key # the new key must be the first entry\n    - the-old-cookie-encryption-key\n  system:\n    - the-new-system-encryption-key # the new key must be the first entry\n    - the-old-system-encryption-key\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is very important that the new key is the first entry in the list as only\nthe first key is used for encryption while all keys from the list are used for\ndecryption. Please note that existing data will not be automatically\nre-encrypted using the new key. Only new data will be signed and encrypted\nusing the new key. It is therefore imperative that the old key is added to the\nlist, unless you want to also invalidate all data that was signed or encrypted\nusing the old key.")))}u.isMDXComponent=!0},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,b=d["".concat(i,".").concat(p)]||d[p]||y[p]||a;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},294:function(e,t,n){"use strict";var o=n(0),r=n(52);t.a=function(){return Object(o.useContext)(r.a)}},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(76);var o=n(294),r=n(296);function a(e,t){var n=void 0===t?{}:t,a=n.forcePrependBaseUrl,i=void 0!==a&&a,c=n.absolute,s=void 0!==c&&c,l=Object(o.a)().siteConfig,u=(l=void 0===l?{}:l).baseUrl,d=void 0===u?"/":u,y=l.url;if(!e)return e;if(i)return d+e;if(!Object(r.a)(e))return e;var p=d+e.replace(/^\//,"");return s?y+p:p}},296:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return o}))}}]);