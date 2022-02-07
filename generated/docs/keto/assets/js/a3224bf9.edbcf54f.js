"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[8854],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93448:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={id:"keto-serve",title:"keto serve",description:"keto serve Starts the server and serves the HTTP REST and gRPC APIs"},l=void 0,c={unversionedId:"cli/keto-serve",id:"cli/keto-serve",isDocsHomePage:!1,title:"keto serve",description:"keto serve Starts the server and serves the HTTP REST and gRPC APIs",source:"@site/docs/cli/keto-serve.md",sourceDirName:"cli",slug:"/cli/keto-serve",permalink:"/keto/docs/next/cli/keto-serve",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/cli/keto-serve.md",tags:[],version:"current",lastUpdatedBy:"Anirudh Oppiliappan",lastUpdatedAt:1643990395,formattedLastUpdatedAt:"2/4/2022",frontMatter:{id:"keto-serve",title:"keto serve",description:"keto serve Starts the server and serves the HTTP REST and gRPC APIs"},sidebar:"docs",previous:{title:"keto relation-tuple parse",permalink:"/keto/docs/next/cli/keto-relation-tuple-parse"},next:{title:"keto status",permalink:"/keto/docs/next/cli/keto-status"}},p=[{value:"keto serve",id:"keto-serve",children:[{value:"Synopsis",id:"synopsis",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"keto-serve"},"keto serve"),(0,i.kt)("p",null,"Starts the server and serves the HTTP REST and gRPC APIs"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"This command opens the network ports and listens to HTTP and gRPC API requests."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"ORY Keto can be configured using environment variables as well as a\nconfiguration file. For more information on configuration options, open the\nconfiguration documentation:"),(0,i.kt)("p",null,">",">"," ",(0,i.kt)("a",{parentName:"p",href:"https://www.ory.sh/keto/docs/reference/configuration"},"https://www.ory.sh/keto/docs/reference/configuration")," ","<","<"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"keto serve [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --disable-telemetry   Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa (default true)\n  -h, --help                help for serve\n      --sqa-opt-out         Disable anonymized telemetry reports - for more information please visit https://www.ory.sh/docs/ecosystem/sqa (default true)\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/runner/keto.yml])\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"keto"},"keto")," - Global and consistent permission and authorization server")))}d.isMDXComponent=!0}}]);