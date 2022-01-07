"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[6701],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3695:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Subjects"},c=void 0,l={unversionedId:"concepts/subjects",id:"version-v0.6/concepts/subjects",isDocsHomePage:!1,title:"Subjects",description:"In Ory Keto subjects are a recursive polymorphic datatype. They either refer to",source:"@site/versioned_docs/version-v0.6/concepts/subjects.mdx",sourceDirName:"concepts",slug:"/concepts/subjects",permalink:"/keto/docs/v0.6/concepts/subjects",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/concepts/subjects.mdx",tags:[],version:"v0.6",lastUpdatedBy:"Patrik",lastUpdatedAt:1620725654,formattedLastUpdatedAt:"5/11/2021",frontMatter:{title:"Subjects"},sidebar:"version-v0.6/docs",previous:{title:"Objects",permalink:"/keto/docs/v0.6/concepts/objects"},next:{title:"The Graph of Relations",permalink:"/keto/docs/v0.6/concepts/graph-of-relations"}},p=[{value:"Subject IDs",id:"subject-ids",children:[],level:2},{value:"Subject Sets",id:"subject-sets",children:[],level:2},{value:"Basic Example",id:"basic-example",children:[],level:2},{value:"Advanced Example: Using Application Information within Keto Subjects",id:"advanced-example-using-application-information-within-keto-subjects",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In Ory Keto subjects are a recursive polymorphic datatype. They either refer to\na specific subject (e.g. user) by some application defined identifier, or a set\nof subjects."),(0,o.kt)("h2",{id:"subject-ids"},"Subject IDs"),(0,o.kt)("p",null,"A subject ID can be any string. It is up to the application to map its users,\ndevices, ... to a constant, unique identifier. We recommend the usage of UUIDs\nas they provide a high entropy. It is however possible to use e.g. URLs or\nopaque tokens of any kind. Please check the\n",(0,o.kt)("a",{parentName:"p",href:"#advanced-example-using-application-information-within-keto-subjects"},"limitations"),".\nOry Keto will consider subject IDs equal iff their string representation is\nequal."),(0,o.kt)("h2",{id:"subject-sets"},"Subject Sets"),(0,o.kt)("p",null,"A subject set is the set of all subjects that have a specific relation on an\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/objects"},"object"),". They empower Ory Keto to be as flexible as you need it\nby defining indirections. They can be used to realize e.g.\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/guides/rbac"},"RBAC")," or\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/guides/access-control-inheritance"},"inheritance of relations"),". Subject\nsets themselves can again indirect to subject sets. For a performant evaluation\nof requests it is however required to follow some\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/performance"},"best practices"),'. As a special case, subject sets can also\nrefer to an object by using the empty relation. Effectively, this is interpreted\nas "any relation, even a non-existent one".'),(0,o.kt)("p",null,"Subject sets also represent all intermediary nodes in\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/graph-of-relations"},"the graph of relations"),"."),(0,o.kt)("h2",{id:"basic-example"},"Basic Example"),(0,o.kt)("p",null,"In the basic case an application uses the same subject identifiers as it uses\ninternally, e.g. a constant, unique username like ",(0,o.kt)("inlineCode",{parentName:"p"},"zepatrik")," or preferably\nUUIDv4 like ",(0,o.kt)("inlineCode",{parentName:"p"},"480158d4-0031-4412-9453-1bb0cdf76104"),"."),(0,o.kt)("p",null,"Head over to the\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/examples/olymp-file-sharing"},"basic full feature example")," to see an\nexample with some context."),(0,o.kt)("h2",{id:"advanced-example-using-application-information-within-keto-subjects"},"Advanced Example: Using Application Information within Keto Subjects"),(0,o.kt)("p",null,"Because the Keto client can use arbitrary strings as subjects, it is tempting to\nencode application data within the subject. ",(0,o.kt)("strong",{parentName:"p"},"We strongly discourage this\npractice.")," Instead, you should use a UUID to map application data to Keto\nsubjects. This is required to ensure:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"single source of truth and easy data update"),(0,o.kt)("li",{parentName:"ol"},"free choice of encoding (Keto does not allow the characters ",(0,o.kt)("inlineCode",{parentName:"li"},":#@"),")"),(0,o.kt)("li",{parentName:"ol"},"unlimited data size (Keto only allows up to 64 characters)")),(0,o.kt)("p",null,"For example, this can be used to implement a crude ABAC system by mapping\nattributes to a subject ID. The application can then define relation tuples that\nreflect permissions depending on the value of attributes. It will have to map\neach request to the subject representing the attributes."),(0,o.kt)("p",null,"Let's assume the application knows the following mapping between attributes and\nUUIDs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"c5b6454f-f79c-4a6d-9e1b-b44e04b56009:\n  subnet: 192.168.0.0/24\n  office_hours: true\n")),(0,o.kt)("p",null,"Keto could then know the following relation tuple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// allow access to TCP port 22 when the request originates from a specific subnet during office hours\ntcp/22#access@c5b6454f-f79c-4a6d-9e1b-b44e04b56009\n")),(0,o.kt)("p",null,"The application has to map each incoming request to a subject string\nrepresenting the attributes of the request. Ory Keto will reply with a positive\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/api-overview#check-relation-tuple"},"check response")," depending on the\nstring equality of the requested subject representing the attributes with the\nknown relation tuples. Remember that Ory Keto does ",(0,o.kt)("strong",{parentName:"p"},"not")," know how to interpret\nany information stored in the relation tuples. Rather, the application has to\npreprocess and map the value to the corresponding UUID."))}d.isMDXComponent=!0}}]);