"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[9825],{3905:function(n,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var t=a(67294);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function r(n,e){if(null==n)return{};var a,t,i=function(n,e){if(null==n)return{};var a,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var l=t.createContext({}),u=function(n){var e=t.useContext(l),a=e;return n&&(a="function"==typeof n?n(e):s(s({},e),n)),a},m=function(n){var e=u(n.components);return t.createElement(l.Provider,{value:e},n.children)},E={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var a=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,m=r(n,["components","mdxType","originalType","parentName"]),d=u(a),c=i,S=d["".concat(l,".").concat(c)]||d[c]||E[c]||o;return a?t.createElement(S,s(s({ref:e},m),{},{components:a})):t.createElement(S,s({ref:e},m))}));function c(n,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r.mdxType="string"==typeof n?n:i,s[1]=r;for(var u=2;u<o;u++)s[u]=a[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},54480:function(n,e,a){a.r(e),a.d(e,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var t=a(87462),i=a(63366),o=(a(67294),a(3905)),s=["components"],r={id:"configuration",title:"Configuration"},l=void 0,u={unversionedId:"reference/configuration",id:"reference/configuration",isDocsHomePage:!1,title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/docs/reference/configuration.md",sourceDirName:"reference",slug:"/reference/configuration",permalink:"/keto/docs/next/reference/configuration",editUrl:"https://github.com/ory/keto/edit/master/docs/docs/reference/configuration.md",tags:[],version:"current",lastUpdatedBy:"aeneasr",lastUpdatedAt:1638375415,formattedLastUpdatedAt:"12/1/2021",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Basic: Olymp Library",permalink:"/keto/docs/next/examples/olymp-file-sharing"},next:{title:"HTTP API",permalink:"/keto/docs/next/reference/rest-api"}},m=[],E={toc:m};function d(n){var e=n.components,a=(0,i.Z)(n,s);return(0,o.kt)("wrapper",(0,t.Z)({},E,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can load the config file from another source using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",(0,o.kt)("inlineCode",{parentName:"p"},"keto --config path/to/config.yaml"),"."),(0,o.kt)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Disclaimer")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This reference configuration documents all keys, also deprecated ones! It is a\nreference for all possible configuration values."),(0,o.kt)("p",{parentName:"div"},"If you are looking for an example configuration, it is better to try out the\nquickstart."))),(0,o.kt)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/docs/ecosystem/configuring"},"Configuring ORY services"),"\nsection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"## ORY Keto Configuration\n#\n\n## serve ##\n#\nserve:\n  ## Write API (http and gRPC) ##\n  #\n  write:\n    ## Host ##\n    #\n    # The network interface to listen on.\n    #\n    # Examples:\n    # - localhost\n    # - 127.0.0.1\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_WRITE_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_WRITE_HOST=<value>\n    #\n    host: localhost\n\n    ## Cross Origin Resource Sharing (CORS) ##\n    #\n    # Configure [Cross Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/) using the following options.\n    #\n    cors:\n      ## Allowed Origins ##\n      #\n      # A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penality. Only one wildcard can be used per origin.\n      #\n      # Default value: *\n      #\n      # Examples:\n      # - - https://example.com\n      #   - https://*.example.com\n      #   - https://*.foo.example.com\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ALLOWED_ORIGINS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ALLOWED_ORIGINS=<value>\n      #\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n        - https://*.foo.example.com\n\n      ## Allowed HTTP Methods ##\n      #\n      # A list of methods the client is allowed to use with cross-domain requests.\n      #\n      # Default value: GET,POST,PUT,PATCH,DELETE\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ALLOWED_METHODS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ALLOWED_METHODS=<value>\n      #\n      allowed_methods:\n        - GET\n\n      ## Allowed Request HTTP Headers ##\n      #\n      # A list of non simple headers the client is allowed to use with cross-domain requests.\n      #\n      # Default value: Authorization,Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ALLOWED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ALLOWED_HEADERS=<value>\n      #\n      allowed_headers:\n        - ''\n\n      ## Allowed Response HTTP Headers ##\n      #\n      # Indicates which headers are safe to expose to the API of a CORS API specification\n      #\n      # Default value: Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_EXPOSED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_EXPOSED_HEADERS=<value>\n      #\n      exposed_headers:\n        - ''\n\n      ## Allow HTTP Credentials ##\n      #\n      # Indicates whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ALLOW_CREDENTIALS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ALLOW_CREDENTIALS=<value>\n      #\n      allow_credentials: false\n\n      ## Maximum Age ##\n      #\n      # Indicates how long (in seconds) the results of a preflight request can be cached. The default is 0 which stands for no max age.\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_MAX_AGE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_MAX_AGE=<value>\n      #\n      max_age: -100000000\n\n      ## Enable Debugging ##\n      #\n      # Set to true to debug server side CORS issues.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_DEBUG=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_DEBUG=<value>\n      #\n      debug: false\n\n      ## Enable CORS ##\n      #\n      # If set to true, CORS will be enabled and preflight-requests (OPTION) will be answered.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_WRITE_CORS_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_WRITE_CORS_ENABLED=<value>\n      #\n      enabled: false\n\n    ## HTTPS ##\n    #\n    # Configure HTTP over TLS (HTTPS). All options can also be set using environment variables by replacing dots (`.`) with underscores (`_`) and uppercasing the key. For example, `some.prefix.tls.key.path` becomes `export SOME_PREFIX_TLS_KEY_PATH`. If all keys are left undefined, TLS will be disabled.\n    #\n    tls:\n      ## TLS Certificate (PEM) ##\n      #\n      cert:\n        ## base64 ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_WRITE_TLS_CERT_BASE64=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_WRITE_TLS_CERT_BASE64=<value>\n        #\n        base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n        ## path ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_WRITE_TLS_CERT_PATH=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_WRITE_TLS_CERT_PATH=<value>\n        #\n        path: path/to/file.pem\n\n      ## Private Key (PEM) ##\n      #\n      key:\n        ## base64 ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_WRITE_TLS_KEY_BASE64=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_WRITE_TLS_KEY_BASE64=<value>\n        #\n        base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n        ## path ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_WRITE_TLS_KEY_PATH=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_WRITE_TLS_KEY_PATH=<value>\n        #\n        path: path/to/file.pem\n\n    ## Port ##\n    #\n    # The port to listen on.\n    #\n    # Default value: 4467\n    #\n    # Minimum value: 0\n    #\n    # Maximum value: 65535\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_WRITE_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_WRITE_PORT=<value>\n    #\n    port: 0\n\n  ## Read API (http and gRPC) ##\n  #\n  read:\n    ## Host ##\n    #\n    # The network interface to listen on.\n    #\n    # Examples:\n    # - localhost\n    # - 127.0.0.1\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_READ_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_READ_HOST=<value>\n    #\n    host: localhost\n\n    ## Cross Origin Resource Sharing (CORS) ##\n    #\n    # Configure [Cross Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/) using the following options.\n    #\n    cors:\n      ## Allowed Origins ##\n      #\n      # A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penality. Only one wildcard can be used per origin.\n      #\n      # Default value: *\n      #\n      # Examples:\n      # - - https://example.com\n      #   - https://*.example.com\n      #   - https://*.foo.example.com\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ALLOWED_ORIGINS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ALLOWED_ORIGINS=<value>\n      #\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n        - https://*.foo.example.com\n\n      ## Allowed HTTP Methods ##\n      #\n      # A list of methods the client is allowed to use with cross-domain requests.\n      #\n      # Default value: GET,POST,PUT,PATCH,DELETE\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ALLOWED_METHODS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ALLOWED_METHODS=<value>\n      #\n      allowed_methods:\n        - GET\n\n      ## Allowed Request HTTP Headers ##\n      #\n      # A list of non simple headers the client is allowed to use with cross-domain requests.\n      #\n      # Default value: Authorization,Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ALLOWED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ALLOWED_HEADERS=<value>\n      #\n      allowed_headers:\n        - ''\n\n      ## Allowed Response HTTP Headers ##\n      #\n      # Indicates which headers are safe to expose to the API of a CORS API specification\n      #\n      # Default value: Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_EXPOSED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_EXPOSED_HEADERS=<value>\n      #\n      exposed_headers:\n        - ''\n\n      ## Allow HTTP Credentials ##\n      #\n      # Indicates whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ALLOW_CREDENTIALS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ALLOW_CREDENTIALS=<value>\n      #\n      allow_credentials: false\n\n      ## Maximum Age ##\n      #\n      # Indicates how long (in seconds) the results of a preflight request can be cached. The default is 0 which stands for no max age.\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_MAX_AGE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_MAX_AGE=<value>\n      #\n      max_age: -100000000\n\n      ## Enable Debugging ##\n      #\n      # Set to true to debug server side CORS issues.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_DEBUG=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_DEBUG=<value>\n      #\n      debug: false\n\n      ## Enable CORS ##\n      #\n      # If set to true, CORS will be enabled and preflight-requests (OPTION) will be answered.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_READ_CORS_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_READ_CORS_ENABLED=<value>\n      #\n      enabled: false\n\n    ## HTTPS ##\n    #\n    # Configure HTTP over TLS (HTTPS). All options can also be set using environment variables by replacing dots (`.`) with underscores (`_`) and uppercasing the key. For example, `some.prefix.tls.key.path` becomes `export SOME_PREFIX_TLS_KEY_PATH`. If all keys are left undefined, TLS will be disabled.\n    #\n    tls:\n      ## TLS Certificate (PEM) ##\n      #\n      cert:\n        ## base64 ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_READ_TLS_CERT_BASE64=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_READ_TLS_CERT_BASE64=<value>\n        #\n        base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n        ## path ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_READ_TLS_CERT_PATH=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_READ_TLS_CERT_PATH=<value>\n        #\n        path: path/to/file.pem\n\n      ## Private Key (PEM) ##\n      #\n      key:\n        ## base64 ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_READ_TLS_KEY_BASE64=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_READ_TLS_KEY_BASE64=<value>\n        #\n        base64: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n        ## path ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export SERVE_READ_TLS_KEY_PATH=<value>\n        # - Windows Command Line (CMD):\n        #    > set SERVE_READ_TLS_KEY_PATH=<value>\n        #\n        path: path/to/file.pem\n\n    ## Port ##\n    #\n    # The port to listen on.\n    #\n    # Default value: 4466\n    #\n    # Minimum value: 0\n    #\n    # Maximum value: 65535\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_READ_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_READ_PORT=<value>\n    #\n    port: 0\n\n## Profiling ##\n#\n# Enables CPU or memory profiling if set. For more details on profiling Go programs read [Profiling Go Programs](https://blog.golang.org/profiling-go-programs).\n#\n# One of:\n# - cpu\n# - mem\n# - \"\"\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export PROFILING=<value>\n# - Windows Command Line (CMD):\n#    > set PROFILING=<value>\n#\nprofiling: cpu\n\n## Log ##\n#\n# Configure logging using the following options. Logs will always be sent to stdout and stderr.\n#\nlog:\n  ## Log Format ##\n  #\n  # The output format of log messages.\n  #\n  # Default value: text\n  #\n  # One of:\n  # - json\n  # - json_pretty\n  # - gelf\n  # - text\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: json\n\n  ## Leak Sensitive Log Values ##\n  #\n  # If set will leak sensitive values (e.g. emails) in the logs.\n  #\n  # Default value: false\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEAK_SENSITIVE_VALUES=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEAK_SENSITIVE_VALUES=<value>\n  #\n  leak_sensitive_values: false\n\n  ## Level ##\n  #\n  # The level of log entries to show. Debug enables stack traces on errors.\n  #\n  # Default value: info\n  #\n  # One of:\n  # - panic\n  # - fatal\n  # - error\n  # - warn\n  # - info\n  # - debug\n  # - trace\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: panic\n\n## tracing ##\n#\n# Configure distributed tracing.\n#\ntracing:\n  ## service_name ##\n  #\n  # Specifies the service name to use on the tracer.\n  #\n  # Examples:\n  # - Ory Hydra\n  # - Ory Kratos\n  # - Ory Keto\n  # - Ory Oathkeeper\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TRACING_SERVICE_NAME=<value>\n  # - Windows Command Line (CMD):\n  #    > set TRACING_SERVICE_NAME=<value>\n  #\n  service_name: Ory Hydra\n\n  ## providers ##\n  #\n  providers:\n    ## zipkin ##\n    #\n    # Configures the zipkin tracing backend.\n    #\n    # Examples:\n    # - server_url: http://localhost:9411/api/v2/spans\n    #\n    zipkin:\n      ## server_url ##\n      #\n      # The address of Zipkin server where spans should be sent to.\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_ZIPKIN_SERVER_URL=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_ZIPKIN_SERVER_URL=<value>\n      #\n      server_url: http://localhost:9411/api/v2/spans\n\n    ## jaeger ##\n    #\n    # Configures the jaeger tracing backend.\n    #\n    jaeger:\n      ## propagation ##\n      #\n      # The tracing header format\n      #\n      # Examples:\n      # - jaeger\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_PROPAGATION=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_PROPAGATION=<value>\n      #\n      propagation: jaeger\n\n      ## max_tag_value_length ##\n      #\n      # The value passed to the max tag value length that has been configured.\n      #\n      # Minimum value: 0\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_MAX_TAG_VALUE_LENGTH=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_MAX_TAG_VALUE_LENGTH=<value>\n      #\n      max_tag_value_length: 0\n\n      ## sampling ##\n      #\n      # Examples:\n      # - type: const\n      #   value: 1\n      #   server_url: http://localhost:5778/sampling\n      #\n      sampling:\n        ## type ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_TYPE=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_TYPE=<value>\n        #\n        type: const\n\n        ## value ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_VALUE=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_VALUE=<value>\n        #\n        value: 1\n\n        ## server_url ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_SERVER_URL=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_SERVER_URL=<value>\n        #\n        server_url: http://localhost:5778/sampling\n\n      ## local_agent_address ##\n      #\n      # The address of the jaeger-agent where spans should be sent to.\n      #\n      # Examples:\n      # - 127.0.0.1:6831\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_LOCAL_AGENT_ADDRESS=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_LOCAL_AGENT_ADDRESS=<value>\n      #\n      local_agent_address: 127.0.0.1:6831\n\n  ## provider ##\n  #\n  # Set this to the tracing backend you wish to use. Supports Jaeger, Zipkin DataDog, Elastic APM and Instana. If omitted or empty, tracing will be disabled. Use environment variables to configure DataDog (see https://docs.datadoghq.com/tracing/setup/go/#configuration).\n  #\n  # One of:\n  # - jaeger\n  # - zipkin\n  # - datadog\n  # - elastic-apm\n  # - instana\n  #\n  # Examples:\n  # - jaeger\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TRACING_PROVIDER=<value>\n  # - Windows Command Line (CMD):\n  #    > set TRACING_PROVIDER=<value>\n  #\n  provider: jaeger\n\n## namespaces ##\n#\n# Namespace configuration or it's location.\n#\n# Default value: file://./keto_namespaces\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export NAMESPACES=<value>\n# - Windows Command Line (CMD):\n#    > set NAMESPACES=<value>\n#\nnamespaces: http://a.aaa\n\n## The Keto version this config is written for. ##\n#\n# SemVer according to https://semver.org/ prefixed with `v` as in our releases.\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export VERSION=<value>\n# - Windows Command Line (CMD):\n#    > set VERSION=<value>\n#\nversion: v0.0.0\n\n## Data Source Name ##\n#\n# Sets the data source name. This configures the backend where ORY Keto persists data. If dsn is \"memory\", data will be written to memory and is lost when you restart this instance. ORY Hydra supports popular SQL databases. For more detailed configuration information go to: https://www.ory.sh/docs/hydra/dependencies-environment#sql\n#\n# Examples:\n# - postgres://user:password@host:123/database\n# - mysql://user:password@tcp(host:123)/database\n# - memory\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: postgres://user:password@host:123/database\n")))}d.isMDXComponent=!0}}]);