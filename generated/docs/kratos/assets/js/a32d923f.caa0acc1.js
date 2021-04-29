(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{350:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(8),o=(r(0),r(549)),s={id:"kratos-hashers-argon2-load-test",title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute."},i={unversionedId:"cli/kratos-hashers-argon2-load-test",id:"version-v0.6/cli/kratos-hashers-argon2-load-test",isDocsHomePage:!1,title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute.",source:"@site/versioned_docs/version-v0.6/cli/kratos-hashers-argon2-load-test.md",sourceDirName:"cli",slug:"/cli/kratos-hashers-argon2-load-test",permalink:"/kratos/docs/cli/kratos-hashers-argon2-load-test",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/cli/kratos-hashers-argon2-load-test.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1619690398,formattedLastUpdatedAt:"4/29/2021",frontMatter:{id:"kratos-hashers-argon2-load-test",title:"kratos hashers argon2 load-test",description:"kratos hashers argon2 load-test Simulate the password hashing with a number of concurrent requests/minute."},sidebar:"version-v0.6/docs",previous:{title:"kratos hashers argon2 hash",permalink:"/kratos/docs/cli/kratos-hashers-argon2-hash"},next:{title:"kratos identities",permalink:"/kratos/docs/cli/kratos-identities"}},l=[{value:"kratos hashers argon2 load-test",id:"kratos-hashers-argon2-load-test",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],u={toc:l};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"kratos-hashers-argon2-load-test"},"kratos hashers argon2 load-test"),Object(o.b)("p",null,"Simulate the password hashing with a number of concurrent requests/minute."),Object(o.b)("h3",{id:"synopsis"},"Synopsis"),Object(o.b)("p",null,"Simulates a number of concurrent authentication requests per minute. Gives\nstatistical data about the measured performance and resource consumption. Can be\nused to tune and test the hashing parameters for peak demand situations."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"kratos hashers argon2 load-test &lt;authentication-requests-per-minute&gt; [flags]\n")),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  -c, --config strings                Path to one or more .json, .yaml, .yml, .toml config files. Values are loaded in the order provided, meaning that the last config file overwrites values from the previous config file.\n      --dedicated-memory byte_size    Amount of memory dedicated for password hashing. Kratos will try to not consume more memory. (default 1.00GB)\n      --expected-deviation duration   Expected deviation of the time a hashing operation (~login request) takes. (default 500ms)\n  -f, --format string                 Set the output format. One of table, json, and json-pretty. (default &#34;default&#34;)\n  -h, --help                          help for load-test\n      --iterations uint32             Number of iterations to start probing at. (default 1)\n      --key-length uint32             Length of the key in bytes. (default 32)\n      --memory byte_size              Memory to use. (default 128.00MB)\n      --min-duration duration         Minimal duration a hashing operation (~login request) takes. (default 500ms)\n      --parallelism uint8             Number of threads to use. (default 72)\n  -q, --quiet                         Be quiet with output printing.\n      --salt-length uint32            Length of the salt in bytes. (default 16)\n")),Object(o.b)("h3",{id:"see-also"},"SEE ALSO"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"kratos-hashers-argon2"},"kratos hashers argon2")," -")))}c.isMDXComponent=!0},549:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);