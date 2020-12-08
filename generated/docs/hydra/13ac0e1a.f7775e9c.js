(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{485:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return S}));var a=t(0),o=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=o.a.createContext({}),c=function(n){var e=o.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},d=function(n){var e=c(n.components);return o.a.createElement(u.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},_=o.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=c(t),_=a,S=d["".concat(s,".").concat(_)]||d[_]||m[_]||i;return t?o.a.createElement(S,r(r({ref:e},u),{},{components:t})):o.a.createElement(S,r({ref:e},u))}));function S(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,s=new Array(i);s[0]=_;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r.mdxType="string"==typeof n?n:a,s[1]=r;for(var u=2;u<i;u++)s[u]=t[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},96:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return r})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return c}));var a=t(3),o=t(7),i=(t(0),t(485)),s={id:"configuration",title:"Configuration"},r={unversionedId:"reference/configuration",id:"version-v1.4/reference/configuration",isDocsHomePage:!1,title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/versioned_docs/version-v1.4/reference/configuration.md",slug:"/reference/configuration",permalink:"/hydra/docs/v1.4/reference/configuration",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.4/reference/configuration.md",version:"v1.4",lastUpdatedBy:"aeneasr",lastUpdatedAt:1587812961,sidebar:"version-v1.4/docs",previous:{title:"Consuming OAuth 2.0",permalink:"/hydra/docs/v1.4/integration"},next:{title:"REST API",permalink:"/hydra/docs/v1.4/reference/api"}},l=[],u={rightToc:l};function c(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If file ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.hydra.yaml")," exists, it will be used as a configuration file which supports all\nconfiguration settings listed below."),Object(i.b)("p",null,"You can load the config file from another source using the ",Object(i.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml"),"\nflag: ",Object(i.b)("inlineCode",{parentName:"p"},"hydra --config path/to/config.yaml"),"."),Object(i.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values support reloading without server restart.\nAll configuration values can be set using environment variables, as documented below."),Object(i.b)("p",null,"To find out more about edge cases like setting string array values through environmental variables head to the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services")," section."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'## ORY Hydra Configuration\n#\n\n\n## log ##\n#\n# Configures the logger\n#\nlog:\n  \n  ## level ##\n  #\n  # Sets the log level.\n  #\n  # Default value: info\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: trace\n\n  ## format ##\n  #\n  # Sets the log format.\n  #\n  # Default value: text\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: json\n\n## serve ##\n#\n# Controls the configuration for the http(s) daemon(s).\n#\nserve:\n  \n  ## public ##\n  #\n  # Controls the public daemon serving public API endpoints like /oauth2/auth, /oauth2/token, /.well-known/jwks.json\n  #\n  public:\n    \n    ## port ##\n    #\n    # Default value: 4444\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 51721\n\n    ## host ##\n    #\n    # The interface or unix socket ORY Hydra should listen and handle public API requests on. Use the prefix "unix:" to specify a path to a unix socket. Leave empty to listen on all interfaces.\n    #\n    # Examples:\n    # - localhost\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: localhost\n\n    ## cors ##\n    #\n    # Configures Cross Origin Resource Sharing for public endpoints.\n    #\n    cors:\n      \n      ## enabled ##\n      #\n      # Sets whether CORS is enabled.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ENABLED=<value>\n      #\n      enabled: true\n\n      ## allowed_origins ##\n      #\n      # A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Only one wildcard can be used per origin.\n      #\n      # Default value: *\n      #\n      # Examples:\n      # - - https://example.com\n      #   - https://*.example.com\n      #   - https://*.foo.example.com\n      # \n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ALLOWED_ORIGINS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ALLOWED_ORIGINS=<value>\n      #\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n        - https://*.foo.example.com\n\n      ## allowed_methods ##\n      #\n      # A list of HTTP methods the user agent is allowed to use with cross-domain requests.\n      #\n      # Default value: POST,GET,PUT,PATCH,DELETE\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ALLOWED_METHODS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ALLOWED_METHODS=<value>\n      #\n      allowed_methods:\n        - GET\n        - GET\n\n      ## allowed_headers ##\n      #\n      # A list of non simple headers the client is allowed to use with cross-domain requests.\n      #\n      # Default value: Authorization,Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ALLOWED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ALLOWED_HEADERS=<value>\n      #\n      allowed_headers:\n        - commodo eu et dolore ad\n        - eiusmod\n        - aliqua nulla aute sint labore\n        - eu eiusmod\n\n      ## exposed_headers ##\n      #\n      # Sets which headers are safe to expose to the API of a CORS API specification.\n      #\n      # Default value: Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_EXPOSED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_EXPOSED_HEADERS=<value>\n      #\n      exposed_headers:\n        - ad\n        - velit\n        - nostrud\n\n      ## allow_credentials ##\n      #\n      # Sets whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.\n      #\n      # Default value: true\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ALLOW_CREDENTIALS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ALLOW_CREDENTIALS=<value>\n      #\n      allow_credentials: false\n\n      ## options_passthrough ##\n      #\n      # TODO\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_OPTIONS_PASSTHROUGH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_OPTIONS_PASSTHROUGH=<value>\n      #\n      options_passthrough: true\n\n      ## max_age ##\n      #\n      # Sets how long (in seconds) the results of a preflight request can be cached. If set to 0, every request is preceded by a preflight request.\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_MAX_AGE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_MAX_AGE=<value>\n      #\n      max_age: 86527639\n\n      ## debug ##\n      #\n      # Adds additional log output to debug server side CORS issues.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_DEBUG=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_DEBUG=<value>\n      #\n      debug: false\n\n    ## access_log ##\n    #\n    # Access Log configuration for public server.\n    #\n    access_log:\n      \n      ## disable_for_health ##\n      #\n      # Disable access log for health endpoints.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_ACCESS_LOG_DISABLE_FOR_HEALTH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_ACCESS_LOG_DISABLE_FOR_HEALTH=<value>\n      #\n      disable_for_health: false\n\n  ## admin ##\n  #\n  admin:\n    \n    ## port ##\n    #\n    # Default value: 4445\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 55165\n\n    ## host ##\n    #\n    # The interface or unix socket ORY Hydra should listen and handle administrative API requests on. Use the prefix "unix:" to specify a path to a unix socket. Leave empty to listen on all interfaces.\n    #\n    # Examples:\n    # - localhost\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: localhost\n\n    ## cors ##\n    #\n    # Configures Cross Origin Resource Sharing for public endpoints.\n    #\n    cors:\n      \n      ## enabled ##\n      #\n      # Sets whether CORS is enabled.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ENABLED=<value>\n      #\n      enabled: false\n\n      ## allowed_origins ##\n      #\n      # A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Only one wildcard can be used per origin.\n      #\n      # Default value: *\n      #\n      # Examples:\n      # - - https://example.com\n      #   - https://*.example.com\n      #   - https://*.foo.example.com\n      # \n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ALLOWED_ORIGINS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ALLOWED_ORIGINS=<value>\n      #\n      allowed_origins:\n        - "*"\n\n      ## allowed_methods ##\n      #\n      # A list of HTTP methods the user agent is allowed to use with cross-domain requests.\n      #\n      # Default value: POST,GET,PUT,PATCH,DELETE\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ALLOWED_METHODS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ALLOWED_METHODS=<value>\n      #\n      allowed_methods:\n        - GET\n        - OPTIONS\n        - DELETE\n        - POST\n\n      ## allowed_headers ##\n      #\n      # A list of non simple headers the client is allowed to use with cross-domain requests.\n      #\n      # Default value: Authorization,Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ALLOWED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ALLOWED_HEADERS=<value>\n      #\n      allowed_headers:\n        - in ex cupidatat culpa\n\n      ## exposed_headers ##\n      #\n      # Sets which headers are safe to expose to the API of a CORS API specification.\n      #\n      # Default value: Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_EXPOSED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_EXPOSED_HEADERS=<value>\n      #\n      exposed_headers:\n        - elit\n        - ad amet consequat incididunt\n\n      ## allow_credentials ##\n      #\n      # Sets whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.\n      #\n      # Default value: true\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ALLOW_CREDENTIALS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ALLOW_CREDENTIALS=<value>\n      #\n      allow_credentials: true\n\n      ## options_passthrough ##\n      #\n      # TODO\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_OPTIONS_PASSTHROUGH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_OPTIONS_PASSTHROUGH=<value>\n      #\n      options_passthrough: true\n\n      ## max_age ##\n      #\n      # Sets how long (in seconds) the results of a preflight request can be cached. If set to 0, every request is preceded by a preflight request.\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_MAX_AGE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_MAX_AGE=<value>\n      #\n      max_age: 48526543\n\n      ## debug ##\n      #\n      # Adds additional log output to debug server side CORS issues.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_DEBUG=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_DEBUG=<value>\n      #\n      debug: false\n\n    ## access_log ##\n    #\n    # Access Log configuration for admin server.\n    #\n    access_log:\n      \n      ## disable_for_health ##\n      #\n      # Disable access log for health endpoints.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_ACCESS_LOG_DISABLE_FOR_HEALTH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_ACCESS_LOG_DISABLE_FOR_HEALTH=<value>\n      #\n      disable_for_health: false\n\n  ## tls ##\n  #\n  # Configures HTTPS (HTTP over TLS). If configured, the server automatically supports HTTP/2.\n  #\n  tls:\n    \n    ## key ##\n    #\n    # Configures the private key (pem encoded).\n    #\n    key:\n      \n      ## path ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_TLS_KEY_PATH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_TLS_KEY_PATH=<value>\n      #\n      path: /path/to/file.pem\n\n    ## cert ##\n    #\n    # Configures the private key (pem encoded).\n    #\n    cert:\n      \n      ## path ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_TLS_CERT_PATH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_TLS_CERT_PATH=<value>\n      #\n      path: /path/to/file.pem\n\n    ## allow_termination_from ##\n    #\n    # Whitelist one or multiple CIDR address ranges and allow them to terminate TLS connections. Be aware that the X-Forwarded-Proto header must be set and must never be modifiable by anyone but your proxy / gateway / load balancer. Supports ipv4 and ipv6. Hydra serves http instead of https when this option is set.\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_TLS_ALLOW_TERMINATION_FROM=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_TLS_ALLOW_TERMINATION_FROM=<value>\n    #\n    allow_termination_from:\n      - 127.0.0.1/32\n\n  ## cookies ##\n  #\n  cookies:\n    \n    ## same_site_mode ##\n    #\n    # Specify the SameSite mode that cookies should be sent with.\n    #\n    # Default value: None\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_COOKIES_SAME_SITE_MODE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_COOKIES_SAME_SITE_MODE=<value>\n    #\n    same_site_mode: Lax\n\n    ## same_site_legacy_workaround ##\n    #\n    # Some older browser versions don\u2019t work with SameSite=None. This option enables the workaround defined in https://web.dev/samesite-cookie-recipes/ which essentially stores a second cookie without SameSite as a fallback.\n    #\n    # Default value: false\n    #\n    # Examples:\n    # - true\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_COOKIES_SAME_SITE_LEGACY_WORKAROUND=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_COOKIES_SAME_SITE_LEGACY_WORKAROUND=<value>\n    #\n    same_site_legacy_workaround: false\n\n## dsn ##\n#\n# Sets the data source name. This configures the backend where ORY Hydra persists data. If dsn is "memory", data will be written to memory and is lost when you restart this instance. ORY Hydra supports popular SQL databases. For more detailed configuration information go to: https://www.ory.sh/docs/hydra/dependencies-environment#sql\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: reprehenderit quis\n\n## webfinger ##\n#\n# Configures ./well-known/ settings.\n#\nwebfinger:\n  \n  ## jwks ##\n  #\n  # Configures the /.well-known/jwks.json endpoint.\n  #\n  jwks:\n    \n    ## broadcast_keys ##\n    #\n    # A list of JSON Web Keys that should be exposed at that endpoint. This is usually the public key for verifying OpenID Connect ID Tokens. However, you might want to add additional keys here as well.\n    #\n    # Default value: hydra.openid.id-token\n    #\n    # Examples:\n    # - hydra.jwt.access-token\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_JWKS_BROADCAST_KEYS=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_JWKS_BROADCAST_KEYS=<value>\n    #\n    broadcast_keys: hydra.jwt.access-token\n\n  ## oidc_discovery ##\n  #\n  # Configures OpenID Connect Discovery (/.well-known/openid-configuration).\n  #\n  oidc_discovery:\n    \n    ## client_registration_url ##\n    #\n    # Examples:\n    # - https://my-service.com/clients\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_OIDC_DISCOVERY_CLIENT_REGISTRATION_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_OIDC_DISCOVERY_CLIENT_REGISTRATION_URL=<value>\n    #\n    client_registration_url: https://my-service.com/clients\n\n    ## supported_claims ##\n    #\n    # A list of supported claims to be broadcasted. Claim "sub" is always included.\n    #\n    # Examples:\n    # - - email\n    #   - username\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_OIDC_DISCOVERY_SUPPORTED_CLAIMS=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_OIDC_DISCOVERY_SUPPORTED_CLAIMS=<value>\n    #\n    supported_claims:\n      - email\n      - username\n\n    ## supported_scope ##\n    #\n    # The scope OAuth 2.0 Clients may request. Scope `offline`, `offline_access`, and `openid` are always included.\n    #\n    # Examples:\n    # - - email\n    #   - whatever\n    #   - read.photos\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_OIDC_DISCOVERY_SUPPORTED_SCOPE=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_OIDC_DISCOVERY_SUPPORTED_SCOPE=<value>\n    #\n    supported_scope:\n      - email\n      - whatever\n      - read.photos\n\n    ## userinfo_url ##\n    #\n    # A URL of the userinfo endpoint to be advertised at the OpenID Connect Discovery endpoint /.well-known/openid-configuration. Defaults to ORY Hydra\'s userinfo endpoint at /userinfo. Set this value if you want to handle this endpoint yourself.\n    #\n    # Examples:\n    # - https://example.org/my-custom-userinfo-endpoint\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_OIDC_DISCOVERY_USERINFO_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_OIDC_DISCOVERY_USERINFO_URL=<value>\n    #\n    userinfo_url: https://example.org/my-custom-userinfo-endpoint\n\n## oidc ##\n#\n# Configures OpenID Connect features.\n#\noidc:\n  \n  ## subject_identifiers ##\n  #\n  # Configures the Subject Identifier algorithm. For more information please head over to the documentation: https://www.ory.sh/docs/hydra/advanced#subject-identifier-algorithms\n  #\n  # Examples:\n  # - enabled:\n  #     - public\n  #     - pairwise\n  #   pairwise:\n  #     salt: some-random-salt\n  # \n  subject_identifiers:\n    \n    ## enabled ##\n    #\n    # A list of algorithms to enable.\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export OIDC_SUBJECT_IDENTIFIERS_ENABLED=<value>\n    # - Windows Command Line (CMD):\n    #    > set OIDC_SUBJECT_IDENTIFIERS_ENABLED=<value>\n    #\n    enabled:\n      - public\n      - pairwise\n\n    ## pairwise ##\n    #\n    # Configures the pairwise algorithm.\n    #\n    pairwise:\n      \n      ## salt ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export OIDC_SUBJECT_IDENTIFIERS_PAIRWISE_SALT=<value>\n      # - Windows Command Line (CMD):\n      #    > set OIDC_SUBJECT_IDENTIFIERS_PAIRWISE_SALT=<value>\n      #\n      salt: some-random-salt\n\n  ## dynamic_client_registration ##\n  #\n  # Configures OpenID Connect Dynamic Client Registration (exposed as admin endpoints /clients/...).\n  #\n  dynamic_client_registration:\n    \n    ## default_scope ##\n    #\n    # The OpenID Connect Dynamic Client Registration specification has no concept of whitelisting OAuth 2.0 Scope. If you want to expose Dynamic Client Registration, you should set the default scope enabled for newly registered clients. Keep in mind that users can overwrite this default by setting the "scope" key in the registration payload, effectively disabling the concept of whitelisted scopes.\n    #\n    # Examples:\n    # - - openid\n    #   - offline\n    #   - offline_access\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export OIDC_DYNAMIC_CLIENT_REGISTRATION_DEFAULT_SCOPE=<value>\n    # - Windows Command Line (CMD):\n    #    > set OIDC_DYNAMIC_CLIENT_REGISTRATION_DEFAULT_SCOPE=<value>\n    #\n    default_scope:\n      - openid\n      - offline\n      - offline_access\n\n## urls ##\n#\nurls:\n  \n  ## self ##\n  #\n  self:\n    \n    ## issuer ##\n    #\n    # This value will be used as the "issuer" in access and ID tokens. It must be specified and using HTTPS protocol, unless --dangerous-force-http is set. This should typically be equal to the public value.\n    #\n    # Examples:\n    # - https://localhost:4444/\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ISSUER=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ISSUER=<value>\n    #\n    issuer: https://localhost:4444/\n\n    ## public ##\n    #\n    # This is the base location of the public endpoints of your ORY Hydra installation. This should typically be equal to the issuer value. If left unspecified, it falls back to the issuer value.\n    #\n    # Examples:\n    # - https://localhost:4444/\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: https://localhost:4444/\n\n  ## login ##\n  #\n  # Sets the login endpoint of the User Login & Consent flow. Defaults to an internal fallback URL.\n  #\n  # Examples:\n  # - https://my-login.app/login\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN=<value>\n  #\n  login: https://my-login.app/login\n\n  ## consent ##\n  #\n  # Sets the consent endpoint of the User Login & Consent flow. Defaults to an internal fallback URL.\n  #\n  # Examples:\n  # - https://my-consent.app/consent\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_CONSENT=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_CONSENT=<value>\n  #\n  consent: https://my-consent.app/consent\n\n  ## logout ##\n  #\n  # Sets the logout endpoint. Defaults to an internal fallback URL.\n  #\n  # Examples:\n  # - https://my-logout.app/logout\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGOUT=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGOUT=<value>\n  #\n  logout: https://my-logout.app/logout\n\n  ## error ##\n  #\n  # Sets the error endpoint. The error ui will be shown when an OAuth2 error occurs that which can not be sent back to the client. Defaults to an internal fallback URL.\n  #\n  # Examples:\n  # - https://my-error.app/error\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR=<value>\n  #\n  error: https://my-error.app/error\n\n  ## post_logout_redirect ##\n  #\n  # When a user agent requests to logout, it will be redirected to this url afterwards per default.\n  #\n  # Examples:\n  # - https://my-example.app/logout-successful\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_POST_LOGOUT_REDIRECT=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_POST_LOGOUT_REDIRECT=<value>\n  #\n  post_logout_redirect: https://my-example.app/logout-successful\n\n## strategies ##\n#\nstrategies:\n  \n  ## scope ##\n  #\n  # Defines how scopes are matched. For more details have a look at https://github.com/ory/fosite#scopes\n  #\n  # Default value: wildcard\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export STRATEGIES_SCOPE=<value>\n  # - Windows Command Line (CMD):\n  #    > set STRATEGIES_SCOPE=<value>\n  #\n  scope: DEPRECATED_HIERARCHICAL_SCOPE_STRATEGY\n\n## ttl ##\n#\n# Configures time to live.\n#\nttl:\n  \n  ## login_consent_request ##\n  #\n  # Configures how long a user login and consent flow may take.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_LOGIN_CONSENT_REQUEST=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_LOGIN_CONSENT_REQUEST=<value>\n  #\n  login_consent_request: 1h\n\n  ## access_token ##\n  #\n  # Configures how long access tokens are valid.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_ACCESS_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_ACCESS_TOKEN=<value>\n  #\n  access_token: 1h\n\n  ## refresh_token ##\n  #\n  # Configures how long refresh tokens are valid. Set to -1 for refresh tokens to never expire.\n  #\n  # Default value: 720h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_REFRESH_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_REFRESH_TOKEN=<value>\n  #\n  refresh_token: "-1"\n\n  ## id_token ##\n  #\n  # Configures how long id tokens are valid.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_ID_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_ID_TOKEN=<value>\n  #\n  id_token: 1h\n\n  ## auth_code ##\n  #\n  # Configures how long auth codes are valid.\n  #\n  # Default value: 10m\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_AUTH_CODE=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_AUTH_CODE=<value>\n  #\n  auth_code: 1h\n\n## oauth2 ##\n#\noauth2:\n  \n  ## expose_internal_errors ##\n  #\n  # Set this to true if you want to share error debugging information with your OAuth 2.0 clients. Keep in mind that debug information is very valuable when dealing with errors, but might also expose database error codes and similar errors.\n  #\n  # Default value: false\n  #\n  # Examples:\n  # - true\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export OAUTH2_EXPOSE_INTERNAL_ERRORS=<value>\n  # - Windows Command Line (CMD):\n  #    > set OAUTH2_EXPOSE_INTERNAL_ERRORS=<value>\n  #\n  expose_internal_errors: true\n\n  ## hashers ##\n  #\n  # Configures hashing algorithms. Supports only BCrypt at the moment.\n  #\n  hashers:\n    \n    ## bcrypt ##\n    #\n    # Configures the BCrypt hashing algorithm used for hashing Client Secrets.\n    #\n    bcrypt:\n      \n      ## cost ##\n      #\n      # Sets the BCrypt cost. The higher the value, the more CPU time is being used to generate hashes.\n      #\n      # Default value: 10\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export OAUTH2_HASHERS_BCRYPT_COST=<value>\n      # - Windows Command Line (CMD):\n      #    > set OAUTH2_HASHERS_BCRYPT_COST=<value>\n      #\n      cost: 39871948\n\n  ## pkce ##\n  #\n  pkce:\n    \n    ## enforced ##\n    #\n    # Sets whether PKCE should be enforced for all clients.\n    #\n    # Examples:\n    # - true\n    # \n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export OAUTH2_PKCE_ENFORCED=<value>\n    # - Windows Command Line (CMD):\n    #    > set OAUTH2_PKCE_ENFORCED=<value>\n    #\n    enforced: true\n\n## secrets ##\n#\n# The secrets section configures secrets used for encryption and signing of several systems. All secrets can be rotated, for more information on this topic go to: https://www.ory.sh/docs/hydra/advanced#rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys\n#\nsecrets:\n  \n  ## system ##\n  #\n  # The system secret must be at least 16 characters long. If none is provided, one will be generated. They key is used to encrypt sensitive data using AES-GCM (256 bit) and validate HMAC signatures. The first item in the list is used for signing and encryption. The whole list is used for verifying signatures and decryption.\n  #\n  # Examples:\n  # - - this-is-the-primary-secret\n  #   - this-is-an-old-secret\n  #   - this-is-another-old-secret\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SYSTEM=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SYSTEM=<value>\n  #\n  system:\n    - this-is-the-primary-secret\n    - this-is-an-old-secret\n    - this-is-another-old-secret\n\n  ## cookie ##\n  #\n  # A secret that is used to encrypt cookie sessions. Defaults to secrets.system. It is recommended to use a separate secret in production. The first item in the list is used for signing and encryption. The whole list is used for verifying signatures and decryption.\n  #\n  # Examples:\n  # - - this-is-the-primary-secret\n  #   - this-is-an-old-secret\n  #   - this-is-another-old-secret\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_COOKIE=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_COOKIE=<value>\n  #\n  cookie:\n    - this-is-the-primary-secret\n    - this-is-an-old-secret\n    - this-is-another-old-secret\n\n## profiling ##\n#\n# Enables profiling if set. For more details on profiling, head over to: https://blog.golang.org/profiling-go-programs\n#\n# Examples:\n# - cpu\n# \n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export PROFILING=<value>\n# - Windows Command Line (CMD):\n#    > set PROFILING=<value>\n#\nprofiling: cpu\n\n## tracing ##\n#\n# ORY Hydra supports distributed tracing.\n#\ntracing:\n  \n  ## provider ##\n  #\n  # Set this to the tracing backend you wish to use. Currently supports jaeger. If omitted or empty, tracing will be disabled.\n  #\n  # Examples:\n  # - jaeger\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TRACING_PROVIDER=<value>\n  # - Windows Command Line (CMD):\n  #    > set TRACING_PROVIDER=<value>\n  #\n  provider: jaeger\n\n  ## service_name ##\n  #\n  # Specifies the service name to use on the tracer.\n  #\n  # Examples:\n  # - ORY Hydra\n  # \n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TRACING_SERVICE_NAME=<value>\n  # - Windows Command Line (CMD):\n  #    > set TRACING_SERVICE_NAME=<value>\n  #\n  service_name: ORY Hydra\n\n  ## providers ##\n  #\n  providers:\n    \n    ## jaeger ##\n    #\n    # Configures the jaeger tracing backend.\n    #\n    jaeger:\n      \n      ## local_agent_address ##\n      #\n      # The address of the jaeger-agent where spans should be sent to.\n      #\n      # Examples:\n      # - 127.0.0.1:6831\n      # \n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_LOCAL_AGENT_ADDRESS=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_LOCAL_AGENT_ADDRESS=<value>\n      #\n      local_agent_address: 127.0.0.1:6831\n\n      ## propagation ##\n      #\n      # The tracing header format\n      #\n      # Examples:\n      # - jaeger\n      # \n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export TRACING_PROVIDERS_JAEGER_PROPAGATION=<value>\n      # - Windows Command Line (CMD):\n      #    > set TRACING_PROVIDERS_JAEGER_PROPAGATION=<value>\n      #\n      propagation: jaeger\n\n      ## sampling ##\n      #\n      # Examples:\n      # - type: const\n      #   value: 1\n      #   server_url: http://localhost:5778/sampling\n      # \n      sampling:\n        \n        ## type ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_TYPE=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_TYPE=<value>\n        #\n        type: const\n\n        ## value ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_VALUE=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_VALUE=<value>\n        #\n        value: 1\n\n        ## server_url ##\n        #\n        # Set this value using environment variables on\n        # - Linux/macOS:\n        #    $ export TRACING_PROVIDERS_JAEGER_SAMPLING_SERVER_URL=<value>\n        # - Windows Command Line (CMD):\n        #    > set TRACING_PROVIDERS_JAEGER_SAMPLING_SERVER_URL=<value>\n        #\n        server_url: http://localhost:5778/sampling\n\n')))}c.isMDXComponent=!0}}]);