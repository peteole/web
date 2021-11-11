"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4143],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14882:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={id:"create-project",title:"Create Ory Cloud Project"},s=void 0,l={unversionedId:"start-building/create-project",id:"start-building/create-project",isDocsHomePage:!1,title:"Create Ory Cloud Project",description:"This guide describes the practical steps to create an Ory Cloud Project. If you",source:"@site/docs/start-building/create-project.mdx",sourceDirName:"start-building",slug:"/start-building/create-project",permalink:"/docs/start-building/create-project",editUrl:"https://github.com/ory/docs/edit/master/docs/docs/start-building/create-project.mdx",tags:[],version:"current",lastUpdatedBy:"Vincent",lastUpdatedAt:1636627910,formattedLastUpdatedAt:"11/11/2021",frontMatter:{id:"create-project",title:"Create Ory Cloud Project"},sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/get-started"},next:{title:"Choose Your Technology",permalink:"/docs/start-building"}},d=[{value:"Set up Ory account",id:"set-up-ory-account",children:[],level:2},{value:"Create Ory Cloud Project",id:"create-ory-cloud-project",children:[{value:"Project Name",id:"project-name",children:[],level:3},{value:"Identity Schema",id:"identity-schema",children:[],level:3},{value:"Authentication Options",id:"authentication-options",children:[],level:3},{value:"Finalize Creation",id:"finalize-creation",children:[],level:3}],level:2},{value:"Create Personal Access Token",id:"create-personal-access-token",children:[],level:2},{value:"What&#39;s next?",id:"whats-next",children:[],level:2}],p={toc:d};function u(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide describes the practical steps to create an Ory Cloud Project. If you\nwant to learn more about Ory Cloud Projects, please visit the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/project"},"concepts")," documentation."),(0,o.kt)("h2",{id:"set-up-ory-account"},"Set up Ory account"),(0,o.kt)("p",null,"If you haven't already, sign up at the Ory Cloud Console:\n",(0,o.kt)("a",{parentName:"p",href:"https://console.ory.sh"},"console.ory.sh")),(0,o.kt)("h2",{id:"create-ory-cloud-project"},"Create Ory Cloud Project"),(0,o.kt)("p",null,'Hit "Create Project" in the Console menu to bring up the project creation\nscreen.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ory Cloud Project creation screen",src:n(53249).Z})),(0,o.kt)("h3",{id:"project-name"},"Project Name"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ory Cloud Project creation screen",src:n(19854).Z})),(0,o.kt)("p",null,"Enter a project name to identify the project. This name is only visible in the\nOry Cloud Console."),(0,o.kt)("h3",{id:"identity-schema"},"Identity Schema"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Choose Identity Schema for Ory Cloud Project",src:n(29302).Z})),(0,o.kt)("p",null,"The Identity Schema is a JSON Schema that describes your identity's (e.g. your\ncustomers/users/...) fields. In Ory, every identity can have its schema,\nallowing you to separate between different customer types, user types (e.g.\nemployees and customers)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/identity"},"Learn more about the Identity Schema"),', the available\nprofiles, and customization options! For the quickstart, we recommend the "Demo\nProfile" model.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'The "Demo Profile" is a preset schema for technical demonstrations. Do not use\nit in real applications as we will eventually change or delete this profile.'))),(0,o.kt)("h3",{id:"authentication-options"},"Authentication Options"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable &quot;session after registration&quot; for Ory Cloud Project",src:n(55871).Z})),(0,o.kt)("p",null,"For demo applications, we recommend enabling sign-in after registration."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Enable sign-in after registration disables account enumeration defenses!"))),(0,o.kt)("h3",{id:"finalize-creation"},"Finalize Creation"),(0,o.kt)("p",null,'Next, hit "Create" and fill out the details on the checkout page. Your project\nshould come alive shortly after!'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Created Ory Cloud Project in the project list",src:n(23626).Z})),(0,o.kt)("h2",{id:"create-personal-access-token"},"Create Personal Access Token"),(0,o.kt)("p",null,"Personal Access Tokens are bound to a project. They are needed to access\nadministrative APIs (e.g. deleting an identity, using the Ory CLI, ...)."),(0,o.kt)("p",null,'Head over to the "Personal Access Token" page'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Personal Access Token list",src:n(98745).Z})),(0,o.kt)("p",null,"and click on the plus symbol to create a new token."),(0,o.kt)("p",null,"Once created, a dialog will appear on the bottom left containing your access\ntoken. Copy this into a password manager or another safe place. The token will\nnever be displayed again! If you forget it, you will need to create a new token."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Personal Access Token",src:n(33262).Z})),(0,o.kt)("p",null,"To learn more about PATs, visit to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/personal-access-token"},"Personal Access Token concept documentation"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Personal Access Tokens are an interim security mechanism. In the future, more\nsecure mechanisms such as JWT Assertions and mTLS will be supported."))),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"You created your first Ory Cloud Project. Now it's time to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/start-building"},"start building"),"!"),(0,o.kt)("p",null,"Or if you want to learn more about Ory Cloud Projects, head to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/project"},"concepts documentation"),"."))}u.isMDXComponent=!0},98745:function(e,t,n){t.Z=n.p+"assets/images/pat-list-3f4c6e66f4a5b57cd16a2a53085f327c.png"},33262:function(e,t,n){t.Z=n.p+"assets/images/pat-ready-44f96995109b29c34f57644961e18cb2.png"},19854:function(e,t,n){t.Z=n.p+"assets/images/project-create-details-7f44ef786ea75837a1d3935511f0196f.png"},29302:function(e,t,n){t.Z=n.p+"assets/images/project-create-identity-model-b73e92b92c026cf39fb11ab5d704b564.png"},55871:function(e,t,n){t.Z=n.p+"assets/images/project-create-session-hook-0b25bc4fd806c4013340d58a1ee1a868.png"},53249:function(e,t,n){t.Z=n.p+"assets/images/project-create-f3cfe82e8f1697403b4c15be3c8e54fc.png"},23626:function(e,t,n){t.Z=n.p+"assets/images/project-created-ff77270a853b75036c9a56cd5f6014c8.png"}}]);