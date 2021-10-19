(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[485],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24371:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=["components"],s={title:"Quickstart: Cat Videos Example"},l=void 0,c={unversionedId:"quickstart",id:"version-v0.7/quickstart",isDocsHomePage:!1,title:"Quickstart: Cat Videos Example",description:"This example describes a video sharing service. The individual videos are",source:"@site/versioned_docs/version-v0.7/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/keto/docs/quickstart",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.7/quickstart.mdx",tags:[],version:"v0.7",lastUpdatedBy:"zepatrik",lastUpdatedAt:1634658829,formattedLastUpdatedAt:"10/19/2021",frontMatter:{title:"Quickstart: Cat Videos Example"},sidebar:"version-v0.7/docs",previous:{title:"Performance",permalink:"/keto/docs/performance"},next:{title:"Relation Tuples",permalink:"/keto/docs/concepts/relation-tuples"}},p=[{value:"Starting the Example",id:"starting-the-example",children:[]},{value:"State of the System",id:"state-of-the-system",children:[]},{value:"Simulating the Video Sharing Application",id:"simulating-the-video-sharing-application",children:[{value:"Check Incoming Requests",id:"check-incoming-requests",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'This example describes a video sharing service. The individual videos are\norganized in directories. Every directory has an owner and every video has the\nsame owner as it\'s parent directory. The owner has elevated privileges about the\nvideo files that are not modeled individually in Ory Keto. The only other\nprivilege modeled in this example is "view access." Every owner has view access\nto their objects, and this privilege can be granted to other users as well. The\nvideo sharing application interprets the special ',(0,o.kt)("inlineCode",{parentName:"p"},"*")," user ID as any user,\nincluding anonymous users. Note that Ory Keto does not interpret this subject\nany differently from other subjects. It also does not know anything about\ndirectory structures or induced ownership."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Terminology")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'The "Keto client" is the application interacting with Keto. In this case we\nrefer to the video sharing service backend as the Keto client.'))),(0,o.kt)("h2",{id:"starting-the-example"},"Starting the Example"),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/install"},"install Keto"),"."),(0,o.kt)("p",null,"Now you can start the example using either ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," or a bash script.\nThe bash script requires you to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"keto")," binary in your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,o.kt)("p",null,"Alternatively, use Docker to automatically get the required images."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# clone the repository if you don't have it yet\ngit clone git@github.com:ory/keto.git && cd keto\n\ndocker-compose -f contrib/cat-videos-example/docker-compose.yml up\n# or\n./contrib/cat-videos-example/up.sh\n\n# output: all initially created relation tuples\n\n# NAMESPACE       OBJECT          RELATION NAME   SUBJECT\n# videos          /cats/1.mp4     owner           videos:/cats#owner\n# videos          /cats/1.mp4     view            videos:/cats/1.mp4#owner\n# videos          /cats/1.mp4     view            *\n# videos          /cats/2.mp4     owner           videos:/cats#owner\n# videos          /cats/2.mp4     view            videos:/cats/2.mp4#owner\n# videos          /cats           owner           cat lady\n# videos          /cats           view            videos:/cats#owner\n")),(0,o.kt)("h2",{id:"state-of-the-system"},"State of the System"),(0,o.kt)("p",null,"At the current state only one user with the username ",(0,o.kt)("inlineCode",{parentName:"p"},"cat lady")," has added\nvideos. Both videos are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/cats")," directory owned by ",(0,o.kt)("inlineCode",{parentName:"p"},"cat lady"),". The file\n",(0,o.kt)("inlineCode",{parentName:"p"},"/cats/1.mp4")," can be viewed by anyone (",(0,o.kt)("inlineCode",{parentName:"p"},"*"),"), while ",(0,o.kt)("inlineCode",{parentName:"p"},"/cats/2.mp4")," has no extra\nsharing options, and can therefore only be viewed by its owner, ",(0,o.kt)("inlineCode",{parentName:"p"},"cat lady"),". The\nrelation tuple definitions are located in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"contrib/cat-videos-example/relation-tuples")," directory."),(0,o.kt)("h2",{id:"simulating-the-video-sharing-application"},"Simulating the Video Sharing Application"),(0,o.kt)("p",null,"Now you can open a second terminal to run the queries against, just like the\nvideo service client would do. In this example we will use the Keto CLI client."),(0,o.kt)("p",null,"If you want to run the Keto CLI within ",(0,o.kt)("strong",{parentName:"p"},"Docker"),", set the alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'alias keto="docker run -it --network cat-videos-example_default -e KETO_READ_REMOTE=\\"keto:4466\\" oryd/keto:v0.7.0-alpha.1"\n')),(0,o.kt)("p",null,"in your terminal session. Alternatively, you need to set the remote endpoint so\nthat the Keto CLI knows where to connect to (not necessary if using Docker):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export KETO_READ_REMOTE="127.0.0.1:4466"\n')),(0,o.kt)("h3",{id:"check-incoming-requests"},"Check Incoming Requests"),(0,o.kt)("p",null,"First off, we get a request by an anonymous user that would like to view\n",(0,o.kt)("inlineCode",{parentName:"p"},"/cats/2.mp4"),". The client now has to ask Keto if that operation should be\nallowed or denied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Is "*" allowed to "view" the object "videos":"/cats/2.mp4"?\nketo check "*" view videos /cats/2.mp4\n# output:\n\n# Denied\n')),(0,o.kt)("p",null,"We already discussed that this request should be denied, but it is always good\nto see this in action."),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"cat lady")," wants to change some view permissions of ",(0,o.kt)("inlineCode",{parentName:"p"},"/cats/1.mp4"),". For this,\nthe video service application has to show all users that are currently allowed\nto view the video. It uses Keto's\n",(0,o.kt)("a",{parentName:"p",href:"/keto/docs/concepts/api-overview#expand-subject-set"},"expand-API")," to get these data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Who is allowed to "view" the object "videos":"/cats/2.mp4"?\nketo expand view videos /cats/1.mp4\n# output:\n\n# \u222a videos:/cats/1.mp4#view\n# \u251c\u2500 \u222a videos:/cats/1.mp4#owner\n# \u2502  \u251c\u2500 \u222a videos:/cats#owner\n# \u2502  \u2502  \u251c\u2500 \u2618 cat lady\ufe0f\n# \u251c\u2500 \u2618 *\ufe0f\n')),(0,o.kt)("p",null,"Here we can see the full subject set expansion. The first branch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"videos:/cats/1.mp4#view\n")),(0,o.kt)("p",null,"indicates that every owner of the object is allowed to view"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"videos:/cats/1.mp4#owner\n")),(0,o.kt)("p",null,"In the next step we see that the object's owners are the owners of ",(0,o.kt)("inlineCode",{parentName:"p"},"/cats")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-keto-relation-tuples"},"videos:/cats#owner\n")),(0,o.kt)("p",null,"Finally, we see that ",(0,o.kt)("inlineCode",{parentName:"p"},"cat lady")," is the owner of ",(0,o.kt)("inlineCode",{parentName:"p"},"/cats"),"."),(0,o.kt)("p",null,"Note that there is no direct relation tuple that would grant ",(0,o.kt)("inlineCode",{parentName:"p"},"cat lady")," view\naccess on ",(0,o.kt)("inlineCode",{parentName:"p"},"/cats/1.mp4")," as this is indirectly defined via the ownership\nrelation."),(0,o.kt)("p",null,"The special user ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," on the other hand was directly granted view access on the\nobject, as it is a first-level leaf of the expansion tree. The following CLI\ncommand proves that this is the case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# Is "*" allowed to "view" the object "videos":"/cats/1.mp4"?\nketo check "*" view videos /cats/1.mp4\n# output:\n\n# Allowed\n')),(0,o.kt)("p",null,"Updating the view permissions will be added here at a later stage."))}u.isMDXComponent=!0}}]);