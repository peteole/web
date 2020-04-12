(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),s=(n(0),n(175)),c={id:"index",title:"Access Control Engines - Introduction"},a={id:"engines/index",title:"Access Control Engines - Introduction",description:"Whatever your system looks like, you probably have a concept of permissions",source:"@site/docs/engines/index.md",permalink:"/keto/docs/next/engines/index",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/engines/index.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586170560,sidebar:"docs",previous:{title:"Secure",permalink:"/keto/docs/next/secure"},next:{title:"Access Control Lists (ACL)",permalink:"/keto/docs/next/engines/acl"}},i=[],l={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,'Whatever your system looks like, you probably have a concept of permissions\nwhich models who is allowed to do what (access control). ORY Keto provides you\nwith battle-tested, best practice access control concepts. Please note that ORY\nKeto doesn\'t support all access control mechanisms while in "sandbox" mode.'),Object(s.b)("p",null,"This chapter introduces the most widely used Access Control Policies. Before we\ndo that, let's cover some of the basics."),Object(s.b)("p",null,'Every app that has users usually assigns permissions to these users ("Bob and\nAlice are allowed to write blog posts"). There are various established best\npractices for assigning one or more permissions to one or more users. In the\ncontext of access control, you\'ll often encounter ',Object(s.b)("strong",{parentName:"p"},"users"),", ",Object(s.b)("strong",{parentName:"p"},"identities")," or\n",Object(s.b)("strong",{parentName:"p"},"subjects"),". They typically include users, robots, cronjobs, services, etc."))}p.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||s;return n?o.a.createElement(f,a({ref:t},l,{components:n})):o.a.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=b;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<s;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);