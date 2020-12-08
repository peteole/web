(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{485:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},g=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,h=d["".concat(i,".").concat(g)]||d[g]||p[g]||a;return t?r.a.createElement(h,c(c({ref:n},s),{},{components:t})):r.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(485)),i={id:"token-expiration",title:"Configuring Expiration"},c={unversionedId:"guides/token-expiration",id:"guides/token-expiration",isDocsHomePage:!1,title:"Configuring Expiration",description:"In the Hydra config.yaml - located in your Hydra directory - you can set times",source:"@site/docs/guides/token-expiration.mdx",slug:"/guides/token-expiration",permalink:"/hydra/docs/next/guides/token-expiration",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/token-expiration.mdx",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1596553807,sidebar:"docs",previous:{title:"Using OAuth2",permalink:"/hydra/docs/next/guides/using-oauth2"},next:{title:"OAuth 2.0 Token Introspection",permalink:"/hydra/docs/next/guides/oauth2-token-introspection"}},l=[{value:"Login and Consent Request Expiration",id:"login-and-consent-request-expiration",children:[]},{value:"Access Token Expiration",id:"access-token-expiration",children:[]},{value:"Refresh Token Expiration",id:"refresh-token-expiration",children:[]},{value:"ID Token Expiration",id:"id-token-expiration",children:[]},{value:"Auth Code Expiration",id:"auth-code-expiration",children:[]}],s={rightToc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the Hydra config.yaml - located in your Hydra directory - you can set times\nfor how long a login/consent flow may take, expiration times for access tokens,\nrefresh tokens, id tokens and auth codes."),Object(a.b)("h2",{id:"login-and-consent-request-expiration"},"Login and Consent Request Expiration"),Object(a.b)("p",null,"Key ",Object(a.b)("inlineCode",{parentName:"p"},"ttl.login_consent_request")," configures how long a user login and consent\nflow may take."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'}),"#....\n  ## login_consent_request ##\n  #\n  # Configures how long a user login and consent flow may take.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_LOGIN_CONSENT_REQUEST=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_LOGIN_CONSENT_REQUEST=<value>\n  #\n  login_consent_request: 1h\n #....\n")),Object(a.b)("h2",{id:"access-token-expiration"},"Access Token Expiration"),Object(a.b)("p",null,"Key ",Object(a.b)("inlineCode",{parentName:"p"},"ttl.access_token")," configures how long access tokens are valid."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'}),"#....\n  ## access_token ##\n  #\n  # Configures how long access tokens are valid.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_ACCESS_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_ACCESS_TOKEN=<value>\n  #\n  access_token: 1h\n   #....\n")),Object(a.b)("h2",{id:"refresh-token-expiration"},"Refresh Token Expiration"),Object(a.b)("p",null,"Key ",Object(a.b)("inlineCode",{parentName:"p"},"ttl.refresh_token")," configures how long refresh tokens are valid. Set to -1\nfor refresh tokens to never expire."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'}),'#....\n  ## refresh_token ##\n  #\n  # Configures how long refresh tokens are valid. Set to -1 for refresh tokens to never expire.\n  #\n  # Default value: 720h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_REFRESH_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_REFRESH_TOKEN=<value>\n  #\n  refresh_token: "-1"\n    #....\n')),Object(a.b)("h2",{id:"id-token-expiration"},"ID Token Expiration"),Object(a.b)("p",null,"Key ",Object(a.b)("inlineCode",{parentName:"p"},"ttl.id_token")," configures how long id tokens are valid."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'}),"#....\n  ## id_token ##\n  #\n  # Configures how long id tokens are valid.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_ID_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_ID_TOKEN=<value>\n  #\n  id_token: 1h\n     #....\n")),Object(a.b)("h2",{id:"auth-code-expiration"},"Auth Code Expiration"),Object(a.b)("p",null,"Key ",Object(a.b)("inlineCode",{parentName:"p"},"ttl.auth_code")," configures how long auth codes are valid."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="path/to/hydra/config.yaml"',title:'"path/to/hydra/config.yaml"'}),"#....\n\n    ## auth_code ##\n  #\n  # Configures how long auth codes are valid.\n  #\n  # Default value: 10m\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_AUTH_CODE=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_AUTH_CODE=<value>\n  #\n  auth_code: 1h\n     #....\n")))}u.isMDXComponent=!0}}]);