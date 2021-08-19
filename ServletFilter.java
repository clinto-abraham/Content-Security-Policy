package com.content-security-policy.filters;

import javax.servlet.Filter;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletResponse

import java.io.IOException;

public class CSPFilter implements Filter {
	
	public static final String POLICY = "default-src 'self'";

	@Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain)
        throws IOException, ServletException {
        if (response instanceof HttpServletResponse) {
        	((HttpServletResponse)response).setHeader("Content-Security-Policy", CSPFilter.POLICY);
    	}
    }
    }


	@Override
    public void init(FilterConfig filterConfig) throws ServletException { }

	@Override
    public void destroy() { }

}

// By referencing the HTTP Servlet API, we can use the addHeader method of the HttpServletResponse object.
// response.addHeader("Content-Security-Policy", "default-src 'self'");



// Generating random number with 12 bit : reference https://mkyong.com/java/java-how-to-generate-a-random-12-bytes/

package com.mkyong.crypto;

import java.security.SecureRandom;

public class HelloCryptoApp {

    public static void main(String[] args) {

        byte[] nonce = new byte[12];
        new SecureRandom().nextBytes(nonce);

        System.out.println(convertBytesToHex(nonce));

    }

    // util to print bytes in hex
    private static String convertBytesToHex(byte[] bytes) {
        StringBuilder result = new StringBuilder();
        for (byte temp : bytes) {
            result.append(String.format("%02x", temp));
        }
        return result.toString();
    }

}

// Generating nonce 2nd example : reference - https://stackoverflow.com/questions/39893764/oauth-nonce-in-java-code

import java.security.SecureRandom;

public static String nonceGenerator(){
    SecureRandom secureRandom = new SecureRandom();
    StringBuilder stringBuilder = new StringBuilder();
    for (int i = 0; i < 15; i++) {
        stringBuilder.append(secureRandom.nextInt(10));
    }
    String randomNumber = stringBuilder.toString();
    return randomNumber;
}