(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{467:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(485)),i=n(486),s={id:"csrf",title:"Common CSRF Pitfalls"},c={unversionedId:"debug/csrf",id:"version-v1.6/debug/csrf",isDocsHomePage:!1,title:"Common CSRF Pitfalls",description:"Because ORY Hydra is not just an API, but instead talks to your users' browsers",source:"@site/versioned_docs/version-v1.6/debug/csrf.mdx",slug:"/debug/csrf",permalink:"/hydra/docs/v1.6/debug/csrf",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/debug/csrf.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Common Problems",permalink:"/hydra/docs/v1.6/debug"},next:{title:"Wrong Token Endpoint Auth Method",permalink:"/hydra/docs/v1.6/debug/token-endpoint-auth-method"}},u=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"ORY Hydra Running Over HTTP Without dev-mode Enabled",id:"ory-hydra-running-over-http-without-dev-mode-enabled",children:[]},{value:"Mixing up <code>127.0.0.1</code> and <code>localhost</code>",id:"mixing-up-127001-and-localhost",children:[]},{value:"Reverse Proxy / Load Balancers",id:"reverse-proxy--load-balancers",children:[]},{value:"Running Flows in Separate Browsers or Browser Windows",id:"running-flows-in-separate-browsers-or-browser-windows",children:[]},{value:"Running Multiple OAuth2 Flows Simultaneously",id:"running-multiple-oauth2-flows-simultaneously",children:[]},{value:"Cookie Same-Site Mode",id:"cookie-same-site-mode",children:[]},{value:"Using AJAX to call <code>/oauth2/auth</code>",id:"using-ajax-to-call-oauth2auth",children:[]}]}],l={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Because ORY Hydra is not just an API, but instead talks to your users' browsers\ndirectly, several security measures have been implemented in ORY Kratos. One of\nthem is protection against CSRF:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"CSRF is an attack that tricks the victim into submitting a malicious request.\nIt inherits the identity and privileges of the victim to perform an undesired\nfunction on the victim\u2019s behalf. For most sites, browser requests\nautomatically include any credentials associated with the site, such as the\nuser\u2019s session cookie, IP address, Windows domain credentials, and so forth.\nTherefore, if the user is currently authenticated to the site, the site will\nhave no way to distinguish between the forged request sent by the victim and a\nlegitimate request sent by the victim."),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://owasp.org/www-community/attacks/csrf"}),"Source"))),Object(a.b)("h2",{id:"common-pitfalls"},"Common Pitfalls"),Object(a.b)("p",null,"Sometimes, cookies and CSRF just wont work - all requests end up with a 401\nUnauthorized or 400 Bad Request. Here are some common causes and easy fixes if\nthat happens to you!"),Object(a.b)("p",null,"Before starting to debug cookie and CSRF issues, make sure to check out the\nChrome Developer Tools (or any comparable technology) Cookies tabs in the\nApplication tab"),Object(a.b)("img",{alt:"Google Chrome Developer Tools - Application Tab - Cookies",src:Object(i.a)("img/docs/csrf_app_tab.png")}),Object(a.b)("p",null,"as well as the network tab - look for ",Object(a.b)("inlineCode",{parentName:"p"},"Cookie")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP Headers:"),Object(a.b)("img",{alt:"Google Chrome Developer Tools - Network Tab - Cookies",src:Object(i.a)("img/docs/csrf_network_tab.png")}),Object(a.b)("h3",{id:"ory-hydra-running-over-http-without-dev-mode-enabled"},"ORY Hydra Running Over HTTP Without dev-mode Enabled"),Object(a.b)("p",null,"You are running ORY Hydra via HTTP but are missing the ",Object(a.b)("inlineCode",{parentName:"p"},"--dangerous-force-http")," CLI flag:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ hydra serve all -c path/to/config.yml --dangerous-force-http\n")),Object(a.b)("h3",{id:"mixing-up-127001-and-localhost"},"Mixing up ",Object(a.b)("inlineCode",{parentName:"h3"},"127.0.0.1")," and ",Object(a.b)("inlineCode",{parentName:"h3"},"localhost")),Object(a.b)("p",null,"Use either ",Object(a.b)("inlineCode",{parentName:"p"},"127.0.0.1")," (and in general IPs) or ",Object(a.b)("inlineCode",{parentName:"p"},"localhost")," (and in general hostnames)\nconsistently throughout your flow because cookies from an IP are not available to the\nhostname and vice-versa."),Object(a.b)("h3",{id:"reverse-proxy--load-balancers"},"Reverse Proxy / Load Balancers"),Object(a.b)("p",null,"You are running ORY Hydra behind a Reverse Proxy (e.g. Load Balancer) that\nstrips the Cookie header. If the reverse proxy supports path rewrites that\nmight also cause issues!"),Object(a.b)("h3",{id:"running-flows-in-separate-browsers-or-browser-windows"},"Running Flows in Separate Browsers or Browser Windows"),Object(a.b)("p",null,'You are running the OAuth2 flow in separate browsers, or in a browser with\nincognito mode. The Brave browser is also known for notoriously discarding\ncookies when used in "No-Tracking" mode.'),Object(a.b)("h3",{id:"running-multiple-oauth2-flows-simultaneously"},"Running Multiple OAuth2 Flows Simultaneously"),Object(a.b)("p",null,"You are trying to do two OAuth2 flows at the same time in the same Browser."),Object(a.b)("h3",{id:"cookie-same-site-mode"},"Cookie Same-Site Mode"),Object(a.b)("p",null,"You have changed the Cookie SameSite behavior. If this is the default value\n(you did not change it), this should not be an issue."),Object(a.b)("h3",{id:"using-ajax-to-call-oauth2auth"},"Using AJAX to call ",Object(a.b)("inlineCode",{parentName:"h3"},"/oauth2/auth")),Object(a.b)("p",null,"You ",Object(a.b)("strong",{parentName:"p"},"cannot")," call ",Object(a.b)("inlineCode",{parentName:"p"},"/oauth2/auth")," using an AJAX request. It is not allowed and\nnot possible with OAuth2. This endpoint can only be accessed using a normal\nbrowser request by clicking a link or redirecting the end-user's browser\nto that endpoint."))}d.isMDXComponent=!0},485:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,h=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return n?o.a.createElement(h,s(s({ref:t},u),{},{components:n})):o.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},486:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(20),o=n(487);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},487:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);