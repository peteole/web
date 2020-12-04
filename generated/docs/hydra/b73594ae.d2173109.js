(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{296:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(406)),o=n(407),c={id:"tracing",title:"Distributed Tracing with Jaeger"},l={unversionedId:"guides/tracing",id:"version-v1.6/guides/tracing",isDocsHomePage:!1,title:"Distributed Tracing with Jaeger",description:"Configuring Distributed Tracing (DT) will enable you to obtain a visualization",source:"@site/versioned_docs/version-v1.6/guides/tracing.mdx",slug:"/guides/tracing",permalink:"/hydra/docs/v1.6/guides/tracing",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.6/guides/tracing.mdx",version:"v1.6",lastUpdatedBy:"aeneasr",lastUpdatedAt:1595248858,sidebar:"version-v1.6/docs",previous:{title:"Preparing for Production",permalink:"/hydra/docs/v1.6/production"},next:{title:"Secrets and Key Rotation",permalink:"/hydra/docs/v1.6/guides/secrets-key-rotation"}},s=[{value:"What a Hydra trace includes",id:"what-a-hydra-trace-includes",children:[]},{value:"Alright, how can I set this up locally?",id:"alright-how-can-i-set-this-up-locally",children:[]},{value:"Tracing configurations",id:"tracing-configurations",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Configuring Distributed Tracing (DT) will enable you to obtain a visualization\nof the call paths that take place in order to process a request made to Hydra.\nIt's yet another tool that you can use to aid you in profiling, debugging and\nultimately understanding your deployment of Hydra better. Hydra currently\nsupports the following tracing options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tracing backend(s): Jaeger - ",Object(i.b)("em",{parentName:"li"},"Note: adding support for other\n",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://opentracing.io/docs/supported-tracers"}),"opentracing compliant backends"),"\nis planned. To aid in priority, please\n",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ory/hydra/issues"}),"create an issue")," with your feature\nrequest.")),Object(i.b)("li",{parentName:"ul"},"Following existing traces: If you have deployed Hydra behind a proxy that has\ninitiated a trace, Hydra will attempt to join that trace by examining the\nrequest headers for tracing context.")),Object(i.b)("h3",{id:"what-a-hydra-trace-includes"},"What a Hydra trace includes"),Object(i.b)("p",null,"In DT speak, a trace is comprised of one or more spans which are logical units\nof work. Each Hydra span is encapsulated with the following state:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A name"),Object(i.b)("li",{parentName:"ul"},"A start time"),Object(i.b)("li",{parentName:"ul"},"A finish time"),Object(i.b)("li",{parentName:"ul"},"A set of zero or more tags")),Object(i.b)("p",null,"Hydra currently creates the following spans:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Top level span (",Object(i.b)("em",{parentName:"li"},"named after the request path"),") for the requested endpoint.\nSpan tags: - http method - http status code - error IFF status code >= 400"),Object(i.b)("li",{parentName:"ul"},"Child span will be created if bcrypt (",Object(i.b)("em",{parentName:"li"},"e.g. when the token endpoint is\ncalled"),") is called. Span tags: - bcrypt work factor"),Object(i.b)("li",{parentName:"ul"},"All SQL database interactions. Spans/tags will vary depending on the database\ndriver used.")),Object(i.b)("p",null,"This is still evolving and subject to change as tracing support continues to\nexpand in Hydra. If you see something that is missing/wrong, please create an\nissue."),Object(i.b)("h3",{id:"alright-how-can-i-set-this-up-locally"},"Alright, how can I set this up locally?"),Object(i.b)("p",null,"The\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/quickstart-tracing.yml"}),"provided docker-compose file"),"\nin the project repository has tracing configuration w/ jaeger added which you\ncan use to play around with. Simply uncomment the configurations associated with\ntracing as so:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Under the Hydra service definition ",Object(i.b)("inlineCode",{parentName:"strong"},"depends_on")," configs, uncomment the\nfollowing:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"- jaeger\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Under the Hydra service definition ",Object(i.b)("inlineCode",{parentName:"strong"},"environment")," configs, uncomment the\nfollowing:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"- TRACING_PROVIDER\n- TRACING_PROVIDER_JAEGER_SAMPLING_SERVER_URL\n- TRACING_PROVIDER_JAEGER_LOCAL_AGENT_ADDRESS\n- TRACING_PROVIDER_JAEGER_SAMPLING_TYPE\n- TRACING_PROVIDER_JAEGER_SAMPLING_VALUE\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Uncomment the Jaeger service definition:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'jaeger:\n  image: jaegertracing/all-in-one:1.7.0\n  ports:\n  - "5775:5775/udp"\n  - "6831:6831/udp"\n  - "6832:6832/udp"\n  - "5778:5778"\n  - "16686:16686"\n  - "14268:14268"\n  - "9411:9411"\n')),Object(i.b)("p",null,"Then simply run ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up"),". Grab a coffee or stretch while you wait for\neverything to come up. You will then be able to navigate to the Jaeger UI which\nyou have exposed on port ",Object(i.b)("inlineCode",{parentName:"p"},"16686")," at http://localhost:16686/search. You can now\nstart making requests to Hydra and inspect traces!"),Object(i.b)("p",null,"As an example, here is a trace created by making a bad request to the\n",Object(i.b)("inlineCode",{parentName:"p"},"POST /clients")," endpoint:"),Object(i.b)("img",{alt:"Sample Trace",src:Object(o.a)("/images/docs/hydra/sample_trace.png")}),";",Object(i.b)("p",null,"At a glance, you are able to see that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The request failed"),Object(i.b)("li",{parentName:"ul"},"The request took ~80ms"),Object(i.b)("li",{parentName:"ul"},"It resulted in a 409"),Object(i.b)("li",{parentName:"ul"},"The hash comparison to validate the client's credentials took a whopping 70ms.\nBcrypt is expensive!"),Object(i.b)("li",{parentName:"ul"},"The various database operations performed")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note: in order to see spans around database interactions, you must be using a\nSQL backend (i.e. MySQL or Postgres).")),Object(i.b)("h3",{id:"tracing-configurations"},"Tracing configurations"),Object(i.b)("p",null,"The CLI will provide you with the list of Hydra tracing configurations and their\nsupported values. Simply run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"docker exec -it hydra_hydra_1 hydra serve --help\n")),Object(i.b)("p",null,"And read the section on ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG CONTROLS"),"."))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},407:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(20),a=n(408);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},408:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);