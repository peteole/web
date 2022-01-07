"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6531],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||l[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"keto-namespace-migrate",title:"keto namespace migrate",description:"keto namespace migrate Migrate a namespace"},p=void 0,m={unversionedId:"cli/keto-namespace-migrate",id:"version-v0.6/cli/keto-namespace-migrate",isDocsHomePage:!1,title:"keto namespace migrate",description:"keto namespace migrate Migrate a namespace",source:"@site/versioned_docs/version-v0.6/cli/keto-namespace-migrate.md",sourceDirName:"cli",slug:"/cli/keto-namespace-migrate",permalink:"/keto/docs/v0.6/cli/keto-namespace-migrate",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/cli/keto-namespace-migrate.md",tags:[],version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1617730042,formattedLastUpdatedAt:"4/6/2021",frontMatter:{id:"keto-namespace-migrate",title:"keto namespace migrate",description:"keto namespace migrate Migrate a namespace"},sidebar:"version-v0.6/docs",previous:{title:"keto namespace",permalink:"/keto/docs/v0.6/cli/keto-namespace"},next:{title:"keto namespace migrate down",permalink:"/keto/docs/v0.6/cli/keto-namespace-migrate-down"}},s=[{value:"keto namespace migrate",id:"keto-namespace-migrate",children:[{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],l={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"keto-namespace-migrate"},"keto namespace migrate"),(0,o.kt)("p",null,"Migrate a namespace"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for migrate\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -c, --config strings   Config files to load, overwriting in the order specified. (default [/home/circleci/keto.yml])\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"keto-namespace"},"keto namespace")," - Read and manipulate namespaces"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"keto-namespace-migrate-down"},"keto namespace migrate down")," - Migrate a\nnamespace down"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"keto-namespace-migrate-status"},"keto namespace migrate status")," - Get the\ncurrent namespace migration status"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"keto-namespace-migrate-up"},"keto namespace migrate up")," - Migrate a namespace\nup")))}u.isMDXComponent=!0}}]);