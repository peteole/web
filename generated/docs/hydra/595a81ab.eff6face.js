(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(2),a=n(6),r=(n(0),n(313)),o={id:"production",title:"Preparing for Production"},l={unversionedId:"production",id:"version-v1.5/production",isDocsHomePage:!1,title:"Preparing for Production",description:"This document summarizes things you will find useful when going to production.",source:"@site/versioned_docs/version-v1.5/production.md",permalink:"/hydra/docs/v1.5/production",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.5/production.md",version:"v1.5",lastUpdatedBy:"aeneasr",lastUpdatedAt:1592903869,sidebar:"version-v1.5/docs",previous:{title:"Database Setup and Configuration",permalink:"/hydra/docs/v1.5/dependencies-environment"},next:{title:"Common Problems & Debugging",permalink:"/hydra/docs/v1.5/debugging"}},c=[{value:"ORY Hydra behind an API Gateway",id:"ory-hydra-behind-an-api-gateway",children:[{value:"TLS Termination",id:"tls-termination",children:[]},{value:"Routing",id:"routing",children:[]}]},{value:"Exposing Administrative and Public API Endpoints",id:"exposing-administrative-and-public-api-endpoints",children:[{value:"Binding to different interfaces or UNIX sockets",id:"binding-to-different-interfaces-or-unix-sockets",children:[]}]}],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document summarizes things you will find useful when going to production."),Object(r.b)("h2",{id:"ory-hydra-behind-an-api-gateway"},"ORY Hydra behind an API Gateway"),Object(r.b)("p",null,"Although ORY Hydra implements all Go best practices around running public-facing\nproduction http servers, we discourage running ORY Hydra facing the public net\ndirectly. We strongly recommend running ORY Hydra behind an API gateway or a\nload balancer. It is common to terminate TLS on the edge (gateway / load\nbalancer) and use certificates provided by your infrastructure provider (e.g.\nAWS CA) for last mile security."),Object(r.b)("h3",{id:"tls-termination"},"TLS Termination"),Object(r.b)("p",null,"You may also choose to set Hydra to HTTPS mode without actually accepting TLS\nconnections. In that case, all Hydra URLs are prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"https://"),", but the\nserver is actually accepting http. This makes sense if you don't want last mile\nsecurity using TLS, and trust your network to properly handle internal traffic:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"serve:\n  tls:\n    allow_termination_from:\n      - 127.0.0.1/32\n")),Object(r.b)("p",null,"With TLS termination enabled, ORY Hydra discards all requests unless:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The request is coming from a trusted IP address set by\n",Object(r.b)("inlineCode",{parentName:"li"},"serve.tls.allow_termination_from")," and the header ",Object(r.b)("inlineCode",{parentName:"li"},"X-Forwarded-Proto")," is set\nto ",Object(r.b)("inlineCode",{parentName:"li"},"https"),"."),Object(r.b)("li",{parentName:"ul"},"The request goes to ",Object(r.b)("inlineCode",{parentName:"li"},"/health/alive"),", ",Object(r.b)("inlineCode",{parentName:"li"},"/health/ready")," which does not require\nTLS termination and that is used to check the health of an instance.")),Object(r.b)("p",null,"When TLS Termination is enabled, you do not need to provide a TLS Certificate\nand Private Key."),Object(r.b)("p",null,"If you are unable to properly set up TLS Termination, you may want to set the\n",Object(r.b)("inlineCode",{parentName:"p"},"--dangerous-force-http")," flag. But please be aware that we discourage you from\ndoing so and that you should know what you're doing."),Object(r.b)("h3",{id:"routing"},"Routing"),Object(r.b)("p",null,"It is common to use a router, or API gateway, to route subdomains or paths to a\nspecific service. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"https://myservice.com/hydra/")," is routed to\n",Object(r.b)("inlineCode",{parentName:"p"},"http://10.0.1.213:3912/")," where ",Object(r.b)("inlineCode",{parentName:"p"},"10.0.1.213")," is the host running ORY Hydra. To\ncompute the values for the consent challenge, ORY Hydra uses the host and path\nheaders from the HTTP request. Therefore, it is important to set up your API\nGateway in such a way, that it passes the public host (in this case\n",Object(r.b)("inlineCode",{parentName:"p"},"myservice.com"),") and the path without any prefix (in this case ",Object(r.b)("inlineCode",{parentName:"p"},"hydra/"),"). If you\nuse the Mashape Kong API gateway, you can achieve this by setting\n",Object(r.b)("inlineCode",{parentName:"p"},"strip_request_path=true")," and ",Object(r.b)("inlineCode",{parentName:"p"},"preserve_host=true.")),Object(r.b)("h2",{id:"exposing-administrative-and-public-api-endpoints"},"Exposing Administrative and Public API Endpoints"),Object(r.b)("p",null,"ORY Hydra serves APIs via two ports:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Public port (default 4444)"),Object(r.b)("li",{parentName:"ul"},"Administrative port (default 4445)")),Object(r.b)("p",null,"The public port can and should be exposed to public internet traffic. That port\nhandles requests to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/.well-known/jwks.json")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/auth")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/token")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/revoke")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/fallbacks/consent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/fallbacks/error")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/sessions/logout")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/userinfo"))),Object(r.b)("p",null,"The administrative port should not be exposed to public internet traffic. If you\nwant to expose certain endpoints, such as the ",Object(r.b)("inlineCode",{parentName:"p"},"/clients")," endpoint for OpenID\nConnect Dynamic Client Registry, you can do so but you need to properly secure\nthese endpoints with an API Gateway or Authorization Proxy. Administrative\nendpoints include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All ",Object(r.b)("inlineCode",{parentName:"li"},"/clients")," endpoints."),Object(r.b)("li",{parentName:"ul"},"All ",Object(r.b)("inlineCode",{parentName:"li"},"/keys")," endpoints."),Object(r.b)("li",{parentName:"ul"},"All ",Object(r.b)("inlineCode",{parentName:"li"},"/health"),", ",Object(r.b)("inlineCode",{parentName:"li"},"/metrics"),", ",Object(r.b)("inlineCode",{parentName:"li"},"/version")," endpoints."),Object(r.b)("li",{parentName:"ul"},"All ",Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/auth/requests")," endpoints."),Object(r.b)("li",{parentName:"ul"},"Endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/introspect"),"."),Object(r.b)("li",{parentName:"ul"},"Endpoint ",Object(r.b)("inlineCode",{parentName:"li"},"/oauth2/flush"),".")),Object(r.b)("p",null,"None of the administrative endpoints have any built-in access control. You can\ndo simple ",Object(r.b)("inlineCode",{parentName:"p"},"curl")," or Postman requests to talk to them."),Object(r.b)("p",null,"The Token Introspection endpoint requires authentication. But since there is no\naccess control, any valid authentication enables the endpoint to be used. If you\nneed to access this endpoint in production, you should configure your API\nGateway or Application Proxy to restrict which clients have access to the\nendpoint."),Object(r.b)("p",null,"We generally advise to run ORY Hydra with ",Object(r.b)("inlineCode",{parentName:"p"},"hydra serve all")," which listens on\nboth ports in one process. Please be aware that the ",Object(r.b)("inlineCode",{parentName:"p"},"memory")," backend will not\nwork in this mode."),Object(r.b)("h3",{id:"binding-to-different-interfaces-or-unix-sockets"},"Binding to different interfaces or UNIX sockets"),Object(r.b)("p",null,"ORY Hydra will bind public and administrative APIs ports to all interfaces."),Object(r.b)("p",null,"The interfaces or UNIX sockets used may be specified via environment variables\n",Object(r.b)("inlineCode",{parentName:"p"},"PUBLIC_HOST")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ADMIN_HOST"),". Interfaces may be specified as TCP address or as\nUNIX socket (giving the absolute path to the socket file prefixed by ",Object(r.b)("inlineCode",{parentName:"p"},"unix:"),")\nlike:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"PUBLIC_HOST=127.0.0.1")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'ADMIN_HOST="unix:/var/run/hydra/admin_socket"'))),Object(r.b)("p",null,"ORY Hydra will try to create the socket file during startup and the socket will\nbe writeable by the user running ORY Hydra. The owner, group and mode of the\nsocket can be modified:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml"}),"serve:\n  admin:\n    host: unix:/var/run/hydra/admin_socket\n    socket:\n      owner: hydra\n      group: hydra-admin-api\n      mode: 770\n")))}d.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);