(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(6),l=(n(0),n(313)),r={id:"login-consent-flow",title:"Hydra's User Login and Consent Flow",sidebar_label:"Hydra workflow"},i={unversionedId:"login-consent-flow",id:"login-consent-flow",isDocsHomePage:!1,title:"Hydra's User Login and Consent Flow",description:"ORY Hydra uses a User Login and Consent Flow to include third-party user",source:"@site/docs/login-consent-flow.md",permalink:"/hydra/docs/next/login-consent-flow",editUrl:"https://github.com/ory/hydra/edit/master/docs/docs/login-consent-flow.md",version:"next",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,sidebar_label:"Hydra workflow"},c=[{value:"The flow steps",id:"the-flow-steps",children:[{value:"The flow from a user&#39;s point of view",id:"the-flow-from-a-users-point-of-view",children:[]},{value:"The flow from a network perspective",id:"the-flow-from-a-network-perspective",children:[]}]}],s={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"ORY Hydra uses a ",Object(l.b)("strong",{parentName:"p"},"User Login and Consent Flow")," to include third-party user\nmanagement (implemented by you) into the OAuth 2.0 and OpenID Connect\nauthorization flow. An incoming authorization request is redirected to:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"the ",Object(l.b)("strong",{parentName:"li"},"Login Provider"),": authenticates the user by validating his or her\ncredentials (login)"),Object(l.b)("li",{parentName:"ol"},"the ",Object(l.b)("strong",{parentName:"li"},"Consent Provider"),': allows to select the OAuth 2.0 scopes that should\nbe granted to the requesting application ("Do you want to allow foobar-app\naccess to all your personal messages and images?")')),Object(l.b)("p",null,"You implement the Login and Consent providers in the technology stack of your\nchoice."),Object(l.b)("h2",{id:"the-flow-steps"},"The flow steps"),Object(l.b)("p",null,"The flow itself works as follows:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The OAuth 2.0 Client initiates an Authorize Code, Hybrid, or Implicit flow.\nThe user's user agent is redirect to\n",Object(l.b)("inlineCode",{parentName:"li"},"http://hydra/oauth2/auth?client_id=...&..."),"."),Object(l.b)("li",{parentName:"ol"},'ORY Hydra, if unable to authenticate the user (= no session cookie exists),\nredirects the user\'s user agent to the Login Provider URL. The application\n"sitting" at that URL is implemented by you and typically shows a login user\ninterface ("Please enter your username and password"). The URL the user is\nredirect to looks similar to\n',Object(l.b)("inlineCode",{parentName:"li"},"http://login-service/login?login_challenge=1234..."),"."),Object(l.b)("li",{parentName:"ol"},"The Login Provider, once the user has successfully logged in, tells ORY Hydra\nsome information about who the user is (e.g. the user's ID) and also that the\nlogin attempt was successful. This is done using a REST request which\nincludes another redirect URL along the lines of\n",Object(l.b)("inlineCode",{parentName:"li"},"http://hydra/oauth2/auth?client_id=...&...&login_verifier=4321"),"."),Object(l.b)("li",{parentName:"ol"},"The user's user agent follows the redirect and lands back at ORY Hydra. Next,\nORY Hydra redirects the user's user agent to the Consent Provider, hosted\nat - for example - ",Object(l.b)("inlineCode",{parentName:"li"},"http://consent-service/consent?consent_challenge=4567...")),Object(l.b)("li",{parentName:"ol"},'The Consent Provider shows a user interface which asks the user if he/she\nwould like to grant the OAuth 2.0 Client the requested permissions ("OAuth\n2.0 Scope"). You\'ve probably seen this screen around, which is usually\nsomething similar to: ',Object(l.b)("em",{parentName:"li"},'"Would you like to grant Facebook Image Backup access\nto all your private and public images?"'),"."),Object(l.b)("li",{parentName:"ol"},"The Consent Provider makes another REST request to ORY Hydra to let it know\nwhich permissions the user authorized, and if the user authorized the request\nat all. The user can usually choose to not grant an application any access to\nhis/her personal data. In the response of that REST request, a redirect URL\nis included along the lines of\n",Object(l.b)("inlineCode",{parentName:"li"},"http://hydra/oauth2/auth?client_id=...&...&consent_verifier=7654..."),"."),Object(l.b)("li",{parentName:"ol"},"The user's user agent follows that redirect."),Object(l.b)("li",{parentName:"ol"},"Now, the user has successfully authenticated and authorized the application.\nNext, ORY Hydra will run some checks and if everything works out, issue\naccess, refresh, and ID tokens.")),Object(l.b)("p",null,"This flow allows you to take full control of the behaviour of your login system\n(e.g. 2FA, passwordless, ...) and consent screen. A well-documented reference\nimplementation for both the Login and\n",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ory/hydra-login-consent-node"}),"Consent Provider is available on GitHub"),"."),Object(l.b)("h3",{id:"the-flow-from-a-users-point-of-view"},"The flow from a user's point of view"),Object(l.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/txUmfORzu8Y",frameborder:"0",allowfullscreen:!0}),Object(l.b)("h3",{id:"the-flow-from-a-network-perspective"},"The flow from a network perspective"),Object(l.b)("p",null,Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgT0F1dGgyIENsaWVudC0-Pk9SWSBIeWRyYTogSW5pdGlhdGVzIE9BdXRoMiBBdXRob3JpemUgQ29kZSBvciBJbXBsaWNpdCBGbG93XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogTm8gZW5kIHVzZXIgc2Vzc2lvbiBhdmFpbGFibGUgKG5vdCBhdXRoZW50aWNhdGVkKVxuICAgIE9SWSBIeWRyYS0-PkxvZ2luIFByb3ZpZGVyOiBSZWRpcmVjdHMgZW5kIHVzZXIgd2l0aCBsb2dpbiBjaGFsbGVuZ2VcbiAgICBMb2dpbiBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dpbiBpbmZvXG4gICAgTG9naW4gUHJvdmlkZXItLT4-TG9naW4gUHJvdmlkZXI6IEF1dGhlbnRpY2F0ZXMgdXNlciB3aXRoIGNyZWRlbnRpYWxzXG4gICAgTG9naW4gUHJvdmlkZXItLT5PUlkgSHlkcmE6IFRyYW5zbWl0cyBsb2dpbiBpbmZvIGFuZCByZWNlaXZlcyByZWRpcmVjdCB1cmwgd2l0aCBsb2dpbiB2ZXJpZmllclxuICAgIExvZ2luIFByb3ZpZGVyLT4-T1JZIEh5ZHJhOiBSZWRpcmVjdHMgZW5kIHVzZXIgdG8gcmVkaXJlY3QgdXJsIHdpdGggbG9naW4gdmVyaWZpZXJcbiAgICBPUlkgSHlkcmEtLT4-T1JZIEh5ZHJhOiBGaXJzdCB0aW1lIHRoYXQgY2xpZW50IGFza3MgdXNlciBmb3IgcGVybWlzc2lvbnNcbiAgICBPUlkgSHlkcmEtPj5Db25zZW50IFByb3ZpZGVyOiBSZWRpcmVjdHMgZW5kIHVzZXIgd2l0aCBjb25zZW50IGNoYWxsZW5nZVxuICAgIENvbnNlbnQgUHJvdmlkZXItLT5PUlkgSHlkcmE6IEZldGNoZXMgY29uc2VudCBpbmZvICh3aGljaCB1c2VyLCB3aGF0IGFwcCwgd2hhdCBzY29wZXMpXG4gICAgQ29uc2VudCBQcm92aWRlci0tPj5Db25zZW50IFByb3ZpZGVyOiBBc2tzIGZvciBlbmQgdXNlcidzIHBlcm1pc3Npb24gdG8gZ3JhbnQgYXBwbGljYXRpb24gYWNjZXNzXG4gICAgQ29uc2VudCBQcm92aWRlci0tPk9SWSBIeWRyYTogVHJhbnNtaXRzIGNvbnNlbnQgcmVzdWx0IGFuZCByZWNlaXZlcyByZWRpcmVjdCB1cmwgd2l0aCBjb25zZW50IHZlcmlmaWVyXG4gICAgQ29uc2VudCBQcm92aWRlci0-Pk9SWSBIeWRyYTogUmVkaXJlY3RzIHRvIHJlZGlyZWN0IHVybCB3aXRoIGNvbnNlbnQgdmVyaWZpZXJcbiAgICBPUlkgSHlkcmEtLT4-T1JZIEh5ZHJhOiBWZXJpZmllcyBncmFudFxuICAgIE9SWSBIeWRyYS0-Pk9BdXRoMiBDbGllbnQ6IFRyYW5zbWl0cyBhdXRob3JpemF0aW9uIGNvZGUvdG9rZW4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ"}),Object(l.b)("img",Object(o.a)({parentName:"a"},{src:"https://mermaid.ink/img/eyJjb2RlIjoic2VxdWVuY2VEaWFncmFtXG4gICAgT0F1dGgyIENsaWVudC0-Pk9SWSBIeWRyYTogSW5pdGlhdGVzIE9BdXRoMiBBdXRob3JpemUgQ29kZSBvciBJbXBsaWNpdCBGbG93XG4gICAgT1JZIEh5ZHJhLS0-Pk9SWSBIeWRyYTogTm8gZW5kIHVzZXIgc2Vzc2lvbiBhdmFpbGFibGUgKG5vdCBhdXRoZW50aWNhdGVkKVxuICAgIE9SWSBIeWRyYS0-PkxvZ2luIFByb3ZpZGVyOiBSZWRpcmVjdHMgZW5kIHVzZXIgd2l0aCBsb2dpbiBjaGFsbGVuZ2VcbiAgICBMb2dpbiBQcm92aWRlci0tPk9SWSBIeWRyYTogRmV0Y2hlcyBsb2dpbiBpbmZvXG4gICAgTG9naW4gUHJvdmlkZXItLT4-TG9naW4gUHJvdmlkZXI6IEF1dGhlbnRpY2F0ZXMgdXNlciB3aXRoIGNyZWRlbnRpYWxzXG4gICAgTG9naW4gUHJvdmlkZXItLT5PUlkgSHlkcmE6IFRyYW5zbWl0cyBsb2dpbiBpbmZvIGFuZCByZWNlaXZlcyByZWRpcmVjdCB1cmwgd2l0aCBsb2dpbiB2ZXJpZmllclxuICAgIExvZ2luIFByb3ZpZGVyLT4-T1JZIEh5ZHJhOiBSZWRpcmVjdHMgZW5kIHVzZXIgdG8gcmVkaXJlY3QgdXJsIHdpdGggbG9naW4gdmVyaWZpZXJcbiAgICBPUlkgSHlkcmEtLT4-T1JZIEh5ZHJhOiBGaXJzdCB0aW1lIHRoYXQgY2xpZW50IGFza3MgdXNlciBmb3IgcGVybWlzc2lvbnNcbiAgICBPUlkgSHlkcmEtPj5Db25zZW50IFByb3ZpZGVyOiBSZWRpcmVjdHMgZW5kIHVzZXIgd2l0aCBjb25zZW50IGNoYWxsZW5nZVxuICAgIENvbnNlbnQgUHJvdmlkZXItLT5PUlkgSHlkcmE6IEZldGNoZXMgY29uc2VudCBpbmZvICh3aGljaCB1c2VyLCB3aGF0IGFwcCwgd2hhdCBzY29wZXMpXG4gICAgQ29uc2VudCBQcm92aWRlci0tPj5Db25zZW50IFByb3ZpZGVyOiBBc2tzIGZvciBlbmQgdXNlcidzIHBlcm1pc3Npb24gdG8gZ3JhbnQgYXBwbGljYXRpb24gYWNjZXNzXG4gICAgQ29uc2VudCBQcm92aWRlci0tPk9SWSBIeWRyYTogVHJhbnNtaXRzIGNvbnNlbnQgcmVzdWx0IGFuZCByZWNlaXZlcyByZWRpcmVjdCB1cmwgd2l0aCBjb25zZW50IHZlcmlmaWVyXG4gICAgQ29uc2VudCBQcm92aWRlci0-Pk9SWSBIeWRyYTogUmVkaXJlY3RzIHRvIHJlZGlyZWN0IHVybCB3aXRoIGNvbnNlbnQgdmVyaWZpZXJcbiAgICBPUlkgSHlkcmEtLT4-T1JZIEh5ZHJhOiBWZXJpZmllcyBncmFudFxuICAgIE9SWSBIeWRyYS0-Pk9BdXRoMiBDbGllbnQ6IFRyYW5zbWl0cyBhdXRob3JpemF0aW9uIGNvZGUvdG9rZW4iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9fQ",alt:"ORY Hydra User Login and Consent Flow"})))))}d.isMDXComponent=!0},313:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var o=n(0),a=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),p=o,g=b["".concat(r,".").concat(p)]||b[p]||u[p]||l;return n?a.a.createElement(g,i(i({ref:t},s),{},{components:n})):a.a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);