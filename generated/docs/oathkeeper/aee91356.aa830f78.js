(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(121)),o={id:"error",title:"Error Handlers"},l={unversionedId:"pipeline/error",id:"pipeline/error",isDocsHomePage:!1,title:"Error Handlers",description:"A error handler is responsible for executing logic after, for example,",source:"@site/docs/pipeline/error.md",slug:"/pipeline/error",permalink:"/oathkeeper/docs/next/pipeline/error",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/docs/pipeline/error.md",version:"current",lastUpdatedBy:"hackerman",lastUpdatedAt:1606314976,sidebar:"docs",previous:{title:"Mutators",permalink:"/oathkeeper/docs/next/pipeline/mutator"},next:{title:"Configure and Deploy",permalink:"/oathkeeper/docs/next/configure-deploy"}},c=[{value:"Error Matching",id:"error-matching",children:[{value:"Fallback",id:"fallback",children:[]},{value:"Matchers",id:"matchers",children:[]}]},{value:"Error Handlers",id:"error-handlers",children:[{value:"<code>json</code>",id:"json",children:[]},{value:"<code>redirect</code>",id:"redirect",children:[]},{value:"<code>www_authenticate</code>",id:"www_authenticate",children:[]}]}],s={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A error handler is responsible for executing logic after, for example,\nauthentication or authorization failed. ORY Oathkeeper supports different error\nhandlers and we will add more as the project progresses."),Object(i.b)("p",null,"A error handler can be configured to match on certain conditions, for example,\nit is possible to configure the ",Object(i.b)("inlineCode",{parentName:"p"},"json")," error handler to only be executed if the\nHTTP Header ",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," contains ",Object(i.b)("inlineCode",{parentName:"p"},"application/json"),"."),Object(i.b)("p",null,"Each error handler has two keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"handler")," (string, required): Defines the handler (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"noop"),") to be used."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config")," (object, optional): Configures the handler. Configuration keys vary\nper handler. The configuration can be defined in the global configuration\nfile, or per access rule.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "errors": [\n    {\n      "handler": "json",\n      "config": {}\n    }\n  ]\n}\n')),Object(i.b)("p",null,"You can define more than one error handler in the Access Rule. Depending on\ntheir matching conditions (see next chapter), the appropriate error handler will\nbe chosen."),Object(i.b)("p",null,"Please be aware that defining error handlers with overlapping matching\nconditions will cause errors, because ORY Oathkeeper will not know which error\nhandler to execute!"),Object(i.b)("h2",{id:"error-matching"},"Error Matching"),Object(i.b)("p",null,"You can configure the error handlers in such a way, that - for example - ORY\nOathkeeper responds, in the case of an error, with"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a JSON response, such as\n",Object(i.b)("inlineCode",{parentName:"li"},'{"error":{"code":403,"status":"Forbidden","message":"Access credentials are not sufficient to access this resource"}}'),",\nwhen the client that expects JSON (",Object(i.b)("inlineCode",{parentName:"li"},"Accept: application/json"),");"),Object(i.b)("li",{parentName:"ul"},"an XML response when the API Client expects XML (",Object(i.b)("inlineCode",{parentName:"li"},"Accept: application/xml"),");"),Object(i.b)("li",{parentName:"ul"},"a HTTP Redirect (HTTP Status Found - 302) to ",Object(i.b)("inlineCode",{parentName:"li"},"/login")," when the endpoint is\ndirectly (no AJAX) accessed from a browser\n(",Object(i.b)("inlineCode",{parentName:"li"},"Accept: text/html,application/xhtml+xml"),").")),Object(i.b)("p",null,"There are also other possible matching strategies - such as defining a response\nper error type (unauthorized, forbidden, internal_server_error, ...) , per HTTP\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type")," Header (similar to ",Object(i.b)("inlineCode",{parentName:"p"},"Accept"),"), or based on the Remote IP Address."),Object(i.b)("p",null,"All match definitions are set in the handler's config, using the ",Object(i.b)("inlineCode",{parentName:"p"},"when")," key.\nThis is the same for all handlers!"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),"{\n  handler: 'json', // or redirect, www_authenticate, ...\n  config: {\n    when: [\n      {\n        error: ['unauthorized', '...', '...']\n      }\n    ]\n  }\n}\n")),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"when")," is empty, then no conditions are applied and the error handler is\nalways matching! In fact, this is also true for all subkeys. If left empty, the\nmatching condition will not be applied and is thus always true!"),Object(i.b)("h3",{id:"fallback"},"Fallback"),Object(i.b)("p",null,"Error handling can be set globally and per access rule. ORY Oathkeeper will\nfirst check for any access rule specific error handling before falling back to\nthe globally defined error handling."),Object(i.b)("p",null,"Similar to other pipeline handlers (authentication, authorization, mutation),\nyou must enable the error handlers in the global ORY Oathkeeper config, except\nfor the ",Object(i.b)("inlineCode",{parentName:"p"},"json")," error handler which is always enabled by default:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# .oathkeeper.yaml\nerrors:\n  handlers:\n    json:\n      enabled: true # this is true by default\n      # config:\n      #   when: ...\n    redirect:\n      enabled: true # this is false by default\n      # config:\n      #   when: ...\n")),Object(i.b)("p",null,"As discussed in the previous section, when ",Object(i.b)("inlineCode",{parentName:"p"},"config.when")," is empty, the error\nhandler will always match. This of course is a problem because ORY Oathkeeper\nnow does not know if it should redirect or send a JSON error!"),Object(i.b)("p",null,"Therefore, an additional configuration - called ",Object(i.b)("inlineCode",{parentName:"p"},"fallback")," - is available:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# .oathkeeper.yaml\nerrors:\n  # `["json"]` is the default!\n  fallback:\n    - json\n\n  handlers:\n    json:\n      enabled: true # this is true by default\n      # config:\n      #   when: ...\n    redirect:\n      enabled: true # this is false by default\n      config:\n        to: http://mywebsite/login\n      # when: ...\n')),Object(i.b)("p",null,"This feature tells ORY Oathkeeper that the ",Object(i.b)("inlineCode",{parentName:"p"},"json")," error handler should be used\nas fallback. You could also define multiple fallback handlers - the first\nmatching handler will be the one and only executed! This makes sense if you\nadditionally configure the ",Object(i.b)("inlineCode",{parentName:"p"},"when")," section:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# .oathkeeper.yaml\nerrors:\n  fallback:\n    - redirect\n    - json\n\n  handlers:\n    json:\n      enabled: true\n    redirect:\n      enabled: true\n      config:\n        when:\n          - request:\n              header:\n                accept:\n                  - text/*\n")),Object(i.b)("p",null,"In this configuration example, ORY Oathkeeper would first check if the HTTP\nRequest Header contains ",Object(i.b)("inlineCode",{parentName:"p"},"Accept: text/html")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"text/xhtml"),", ",Object(i.b)("inlineCode",{parentName:"p"},"text/text"),", ...)\nand if not, would return a JSON Error Message."),Object(i.b)("h3",{id:"matchers"},"Matchers"),Object(i.b)("p",null,"All matchers are defined under the ",Object(i.b)("inlineCode",{parentName:"p"},"config.when")," key of the error handler, both\nin the global config and in the access rule:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),"// access-rule.json\n{\n  handler: 'json',\n  config: {\n    when: [\n      {\n        error: ['unauthorized', '...', '...']\n      }\n    ]\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# .oathkeeper.yaml\nerrors:\n  handlers:\n    redirect:\n      enabled: true\n      config:\n        when:\n          - error:\n              - unauthorized\n              - ...\n              - ...\n")),Object(i.b)("p",null,"You can define multiple when clauses which allows you to differentiate between\nerror types and HTTP Requests. The when sections are combined with ",Object(i.b)("inlineCode",{parentName:"p"},"OR")," while\nthe subkeys (",Object(i.b)("inlineCode",{parentName:"p"},"error"),", ",Object(i.b)("inlineCode",{parentName:"p"},"request.header.accept"),", ",Object(i.b)("inlineCode",{parentName:"p"},"request.header.content_type"),",\n...) are matched with ",Object(i.b)("inlineCode",{parentName:"p"},"AND"),". Keys that have arrays as values (",Object(i.b)("inlineCode",{parentName:"p"},"error"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"request.header.accept"),", ",Object(i.b)("inlineCode",{parentName:"p"},"request.header.content_type"),", ...) are usually matched\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"OR"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# .oathkeeper.yaml\nerrors:\n  handlers:\n    redirect:\n      enabled: true\n      config:\n        when:\n          - error:\n              - unauthorized\n              # OR\n              - internal_server_error\n\n            # AND\n            request:\n              remote_ip:\n                match:\n                  - 192.168.1.0/24\n                  # OR\n                  - 192.178.1.0/24\n\n          # OR\n          - error:\n              - forbidden\n              # OR\n              - not_found\n\n            # AND\n            request:\n              header:\n                accept:\n                  - text/html\n                  # OR\n                  - text/xhtml\n\n                # AND\n                content_type:\n                  - application/x-www-form-urlencoded\n                  # OR\n                  - multipart/form-data\n")),Object(i.b)("h4",{id:"error"},"Error"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"config.when.#.error")," key may contain zero, one, or multiple error names\nthat must match for this matching condition to be true. The error names are\nderived (lowercase and whitespaces replaced with ",Object(i.b)("inlineCode",{parentName:"p"},"_"),") from the well-defined\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"}),"HTTP Status")," messages\nsuch as ",Object(i.b)("inlineCode",{parentName:"p"},"Not Found"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Forbidden"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Internal Server Error"),", and so on."),Object(i.b)("p",null,"Here are some examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Internal Server Error")," (500) -> ",Object(i.b)("inlineCode",{parentName:"li"},'{"errors": ["internal_server_error"]}')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Forbidden")," (403) -> ",Object(i.b)("inlineCode",{parentName:"li"},'{"errors": ["forbidden"]}')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Not Found")," (404) -> ",Object(i.b)("inlineCode",{parentName:"li"},'{"errors": ["not_found"]}')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Bad Request")," (400) -> ",Object(i.b)("inlineCode",{parentName:"li"},'{"errors": ["bad_request"]}'))),Object(i.b)("p",null,"Keep in mind that these errors must be emitted by ORY Oathkeeper itself, not by\nthe upstream API. Therefore, most HTTP Status Codes will not have any effect\nbecause ORY Oathkeeper - as of now - mostly returns 401, 403, 500 error codes."),Object(i.b)("p",null,"As discussed previously, if this configuration key is left empty, then all error\ntypes will match!"),Object(i.b)("h4",{id:"http-request-remote-ip"},"HTTP Request: Remote IP"),Object(i.b)("p",null,"The HTTP Remote IP is the IP of the Client that initially made the request. The\nRemote Address is matched using\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"}),"CIDR Notation"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"config:\n  when:\n    - request:\n        remote_ip:\n          match:\n            - 192.168.1.0/24\n")),Object(i.b)("p",null,"This configuration would match a HTTP Request coming directly from\n",Object(i.b)("inlineCode",{parentName:"p"},"192.168.1.1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"192.168.1.2"),", and so on."),Object(i.b)("p",null,"If ORY Oathkeeper runs behind a Load Balancer or any other type of Reverse\nProxy, you can configure ORY Oathkeeper to check the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For"}),Object(i.b)("inlineCode",{parentName:"a"},"X-Forwarded-For")," HTTP Header"),"\nheader as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"config:\n  when:\n    - request:\n        remote_ip:\n          respect_forwarded_for_header: true # defaults to false\n          match:\n            - 192.168.1.0/24\n")),Object(i.b)("p",null,"As discussed previously, if this configuration key is left empty, then all\nremote IPs will match!"),Object(i.b)("p",null,"HTTP Requests that include one of the matching IP Addresses in the\n",Object(i.b)("inlineCode",{parentName:"p"},"X-Forwarded-For")," HTTP Header, for example\n",Object(i.b)("inlineCode",{parentName:"p"},"X-Forwarded-For: 123.123.123.123, ..., 192.168.1.1, ..."),", now match this error\nhandler."),Object(i.b)("h4",{id:"http-request-header-accept"},"HTTP Request Header: Accept"),Object(i.b)("p",null,"The HTTP ",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," Header is the most common way to tell an HTTP API what MIME\ncontent type is expected. For example, FireFox sends\n",Object(i.b)("inlineCode",{parentName:"p"},"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")," for\nall regular requests (e.g. when opening ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ory.sh/"}),"www.ory.sh"),"). And\na REST API Client usually sends ",Object(i.b)("inlineCode",{parentName:"p"},"Accept: application/json"),"."),Object(i.b)("p",null,"Therefore, using the ",Object(i.b)("inlineCode",{parentName:"p"},"Accept"),' header is one of the most common ways to\ndistinguish between "regular" browser traffic, REST API traffic, and other types\nof HTTP traffic.'),Object(i.b)("p",null,"In ORY Oathkeeper, you can specify the matching conditions for the Accept header\nas follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"config:\n  when:\n    - request:\n        header:\n          accept:\n            - text/html\n            - text/*\n")),Object(i.b)("p",null,"The defined matching condition would apply if a client sends one of the\nfollowing ",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," headers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept: text/html")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept: text/xhtml")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept: text/xhtml+xml")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept: text/...")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Accept: text/*"))),Object(i.b)("p",null,"Most browsers (see the FireFox example) also send wildcard ",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," headers such\nas ",Object(i.b)("inlineCode",{parentName:"p"},"*/*"),". To prevent multiple conditions to match, HTTP Accept Headers from the\nclient are interpreted literally, meaning that wildcards are not interpreted."),Object(i.b)("p",null,"Assuming the client sends ",Object(i.b)("inlineCode",{parentName:"p"},"Accept: */*")," and the error condition is set to\n",Object(i.b)("inlineCode",{parentName:"p"},'accept: ["text/text"]'),", the error condition would not match. If however the\nclient sends ",Object(i.b)("inlineCode",{parentName:"p"},"Accept: text/text")," and the error condition is set to\n",Object(i.b)("inlineCode",{parentName:"p"},'accept: ["*/*"]'),", then the condition would match."),Object(i.b)("p",null,"To match against wildcards in the ",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," header, you have to explicitly define\nthem in the error condition. Setting the configuration to ",Object(i.b)("inlineCode",{parentName:"p"},'accept: ["*/*"]')," will\nmatch ",Object(i.b)("inlineCode",{parentName:"p"},"Accept: */*")," and of course any other type such as ",Object(i.b)("inlineCode",{parentName:"p"},"Accept: text/*"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Accept: text/html"),", and so on."),Object(i.b)("p",null,"As discussed previously, if this configuration key is left empty, then all\n",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," headers will match!"),Object(i.b)("h4",{id:"http-request-header-content-type"},"HTTP Request Header: Content-Type"),Object(i.b)("p",null,"The\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"}),"HTTP Content Type"),"\nmatcher works similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"Accept")," header. The HTTP Content Type Header\nhowever is much less common, as it is only used in POST, PUT, PATCH requests (or\nany other requests that send a HTTP Body)."),Object(i.b)("p",null,"The main difference however is that the client never (unless it sends malformed\ndata) sends wildcard MIME types, as the MIME type needs to be deterministic.\nIt's typically something like ",Object(i.b)("inlineCode",{parentName:"p"},"multipart/form-data"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"application/json"),"."),Object(i.b)("p",null,"In ORY Oathkeeper, you can specify the matching conditions for the\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type")," header as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"config:\n  when:\n    - request:\n        header:\n          content_type:\n            - multipart/form-data\n            # OR\n            - application/x-www-form-urlencoded\n            # OR\n            - application/json\n")),Object(i.b)("p",null,"As discussed previously, if this configuration key is left empty, then all\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type")," headers will match!"),Object(i.b)("h2",{id:"error-handlers"},"Error Handlers"),Object(i.b)("h3",{id:"json"},Object(i.b)("inlineCode",{parentName:"h3"},"json")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"json")," Error Handler returns an ",Object(i.b)("inlineCode",{parentName:"p"},"application/json")," response type. Per\ndefault, error messages are stripped of their details to reduce OSINT attack\nsurface. You can enable more detailed error messages by setting ",Object(i.b)("inlineCode",{parentName:"p"},"verbose")," to\n",Object(i.b)("inlineCode",{parentName:"p"},"true"),". As discussed in the previous section, you can define error matching\nconditions under the ",Object(i.b)("inlineCode",{parentName:"p"},"when")," key."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),"// access-rule.json\n{\n  handler: 'json',\n  config: {\n    verbose: true, // defaults to false\n    when: [\n      // ...\n    ]\n  }\n}\n")),Object(i.b)("h3",{id:"redirect"},Object(i.b)("inlineCode",{parentName:"h3"},"redirect")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"redirect")," Error Handler returns a HTTP 302/301 response with a ",Object(i.b)("inlineCode",{parentName:"p"},"Location"),"\nHeader. As discussed in the previous section, you can define error matching\nconditions under the ",Object(i.b)("inlineCode",{parentName:"p"},"when")," key."),Object(i.b)("p",null,"If you want to append the current url (where the error happened) to address\nredirected to, You can specify ",Object(i.b)("inlineCode",{parentName:"p"},"return_to_query_param")," to set the name of\nparameter that will hold the url."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),"// access-rule.json\n{\n  handler: 'json',\n  config: {\n    to: 'http://my-website/login', // required!!\n    return_to_query_param: 'return_to',\n    code: 301, // defaults to 302 - only 301 and 302 are supported.\n    when: [\n      // ...\n    ]\n  }\n}\n")),Object(i.b)("p",null,"When the user accesses a protected url ",Object(i.b)("inlineCode",{parentName:"p"},"http://my-website/settings"),", they will\nbe redirected to\n",Object(i.b)("inlineCode",{parentName:"p"},"http://my-website/login?return_to=http%3A%2F%2Fmy-website%2Fsettings"),". The\nlogin page can use the ",Object(i.b)("inlineCode",{parentName:"p"},"return_to")," paramter to return user to intended page\nafter a successful login."),Object(i.b)("h3",{id:"www_authenticate"},Object(i.b)("inlineCode",{parentName:"h3"},"www_authenticate")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"www_authenticate")," Error Handler responds with HTTP 401 and a\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate"}),Object(i.b)("inlineCode",{parentName:"a"},"WWW-Authenticate")),"\nHTTP Header."),Object(i.b)("p",null,"You can configure the ",Object(i.b)("inlineCode",{parentName:"p"},"realm")," the browser will display. The ",Object(i.b)("inlineCode",{parentName:"p"},"realm"),' is a message\nthat will be displayed by the browser. Most browsers show a message like "The\nwebsite says: ',Object(i.b)("inlineCode",{parentName:"p"},"<realm>"),'". Using a real message is thus more appropriate than a\nRealm identifier.'),Object(i.b)("p",null,'This error handler is "exotic" as WWW-Authenticate is not a common pattern in\ntoday\'s web. As discussed in the previous section, you can define error matching\nconditions under the ',Object(i.b)("inlineCode",{parentName:"p"},"when")," key."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json5"}),"// access-rule.json\n{\n  handler: 'json',\n  config: {\n    realm: 'Please enter your username and password', // Defaults to `Please authenticate.`\n    when: [\n      // ...\n    ]\n  }\n}\n")))}p.isMDXComponent=!0},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),h=r,u=b["".concat(o,".").concat(h)]||b[h]||d[h]||i;return t?a.a.createElement(u,l(l({ref:n},s),{},{components:t})):a.a.createElement(u,l({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);