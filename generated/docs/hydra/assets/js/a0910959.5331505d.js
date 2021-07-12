(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[43727],{73295:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var a=n(67294),r=n(83300),o=n.n(r),i=n(11756),s="container_2x1S",c=n(25108),l=function(t,e){if(!t)return 0;var n=e.findIndex((function(e){return e.indexOf(t)>-1}));return-1===n?0:n},u=function(t){var e=t.src,n=t.title,r=(0,a.useState)(""),u=r[0],p=r[1];(0,a.useEffect)((function(){var n,a,r;o()(e.replace("github.com","raw.githubusercontent.com").replace("/blob/","/")).then((function(t){return t.text()})).then((n=t,a=n.startAt,r=n.endAt,function(t){var e=t.split("\n"),n=l(a,e);n>0&&(e=["// ..."].concat(e.slice(n,-1)));var o=l(r,e);return o>0&&(e=[].concat(e.slice(0,o+1),["// ..."])),e.join("\n")})).then(p).catch(c.error)}),[]);var d="language-"+function(t){var e=t.split(".").pop();switch(e){case"jsx":return"jsx";case"tsx":return"tsx";case"ts":return"typescript";case"go":return"go";case"yaml":case"yml":return"yaml";case"js":return"javascript";case"html":return"html";case"pug":return"pug";default:return e}}(e),m='title="'+(n||function(t){var e=t.match(new RegExp("https://github.com/[^/]+/[^/]+/blob/[^/]+/(.+)","i"))||[];return e.length>=2?e[1]:t}(e))+'"';return a.createElement("div",{className:s},a.createElement(i.Z,{metastring:m,className:d,children:u}))}},98388:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=n(73295),s=["components"],c={id:"5min-tutorial",title:"5 Minute Tutorial"},l=void 0,u={unversionedId:"5min-tutorial",id:"version-v1.9/5min-tutorial",isDocsHomePage:!1,title:"5 Minute Tutorial",description:"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL",source:"@site/versioned_docs/version-v1.9/5min-tutorial.mdx",sourceDirName:".",slug:"/5min-tutorial",permalink:"/hydra/docs/v1.9/5min-tutorial",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.9/5min-tutorial.mdx",version:"v1.9",lastUpdatedBy:"Vincent",lastUpdatedAt:1626099864,formattedLastUpdatedAt:"7/12/2021",frontMatter:{id:"5min-tutorial",title:"5 Minute Tutorial"},sidebar:"version-v1.9/docs",previous:{title:"Introduction",permalink:"/hydra/docs/v1.9/"},next:{title:"Installation",permalink:"/hydra/docs/v1.9/install"}},p=[{value:"Quickstart Configuration",id:"quickstart-configuration",children:[]}],d={toc:p};function m(t){var e=t.components,c=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial walks you through a quick setup of ORY Hydra, a PostgreSQL\ninstance and an exemplary User Login & Consent App based on Docker Compose. You\nneed to have the latest ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose"},"Docker Compose")," version installed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"OAuth2 Flow with Open Source OAuth2 Server ORY Hydra",src:n(60791).Z})),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tlO9p2E501A",frameborder:"0",allowfullscreen:!0})),(0,o.kt)("p",null,"We will use the Docker Compose configuration in the ORY Hydra code base. Getting\nthe Hydra source code is easy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you have Go 1.15+ installed: ",(0,o.kt)("inlineCode",{parentName:"li"},"go get -d github.com/ory/hydra")),(0,o.kt)("li",{parentName:"ul"},"if you have Git installed: ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/ory/hydra.git")),(0,o.kt)("li",{parentName:"ul"},"otherwise: download the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ory-am/hydra/archive/master.zip"},"Hydra source code"),". and\nextract it somewhere")),(0,o.kt)("p",null,"Change into the directory with the Hydra source code and run the following\ncommand to start the needed containers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    up --build\n\nStarting hydra_postgresd_1\nStarting hydra_hydra_1\n[...]\n")),(0,o.kt)("p",null,"If you prefer to use MySQL as the database backend, run this command instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-mysql.yml \\\n    up --build\n")),(0,o.kt)("p",null,"This command makes Docker Compose start up a database server and a basic base\nORY Hydra server that uses this database. If you need more details on this,\nplease examine the ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts/5-min-tutorial.sh")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose*.yml")," files."),(0,o.kt)("p",null,"You may also extend the command above to enable distributed tracing. The tracing\nUI is exposed at ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:16686/search"},"http://127.0.0.1:16686/search"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n    -f quickstart-postgres.yml \\\n    -f quickstart-tracing.yml \\\n    up --build\n")),(0,o.kt)("p",null,"Hydra provides an endpoint for Prometheus to scrape as a target. You can run the\nfollowing command to start the needed containers, and status of Hydra is exposed\nat targets page in Prometheus\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/targets"},"http://localhost:9090/targets"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml \\\n  -f quickstart-prometheus.yml \\\n  up --build\n")),(0,o.kt)("p",null,"Let's confirm that everything is working by creating an OAuth 2.0 Client."),(0,o.kt)("p",null,"Note: The following commands run Hydra inside Docker. If you have the ORY Hydra\nCLI installed locally, you can omit\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose -f quickstart.yml exec /hydra")," in front of each command."),(0,o.kt)("p",null,"The OAuth 2.0 client uses port ",(0,o.kt)("inlineCode",{parentName:"p"},"4444")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"4445"),". The former is ORY Hydra's\npublic endpoint, the latter its administrative endpoint. For more information\nhead over to ",(0,o.kt)("a",{parentName:"p",href:"production"},"Exposing Administrative and Public API Endpoints"),"."),(0,o.kt)("p",null,"Let's create the OAuth 2.0 Client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445/ \\\n    --id my-client \\\n    --secret secret \\\n    -g client_credentials\n")),(0,o.kt)("p",null,"Let's perform the client credentials grant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token client \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --client-id my-client \\\n    --client-secret secret\n\nUDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n")),(0,o.kt)("p",null,"Let's perform token introspection on that token. Make sure to copy the token you\njust got and not the dummy value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token introspect \\\n    --endpoint http://127.0.0.1:4445/ \\\n    UDYMha9TwsMBejEvKfnDOXkhgkLsnmUNYVQDklT5bD8.ZNpuNRC85erbIYDjPqhMwTinlvQmNTk_UvttcLQxFJY\n\n{\n    "active": true,\n    "client_id": "my-client",\n    "exp": 1527078658,\n    "iat": 1527075058,\n    "iss": "http://127.0.0.1:4444/",\n    "sub": "my-client",\n    "token_type": "access_token"\n}\n')),(0,o.kt)("p",null,"Next, we will perform the OAuth 2.0 Authorization Code Grant. For that, we must\nfirst create a client that is capable of performing that grant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra clients create \\\n    --endpoint http://127.0.0.1:4445 \\\n    --id auth-code-client \\\n    --secret secret \\\n    --grant-types authorization_code,refresh_token \\\n    --response-types code,id_token \\\n    --scope openid,offline \\\n    --callbacks http://127.0.0.1:5555/callback\n")),(0,o.kt)("p",null,"Note that you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"--token-endpoint-auth-method none")," if your clients\nare public (such as SPA apps and native apps) because the public clients cannot\nprovide client secrets."),(0,o.kt)("p",null,"The following command starts a server that serves an example web application.\nThe application will perform the OAuth 2.0 Authorization Code Flow using ORY\nHydra. The web server runs on ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:5555"},"http://127.0.0.1:5555"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml exec hydra \\\n    hydra token user \\\n    --client-id auth-code-client \\\n    --client-secret secret \\\n    --endpoint http://127.0.0.1:4444/ \\\n    --port 5555 \\\n    --scope openid,offline\n\nSetting up home route on http://127.0.0.1:5555/\nSetting up callback listener on http://127.0.0.1:5555/callback\nPress ctrl + c on Linux / Windows or cmd + c on OSX to end the process.\nIf your browser does not open automatically, navigate to:\n\n        http://127.0.0.1:5555/\n")),(0,o.kt)("p",null,"Open the URL ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:5555"},"http://127.0.0.1:5555"),", log in, and\nauthorize the application. Next, you should see at least an access token in the\nresponse. If you granted the ",(0,o.kt)("inlineCode",{parentName:"p"},"offline")," scope, you will also see a refresh token.\nIf you granted the ",(0,o.kt)("inlineCode",{parentName:"p"},"openid")," scope, you will get an ID Token as well."),(0,o.kt)("p",null,"Great! You installed Ory Hydra, connected the CLI, created a client and\ncompleted two authentication flows! Before you continue, clean up this set up in\norder to avoid conflicts with other tutorials from this guide:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ docker-compose -f quickstart.yml kill\n$ docker-compose -f quickstart.yml rm -f -v\n")),(0,o.kt)("h3",{id:"quickstart-configuration"},"Quickstart Configuration"),(0,o.kt)("p",null,"In this tutorial we use a simplified configuration.",(0,o.kt)("br",{parentName:"p"}),"\n","You can find it in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/contrib/quickstart/5-min/hydra.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"contrib/quickstart/5-min/hydra.yml")),".",(0,o.kt)("br",{parentName:"p"}),"\n","The configuration gets loaded in docker-compose as specified in the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ory/hydra/blob/master/quickstart.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"quickstart.yml")),"."),(0,o.kt)(i.Z,{lang:"js",link:"https://github.com/ory/hydra/blob/master/contrib/quickstart/5-min/hydra.yml",src:"https://raw.githubusercontent.com/ory/hydra/master/contrib/quickstart/5-min/hydra.yml",mdxType:"CodeFromRemote"}),(0,o.kt)("p",null,"Have a look at the ",(0,o.kt)("a",{parentName:"p",href:"/hydra/docs/v1.9/reference/configuration"},"reference configuration")," for\nfurther information on all possible configuration options."))}m.isMDXComponent=!0},83300:function(t,e){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();t.exports=e=n.fetch,n.fetch&&(e.default=n.fetch.bind(n)),e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response},60791:function(t,e,n){"use strict";e.Z=n.p+"assets/images/oauth2-flow-91331ef8391a97bddbc8154e6a1aa1fa.gif"}}]);