(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{191:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(3),i=r(7),a=(r(0),r(406)),o={id:"hydra-serve-admin",title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs"},s={unversionedId:"cli/hydra-serve-admin",id:"version-v1.8/cli/hydra-serve-admin",isDocsHomePage:!1,title:"hydra serve admin",description:"hydra serve admin Serves Administrative HTTP/2 APIs",source:"@site/versioned_docs/version-v1.8/cli/hydra-serve-admin.md",slug:"/cli/hydra-serve-admin",permalink:"/hydra/docs/cli/hydra-serve-admin",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.8/cli/hydra-serve-admin.md",version:"v1.8",lastUpdatedBy:"aeneasr",lastUpdatedAt:1601730608,sidebar:"version-v1.8/docs",previous:{title:"hydra serve",permalink:"/hydra/docs/cli/hydra-serve"},next:{title:"hydra serve all",permalink:"/hydra/docs/cli/hydra-serve-all"}},c=[{value:"hydra serve admin",id:"hydra-serve-admin",children:[{value:"Synopsis",id:"synopsis",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],d={rightToc:c};function l(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hydra-serve-admin"},"hydra serve admin"),Object(a.b)("p",null,"Serves Administrative HTTP/2 APIs"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"This command opens one port and listens to HTTP/2 API requests. The exposed API\nhandles administrative requests like managing OAuth 2.0 Clients, JSON Web Keys,\nlogin and consent sessions, and others."),Object(a.b)("p",null,'This command is configurable using the same options available to "serve public"\nand "serve all".'),Object(a.b)("p",null,"It is generally recommended to use this command only if you require granular\ncontrol over the administrative and public APIs. For example, you might want to\nrun different TLS certificates or CORS settings on the public and administrative\nAPI."),Object(a.b)("p",null,'This command does not work with the "memory" database. Both services\n(administrative, public) MUST use the same database connection to be able to\nsynchronize.'),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"ORY Hydra can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),Object(a.b)("blockquote",null,Object(a.b)("blockquote",{parentName:"blockquote"},Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"}),"https://github.com/ory/hydra/blob/undefined/docs/docs/reference/configuration.md"),"\n<<"))),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),"hydra serve admin [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),"  -h, --help   help for admin\n")),Object(a.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{}),"      --config string                                    Config file (default is $HOME/.hydra.yaml)\n      --dangerous-allow-insecure-redirect-urls strings   DO NOT USE THIS IN PRODUCTION - Disable HTTPS enforcement for the provided redirect URLs\n      --dangerous-force-http                             DO NOT USE THIS IN PRODUCTION - Disables HTTP/2 over TLS (HTTPS) and serves HTTP instead\n      --disable-telemetry                                Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n      --skip-tls-verify                                  Foolishly accept TLS certificates signed by unkown certificate authorities\n      --sqa-opt-out                                      Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(t.a)({parentName:"li"},{href:"hydra-serve"}),"hydra serve")," - Parent command for starting public and\nadministrative HTTP/2 APIs")))}l.isMDXComponent=!0},406:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),l=function(e){var n=i.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=t,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return r?i.a.createElement(b,s(s({ref:n},d),{},{components:r})):i.a.createElement(b,s({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);