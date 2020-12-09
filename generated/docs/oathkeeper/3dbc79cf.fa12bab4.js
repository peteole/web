(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(124)),i={id:"api-access-rules",title:"API Access Rules"},l={unversionedId:"api-access-rules",id:"version-v0.38/api-access-rules",isDocsHomePage:!1,title:"API Access Rules",description:"ORY Oathkeeper reaches decisions to allow or deny access by applying Access",source:"@site/versioned_docs/version-v0.38/api-access-rules.md",slug:"/api-access-rules",permalink:"/oathkeeper/docs/api-access-rules",editUrl:"https://github.com/ory/oathkeeper/edit/master/docs/versioned_docs/version-v0.38/api-access-rules.md",version:"v0.38",lastUpdatedBy:"Tom Fenech",lastUpdatedAt:1607191655,sidebar:"version-v0.38/docs",previous:{title:"Contribution Guidelines",permalink:"/oathkeeper/docs/contributing"},next:{title:"Access Rule Pipeline",permalink:"/oathkeeper/docs/pipeline/index"}},s=[{value:"Access Rule Format",id:"access-rule-format",children:[]},{value:"Handler configuration",id:"handler-configuration",children:[]},{value:"Scoped Credentials",id:"scoped-credentials",children:[]},{value:"Match strategy behavior",id:"match-strategy-behavior",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORY Oathkeeper reaches decisions to allow or deny access by applying Access\nRules. Access Rules can be stored on the file system, set as an environment\nvariable, or fetched from HTTP(s) remotes. These repositories can be configured\nin the configuration file (",Object(o.b)("inlineCode",{parentName:"p"},"oathkeeper -c ./path/to/config.yml ..."),")"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Configures Access Rules\naccess_rules:\n  # Locations (list of URLs) where access rules should be fetched from on boot.\n  # It is expected that the documents at those locations return a JSON or YAML Array containing ORY Oathkeeper Access Rules.\n  repositories:\n    # If the URL Scheme is `file://`, the access rules (an array of access rules is expected) will be\n    # fetched from the local file system.\n    - file://path/to/rules.json\n    # If the URL Scheme is `inline://`, the access rules (an array of access rules is expected)\n    # are expected to be a base64 encoded (with padding!) JSON/YAML string (base64_encode(`[{"id":"foo-rule","authenticators":[....]}]`)):\n    - inline://W3siaWQiOiJmb28tcnVsZSIsImF1dGhlbnRpY2F0b3JzIjpbXX1d\n    # If the URL Scheme is `http://` or `https://`, the access rules (an array of access rules is expected) will be\n    # fetched from the provided HTTP(s) location.\n    - https://path-to-my-rules/rules.json\n    # If the URL Scheme is `s3://`, `gs://` or `azblob://`, the access rules (an array of access rules is expected)\n    # will be fetched by an object storage (AWS S3, Google Cloud Storage, Azure Blob Storage).\n    #\n    # S3 storage also supports S3-compatible endpoints served by Minio or Ceph.\n    # See aws.ConfigFromURLParams (https://godoc.org/gocloud.dev/aws#ConfigFromURLParams) for more details on supported URL options for S3.\n    - s3://my-bucket-name/rules.json\n    - s3://my-bucket-name/rules.json?endpoint=minio.my-server.net\n    - gs://gcp-bucket-name/rules.json\n    - azblob://my-blob-container/rules.json\n  # Determines a matching strategy for the access rules . Currently supported values are `glob` and `regexp`. Empty string defaults to regexp.\n  matching_strategy: glob\n')),Object(o.b)("p",null,"or by setting the equivalent environment variable:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ export ACCESS_RULES_REPOSITORIES='file://path/to/rules.json,https://path-to-my-rules/rules.json,inline://W3siaWQiOiJmb28tcnVsZSIsImF1dGhlbnRpY2F0b3JzIjpbXX1d'\n")),Object(o.b)("p",null,"The repository (file, inline, remote) must be formatted either as a JSON or a\nYAML array containing the access rules:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'$ cat ./rules.json\n[{\n    "id": "my-first-rule"\n},{\n    "id": "my-second-rule"\n}]\n\n$ cat ./rules.yaml\n- id: my-first-rule\n  version: v0.36.0-beta.4\n  authenticators:\n    - handler: noop\n- id: my-second-rule\n  version: v0.36.0-beta.4\n  authorizer:\n    handler: allow\n')),Object(o.b)("h2",{id:"access-rule-format"},"Access Rule Format"),Object(o.b)("p",null,"Access Rules have four principal keys:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"id")," (string): The unique ID of the Access Rule.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"version")," (string): The version of ORY Oathkeeper this rule targets with out\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"+oryOS.<x>")," appendix. ORY Oathkeeper is able to migrate access rules\nacross versions. If left empty ORY Oathkeeper will assume that the rule is\nusing the same tag as the version that is running.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"upstream")," (object): The location of the server where requests matching this\nrule should be forwarded to. This only needs to be set when using the ORY\nOathkeeper Proxy as the Decision API does not forward the request to the\nupstream."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," (string): The URL the request will be forwarded to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preserve_host")," (bool): If set to ",Object(o.b)("inlineCode",{parentName:"li"},"false")," (default), the forwarded request\nwill include the host and port of the ",Object(o.b)("inlineCode",{parentName:"li"},"url")," value. If ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", the host and\nport of the ORY Oathkeeper Proxy will be used instead:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"false"),": Incoming HTTP Header ",Object(o.b)("inlineCode",{parentName:"li"},"Host: mydomain.com"),"-> Forwarding HTTP\nHeader ",Object(o.b)("inlineCode",{parentName:"li"},"Host: someservice.intranet.mydomain.com:1234")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"strip_path")," (string): If set, replaces the provided path prefix when\nforwarding the requested URL to the upstream URL:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"set to ",Object(o.b)("inlineCode",{parentName:"li"},"/api/v1"),": Incoming HTTP Request at ",Object(o.b)("inlineCode",{parentName:"li"},"/api/v1/users")," -> Forwarding\nHTTP Request at ",Object(o.b)("inlineCode",{parentName:"li"},"/users"),"."),Object(o.b)("li",{parentName:"ul"},"unset: Incoming HTTP Request at ",Object(o.b)("inlineCode",{parentName:"li"},"/api/v1/users")," -> Forwarding HTTP Request\nat ",Object(o.b)("inlineCode",{parentName:"li"},"/api/v1/users"),"."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"match")," (object): Defines the URL(s) this Access Rule should match."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"methods")," (string[]): Array of HTTP methods (e.g. GET, POST, PUT, DELETE,\n...).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"url")," (string): The URL that should be matched. You can use regular\nexpressions or glob patterns in this field to match more than one url. The\nmatching strategy (glob or regexp) is defined in the global configuration\nfile as ",Object(o.b)("inlineCode",{parentName:"p"},"access_rules.matching_strategy"),". This matcher ignores query\nparameters. Regular expressions (or glob patterns) are encapsulated in\nbrackets ",Object(o.b)("inlineCode",{parentName:"p"},"<")," and ",Object(o.b)("inlineCode",{parentName:"p"},">"),"."),Object(o.b)("p",{parentName:"li"},"Regular expressions examples:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/")," and does not match\n",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/foo")," or ",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<https|http>://mydomain.com/<.*>")," matches:",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/")," or\n",Object(o.b)("inlineCode",{parentName:"li"},"http://mydomain.com/foo"),". Does not match: ",Object(o.b)("inlineCode",{parentName:"li"},"https://other-domain.com/")," or\n",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"http://mydomain.com/<[[:digit:]]+>")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"http://mydomain.com/123")," and\ndoes not match ",Object(o.b)("inlineCode",{parentName:"li"},"http://mydomain/abc"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"http://mydomain.com/<(?!protected).*>")," matches\n",Object(o.b)("inlineCode",{parentName:"li"},"http://mydomain.com/resource")," and does not match\n",Object(o.b)("inlineCode",{parentName:"li"},"http://mydomain.com/protected"))),Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm"}),"Glob")," patterns\nexamples:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/<m?n>")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/man")," and does\nnot match ",Object(o.b)("inlineCode",{parentName:"li"},"http://mydomain.com/foo"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/<{foo*,bar*}>")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/foo")," or\n",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/bar")," and does not match ",Object(o.b)("inlineCode",{parentName:"li"},"https://mydomain.com/any"),"."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"authenticators"),": A list of authentication handlers that authenticate the\nprovided credentials. Authenticators are checked iteratively from index ",Object(o.b)("inlineCode",{parentName:"p"},"0")," to\n",Object(o.b)("inlineCode",{parentName:"p"},"n"),' and the first authenticator to return a positive result will be the one\nused. If you want the rule to first check a specific authenticator before\n"falling back" to others, have that authenticator as the first item in the\narray. For the full list of available authenticators, click\n',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/pipeline/authn"}),"here"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"authorizer"),': The authorization handler which will try to authorize the\nsubject ("user") from the previously validated credentials making the request.\nFor example, you could check if the subject ("user") is part of the "admin"\ngroup or if he/she has permission to perform that action. For the full list of\navailable authorizers, click ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/pipeline/authz"}),"here"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"mutators"),": A list of mutation handlers that transform the HTTP request before\nforwarding it. A common use case is generating a new set of credentials (e.g.\nJWT) which then will be forwarded to the upstream server. When using ORY\nOathkeeper's Decision API, it is expected that the API Gateway forwards the\nmutated HTTP Headers to the upstream server. For the full list of available\nmutators, click ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/pipeline/mutator"}),"here"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"errors"),": A list of error handlers that are executed when any of the previous\nhandlers (e.g. authentication) fail. Error handlers define what to do in case\nof an error, for example redirect the user to the login endpoint when a\nunauthorized (HTTP Status Code 401) error occurs. If left unspecified, errors\nwill always be handled as JSON responses unless the global configuration key\n",Object(o.b)("inlineCode",{parentName:"p"},"errors.fallback")," was changed. For more information on error handlers, click\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/oathkeeper/docs/pipeline/error"}),"here"),"."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("p",null,"Rule in JSON format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "version": "v0.36.0-beta.4",\n  "upstream": {\n    "url": "http://my-backend-service",\n    "preserve_host": true,\n    "strip_path": "/api/v1"\n  },\n  "match": {\n    "url": "http://my-app/some-route/<.*>",\n    "methods": ["GET", "POST"]\n  },\n  "authenticators": [{ "handler": "noop" }],\n  "authorizer": { "handler": "allow" },\n  "mutators": [{ "handler": "noop" }],\n  "errors": [{ "handler": "json" }]\n}\n')),Object(o.b)("p",null,"Rule in YAML format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"id: some-id\nversion: v0.36.0-beta.4\nupstream:\n  url: http://my-backend-service\n  preserve_host: true\n  strip_path: /api/v1\nmatch:\n  url: http://my-app/some-route/<.*>\n  methods:\n    - GET\n    - POST\nauthenticators:\n  - handler: noop\nauthorizer:\n  handler: allow\nmutators:\n  - handler: noop\nerrors:\n  - handler: json\n")),Object(o.b)("h2",{id:"handler-configuration"},"Handler configuration"),Object(o.b)("p",null,"Handlers (Authenticators, Mutators, Authorizers, Errors) sometimes require\nconfiguration. The configuration can be defined globally as well as per Access\nRule. The configuration from the Access Rule is overrides values from the global\nconfiguration."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"oathkeeper.yml")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"authenticators:\n  anonymous:\n    enabled: true\n    config:\n      subject: anon\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"rule.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "some-id",\n  "upstream": {\n    "url": "http://my-backend-service",\n    "preserve_host": true,\n    "strip_path": "/api/v1"\n  },\n  "match": {\n    "url": "http://my-app/some-route/<.*>",\n    "methods": ["GET", "POST"]\n  },\n  "authenticators": [\n    { "handler": "anonymous", "config": { "subject": "anon" } }\n  ],\n  "authorizer": { "handler": "allow" },\n  "mutators": [{ "handler": "noop" }]\n}\n')),Object(o.b)("h2",{id:"scoped-credentials"},"Scoped Credentials"),Object(o.b)("p",null,'Some credentials are scoped. For example, OAuth 2.0 Access Tokens usually are\nscoped ("OAuth 2.0 Scope"). Scope validation depends on the meaning of the\nscope. Therefore, wherever ORY Oathkeeper validates a scope, these scope\nstrategies are supported:'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hierarchic"),": Scope ",Object(o.b)("inlineCode",{parentName:"li"},"foo")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"foo"),", ",Object(o.b)("inlineCode",{parentName:"li"},"foo.bar"),", ",Object(o.b)("inlineCode",{parentName:"li"},"foo.baz")," but not ",Object(o.b)("inlineCode",{parentName:"li"},"bar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"wildcard"),": Scope ",Object(o.b)("inlineCode",{parentName:"li"},"foo.*")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"foo"),", ",Object(o.b)("inlineCode",{parentName:"li"},"foo.bar"),", ",Object(o.b)("inlineCode",{parentName:"li"},"foo.baz")," but not ",Object(o.b)("inlineCode",{parentName:"li"},"bar"),".\nScope ",Object(o.b)("inlineCode",{parentName:"li"},"foo")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"foo")," but not ",Object(o.b)("inlineCode",{parentName:"li"},"foo.bar")," nor ",Object(o.b)("inlineCode",{parentName:"li"},"bar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"exact"),": Scope ",Object(o.b)("inlineCode",{parentName:"li"},"foo")," matches ",Object(o.b)("inlineCode",{parentName:"li"},"foo")," but not ",Object(o.b)("inlineCode",{parentName:"li"},"bar")," nor ",Object(o.b)("inlineCode",{parentName:"li"},"foo.bar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none"),": Scope validation is disabled. If however a scope is configured to be\nvalidated, the request will fail with an error message.")),Object(o.b)("h2",{id:"match-strategy-behavior"},"Match strategy behavior"),Object(o.b)("p",null,"With the ",Object(o.b)("strong",{parentName:"p"},"Regular expression")," strategy, you can use the extracted groups in\nall handlers where the substitutions are supported by using the Go\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/pkg/text/template/"}),Object(o.b)("inlineCode",{parentName:"a"},"text/template"))," package, receiving the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ory/oathkeeper/blob/master/pipeline/authn/authenticator.go#L39"}),"AuthenticationSession"),"\nstruct:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"type AuthenticationSession struct {\n    Subject      string\n    Extra        map[string]interface{}\n    Header       http.Header\n    MatchContext MatchContext\n}\n\ntype MatchContext struct {\n    RegexpCaptureGroups []string\n    URL                 *url.URL\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Examples")),Object(o.b)("p",null,"If the match URL is ",Object(o.b)("inlineCode",{parentName:"p"},"<https|http>://mydomain.com/<.*>")," and the request is\n",Object(o.b)("inlineCode",{parentName:"p"},"http://mydomain.com/foo"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"MatchContext")," field will contain"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RegexpCaptureGroups"),": ",'["http", "foo"]'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"URL"),': "',Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://mydomain.com/foo%22"}),'http://mydomain.com/foo"'))))}p.isMDXComponent=!0}}]);