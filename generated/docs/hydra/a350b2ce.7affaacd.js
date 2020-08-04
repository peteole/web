(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(293)),c=(n(295),{id:"oauth2-clients",title:"Creating OAuth 2.0 Clients"}),i={id:"guides/oauth2-clients",isDocsHomePage:!1,title:"Creating OAuth 2.0 Clients",description:"You can manage OAuth 2.0 clients using the cli or the HTTP REST API:",source:"@site/docs/guides/oauth2-clients.mdx",permalink:"/hydra/docs/next/guides/oauth2-clients",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/oauth2-clients.mdx",version:"next",lastUpdatedBy:"aeneasr",lastUpdatedAt:1594375370,sidebar:"docs",previous:{title:"Advanced OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/next/advanced"},next:{title:"Using Common OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/next/guides/common-oauth2-openid-connect-flows"},latestVersionMainDocPermalink:"/hydra/docs"},l=[{value:"Authorize Code Flow with Refresh Token",id:"authorize-code-flow-with-refresh-token",children:[]},{value:"Client Credentials Flow",id:"client-credentials-flow",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can manage ",Object(o.b)("em",{parentName:"p"},"OAuth 2.0 clients")," using the cli or the HTTP REST API:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CLI:")," ",Object(o.b)("inlineCode",{parentName:"li"},"hydra help clients")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"REST:")," Read the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"../reference/api"}),"API Docs"))),Object(o.b)("h2",{id:"authorize-code-flow-with-refresh-token"},"Authorize Code Flow with Refresh Token"),Object(o.b)("p",null,"The following command creates an OAuth 2.0 Client capable of executing the\nAuthorize Code Flow, requesting ID and Refresh Tokens and performing the OAuth\n2.0 Refresh Grant:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id client-id \\\n    --secret client-secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code \\\n    --scope openid,offline \\\n    --callbacks http://my-app.com/callback,http://my-other-app.com/callback\n")),Object(o.b)("p",null,"The OAuth 2.0 Client will be allowed to use values ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-app.com/callback"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"http://my-other-app.com/callback")," as ",Object(o.b)("inlineCode",{parentName:"p"},"redirect_url"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It is expected that the OAuth 2.0 Client sends its credentials using HTTP\nBasic Authorization.")),Object(o.b)("p",null,"If you wish to send credentials in the POST Body, add the following flag to the\ncommand above:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"    --token-endpoint-auth-method client_secret_post \\\n")),Object(o.b)("p",null,"The same can be achieved by setting\n",Object(o.b)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"')," in the request body of\n",Object(o.b)("inlineCode",{parentName:"p"},"POST /clients")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PUT /clients/<id>"),"."),Object(o.b)("h2",{id:"client-credentials-flow"},"Client Credentials Flow"),Object(o.b)("p",null,"A client only capable of performing the Client Credentials Flow can be created\nas follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")))}u.isMDXComponent=!0},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(h,i(i({ref:t},s),{},{components:n})):a.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},294:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},295:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(76);var r=n(294),a=n(296);function o(e,t){var n=void 0===t?{}:t,o=n.forcePrependBaseUrl,c=void 0!==o&&o,i=n.absolute,l=void 0!==i&&i,s=Object(r.a)().siteConfig,u=(s=void 0===s?{}:s).baseUrl,p=void 0===u?"/":u,d=s.url;if(!e)return e;if(c)return p+e;if(!Object(a.a)(e))return e;var b=p+e.replace(/^\//,"");return l?d+b:b}},296:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);