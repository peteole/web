(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(3),s=a(7),r=(a(0),a(144)),c=a(216),o=a(150),i={title:"List API: Display all Objects a User has Access to"},l={unversionedId:"guides/list-api-display-objects",id:"guides/list-api-display-objects",isDocsHomePage:!1,title:"List API: Display all Objects a User has Access to",description:"RelationTuplePrism()",source:"@site/docs/guides/list-api-display-objects.mdx",slug:"/guides/list-api-display-objects",permalink:"/keto/docs/next/guides/list-api-display-objects",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/guides/list-api-display-objects.mdx",version:"current",lastUpdatedBy:"zepatrik",lastUpdatedAt:1617278988,sidebar:"docs",previous:{title:"Check whether a User has Access to Something",permalink:"/keto/docs/next/guides/simple-access-check-guide"},next:{title:"Expand API: Display who has Access to an Object",permalink:"/keto/docs/next/guides/expand-api-display-who-has-access"}};Object(o.a)();var p=[{value:"Example",id:"example",children:[{value:"Listing Objects",id:"listing-objects",children:[]},{value:"Listing Subjects",id:"listing-subjects",children:[]}]},{value:"Application Context",id:"application-context",children:[]},{value:"Pagination",id:"pagination",children:[]}],b={rightToc:p};function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this guide you will learn how to use Ory Keto's list API to display a list of\nall objects (e.g. files, ...) a user has access to. Please refer to the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/reference/proto-api"}),"gRPC")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/reference/api"}),"REST")," API\nreference documentation for all details. In general, the list API allows you to\nquery relation tuples based on partial relation tuples."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"As an example, we want to look at a chat application. Every user is part of one\nor more chats, and each chat has one or more members."),Object(r.b)("p",null,"Chats are stored in Ory Keto within the ",Object(r.b)("inlineCode",{parentName:"p"},"chats")," namespace. They are identified\nby a UUID that the application maps to the actual object metadata. Users are\nalso identified by and mapped to a UUID."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For the sake of readability, the code samples use the name of the chat and\nusername instead of the UUIDs. Please refer to the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/concepts/objects"}),"objects")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/concepts/subjects"}),"subjects"),"\npages for why the mapping is necessary."))),Object(r.b)("h3",{id:"listing-objects"},"Listing Objects"),Object(r.b)("p",null,"Our example application allows users to browse the chats they belong to. To\nachieve that, it uses Ory Keto's list API."),Object(r.b)("p",null,"We assume that the application currently has the following chats:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"memes:\n  members:\n    - PM\n    - Vincent\n    - Julia\ncars:\n  members:\n    - PM\n    - Julia\ncoffee-break:\n  members:\n    - PM\n    - Vincent\n    - Julia\n    - Patrik\n")),Object(r.b)("p",null,"This is represented in Ory Keto by the following\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/concepts/relation-tuples"}),"relation tuples"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-keto-relation-tuples"}),"chats:memes#member@PM\nchats:memes#member@Vincent\nchats:memes#member@Julia\n\nchats:cars#member@PM\nchats:cars#member@Julia\n\nchats:coffee-break#member@PM\nchats:coffee-break#member@Vincent\nchats:coffee-break#member@Julia\nchats:coffee-break#member@Patrik\n")),Object(r.b)("p",null,"The user ",Object(r.b)("inlineCode",{parentName:"p"},"PM")," now opens the chat application. To display a list of all of ",Object(r.b)("inlineCode",{parentName:"p"},"PM"),"'s\nchats, the application uses Keto's list API:"),Object(r.b)(c.a,{sampleId:"list-api-display-objects/01-list-PM",version:"master",mdxType:"CodeTabs"}),Object(r.b)("p",null,"As a response, the application gets the list of all chats the user ",Object(r.b)("inlineCode",{parentName:"p"},"PM")," is a\nmember of. It can then use the information to build the UI."),Object(r.b)("h3",{id:"listing-subjects"},"Listing Subjects"),Object(r.b)("p",null,"Another view of the chat application has to display all members of a specific\ngroup to the user. This can also be achieved using the list API. In cases where\nsuch a membership would be modeled through\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/concepts/subjects#subject-sets"}),"subject sets"),", you have to use the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/guides/expand-api-display-who-has-access"}),"expand-API"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In this case the application should probably first use the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/guides/simple-access-check-guide"}),"check-API")," to check whether the user is\nallowed to list the members of a group. This step is not part of this example."))),Object(r.b)("p",null,"In our example, a user wants to see who is a member of the ",Object(r.b)("inlineCode",{parentName:"p"},"coffee-break")," group:"),Object(r.b)(c.a,{sampleId:"list-api-display-objects/02-list-coffee-break",version:"master",mdxType:"CodeTabs"}),Object(r.b)("h2",{id:"application-context"},"Application Context"),Object(r.b)("p",null,"It is important to note that the list API does ",Object(r.b)("strong",{parentName:"p"},"not")," expand\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/concepts/subjects#subject-sets"}),"subject sets"),'. Usually the application\nhas some context to determine what tuples to query anyway. That could be e.g.\nknowledge of the structure of subject sets like depth or hierarchy, or the UI\ncontext, like a "My Items" view which should probably contain other objects than\na "My Organizations" or "Shared with Me" views. If there really is no way to\nnarrow down a query, you will have to use the\n',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./expand-api-display-who-has-access"}),"expand-API")," instead, or repeatedly call\nthe list API. Try to avoid such cases because they require a lot of resources\nand can quickly degrade the service quality for all users. Please refer to the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/keto/docs/next/performance"}),"performance considerations"),"."),Object(r.b)("h2",{id:"pagination"},"Pagination"),Object(r.b)("p",null,"The list API only returns paginated results. Currently, it is not possible to\ncustomize the order of results. The response returns an opaque token that has to\nbe used to retrieve the following page. The first page can be retrieved by\npassing no, or an empty token."),Object(r.b)("p",null,"The page size can be adjusted at any point, not only when requesting the first\npage. It defaults to 100 items."))}u.isMDXComponent=!0},144:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return a?s.a.createElement(m,o(o({ref:t},l),{},{components:a})):s.a.createElement(m,o({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<r;l++)c[l]=a[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},150:function(e,t,a){"use strict";var n=a(21),s={punctuation:/[:#@()]/},r={pattern:/[^:#@()\n]+:/,inside:Object.assign({},s,{namespace:/.*/})},c={pattern:/[^:#@()\n]+#/,inside:Object.assign({},s,{symbol:/.*/})},o={pattern:/[^:#@()\n]+/,alias:"string"},i={pattern:/@[^:#@()\n]+/,inside:Object.assign({},s,{keyword:/.*/})},l={pattern:/@\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\)/,inside:{punctuation:/[@()]/,namespace:r,object:c,relation:o}};n.a.languages["keto-relation-tuples"]={comment:/\/\/.*(\n|$)/,"relation-tuple":{pattern:/([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]+)@?((\(([^:#@()\n]+:)?([^:#@()\n]+)#([^:#@()\n]*)\))|([^:#@()\n]+))/,inside:{namespace:r,object:c,subjectID:i,subjectSet:l,relation:o}}},t.a=function(){}},216:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(201),c=a(202),o=a(257),i=a.n(o),l=a(215),p=a(55),b=a.n(p),u=function(e,t){if(!e)return 0;var a=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===a?0:a},d=function(e){var t=e.src,a=e.title,r=Object(n.useState)(""),c=r[0],o=r[1];Object(n.useEffect)((function(){var a,n,s;i()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((a=e,n=a.startAt,s=a.endAt,function(e){var t=e.split("\n"),a=u(n,t);a>0&&(t=["// ..."].concat(t.slice(a,-1)));var r=u(s,t);return r>0&&(t=[].concat(t.slice(0,r+1),["// ..."])),t.join("\n")})).then(o).catch(console.error)}),[]);var p="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),d='title="'+(a||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return s.a.createElement("div",{className:b.a.container},s.a.createElement(l.a,{metastring:d,className:p,children:c}))};t.a=function(e){var t=e.sampleId,a=e.version;return s.a.createElement(s.a.Fragment,null,s.a.createElement(r.a,{values:[{label:"gRPC Go",value:"grpc-go"},{label:"gRPC node.js",value:"grpc-nodejs"},{label:"REST",value:"rest"},{label:"Keto Client CLI",value:"cli"}],defaultValue:"grpc-go"},s.a.createElement(c.a,{value:"grpc-go"},s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/main.go"})),s.a.createElement(c.a,{value:"grpc-nodejs"},s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/index.js"})),s.a.createElement(c.a,{value:"rest"},s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/curl.sh"})),s.a.createElement(c.a,{value:"cli"},s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/cli.sh"}))),s.a.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/expected_output.txt",title:"Result"}))}}}]);