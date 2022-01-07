"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[4888],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5967:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Migrating to Keto v0.7"},l=void 0,d={unversionedId:"guides/v0.7-migration",id:"version-v0.7/guides/v0.7-migration",isDocsHomePage:!1,title:"Migrating to Keto v0.7",description:"Ory Keto v0.6 used the table-separated namespaces database schema described in",source:"@site/versioned_docs/version-v0.7/guides/v0.7-migration.mdx",sourceDirName:"guides",slug:"/guides/v0.7-migration",permalink:"/keto/docs/guides/v0.7-migration",editUrl:"https://github.com/ory/keto/edit/master/docs/versioned_docs/version-v0.7/guides/v0.7-migration.mdx",tags:[],version:"v0.7",lastUpdatedBy:"Patrik",lastUpdatedAt:1633706597,formattedLastUpdatedAt:"10/8/2021",frontMatter:{title:"Migrating to Keto v0.7"},sidebar:"version-v0.7/docs",previous:{title:"Going to Production",permalink:"/keto/docs/guides/production"},next:{title:"Role Based Access Control (RBAC)",permalink:"/keto/docs/guides/rbac"}},p=[{value:"Preparations",id:"preparations",children:[],level:2},{value:"Recommended Procedure",id:"recommended-procedure",children:[],level:2},{value:"Options for Adjusting the Migration Process",id:"options-for-adjusting-the-migration-process",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ory Keto v0.6 used the table-separated namespaces database schema described in\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://research.google/pubs/pub48190/"},"Google Zanzibar paper"),". However, we\nfound for various reasons outlined in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ory/keto/issues/613"},"#613")," that this is not ideal for Keto."),(0,i.kt)("p",null,"Because the database schema changed significantly, and it is not possible to\nhave SQL-only migrations, there is a special migration procedure needed to\nupgrade Ory Keto v0.6."),(0,i.kt)("h2",{id:"preparations"},"Preparations"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As always with database migrations, please make a backup of your data and try\nthe migration process first on a non-production copy of the database."))),(0,i.kt)("p",null,"This migration has to download all the data from the database, transform them,\nand then write them back to the database. Make sure that you run it as close to\nthe database as possible to reduce the latency and failure rate. In case of a\nfailure, just restart the process. It is run as one big SQL transaction."),(0,i.kt)("h2",{id:"recommended-procedure"},"Recommended Procedure"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is the ",(0,i.kt)("strong",{parentName:"p"},"recommended")," procedure. Please adjust to your setup and ",(0,i.kt)("strong",{parentName:"p"},"test"),"\nbefore applying to a production system. You might want to create a migration\nscript that applies all these steps and handles errors."))),(0,i.kt)("p",null,"This procedure is zero-downtime only for read API requests. The write API will\nnot be available during migration."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new database user (from now on ",(0,i.kt)("inlineCode",{parentName:"li"},"keto_new"),") with the same privileges\nas the one used until now (let's say it was ",(0,i.kt)("inlineCode",{parentName:"li"},"keto"),")."),(0,i.kt)("li",{parentName:"ol"},"Start a server instance of Keto v0.7 next to the already running Keto v0.6.\nIt should have the same settings, but use ",(0,i.kt)("inlineCode",{parentName:"li"},"keto_new")," for accessing the\ndatabase."),(0,i.kt)("li",{parentName:"ol"},"Change the privileges of ",(0,i.kt)("inlineCode",{parentName:"li"},"keto")," to be read-only on all tables."),(0,i.kt)("li",{parentName:"ol"},"Still route all traffic to the old Keto. Write API requests will fail from\nnow on, but the Read API will be zero-downtime."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"keto migrate up --yes")," considering the points raised in\n",(0,i.kt)("a",{parentName:"li",href:"#preparations"},"preparations"),". This command will apply SQL schema changes,\nbut not yet migrate data."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"keto namespace migrate legacy --yes")," considering the points raised in\n",(0,i.kt)("a",{parentName:"li",href:"#preparations"},"preparations"),". This command will migrate ",(0,i.kt)("strong",{parentName:"li"},"all")," namespaces\n",(0,i.kt)("strong",{parentName:"li"},"and")," delete the old tables on success."),(0,i.kt)("li",{parentName:"ol"},"In case of failure, re-run the command until it succeeds."),(0,i.kt)("li",{parentName:"ol"},"In case of log statements stating\n",(0,i.kt)("inlineCode",{parentName:"li"},"Skipping relation tuple, it seems to be in a broken state. Please recreate it manually."),"\nnote down the logged data somewhere and recreate the relation tuples in\nquestion once the migration is done using the API."),(0,i.kt)("li",{parentName:"ol"},"After the migration is successfully done, route all traffic to Keto v0.7 and\nshut down Keto v0.6. At this point the API is fully operational again.")),(0,i.kt)("h2",{id:"options-for-adjusting-the-migration-process"},"Options for Adjusting the Migration Process"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"keto namespace migrate legacy")," command supports multiple options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"interactive mode with manual approval by not specifying ",(0,i.kt)("inlineCode",{parentName:"li"},"--yes")),(0,i.kt)("li",{parentName:"ul"},"migrate single namespace by specifying its name as an argument"),(0,i.kt)("li",{parentName:"ul"},"only delete old tables by specifying ",(0,i.kt)("inlineCode",{parentName:"li"},"--down-only"),"; useful if you did not\napprove the down migration previously")))}m.isMDXComponent=!0}}]);