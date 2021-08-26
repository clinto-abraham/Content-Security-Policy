module.exports = {
    dev: {
    "default-src": ["'self'"],
    "style-src": [
      "'self'",
      "https://*.google.com",
    ]
    },
    prod: {
    "default-src": "'self'",  // can be either a string or an array.
    "style-src": [
      "'self'",
      "https://*.facebook.com",
    ],
    "connect-src": [
      "'self'",
      "https://mybackend.com"
    ],
    "script-src": [
        "'self'",
        "https://staging/backend.com"
    ],
    "script-src-attr": [ //  Specifies valid sources for JavaScript inline event handlers.
        "'self'"
    ], 
    "style-src-elem": [ // Specifies valid sources for stylesheets <style> elements and <link> elements with rel="stylesheet".
        "'self'"
    ],
    "object-src": [
      "'none'"
    ],
    "img-src": [
        "'self'",
        "http://staging/hhs/covid19.com"
    ]
    }
  }

//   https://www.npmjs.com/package/react-csp        - refer package npmjs for react-csp config into node module
//   https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
//   https://stackoverflow.com/questions/30280370/how-does-content-security-policy-csp-work
//   https://content-security-policy.com/
//   https://stackoverflow.com/questions/42922784/what-s-the-purpose-of-the-html-nonce-attribute-for-script-and-style-elements