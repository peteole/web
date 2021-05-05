(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),i=(n(0),n(551)),a={id:"integration-with-other-systems-using-web-hooks",title:"Integration using Web-Hooks"},s={unversionedId:"guides/integration-with-other-systems-using-web-hooks",id:"version-v0.6/guides/integration-with-other-systems-using-web-hooks",isDocsHomePage:!1,title:"Integration using Web-Hooks",description:"Ory Kratos supports integration with other systems (e.g. ERP, Marketing, etc)",source:"@site/versioned_docs/version-v0.6/guides/integration-with-other-systems-using-web-hooks.md",sourceDirName:"guides",slug:"/guides/integration-with-other-systems-using-web-hooks",permalink:"/kratos/docs/guides/integration-with-other-systems-using-web-hooks",editUrl:"https://github.com/ory/kratos/edit/master/docs/versioned_docs/version-v0.6/guides/integration-with-other-systems-using-web-hooks.md",version:"v0.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1620225712,formattedLastUpdatedAt:"5/5/2021",frontMatter:{id:"integration-with-other-systems-using-web-hooks",title:"Integration using Web-Hooks"}},c=[{value:"Mailchimp",id:"mailchimp",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ory Kratos supports integration with other systems (e.g. ERP, Marketing, etc)\nusing Web-Hooks."),Object(i.b)("h3",{id:"mailchimp"},"Mailchimp"),Object(i.b)("p",null,"To send marketing email using ",Object(i.b)("a",{parentName:"p",href:"https://mailchimp.com"},"Mailchimp")," upon\nregistration, add the following to your Ory Kratos config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="path/to/my/kratos.config.yml"',title:'"path/to/my/kratos.config.yml"'},"selfservice:\n  flows:\n    registration:\n      after:\n        password:\n          hooks:\n            - hook: web_hook\n              config:\n                url: https://mandrillapp.com/api/1.0/messages/send\n                method: POST\n                body: /path/to/my/mandrillapp.jsonnet\n")),Object(i.b)("p",null,"And create a JsonNet file. Please be aware that Mailchimps' authentication\nmechanism currently requires to save the Mailchimp key in the JsonNet. For other\nsystems you would be using the ",Object(i.b)("inlineCode",{parentName:"p"},"web_hook"),"'s ",Object(i.b)("inlineCode",{parentName:"p"},"auth")," config."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsonnet",metastring:'title="/path/to/my/mandrillapp.jsonnet"',title:'"/path/to/my/mandrillapp.jsonnet"'},'function(ctx) {\n  key: "<Your-Api-Key>",\n  message: {\n    from_email: "hello@example.com",\n    subject: "Hello from Ory Kratos",\n    text: "Welcome to Ory Kratos",\n    to: [\n      {\n        email: ctx.identity.verifiable_addresses[0].value,\n        type: "to"\n      }\n    ]\n  }\n}\n')))}p.isMDXComponent=!0},551:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(a,".").concat(d)]||u[d]||m[d]||i;return n?o.a.createElement(g,s(s({ref:t},l),{},{components:n})):o.a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);