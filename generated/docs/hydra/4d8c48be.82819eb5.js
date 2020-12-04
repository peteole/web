(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(406)),a={id:"hydra-token-introspect",title:"hydra token introspect",description:"hydra token introspect Introspect an access or refresh token"},c={unversionedId:"cli/hydra-token-introspect",id:"version-v1.7/cli/hydra-token-introspect",isDocsHomePage:!1,title:"hydra token introspect",description:"hydra token introspect Introspect an access or refresh token",source:"@site/versioned_docs/version-v1.7/cli/hydra-token-introspect.md",slug:"/cli/hydra-token-introspect",permalink:"/hydra/docs/v1.7/cli/hydra-token-introspect",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/cli/hydra-token-introspect.md",version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1598881190,sidebar:"version-v1.7/docs",previous:{title:"hydra token flush",permalink:"/hydra/docs/v1.7/cli/hydra-token-flush"},next:{title:"hydra token revoke",permalink:"/hydra/docs/v1.7/cli/hydra-token-revoke"}},s=[{value:"hydra token introspect",id:"hydra-token-introspect",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hydra-token-introspect"},"hydra token introspect"),Object(i.b)("p",null,"Introspect an access or refresh token"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Introspect an access or refresh token"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra token introspect <token> [flags]\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"      --access-token string    Set an access token to be used in the Authorization header, defaults to environment variable OAUTH2_ACCESS_TOKEN\n      --client-id string       This field is DEPRECATED and has no effect. Use the provided OAuth 2.0 Client ID, defaults to environment variable OAUTH2_CLIENT_ID\n      --client-secret string   This field is DEPRECATED and has no effect. Use the provided OAuth 2.0 Client Secret, defaults to environment variable OAUTH2_CLIENT_SECRET\n      --endpoint string        Set the URL where ORY Hydra is hosted, defaults to environment variable HYDRA_ADMIN_URL\n  -h, --help                   help for introspect\n      --scope strings          Additionally check if scope was granted\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'      --config string          Config file (default is $HOME/.hydra.yaml)\n      --fail-after duration    Stop retrying after the specified duration (default 1m0s)\n      --fake-tls-termination   fake tls termination by adding "X-Forwarded-Proto: https" to http headers\n      --skip-tls-verify        Foolishly accept TLS certificates signed by unkown certificate authorities\n')),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"hydra-token"}),"hydra token")," - Issue and Manage OAuth2 tokens")))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,h=l["".concat(a,".").concat(f)]||l[f]||u[f]||i;return n?o.a.createElement(h,c(c({ref:t},d),{},{components:n})):o.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);