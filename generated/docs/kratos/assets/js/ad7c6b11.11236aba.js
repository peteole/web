(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{373:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return i})),n.d(e,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(549)),s={id:"kratos-jsonnet-format",title:"kratos jsonnet format",description:"kratos jsonnet format"},c={unversionedId:"cli/kratos-jsonnet-format",id:"version-v0.6/cli/kratos-jsonnet-format",isDocsHomePage:!1,title:"kratos jsonnet format",description:"kratos jsonnet format",source:"@site/versioned_docs/version-v0.6/cli/kratos-jsonnet-format.md",sourceDirName:"cli",slug:"/cli/kratos-jsonnet-format",permalink:"/kratos/docs/cli/kratos-jsonnet-format",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/cli/kratos-jsonnet-format.md",version:"v0.6",frontMatter:{id:"kratos-jsonnet-format",title:"kratos jsonnet format",description:"kratos jsonnet format"},sidebar:"version-v0.6/docs",previous:{title:"kratos jsonnet",permalink:"/kratos/docs/cli/kratos-jsonnet"},next:{title:"kratos jsonnet lint",permalink:"/kratos/docs/cli/kratos-jsonnet-lint"}},i=[{value:"kratos jsonnet format",id:"kratos-jsonnet-format",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],l={toc:i};function p(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kratos-jsonnet-format"},"kratos jsonnet format"),Object(a.b)("h3",{id:"synopsis"},"Synopsis"),Object(a.b)("p",null,"Formats JSONNet files using the official JSONNet formatter."),Object(a.b)("p",null,"Use -w or --write to write output back to files instead of stdout."),Object(a.b)("p",null,"Glob Syntax:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pattern:\n    { term }\n\nterm:\n    &#39;*&#39;         matches any sequence of non-separator characters\n    &#39;**&#39;        matches any sequence of characters\n    &#39;?&#39;         matches any single non-separator character\n    &#39;[&#39; [ &#39;!&#39; ] { character-range } &#39;]&#39;\n                character class (must be non-empty)\n    &#39;{&#39; pattern-list &#39;}&#39;\n                pattern alternatives\n    c           matches character c (c != &#39;*&#39;, &#39;**&#39;, &#39;?&#39;, &#39;\\&#39;, &#39;[&#39;, &#39;{&#39;, &#39;}&#39;)\n    &#39;\\&#39; c       matches character c\n\ncharacter-range:\n    c           matches character c (c != &#39;\\\\&#39;, &#39;-&#39;, &#39;]&#39;)\n    &#39;\\&#39; c       matches character c\n    lo &#39;-&#39; hi   matches character c for lo &lt;= c &lt;= hi\n\npattern-list:\n    pattern { &#39;,&#39; pattern }\n                comma-separated (without spaces) patterns\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"kratos jsonnet format path/to/files/*.jsonnet [more/files.jsonnet, [supports/**/{foo,bar}.jsonnet]] [flags]\n")),Object(a.b)("h3",{id:"options"},"Options"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"  -h, --help    help for format\n  -w, --write   Write formatted output back to file.\n")),Object(a.b)("h3",{id:"see-also"},"SEE ALSO"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"kratos-jsonnet"},"kratos jsonnet")," - Helpers for linting and formatting JSONNet\ncode")))}p.isMDXComponent=!0},549:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=o.a.createContext({}),p=function(t){var e=o.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=p(t.components);return o.a.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},m=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return n?o.a.createElement(b,c(c({ref:e},l),{},{components:n})):o.a.createElement(b,c({ref:e},l))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);