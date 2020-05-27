(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{309:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(9),r=(n(0),n(323)),i=n(325),s={id:"csrf",title:"Common Cookie and CSRF Pitfalls"},c={id:"version-v0.3/debug/csrf",title:"Common Cookie and CSRF Pitfalls",description:"Because ORY Kratos is not just an API, but instead talks to your users' browsers",source:"@site/versioned_docs/version-v0.3/debug/csrf.md",permalink:"/kratos/docs/debug/csrf",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.3/debug/csrf.md",version:"v0.3",lastUpdatedBy:"aeneasr",lastUpdatedAt:1589548840,sidebar:"version-v0.3/docs",previous:{title:"REST API",permalink:"/kratos/docs/reference/api"},next:{title:"SDKs",permalink:"/kratos/docs/sdk"}},l=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"ORY Kratos running over HTTP without dev-mode enabled",id:"ory-kratos-running-over-http-without-dev-mode-enabled",children:[]},{value:"Running on separate (sub-)domains",id:"running-on-separate-sub-domains",children:[]},{value:"Mixing up 127.0.0.1 and localhost",id:"mixing-up-127001-and-localhost",children:[]},{value:"Trying to access ORY Kratos Cookies from client-side JavaScript",id:"trying-to-access-ory-kratos-cookies-from-client-side-javascript",children:[]},{value:"Accessing ORY Kratos APIs from client-side JavaScript / AJAX",id:"accessing-ory-kratos-apis-from-client-side-javascript--ajax",children:[]},{value:"Accessing ORY Kratos APIs from a server-side application",id:"accessing-ory-kratos-apis-from-a-server-side-application",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Because ORY Kratos is not just an API, but instead talks to your users' browsers\ndirectly, several security measures have been implemented in ORY Kratos. One of\nthem is protection against CSRF:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"CSRF is an attack that tricks the victim into submitting a malicious request.\nIt inherits the identity and privileges of the victim to perform an undesired\nfunction on the victim\u2019s behalf. For most sites, browser requests\nautomatically include any credentials associated with the site, such as the\nuser\u2019s session cookie, IP address, Windows domain credentials, and so forth.\nTherefore, if the user is currently authenticated to the site, the site will\nhave no way to distinguish between the forged request sent by the victim and a\nlegitimate request sent by the victim."),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://owasp.org/www-community/attacks/csrf"}),"Source"))),Object(r.b)("p",null,"To protect against CSRF, several endpoints are protected by Anti-CSRF measures.\nTypically, endpoints accepting ",Object(r.b)("inlineCode",{parentName:"p"},"POST"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DELTE"),", ",Object(r.b)("inlineCode",{parentName:"p"},"PUT")," actions have Anti-CSRF\nmeasures. When rendering a form for example, a\n",Object(r.b)("inlineCode",{parentName:"p"},'<input type="hidden" name="csrf_token" value="...">')," HTLM Input Element is\nadded. ORY Kratos compares that value to the value set in the Anti-CSRF Cookie.\nIf the values match, the request is allowed."),Object(r.b)("p",null,"ORY Kratos uses HTTP Cookies to store login sessions when accessed via a\nbrowser."),Object(r.b)("h2",{id:"common-pitfalls"},"Common Pitfalls"),Object(r.b)("p",null,"Sometimes, cookies and CSRF just wont work - all requests end up with a 401\nUnauthorized or 400 Bad Request. Here are some common causes and easy fixes if\nthat happens to you!"),Object(r.b)("p",null,"Before starting to debug cookie and CSRF issues, make sure to check out the\nChrome Developer Tools (or any comparable technology) Cookies tabs in the\nApplication tab"),Object(r.b)("img",{alt:"Google Chrome Developer Tools - Application Tab - Cookies",src:Object(i.a)("img/docs/csrf_app_tab.png")}),Object(r.b)("p",null,"as well as the network tab - look for ",Object(r.b)("inlineCode",{parentName:"p"},"Cookie")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Set-Cookie")," HTTP Headers:"),Object(r.b)("img",{alt:"Google Chrome Developer Tools - Network Tab - Cookies",src:Object(i.a)("img/docs/csrf_network_tab.png")}),Object(r.b)("h3",{id:"ory-kratos-running-over-http-without-dev-mode-enabled"},"ORY Kratos running over HTTP without dev-mode enabled"),Object(r.b)("p",null,"ORY Kratos' cookies have the ",Object(r.b)("inlineCode",{parentName:"p"},"Secure")," flag enabled by default. This means that\nthe browser will not send the cookie unless the URL is a HTTPS URL. If you want\nORY Kratos to work with HTTP (e.g. on localhost) you can add the ",Object(r.b)("inlineCode",{parentName:"p"},"--dev")," flag:\n",Object(r.b)("inlineCode",{parentName:"p"},"kratos serve --dev"),"."),Object(r.b)("p",null,"Do not do this in production!"),Object(r.b)("h3",{id:"running-on-separate-sub-domains"},"Running on separate (sub-)domains"),Object(r.b)("p",null,"Cookies work best on the same domain. While it is possible to get cookies\nrunning on subdomains it is not possible to do that across Top Level Domains\n(TLDs)."),Object(r.b)("p",null,"Make sure that your application (e.g. the SecureApp from the quickstart) and ORY\nKrato's Public API are available on the same domain - preferably without\nsubdomains. Hosting both systems and routing paths with a Reverse Proxy such as\nNginx or Envoy or AWS API Gateway is the best solution. For example, routing\n",Object(r.b)("inlineCode",{parentName:"p"},"https://my-website/kratos/...")," to ORY Kratos and ",Object(r.b)("inlineCode",{parentName:"p"},"https://my-website/dashboard"),"\nto the SecureApp's Dashboard. Alternatively you can use piping in your app as we\ndo in the Quickstart guide."),Object(r.b)("p",null,"We do not recommend running them on separate subdomains, e.g.\n",Object(r.b)("inlineCode",{parentName:"p"},"https://kratos.my-website/")," and ",Object(r.b)("inlineCode",{parentName:"p"},"https://secureapp.my-website/"),")."),Object(r.b)("p",null,"Running the apps on different TLDs will not work at all, e.g. e.g.\n",Object(r.b)("inlineCode",{parentName:"p"},"https://kratos-my-website/")," and ",Object(r.b)("inlineCode",{parentName:"p"},"https://secureapp-my-website/"),"."),Object(r.b)("p",null,"Running the services on different ports however is ok, if the domain stays the\nsame."),Object(r.b)("h3",{id:"mixing-up-127001-and-localhost"},"Mixing up 127.0.0.1 and localhost"),Object(r.b)("p",null,"As already explained, make sure that the TLD stays the same. This is especially\ntrue for ",Object(r.b)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"localhost")," which are both separate TLDs. Make sure\nthat you use ",Object(r.b)("inlineCode",{parentName:"p"},"127.0.0.1")," or ",Object(r.b)("inlineCode",{parentName:"p"},"localhost")," consistently across your configuration!"),Object(r.b)("h3",{id:"trying-to-access-ory-kratos-cookies-from-client-side-javascript"},"Trying to access ORY Kratos Cookies from client-side JavaScript"),Object(r.b)("p",null,"The cookies ORY Kratos sets cannot be accessed directly from Client-Side\nJavaScript because the ",Object(r.b)("inlineCode",{parentName:"p"},"HttpOnly")," flag is set. This flag cannot be modified!"),Object(r.b)("h3",{id:"accessing-ory-kratos-apis-from-client-side-javascript--ajax"},"Accessing ORY Kratos APIs from client-side JavaScript / AJAX"),Object(r.b)("p",null,"When implementing a Single Page App (SPA) using AngularJS or ReactJS you\nprobably want to access ORY Krato's Public APIs."),Object(r.b)("p",null,"To prevent several attack vectors, ORY Krato's Public API is protected - even\nfor some GET requests - with Anti-CSRF measures."),Object(r.b)("p",null,"Because AJAX does not send cookies per default, you need to configure your AJAX\nrequest to include cookies. Using the Browser's ",Object(r.b)("inlineCode",{parentName:"p"},"fetch")," function, you need to\nset\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters"}),Object(r.b)("inlineCode",{parentName:"a"},"credentials: 'include'")),"\nfor example."),Object(r.b)("h3",{id:"accessing-ory-kratos-apis-from-a-server-side-application"},"Accessing ORY Kratos APIs from a server-side application"),Object(r.b)("p",null,"When implementing a server-side application (e.g. in PHP, Java, Go, NodeJS, ...)\nmake sure to only call ORY Kratos' APIs through the Admin Port (default ",Object(r.b)("inlineCode",{parentName:"p"},"4434"),"),\n",Object(r.b)("strong",{parentName:"p"},"not")," the Public Port (default ",Object(r.b)("inlineCode",{parentName:"p"},"4433"),") as the Public Port requires CSRF\nCookies and the Admin Port doesn't! Since your server-side application does not\nuse a browser to interact with Kratos, CSRF Cookies will not be available which\ncauses API calls to fail."))}u.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";var o=n(0),a=n(52);t.a=function(){return Object(o.useContext)(a.a)}},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(326);var o=n(324);function a(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},326:function(e,t,n){"use strict";var o=n(12),a=n(25),r=n(327),i="".startsWith;o(o.P+o.F*n(328)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return i?i.call(t,o,n):t.slice(n,n+o.length)===o}})},327:function(e,t,n){var o=n(75),a=n(26);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},328:function(e,t,n){var o=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);