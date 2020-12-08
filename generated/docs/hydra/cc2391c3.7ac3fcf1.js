(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1101:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sample_trace-0cd5d1302770f8483eef6909b17609e1.png"},389:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(485)),o={id:"tracing",title:"Distributed Tracing"},c={unversionedId:"guides/tracing",id:"guides/tracing",isDocsHomePage:!1,title:"Distributed Tracing",description:"Configuring Distributed Tracing (DT) will enable you to obtain a visualization",source:"@site/docs/guides/tracing.mdx",slug:"/guides/tracing",permalink:"/hydra/docs/next/guides/tracing",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/guides/tracing.mdx",version:"current",lastUpdatedBy:"zepatrik",lastUpdatedAt:1605630369,sidebar:"docs",previous:{title:"Preparing for Production",permalink:"/hydra/docs/next/production"},next:{title:"Secrets and Key Rotation",permalink:"/hydra/docs/next/guides/secrets-key-rotation"}},l=[{value:"What a Hydra trace includes",id:"what-a-hydra-trace-includes",children:[]},{value:"Alright, how can I set this up locally?",id:"alright-how-can-i-set-this-up-locally",children:[]},{value:"Tracing configurations",id:"tracing-configurations",children:[]}],s={rightToc:l};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Configuring Distributed Tracing (DT) will enable you to obtain a visualization\nof the call paths that take place in order to process a request made to Hydra.\nIt's yet another tool that you can use to aid you in profiling, debugging and\nultimately understanding your deployment of Hydra better. Hydra currently\nsupports the following tracing options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tracing backend(s): Jaeger, Elastic APM, Datadog - ",Object(i.b)("em",{parentName:"li"},"Note: adding support for\nother\n",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://opentracing.io/docs/supported-tracers"}),"opentracing compliant backends"),"\nis planned. To aid in priority, please\n",Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/ory/hydra/issues"}),"create an issue")," with your feature\nrequest.")),Object(i.b)("li",{parentName:"ul"},"Following existing traces: If you have deployed Hydra behind a proxy that has\ninitiated a trace, Hydra will attempt to join that trace by examining the\nrequest headers for tracing context.")),Object(i.b)("h3",{id:"what-a-hydra-trace-includes"},"What a Hydra trace includes"),Object(i.b)("p",null,"In DT speak, a trace is comprised of one or more spans which are logical units\nof work. Each Hydra span is encapsulated with the following state:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A name"),Object(i.b)("li",{parentName:"ul"},"A start time"),Object(i.b)("li",{parentName:"ul"},"A finish time"),Object(i.b)("li",{parentName:"ul"},"A set of zero or more tags")),Object(i.b)("p",null,"Hydra currently creates the following spans:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Top level span (",Object(i.b)("em",{parentName:"li"},"named after the request path"),") for the requested endpoint.\nSpan tags: - http method - http status code - error IFF status code >= 400"),Object(i.b)("li",{parentName:"ul"},"Child span will be created if bcrypt (",Object(i.b)("em",{parentName:"li"},"e.g. when the token endpoint is\ncalled"),") is called. Span tags: - bcrypt work factor"),Object(i.b)("li",{parentName:"ul"},"All SQL database interactions. Spans/tags will vary depending on the database\ndriver used.")),Object(i.b)("p",null,"This is still evolving and subject to change as tracing support continues to\nexpand in Hydra. If you see something that is missing/wrong, please create an\nissue."),Object(i.b)("h3",{id:"alright-how-can-i-set-this-up-locally"},"Alright, how can I set this up locally?"),Object(i.b)("p",null,"The\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/hydra/blob/master/quickstart-tracing.yml"}),"provided docker-compose file"),"\nin the project repository has tracing configuration which you can use to play\naround with - just uncomment the desired tracing provider. We will use Jaeger as\nan example."),Object(i.b)("p",null,"Simply run"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell",metastring:"script",script:!0}),"$ docker-compose -f quickstart.yml \\\n    -f quickstart-tracing.yml \\\n    up --build\n")),Object(i.b)("p",null,"Grab a coffee or stretch while you wait for everything to come up. You will then\nbe able to navigate to the Jaeger UI which you have exposed on port ",Object(i.b)("inlineCode",{parentName:"p"},"16686")," at\nhttp://localhost:16686/search. You can now start making requests to Hydra and\ninspect traces!"),Object(i.b)("p",null,"As an example, here is a trace created by making a bad request to the\n",Object(i.b)("inlineCode",{parentName:"p"},"POST /clients")," endpoint:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"OpenTracing and OpenCensus exemplary trace in Jaeger UI",src:n(1101).default})),Object(i.b)("p",null,"At a glance, you are able to see that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The request failed"),Object(i.b)("li",{parentName:"ul"},"The request took ~80ms"),Object(i.b)("li",{parentName:"ul"},"It resulted in a 409"),Object(i.b)("li",{parentName:"ul"},"The hash comparison to validate the client's credentials took a whopping 70ms.\nBcrypt is expensive!"),Object(i.b)("li",{parentName:"ul"},"The various database operations performed")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note: in order to see spans around database interactions, you must be using a\nSQL backend (i.e. MySQL or Postgres).")),Object(i.b)("h3",{id:"tracing-configurations"},"Tracing configurations"),Object(i.b)("p",null,"The CLI will provide you with the list of Hydra tracing configurations and their\nsupported values. Simply run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"docker exec -it hydra_hydra_1 hydra serve --help\n")),Object(i.b)("p",null,"And read the section on ",Object(i.b)("inlineCode",{parentName:"p"},"DEBUG CONTROLS"),"."))}u.isMDXComponent=!0},485:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);