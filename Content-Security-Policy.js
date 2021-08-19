// 1. Github CSP : 
"content-security-policy", "default-src 'none'; script-src 'self'; style-src 'unsafe-inline' example.1.com example.2.com; img-src 'self' www.google-analytics.com; media-src 'none'; base-uri 'self'; block-all-mixed-content; child-src 'self'; connect-src 'self' www.google-analytics.com; font-src 'self'; form-action 'self'; frame-ancestors 'none'; frame-src 'self'; object-src 'self'; plugin-types application/x-shockwave-flash; "
// 2.Basic CSP :  // The most basic policy assumes:  1.) All resources are hosted by the same domain of the document. 2.) There are no inlines or evals for scripts and style resources. 3.)There is no need for other websites to frame the website.  4.)There are no form-submissions to external websites.
"content-security-policy", "default-src 'self'; frame-ancestors 'self'; form-action 'self';"                
// 3. Little tightened: This policy allows images, scripts, AJAX, and CSS from the same origin and does not allow any other resources to load (e.g., object, frame, media, etc.).
"content-security-policy", "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; frame-ancestors 'self'; form-action 'self';"


// "content-security-policy", 
// "default-src 'none';                                      // default-src : is a fallback directive for the other fetch directives. Directives that are specified have no inheritance, yet directives that are not specified will fall back to the value of default-src.
// script-src 'self';                                        // script-src : specifies the locations from which a script can be executed from. It is a fallback directive for other script-like directives.
// script-src-elem                                           // script-src-elem : controls the location from which execution of script requests and blocks can occur.
// script-src-attr                                           // script-src-attr : controls the execution of event handlers.
// style-src 'unsafe-inline' example.1.com example.2.com;    // style-src : controls from where styles get applied to a document. This includes <link> elements, @import rules, and requests originating from a Link HTTP response header field.
// style-src-elem                                            // style-src-elem : controls styles except for inline attributes.
// style-src-attr                                            // style-src-attr : controls styles attributes.
// img-src 'self' www.google-analytics.com;                  // img-src : specifies the URLs that images can be loaded from.
// media-src 'none';                                         // media-src : specifies the URLs from which video, audio and text track resources can be loaded from.
// base-uri 'self'; 
// block-all-mixed-content; 
// child-src 'self';                                         // child-src : allows the developer to control nested browsing contexts and worker execution contexts.
// connect-src 'self' www.google-analytics.com;              // connect-src : provides control over fetch requests, XHR, eventsource, beacon and websockets connections.
// font-src 'self';                                          // font-src : specifies which URLs to load fonts from.
// form-action 'self';                                       // Inc
// frame-ancestors 'none';                                   // Preventing framing attacks (clickjacking, cross-site leaks)
// frame-src 'self'; 
// object-src 'self';                                        // object-src : specifies the URLs from which plugins can be loaded from.
// plugin-types application/x-shockwave-flash; 
// manifest-src                                              // manifest-src : specifies the URLs that application manifests may be loaded from.
// prefetch-src                                              // prefetch-src : specifies the URLs from which resources can be prefetched from.
// "



// Value	             Description                                                                          Note
// 'none'             	No URLs match.                                                                        To prevent all framing of your content use
// 'self'	            Refers to the origin site with the same scheme and port number.                       To allow for the site itself, use
// 'u nsafe-inline'	    Allows the usage of inline scripts or styles.
// 'unsafe-eval'	    Allows the usage of eval in scripts.
// 'strict-dynamic'	Informs the browser to trust scripts originating from a root trusted script.              The strict-dynamic directive can be used in combination with either, hashes or nonces.

// Nonces:  are unique one-time-use random values that you generate for each HTTP response, and add to the Content-Security-Policy header, like so:
// const nonce = uuid.v4();
// scriptSrc += ` 'nonce-${nonce}'`;
// <script nonce="<%= nonce %>">
//     ...
// </script>
// CSP policy example
// A production-quality strict policy appropriate for most applications is:

// Content-Security-Policy:
//   object-src 'none';
//   script-src 'nonce-{random}' 'unsafe-inline' 'unsafe-eval' 'strict-dynamic' https: http:;
//   base-uri 'none';
//   report-uri https://your-report-collector.example.com/


// https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Content_Security_Policy_Cheat_Sheet.md    //  Documentation of github Content security policy cheatcodes
// https://report-uri.com/home/hash                     // Generate hash 128 bit mostly
// https://content-security-policy.com/examples/java/     // It is java file template for CSP headers