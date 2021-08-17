(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4473],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37049:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],s={id:"upgrading",title:"Software Updates"},u=void 0,c={unversionedId:"ecosystem/upgrading",id:"ecosystem/upgrading",isDocsHomePage:!1,title:"Software Updates",description:"Running security-critical open source technology in a self-service format",source:"@site/docs/ecosystem/upgrading.md",sourceDirName:"ecosystem",slug:"/ecosystem/upgrading",permalink:"/docs/ecosystem/upgrading",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/ecosystem/upgrading.md",version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626872630,formattedLastUpdatedAt:"7/21/2021",frontMatter:{id:"upgrading",title:"Software Updates"},sidebar:"docs",previous:{title:"Configuring Ory services",permalink:"/docs/ecosystem/configuring"},next:{title:"Contributing",permalink:"/docs/ecosystem/contributing"}},p=[],l={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Running security-critical open source technology in a self-service format\nrequires vigilance. We make your life easier by announcing important software\nupdates via the ",(0,o.kt)("a",{parentName:"p",href:"http://eepurl.com/di390P"},"Ory Security Newsletter"),". Never\nmiss an update and\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://eepurl.com/di390P"},"sign up now to important release updates!")))),(0,o.kt)("p",null,"Good software improves over time. If it wouldn't, you shouldn't use it.\nUnfortunately, some of these improvements have breaking changes. We know that\nbreaking changes are annoying so we want to make upgrading as painless as\npossible."),(0,o.kt)("p",null,"We document detailed changelogs and upgrade guides for this very reason:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ory Kratos:\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/blob/master/UPGRADE.md"},"upgrade guide"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/kratos/blob/master/CHANGELOG.md"},"changelog")),(0,o.kt)("li",{parentName:"ul"},"Ory Hydra:\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/hydra/blob/master/UPGRADE.md"},"upgrade guide"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/hydra/blob/master/CHANGELOG.md"},"changelog")),(0,o.kt)("li",{parentName:"ul"},"Ory Oathkeeper:\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/blob/master/UPGRADE.md"},"upgrade guide"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/oathkeeper/blob/master/CHANGELOG.md"},"changelog")),(0,o.kt)("li",{parentName:"ul"},"Ory Keto: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/blob/master/UPGRADE.md"},"upgrade guide"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory/keto/blob/master/CHANGELOG.md"},"changelog"))),(0,o.kt)("p",null,"Before upgrading to a newer version, please make sure to check with these\ndocuments first."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you have not already subscribed to our release announcements,\n",(0,o.kt)("a",{parentName:"strong",href:"http://eepurl.com/di390P"},"subscribe now"),"!")," We announce important releases\n(e.g. security releases) in this newsletter."))}m.isMDXComponent=!0}}]);