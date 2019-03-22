package com.revature;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.revature.pojos.User;
import com.revature.service.UserService;

public class MyHttpServlet extends HttpServlet {

	private static Logger log = Logger.getLogger(MyHttpServlet.class);
	static UserService service = new UserService();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		log.info("in Http Servlet - GET");

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		log.info("in Http Servlet - POST");
		String username = req.getParameter("username");
		String password = req.getParameter("password");

		User user = service.getByUsername(username);

		if (user == null) {
				output = "<b>Incorrect.....</b>";
		} else {
			if (password.equals(user.getPassword())) {
				output = "<h1>"
			} 
			else {

			}
		}

//		PrintWriter print = resp.getWriter();
//		print.write(username + " " + password);
	}

}
