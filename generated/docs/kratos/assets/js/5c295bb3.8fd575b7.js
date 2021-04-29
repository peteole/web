(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(549)),s={id:"kratos-jsonnet-lint",title:"kratos jsonnet lint",description:"kratos jsonnet lint"},c={unversionedId:"cli/kratos-jsonnet-lint",id:"version-v0.6/cli/kratos-jsonnet-lint",isDocsHomePage:!1,title:"kratos jsonnet lint",description:"kratos jsonnet lint",source:"@site/versioned_docs/version-v0.6/cli/kratos-jsonnet-lint.md",sourceDirName:"cli",slug:"/cli/kratos-jsonnet-lint",permalink:"/kratos/docs/cli/kratos-jsonnet-lint",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/cli/kratos-jsonnet-lint.md",version:"v0.6",frontMatter:{id:"kratos-jsonnet-lint",title:"kratos jsonnet lint",description:"kratos jsonnet lint"},sidebar:"version-v0.6/docs",previous:{title:"kratos jsonnet format",permalink:"/kratos/docs/cli/kratos-jsonnet-format"},next:{title:"kratos migrate",permalink:"/kratos/docs/cli/kratos-migrate"}},i=[{value:"kratos jsonnet lint",id:"kratos-jsonnet-lint",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kratos-jsonnet-lint"},"kratos jsonnet lint"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Lints JSONNet files using the official JSONNet linter and exits with a status\ncode of 1 when issues are detected."),Object(a.b)("p",null,"Glob Syntax:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pattern:\n    { term }\n\nterm:\n    &#39;*&#39;         matches any sequence of non-separator characters\n    &#39;**&#39;        matches any sequence of characters\n    &#39;?&#39;         matches any single non-separator character\n    &#39;[&#39; [ &#39;!&#39; ] { character-range } &#39;]&#39;\n                character class (must be non-empty)\n    &#39;{&#39; pattern-list &#39;}&#39;\n                pattern alternatives\n    c           matches character c (c != &#39;*&#39;, &#39;**&#39;, &#39;?&#39;, &#39;\\&#39;, &#39;[&#39;, &#39;{&#39;, &#39;}&#39;)\n    &#39;\\&#39; c       matches character c\n\ncharacter-range:\n    c           matches character c (c != &#39;\\\\&#39;, &#39;-&#39;, &#39;]&#39;)\n    &#39;\\&#39; c       matches character c\n    lo &#39;-&#39; hi   matches character c for lo &lt;= c &lt;= hi\n\npattern-list:\n    pattern { &#39;,&#39; pattern }\n                comma-separated (without spaces) patterns\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kratos jsonnet lint path/to/files/*.jsonnet [more/files.jsonnet, [supports/**/{foo,bar}.jsonnet]] [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  -h, --help   help for lint\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-jsonnet"},"kratos jsonnet")," - Helpers for linting and formatting JSONNet\ncode")))}p.isMDXComponent=!0},549:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,b=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);