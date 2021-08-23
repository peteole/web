(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[51559],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},66789:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),s=["components"],i={id:"kratos-hashers-argon2-calibrate",title:"kratos hashers argon2 calibrate",description:"kratos hashers argon2 calibrate Computes Optimal Argon2 Parameters"},l=void 0,u={unversionedId:"cli/kratos-hashers-argon2-calibrate",id:"version-v0.7/cli/kratos-hashers-argon2-calibrate",isDocsHomePage:!1,title:"kratos hashers argon2 calibrate",description:"kratos hashers argon2 calibrate Computes Optimal Argon2 Parameters",source:"@site/versioned_docs/version-v0.7/cli/kratos-hashers-argon2-calibrate.md",sourceDirName:"cli",slug:"/cli/kratos-hashers-argon2-calibrate",permalink:"/kratos/docs/cli/kratos-hashers-argon2-calibrate",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.7/cli/kratos-hashers-argon2-calibrate.md",version:"v0.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1626195872,formattedLastUpdatedAt:"7/13/2021",frontMatter:{id:"kratos-hashers-argon2-calibrate",title:"kratos hashers argon2 calibrate",description:"kratos hashers argon2 calibrate Computes Optimal Argon2 Parameters"},sidebar:"version-v0.7/docs",previous:{title:"kratos hashers argon2",permalink:"/kratos/docs/cli/kratos-hashers-argon2"},next:{title:"kratos hashers argon2 hash",permalink:"/kratos/docs/cli/kratos-hashers-argon2-hash"}},c=[{value:"kratos hashers argon2 calibrate",id:"kratos-hashers-argon2-calibrate",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],h={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kratos-hashers-argon2-calibrate"},"kratos hashers argon2 calibrate"),(0,o.kt)("p",null,"Computes Optimal Argon2 Parameters"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This command helps you calibrate the configuration parameters for Argon2.\nPassword hashing is a trade-off between security, resource consumption, and user\nexperience. Resource consumption should not be too high and the login should not\ntake too long."),(0,o.kt)("p",null,"We recommend that the login process takes between half a second and one second\nfor password hashing, giving a good balance between security and user\nexperience."),(0,o.kt)("p",null,"Please note that the values depend on the machine you run the hashing on. If you\nhave RAM constraints, please set the memory dedicated to Ory Kratos to avoid out\nof memory panics."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kratos hashers argon2 calibrate &lt;requests-per-minute&gt; [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --adjust-memory-by byte_size    Amount by which the memory is adjusted in every step while probing. (default 512.00MB)\n  -c, --config strings                Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dedicated-memory byte_size    Amount of memory dedicated for password hashing. Kratos will try to not consume more memory. (default 1.00GB)\n      --expected-deviation duration   Expected deviation of the time a hashing operation (~login request) takes. (default 500ms)\n  -f, --format string                 Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                          help for calibrate\n      --key-length uint32             Length of the key in bytes. (default 32)\n      --max-concurrent uint8          Maximum number of concurrent hashing operations. (default 16)\n      --max-memory byte_size          Maximum memory allowed (0 means no limit). (default 0.00B)\n      --min-duration duration         Minimal duration a hashing operation (~login request) takes. (default 500ms)\n      --parallelism uint8             Number of threads to use. (default 72)\n  -r, --probe-runs int                Runs per probe, median of all runs is taken as the result. (default 2)\n  -q, --quiet                         Be quiet with output printing.\n      --salt-length uint32            Length of the salt in bytes. (default 16)\n  -i, --start-iterations uint32       Number of iterations to start probing at. (default 1)\n  -m, --start-memory byte_size        Amount of memory to start probing at. (default 0.00B)\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"kratos-hashers-argon2"},"kratos hashers argon2")," -")))}p.isMDXComponent=!0}}]);