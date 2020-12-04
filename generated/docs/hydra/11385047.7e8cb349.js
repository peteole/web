(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{406:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),b=o,h=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return t?r.a.createElement(h,i(i({ref:n},p),{},{components:t})):r.a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(3),r=t(7),a=(t(0),t(406)),c={id:"openid-connect-oidc",title:"OpenID Connect (OIDC)",sidebar_label:"OpenID Connect"},i={unversionedId:"concepts/openid-connect-oidc",id:"concepts/openid-connect-oidc",isDocsHomePage:!1,title:"OpenID Connect (OIDC)",description:"Before you start reading this document, please make sure to have covered all",source:"@site/docs/concepts/openid-connect-oidc.mdx",slug:"/concepts/openid-connect-oidc",permalink:"/hydra/docs/next/concepts/openid-connect-oidc",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/concepts/openid-connect-oidc.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar_label:"OpenID Connect",sidebar:"docs",previous:{title:"OAuth 2.0",permalink:"/hydra/docs/next/concepts/oauth2"},next:{title:"Login Flow",permalink:"/hydra/docs/next/concepts/login"}},s=[{value:"Userinfo",id:"userinfo",children:[]}],p={rightToc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before you start reading this document, please make sure to have covered all\ntopics in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"./oauth2"}),"OAuth 2.0 Concepts"),"."),Object(a.b)("p",null,'OpenID Connect works exactly like OAuth2. The primary use case for OpenID\nConnect is to solve "Login with <Google|Facebook|Hydra>" flows.'),Object(a.b)("p",null,"To initiate an OpenID Connect flow all you have to do is to add the ",Object(a.b)("inlineCode",{parentName:"p"},"openid"),"\nscope to your OAuth2 Authorize Code Flow:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"https://my-hydra/oauth2/auth?client_id=...&response_type=code&scope=openid\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You need to make sure that your OAuth2 Client is allowed to request the ",Object(a.b)("inlineCode",{parentName:"p"},"openid"),"\nscope!"))),Object(a.b)("p",null,"Once you exchange the authorize code for the access and refresh token"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"POST /oauth/token HTTP/1.1\nHost: my-hydra\n\ngrant_type=authorization_code\n&code=xxxxxxxxxxx\n&redirect_uri=https://example-app.com/redirect\n&client_id=xxxxxxxxxx\n&client_secret=xxxxxxxxxx\n")),Object(a.b)("p",null,"you will additionally receive an ID Token:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "access_token": "MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",\n  "token_type": "bearer",\n  "expires_in": 3600,\n  "refresh_token": "IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",\n  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFlOWdkazcifQ.ewogImlzcyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4Mjg5NzYxMDAxIiwKICJhdWQiOiAiczZCaGRSa3F0MyIsCiAibm9uY2UiOiAibi0wUzZfV3pBMk1qIiwKICJleHAiOiAxMzExMjgxOTcwLAogImlhdCI6IDEzMTEyODA5NzAKfQ.ggW8hZ1EuVLuxNuuIJKX_V8a_OMXzR0EHR9R6jgdqrOOF4daGU96Sr_P6qJp6IcmD3HP99Obi1PRs-cwh3LO-p146waJ8IhehcwL7F09JdijmBqkvPeB2T9CJNqeGpe-gccMg4vfKjkM8FcGvnzZUN4_KSP0aAp1tOJ1zZwgjxqGByKHiOtX7TpdQyHE5lcMiKPXfEIQILVq0pc_E2DzL7emopWoaoZTF_m0_N0YzFC6g6EJbOEoRoSK5hoDalrcvRYLSrQAZZKflyuVCyixEoV9GfNQC3_osjzw2PAithfubEEBLuVVk4XUVrWOLrLl0nx7RkKU8NXNHq-rvKMzqg",\n  "scope": "openid"\n}\n')),Object(a.b)("p",null,"The ID Token's purpose is to authenticate the End-User at the OAuth2 Client\nApplication. ",Object(a.b)("strong",{parentName:"p"},"It does not"),' solve session management or anything else (you\nstill have to manage cookies, logout, ... yourself!) - it\'s just a\n"certificate".'),Object(a.b)("h3",{id:"userinfo"},"Userinfo"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"/userinfo")," endpoint returns information on a user given an access token.\nSince ORY Hydra is agnostic to any end-user data, the ",Object(a.b)("inlineCode",{parentName:"p"},"/userinfo")," endpoint\nreturns only minimal information per default:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'GET https://ory-hydra:4444/userinfo\nAuthorization: bearer access-token.xxxx\n\n{\n "acr": "oauth2",\n "sub": "xxx@xxx.com"\n}\n')),Object(a.b)("p",null,"Any information set to the key ",Object(a.b)("inlineCode",{parentName:"p"},"session.id_token")," during accepting the consent\nrequest will also be included here."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// This is node-js pseudo code and will not work if you copy it 1:1\n\nconst body = {\n    // grant_scope: [\"foo\", \"bar\"],\n    // ...\n    session: {\n        id_token: {\n            \"foo\": \"bar\"\n        },\n    }\n}\n\nfetch('https://hydra/oauth2/auth/requests/consent/' + challenge + '/accept', {\n    method: 'PUT',\n    body: JSON.stringify(body),\n    headers: { 'Content-Type': 'application/json' }\n}).\n    // then(function (response) {\n")),Object(a.b)("p",null,"By making the ",Object(a.b)("inlineCode",{parentName:"p"},"/userinfo")," call with a token issued by this consent request, one\nwould receive:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'GET https://ory-hydra:4444/userinfo\nAuthorization: bearer new-access-token.xxxx\n\n{\n "acr": "oauth2",\n "sub": "xxx@xxx.com",\n "foo": "bar"\n}\n')),Object(a.b)("p",null,"You should only include data that has been authorized by the end-user through an\nOAuth 2.0 Scope. If an OAuth 2.0 Client, for example, requests the ",Object(a.b)("inlineCode",{parentName:"p"},"phone")," scope\nand the end-user authorizes that scope, the phone number should be added to\n",Object(a.b)("inlineCode",{parentName:"p"},"session.id_token"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Be aware that the ",Object(a.b)("inlineCode",{parentName:"p"},"/userinfo")," endpoint is public. Its contents are thus as\npublicly visible as those of ID Tokens. It is therefore imperative to ",Object(a.b)("strong",{parentName:"p"},"not\nexpose sensitive information without end-user consent."))))}l.isMDXComponent=!0}}]);