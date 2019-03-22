package com.revature;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.apache.log4j.Logger;

public class HelloServlet extends GenericServlet {
	
	private static Logger logger = Logger.getLogger(HelloServlet.class);
	private static int count = 0;
	
	@Override
	public void init() throws ServletException {
		super.init();
		logger.trace("INITIALIZING GENERIC SERVLET");
		}

	@Override
	public void service(ServletRequest req, ServletResponse res) 
			throws ServletException, IOException {
			logger.trace("IN HELLO SERVLET (GENERIC SERVLET) SERVICE METHOD!");
			
			PrintWriter writer = res.getWriter();
			
			String context = getServletContext().getInitParameter("environmentVar");
			String config = getServletConfig().getInitParameter("helloConfig");
			
			
			String respText = "<h1>Hello Servlet World</h1><br>" 
					+ "This is a response from our Generic Servlet class <br>"
					+ "Request Count: " + ++count + "<br>"
					+ "ServletContext: " + context + "<br>"
					+ "ServletConfig: " + config;
			
			res.setContentType("text/html");
			
			
			writer.write(respText);	
	}
	
	@Override
	public void destroy() {
		super.destroy();
		logger.trace("DESTROYING");
	}
}
