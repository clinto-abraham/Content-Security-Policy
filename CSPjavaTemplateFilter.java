public class CSPNonceFilter extends GenericFilterBean {
    private static final int NONCE_SIZE = 32; //recommended is at least 128 bits/16 bytes
    private static final String CSP_NONCE_ATTRIBUTE = "cspNonce";
 
    private SecureRandom secureRandom = new SecureRandom();
 
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
 
        byte[] nonceArray = new byte[NONCE_SIZE];
 
        secureRandom.nextBytes(nonceArray);
 
        String nonce = Base64.getEncoder().encodeToString(nonceArray);
        request.setAttribute(CSP_NONCE_ATTRIBUTE, nonce);
 
        chain.doFilter(request, new CSPNonceResponseWrapper(response, nonce));
    }
 
    /**
     * Wrapper to fill the nonce value
     */
    public static class CSPNonceResponseWrapper extends HttpServletResponseWrapper {
        private String nonce;
 
        public CSPNonceResponseWrapper(HttpServletResponse response, String nonce) {
            super(response);
            this.nonce = nonce;
        }
 
        @Override
        public void setHeader(String name, String value) {
            if (name.equals("Content-Security-Policy") && StringUtils.isNotBlank(value)) {
                super.setHeader(name, value.replace("{nonce}", nonce));
            } else {
                super.setHeader(name, value);
            }
        }
 
        @Override
        public void addHeader(String name, String value) {
            if (name.equals("Content-Security-Policy") && StringUtils.isNotBlank(value)) {
                super.addHeader(name, value.replace("{nonce}", nonce));
            } else {
                super.addHeader(name, value);
            }
        }
    }
}

// https://techblog.bozho.net/content-security-policy-nonce-with-spring-security/
//  <script nonce="{{ cspNonce }}">...</script> use it in html tags