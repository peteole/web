(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(485)),c={id:"oauth2-clients",title:"Creating OAuth 2.0 Clients"},i={unversionedId:"guides/oauth2-clients",id:"version-v1.9/guides/oauth2-clients",isDocsHomePage:!1,title:"Creating OAuth 2.0 Clients",description:"You can manage OAuth 2.0 clients using the cli or the HTTP REST API:",source:"@site/versioned_docs/version-v1.9/guides/oauth2-clients.mdx",slug:"/guides/oauth2-clients",permalink:"/hydra/docs/guides/oauth2-clients",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/guides/oauth2-clients.mdx",version:"v1.9",lastUpdatedBy:"aeneasr",lastUpdatedAt:1606919685,sidebar:"version-v1.9/docs",previous:{title:"Advanced OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/advanced"},next:{title:"Using Common OAuth2 and OpenID Connect Flows",permalink:"/hydra/docs/guides/common-oauth2-openid-connect-flows"}},l=[{value:"Authorize Code Flow with Refresh Token",id:"authorize-code-flow-with-refresh-token",children:[]},{value:"Client Credentials Flow",id:"client-credentials-flow",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can manage ",Object(a.b)("em",{parentName:"p"},"OAuth 2.0 clients")," using the cli or the HTTP REST API:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CLI:")," ",Object(a.b)("inlineCode",{parentName:"li"},"hydra help clients")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"REST:")," Read the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../reference/api"}),"API Docs"))),Object(a.b)("h2",{id:"authorize-code-flow-with-refresh-token"},"Authorize Code Flow with Refresh Token"),Object(a.b)("p",null,"The following command creates an OAuth 2.0 Client capable of executing the\nAuthorize Code Flow, requesting ID and Refresh Tokens and performing the OAuth\n2.0 Refresh Grant:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id client-id \\\n    --secret client-secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code \\\n    --scope openid,offline \\\n    --callbacks http://my-app.com/callback,http://my-other-app.com/callback\n")),Object(a.b)("p",null,"The OAuth 2.0 Client will be allowed to use values ",Object(a.b)("inlineCode",{parentName:"p"},"http://my-app.com/callback"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"http://my-other-app.com/callback")," as ",Object(a.b)("inlineCode",{parentName:"p"},"redirect_url"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It is expected that the OAuth 2.0 Client sends its credentials using HTTP\nBasic Authorization.")),Object(a.b)("p",null,"If you wish to send credentials in the POST Body, add the following flag to the\ncommand above:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"    --token-endpoint-auth-method client_secret_post \\\n")),Object(a.b)("p",null,"The same can be achieved by setting\n",Object(a.b)("inlineCode",{parentName:"p"},'"token_endpoint_auth_method": "client_secret_post"')," in the request body of\n",Object(a.b)("inlineCode",{parentName:"p"},"POST /clients")," and ",Object(a.b)("inlineCode",{parentName:"p"},"PUT /clients/<id>"),"."),Object(a.b)("h2",{id:"client-credentials-flow"},"Client Credentials Flow"),Object(a.b)("p",null,"A client only capable of performing the Client Credentials Flow can be created\nas follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"hydra clients create \\\n    --endpoint http://ory-hydra:4445 \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")))}p.isMDXComponent=!0},485:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?o.a.createElement(h,i(i({ref:t},s),{},{components:n})):o.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);