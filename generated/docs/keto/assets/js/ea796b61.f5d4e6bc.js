"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[9401],{58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),s=a(67294),r=a(72389),o=a(79443);var i=function(){var e=(0,s.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(89521),c=a(86010),u="tabItem_1uMI";function p(e){var t,a,n,r=e.lazy,o=e.block,p=e.defaultValue,d=e.values,h=e.groupId,m=e.className,f=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),y=w.tabGroupChoices,k=w.setTabGroupChoices,x=(0,s.useState)(g),j=x[0],N=x[1],E=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=y[h];null!=I&&I!==j&&v.some((function(e){return e.value===I}))&&N(I)}var A=function(e){var t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==j&&(T(t),N(n),null!=h&&k(h,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var s=E.indexOf(e.currentTarget)-1;a=E[s]||E[E.length-1]}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},m)},v.map((function(e){var t=e.value,a=e.label;return s.createElement("li",{role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":j===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:A,onClick:A},null!=a?a:t)}))),r?(0,s.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,r.Z)();return s.createElement(p,(0,n.Z)({key:String(t)},e))}},95419:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(67294),s=a(26396),r=a(58215),o=a(83300),i=a.n(o),l=a(19055),c="container_2x1S",u=a(25108),p=function(e,t){if(!e)return 0;var a=t.findIndex((function(t){return t.indexOf(e)>-1}));return-1===a?0:a},d=function(e){var t=e.src,a=e.title,s=(0,n.useState)(""),r=s[0],o=s[1];(0,n.useEffect)((function(){var a,n,s;i()(t.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(e){return e.text()})).then((a=e,n=a.startAt,s=a.endAt,function(e){var t=e.split("\n"),a=p(n,t);a>0&&(t=["// ..."].concat(t.slice(a,-1)));var r=p(s,t);return r>0&&(t=[].concat(t.slice(0,r+1),["// ..."])),t.join("\n")})).then(o).catch(u.error)}),[]);var d="language-"+function(e){var t=e.split(".").pop();switch(t){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return t}}(t),h='title="'+(a||function(e){var t=e.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return t.length>=2?t[1]:e}(t))+'"';return n.createElement("div",{className:c},n.createElement(l.Z,{metastring:h,className:d,children:r}))},h=function(e){var t=e.sampleId,a=e.version;return n.createElement(n.Fragment,null,n.createElement(s.Z,{values:[{label:"gRPC Go",value:"grpc-go"},{label:"gRPC node.js",value:"grpc-nodejs"},{label:"REST",value:"rest"},{label:"Keto Client CLI",value:"cli"}],defaultValue:"grpc-go"},n.createElement(r.Z,{value:"grpc-go"},n.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/main.go"})),n.createElement(r.Z,{value:"grpc-nodejs"},n.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/index.js"})),n.createElement(r.Z,{value:"rest"},n.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/curl.sh"})),n.createElement(r.Z,{value:"cli"},n.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/cli.sh"}))),n.createElement(d,{src:"https://github.com/ory/keto/blob/"+a+"/contrib/docs-code-samples/"+t+"/expected_output.txt",title:"Result"}))}},51799:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),o=a(95419),i=["components"],l={title:"Expand API: Display who has Access to an Object"},c=void 0,u={unversionedId:"guides/expand-api-display-who-has-access",id:"version-v0.6/guides/expand-api-display-who-has-access",isDocsHomePage:!1,title:"Expand API: Display who has Access to an Object",description:"This guide will explain how to use Ory Keto's expand-API to display who has",source:"@site/versioned_docs/version-v0.6/guides/expand-api-display-who-has-access.mdx",sourceDirName:"guides",slug:"/guides/expand-api-display-who-has-access",permalink:"/keto/docs/v0.6/guides/expand-api-display-who-has-access",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.6/guides/expand-api-display-who-has-access.mdx",tags:[],version:"v0.6",lastUpdatedBy:"Patrik",lastUpdatedAt:1620725654,formattedLastUpdatedAt:"5/11/2021",frontMatter:{title:"Expand API: Display who has Access to an Object"},sidebar:"version-v0.6/docs",previous:{title:"List API: Display all Objects a User has Access to",permalink:"/keto/docs/v0.6/guides/list-api-display-objects"},next:{title:"Going to Production",permalink:"/keto/docs/v0.6/guides/production"}},p=[{value:"Example",id:"example",children:[{value:"Displaying who has Access",id:"displaying-who-has-access",children:[],level:3},{value:"Maximum Tree Depth",id:"maximum-tree-depth",children:[],level:3},{value:"Analyzing the Tree",id:"analyzing-the-tree",children:[],level:3}],level:2}],d={toc:p};function h(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide will explain how to use Ory Keto's expand-API to display who has\naccess to an object, and why. Please refer to the\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/reference/proto-api"},"gRPC")," and ",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/reference/rest-api"},"REST")," API\nreference documentation for all details. In general, the expand-API allows to\nexpand a given subject set into all its effective subjects."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"As an example, we want to look at a file sharing application. Files are\nhierarchically organized in a directory structure. Every user owns files and\ndirectories, and can grant any other user access to them on a per-file or\nper-directory basis. Users can only see and access files they own or were\ngranted access by the owner."),(0,r.kt)("p",null,"Directories and files are stored in Ory Keto within the ",(0,r.kt)("inlineCode",{parentName:"p"},"directories")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"files")," namespaces respectively. They are identified by a UUID that the\napplication maps to the actual object metadata. Users are also identified by and\nmapped to a UUID."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For the sake of readability, the code samples use the object path and user name\ninstead. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/objects"},"objects")," and\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/subjects"},"subjects")," pages for why the mapping is necessary."))),(0,r.kt)("h3",{id:"displaying-who-has-access"},"Displaying who has Access"),(0,r.kt)("p",null,"To assist users with managing permissions for their files, the application has\nto display exactly who has access to a file and why. In this example, we assume\nthat the application knows the following files and directories:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500 photos            (owner: maureen; shared with laura)\n   \u251c\u2500 beach.jpg      (owner: maureen)\n   \u251c\u2500 mountains.jpg  (owner: laura)\n")),(0,r.kt)("p",null,"This is represented in Ory Keto by the following\n",(0,r.kt)("a",{parentName:"p",href:"/keto/docs/v0.6/concepts/relation-tuples"},"relation tuples"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"// ownership\ndirectories:/photos#owner@maureen\nfiles:/photos/beach.jpg#owner@maureen\nfiles:/photos/mountains.jpg#owner@laura\n\n// maureen granted access to /photos to laura\ndirectories:/photos#access@laura\n\n// the following tuples are defined implicitly through subject set rewrites (not supported yet)\ndirectories:/photos#access@(directories:/photos#owner)\nfiles:/photos/beach.jpg#access@(files:/photos/beach.jpg#owner)\nfiles:/photos/beach.jpg#access@(directories:/photos#access)\nfiles:/photos/mountains.jpg#access@(files:/photos/mountains.jpg#owner)\nfiles:/photos/mountains.jpg#access@(directories:/photos#access)\n\n// the follwoing tuples are required to allow the subject set rewrites (not supported yet)\ndirectories:/photos#parent@(files:/photos/beach.jpg#_)\ndirectories:/photos#parent@(files:/photos/mountains.jpg#_)\n")),(0,r.kt)("p",null,"The user ",(0,r.kt)("inlineCode",{parentName:"p"},"maureen")," now wants to manage ",(0,r.kt)("inlineCode",{parentName:"p"},"access")," for the file\n",(0,r.kt)("inlineCode",{parentName:"p"},"/photos/beach.jpg"),". Therefore, the application uses the expand-API to get a\ntree of everyone who has access to that file:"),(0,r.kt)(o.Z,{sampleId:"expand-api-display-access/01-expand-beach",version:"v0.6.0-alpha.3",mdxType:"CodeTabs"}),(0,r.kt)("h3",{id:"maximum-tree-depth"},"Maximum Tree Depth"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"max-depth")," parameter is important to keep the request latency within an\nacceptable bound, but also abstract away the most basic subject sets. In many\ncases the application does not want to resolve all subject sets, but rather\nwants to display that e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Everyone in the company")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Admins")," have a specific\nrelation."),(0,r.kt)("p",null,"In this example the application knows the rough structure of the relation tuples\nit uses and can therefore determine that ",(0,r.kt)("inlineCode",{parentName:"p"},"max-depth=3")," is sufficient to display\nall relevant relations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"directly granted access (depth 1)"),(0,r.kt)("li",{parentName:"ol"},"indirectly granted access through ownership (depth 2)"),(0,r.kt)("li",{parentName:"ol"},"indirectly granted access through ownership of the parent (depth 3)")),(0,r.kt)("h3",{id:"analyzing-the-tree"},"Analyzing the Tree"),(0,r.kt)("p",null,"The tree does not only include the subject IDs (in this case usernames), but\nalso for what reason they were included. This can be useful for users to audits\npermissions. Also, in many cases the application would not want to list all\nsubject IDs but rather abstract away some subject sets."))}h.isMDXComponent=!0},83300:function(e,t){var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();e.exports=t=a.fetch,a.fetch&&(t.default=a.fetch.bind(a)),t.Headers=a.Headers,t.Request=a.Request,t.Response=a.Response}}]);